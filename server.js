const express =require('express')
const app =express()
app.use(express.json()) 
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
   res.json(datavalue.datavalue())

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

app.listen(5000,()=>{console.log("server started")})
