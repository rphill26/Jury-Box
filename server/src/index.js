const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const { setupDB } = require("../src/config/databaseConnection");
const cors = require("cors");
const path = require("path");

const { passport } = require("./lib/passport");

var PORT = process.env.PORT || 4000;

const app = express();
setupDB(v => console.log(v));

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphql: true,
    pretty: true
  })
);
app.use(passport.initialize());

if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(
    __dirname,
    "..",
    "..",
    "jury-box-frontend",
    "build"
  );
  console.log(`Client build path: ${clientBuildPath}\n`);
  app.use(express.static(clientBuildPath));
}
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "jury-box-frontend", "build", "index.html")
  );
});

app.use(require("./controllers"));

app.listen(PORT);
console.log("SERVER OKAY!");
