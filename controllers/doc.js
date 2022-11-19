const axios = require("axios");
const config = require("./config")

url=config.url

const instance = axios.create({
    baseURL: url,
    timeout: 1000,
  });


const getDoc = (id,callback)=>{
    url = "/docs/"+id+"/detail"
    instance.get(url).then((res)=>{
        callback(null,res)
    }).catch((err)=>{
        callback(err,null)
    })
}


  const init = ()=>{
    url=config.url
    instance = axios.create({
        baseURL: url,
        timeout: 1000,
      });
  }


module.exports= {
    init,
    getDoc
}