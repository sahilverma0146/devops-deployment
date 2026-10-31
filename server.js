
const express = require("express");
const app = express();

// Parse incoming JSON — MUST be before the route
app.use(express.json());

// Parse form submissions too, if needed
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("Webhook data received:");
  console.log(JSON.stringify(req.body, null, 2));

  res.status(200).json({ success: true });
});

app.get('/' , (req,res)=>{
    console.log("your application is running");
    res.send("Your application is running!");
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
