// var cors = require('cors');
const jsonServer = require("json-server");
// const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;
const middlewares = jsonServer.defaults();

// app.db = router.db;

// const rules = auth.rewriter({
//   "/patients*": "patients$1",
// });

app.use(middlewares);
// app.use(rules);
// app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
