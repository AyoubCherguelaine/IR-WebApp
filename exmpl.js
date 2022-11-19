const axios = require("axios");


const instance = axios.create({
    baseURL: 'http://0.0.0.0:8000/',
    timeout: 1000,
  });





  instance.get("/").then((res)=>{
    console.log(res.data)
  })

  instance.post("/",{text:"hello world"}).then((res)=>{
    console.log(res.data)
  })