const fs = require("fs");
const path = require("path");

function matchSchemes(user) {
  const filePath = path.join(__dirname, "data/schemes.json");
  const schemes = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return schemes.filter(scheme => {
    const c = scheme.criteria;
    const incomeOk = eval(`${user.income} ${c.income.replace('<=', '<=')}`);
    const eduOk = c.education === "any" || c.education.toLowerCase() === user.education.toLowerCase();
    const stateOk = c.state === "any" || c.state.toLowerCase() === user.state.toLowerCase();
    return incomeOk && eduOk && stateOk;
  });
}

module.exports = { matchSchemes };
