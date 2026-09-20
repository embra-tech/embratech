const fs = require("fs");

const files = [
  "app/privacy/page.jsx",
  "app/terms/page.jsx",
  "components/Cta.jsx",
  "components/Footer.jsx"
];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  // Some places might have "info@embratechnologies.org or sales@embratechnologies.org"
  // If we blindly replace info with sales, it becomes "sales@embratechnologies.org or sales@embratechnologies.org"
  if (file === "app/privacy/page.jsx") {
    content = content.replace("info@embratechnologies.org or sales@embratechnologies.org", "sales@embratechnologies.org");
  }
  
  content = content.replace(/info@embratechnologies\.org/g, "sales@embratechnologies.org");
  fs.writeFileSync(file, content);
  console.log("Updated", file);
}
