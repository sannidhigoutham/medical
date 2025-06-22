const express = require("express");
const dotenv = require("dotenv"); // Importing dotenv but not using it, you can remove this line if not needed
dotenv.config(); // If you intend to use dotenv for environment variables, call this function.

const app = express();
const controller = require("./controller/docterRepository");
app.use(express.json());

app.get("/api/signin", (req, res) => {
  controller.signin(req.body,(error,result)=>{
    if(error){
      res.json({status:"unsuccessfull",message:error});

    }else{
      res.json(result);
    }
  });
});
app.post("/api/signup",(req,res) =>{
  controller.signup(req.body,(error,result)=>{
    if(error){
      res.json({status:"unsuccessfull",message:error});

    }else{
      res.json(result);
    }
  });
});

app.get("/api/doctershome", (req, res) => {
  controller.homedocter(req.body,(error,result)=>{
    if(error){
      res.json({status:500,error:error});

    }else{
      res.json(result);
    }
  });
});

app.get("/api/patienthome", (req, res) => {
  controller.homepatient(req.body,(error,result)=>{
    if(error){
      res.json({status:500,error:error});

    }else{
      res.json(result);
    }
  });
});

app.get("/api/pharmacy", (req, res) => {
  controller.homepharmacy(req.body,(error,result)=>{
    if(error){
      res.json({status:500,error:error});

    }else{
      res.json(result);
    }
  });
});

app.get("/api/searchpatient", (req, res) => {
  controller.searchpatient(req.body,(error,result)=>{
    if(error){
      res.json({status:500,error:error});

    }else{
      res.json(result);
    }
  });
});

app.get("/api/searchdocter", (req, res) => {
  controller.searchdocter(req.body,(error,result)=>{
    if(error){
      res.json({status:500,error:error});

    }else{
      res.json(result);
    }
  });
});

app.post("/api/addMedication", (req, res) => {
  controller.addMedication(req.body,(error,result)=>{
    if(error){
      res.json({status:500,error:error});

    }else{
      res.json(result);
    }
  });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
