const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

let pl_data = [];

// Get Request
app.use(express.json());
app.get("/getplayer", (req, res) => {
  if (fs.existsSync("./playersData.json")) {
    const plBuff = fs.readFileSync("./playersData.json");
    if (plBuff.length != 0) {
      pl_data = JSON.parse(plBuff);
      res.status(200).json({
        message: "Data fetched successfully",
        data: pl_data,
      });
    } else {
      res.status(200).json({
        message: "No data found",
      });
    }
  } else {
    res.status(400).json({
      message: "Wrong data Request",
    });
  }
});

// Post Request
app.post("/save", (req, res) => {
  if (fs.existsSync("./playersData.json")) {
    const plBuff = fs.readFileSync("./playersData.json");

    // If player.json data is not null
    if (plBuff.length != 0) {
      pl_data = JSON.parse(plBuff);
      console.log(req.body);
      const player = {
        plid: req.body.plid,
        plname: req.body.plname,
        plcountry: req.body.plcountry,
        plsports: req.body.plsports,
        plplayed: req.body.plplayed,
        plachievement: req.body.plachievement,
      };
      pl_data.push(player);
      console.log(`new line `);
      console.log(pl_data);
      fs.writeFileSync("./playersData.json", JSON.stringify(pl_data));

      res.status(200).json({
        message: "Data created successfully",
      });
    } else {
      //If no data is found create new data and input
      const player = {
        plid: req.body.plid,
        plname: req.body.plname,
        plcountry: req.body.plcountry,
        plsports: req.body.plsports,
        plplayed: req.body.plplayed,
        plachievement: req.body.plachievement,
      };
      pl_data.push(player);
      fs.writeFileSync("./playersData.json", JSON.stringify(pl_data));

      res.status(200).json({
        message: "Data created successfully",
      });
    }
  } else {
    //If no file is found create new file and input
    const player = {
      plid: req.body.plid,
      plname: req.body.plname,
      plcountry: req.body.plcountry,
      plsports: req.body.plsports,
      plplayed: req.body.plplayed,
      plachievement: req.body.plachievement,
    };
    pl_data.push(player);
    fs.writeFileSync("./playersData.json", JSON.stringify(pl_data));

    res.status(200).json({
      message: "Data created successfully",
    });
  }
});

// PUT request

app.put("/update", (req, res) => {
  const id = req.query.plid;
  const player = {
    plid: req.body.plid,
    plname: req.body.plname,
    plcountry: req.body.plcountry,
    plsports: req.body.plsports,
    plplayed: req.body.plplayed,
    plachievement: req.body.plachievement,
  };

  if (fs.existsSync("./playersData.json")) {
    const plBuff = fs.readFileSync("./playersData.json");
    let filtered_data = [];

    if (plBuff.length != 0) {
      pl_data = JSON.parse(plBuff);
      filtered_data = pl_data.filter((item) => item.plid != id);
      if (pl_data.length === filtered_data.length) {
        res.status(400).json({
          message: "No such id exists",
        });
      } else {
        filtered_data.push(player);
        fs.writeFileSync("./playersData.json", JSON.stringify(filtered_data));
        res.status(200).json({
          message: "Data updated successfully",
        });
      }
    } else {
      res.status(400).json({
        message: "File is Empty",
      });
    }
  } else {
    res.status(404).json({
      message: "File not found",
    });
  }
});

// Delete Request
app.delete("/delete", (req, res) => {
  const name = req.query.plname;

  if (fs.existsSync("./playersData.json")) {
    const plBuff = fs.readFileSync("./playersData.json");
    let filtered_data = [];

    if (plBuff.length != 0) {
      pl_data = JSON.parse(plBuff);
      filtered_data = pl_data.filter((item) => item.plname != name);
      if (pl_data.length === filtered_data.length) {
        res.status(400).json({
          message: "No such student exists",
        });
      } else {
        fs.writeFileSync("./playersData.json", JSON.stringify(filtered_data));
        res.status(200).json({
          message: "student information deleted successfully",
        });
      }
    } else {
      res.status(400).json({
        message: "Student not found",
      });
    }
  } else {
    res.status(404).json({
      message: "File not found",
    });
  }
});

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
