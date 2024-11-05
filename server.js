const express = require("express");
const dotenv = require("dotenv"); // Importing dotenv but not using it, you can remove this line if not needed
dotenv.config(); // If you intend to use dotenv for environment variables, call this function.

const app = express();
const controller = require('./controller/docterRepository')
app.use(express.json());

const data = {
  users: [
    {
      id: "1",
      name: "goutham",
      score: "1",
      country: "India",
      images:
        "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
    },
    {
      id: "2",
      name: "bharath",
      score: "2",
      country: "India",
      images:
        "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
    },
    {
      id: "3",
      name: "jayram",
      score: "3",
      country: "India",
      images:
        "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
    },
    {
      id: "4",
      name: "sumanth",
      score: "4",
      country: "India",
      images:
        "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
    },
  ],
};

app.get("/api", (req, res) => {
  console.log("req");

  data.users.forEach(user => {
    console.log(user);
  });

  res.json(data);
});

app.post("/dataperson", (req, res) => {
  // Assuming usermodal is defined somewhere in your project.
  // const usermodal = require("./usermodal"); // Uncomment and define this if you have a usermodal file.
  const usermodal = {}; // Placeholder for usermodal; replace with actual implementation.
  
  usermodal.find({})
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.put("/data", (req, res) => {
  const user = req.body.value;
  console.log("00000000000000000", req.body.values, req.body, user);
  const list = [];
  
  if (user === "All") {
    list.push(data.users);
  } else {
    for (let i = 0; i < data.users.length; i++) {
      console.log(data.users[i]);
      if (data.users[i].name === user) {
        list.push(data.users[i]);
      }
    }
  }
  
  res.json(list);
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.get("/api/goutham", (req, res) => {
  res.json({ name: "goutham", password: "goutham@123" });
});

app.put("/api/puts", (req, res) => {
  res.json({ data: [{ value: "234567890" }] });
  console.log("1234567890");
});

app.put("/api/put", (req, res) => {
  res.json({ data: [{ value: "234567890" }] });
  console.log("1234567890");
});

app.get("/api/images", (req, res) => {
  res.json({
    images: [
      {
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
    ],
  });
});

app.post("/api/signin", (req, res) => {
  const user = req.body.name;
  const password = req.body.password;
  if (user === "goutham" && password === "goutham@123") {
    res.json({ id: "ph1", login: "successful", type: "pharmacy" });
  } else if (user === "david" && password === "david@123") {
    res.json({ id: "d01", login: "successful", type: "docter" });
  } else if (user === "starlyn" && password === "staryln@123") {
    res.json({ id: "pa1", login: "successful", type: "patient" });
  } else {
    res.json({ id: "000000", login: "fail" });
  }
});
app.post("/api/signup",(req,res) =>{
console.log("000000000000000000000")
  controller.signup(req.body,(error,result)=>{
    if(error){
      res.json({status:500,error:error})

    }else{
      res.json(result)
    }
  })
})

app.get("/api/doctershome", (req, res) => {
  console.log("0000000000000000000", req.body);
  res.json({ id: "do1", name: "David" });
});

app.get("/api/patienthome", (req, res) => {
  console.log("0000000000000000000", req.body);
  res.json({ id: "pa1", name: "staryln" });
});

app.get("/api/pharmacy", (req, res) => {
  console.log("0000000000000000000", req.body);
  res.json({ id: "ph1", name: "goutham" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
