const express = require("express");
const dotenv = require("dotenv");
const app = express();
const controller = require('./controller/docterRepository')
app.use(express.json());

const data = {
  users: [
    {
      id: "1",
      name: "gou",
      score: "1",
      country: "India",
      images:
        "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
    },
    {
      id: "2",
      name: "bha",
      score: "2",
      country: "India",
      images:
        "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
    },
    {
      id: "3",
      name: "jay",
      score: "3",
      country: "India",
      images:
        "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
    },
    {
      id: "4",
      name: "sum",
      score: "4",
      country: "India",
      images:
        "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
    },
  ],
};

app.get("/api", (req, res) => {
  console.log("req");

  var list = [];
  for (let i = 0; i < data.users.length; i++) {
    console.log(data.users[i]);
  }
  res.json(data);
});

app.post("/dataperson", (req, res) => {
  const datavalue = require("./data");
  var dataaaa = usermodal
    .find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("000000000000000000000" + dataaaa);
  res.json({ true: "true" });
});

app.put("/data", (req, res) => {
  var user = req.body.value;
  console.log("00000000000000000", req.body.values, req.body, user);
  var list = [];
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
  res.json({
    users: [
      {
        id: "1",
        name: "gou",
        value: "1",
        score: "1",
        country: "India",
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        id: "2",
        name: "bha",
        value: "2",
        score: "1",
        country: "India",
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        id: "3",
        name: "jay",
        value: "3",
        score: "1",
        country: "India",
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        id: "4",
        name: "sum",
        value: "4",
        score: "1",
        country: "India",
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
    ],
  });
});

app.get("/api/data", (req, res) => {
  res.json({
    users: [
      {
        id: "1",
        name: "goutham",
        value: "1",
        score: "1",
        country: "India",
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        id: "2",
        name: "bharath",
        value: "2",
        score: "1",
        country: "India",
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        id: "3",
        name: "jayram",
        value: "3",
        score: "1",
        country: "India",
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
      {
        id: "4",
        name: "sumanth",
        value: "4",
        score: "1",
        country: "India",
        images:
          "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180",
      },
    ],
  });
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
  
  controller.signin(req.body,(error,result)=>{
    if(error){
      res.json({status:500,error:error})

    }else{
      res.json(result)
    }
  })
 
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
