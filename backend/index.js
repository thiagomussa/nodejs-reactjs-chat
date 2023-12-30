const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put (
      "https://api.chatengine.io/users/", 
     {  username: username, secret: username, first_name: username},
     {  headers: {"private-key}": "93b4813b-78ea-4123-bcda-0b14519a8682" }}
        );
    return res.status(r.status).json(r.data)
}   catch (e) {
    return res.status(e.response).json(e.response.data);
    } 
});

app.listen(3001); 
