const express =require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app =express()
app.use(express.json()) 
mongoose.connect("mongodb://localhost:27017/Medical")

const usera = new mongoose.Schema({
    user:{
    type:String,
    required:true
    }
})
const dataa={user:"goutham"}
const usermodal = mongoose.model("medicaldatas",usera)



const data={"users":[{id:'1',name:'gou',score:'1',country:'India',images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},
{id:'2', name:'bha',score:'2',country:'India',images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},
 {id:'3',name:'jay',score:'3',country:'India',images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},
 {id:'4',name:'sum',score:'4',country:'India',images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"}]}
app.get('/api',(req,res)=>{
    console.log("req")

    var list=[]
    for(i=0;i<=5;i++){
        console.log(data.users[i])
        if(data.users[i]==res){

        }
    }
    res.json(data)
})
app.post('/dataperson',(req,res)=>{
    const datavalue=require('./data')
//    console.log("result",datavalue.datavalue())
var dataaaa=usermodal.find({}).then(function(users){
    res.json(users)
}).catch(function(error){
    console.log(error)
})
console.log("000000000000000000000"+dataaaa)
//    res.json(datavalue.datavalue())
res.json({"true":"true"})

})
app.post('/data',(req,res)=>{
    //  const datavalue=require('./data')
    // console.log("result",datavalue.datavalue())

    var user= req.body.value
    console.log("00000000000000000",req.body,req.body.value)
    var list=[]
    if(user=="All"){
        list.push(data.users);
    }else{
    for(i=0;i<=data.users.length-1;i++){
        console.log(data.users[i])
        if(data.users[i].name==user){

            list.push(data.users[i])

        }
    }
}

    res.json(list)
})

app.get('/api/data',(req,res)=>{
    res.json({"users":[{id:'1',name:'gou',value:'1',score:'1',country:'India',images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},
    {id:'2', name:'bha',value:'2',score:"1",country:'India',images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},
     {id:'3',name:'jay',value:'3',score:"1",country:'India',images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},
     {id:'4',name:'sum',value:'4',score:'1',country:'India',images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"}]})
})

app.get('/api/goutham',(req,res)=>{
    res.json({"name":"goutham","password":"goutham@123"})})

app.put('/api/puts',(req,res)=>{
    res.json({"data":[{value:"234567890"}]})
    console.log("1234567890");
})


app.put('/api/put',(req,res)=>{
    res.json({"data":[{value:"234567890"}]})
    console.log("1234567890");
})

app.get('/api/images',(req,res)=>{
    res.json({"images":[{images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},{images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},{images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},{images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"},{images:"https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180"}]})
})

app.post("/api/signin",(req,res)=>{
    var user=req.body.name
    var password=req.body.password
    if(user=="goutham"&& password=="goutham@123"){
        res.json({"id":"ph1","login":"successful","type":"pharmacy"})

    }if(user=="david"&& password=="david@123"){
        res.json({"id":"d01","login":"successful","type":"docter"})

    }if(user=="starlyn"&& password=="staryln@123"){
        res.json({"id":"pa1","login":"successful","type":"patient"})

    }else{
        res.json({"id":"000000","login":"fail"})

    }
})

app.get("/api/doctershome",(req,res)=>{
    res.json({"docter":[{"id":"do1","name":"David"}]})

})

app.get("/api/patienthome",(req,res)=>{
    res.json({"docter":[{"id":"pa1","name":"staryln"}]})

})

app.get("/api/pharmacy",(req,res)=>{
    res.json({"docter":[{"id":"ph1","name":"goutham"}]})

})

app.post("/api/docterslist",(req,res)=>{
        res.json({"docter":[{"id":"D1","name":"David"},{"id":"G1","name":"Goutham"},{"id":"A1","name":"Akhil"},{"id":"K1","name":"Kiran"}]})

})

app.post("/api/patientlist",(req,res)=>{
    res.json({"patient":[{"id":"p1","name":"starlyn"},{"id":"G1","name":"indu"},{"id":"A1","name":"yovan"},{"id":"K1","name":"satya"}]})

})

app.listen(5000,()=>{console.log("server started")})
