const { fetchNumbers } = require("../services/thirdPartyService");
const { validateNumberId } = require("../utils/validation");

let windowState = [];

exports.calculateAverage = async (req, res) => {
  const { numberId } = req.params;

  if (!validateNumberId(numberId)) {
    return res.status(400).json({ error: "Invalid number ID" });
  }

  try {
    const numbers = await fetchNumbers(numberId);
    if (!numbers) {
      return res.status(500).json({ error: "Failed to fetch numbers" });
    }

    windowState.push(...numbers.filter((num) => !windowState.includes(num)));
    if (windowState.length > 10) {
      windowState = windowState.slice(-10);
    }

    const avg =
      windowState.reduce((sum, num) => sum + num, 0) / windowState.length;

    res.json({
      windowPrevState: windowState.slice(0, -numbers.length),
      windowCurrState: windowState,
      numbers,
      avg: avg.toFixed(2),
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
