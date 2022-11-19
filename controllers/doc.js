const axios = require("axios");
const config = require("./config")
const express = require("express")

var router = express.Router()
url=config.url

const instance = axios.create({
    baseURL: url,
    timeout: 100000,
  });


const getDoc = (id,callback)=>{
    url = "/docs/"+id+"/detail"
    instance.get(url).then((res)=>{
        callback(null,res)
    }).catch((err)=>{
        callback(err,null)
    })
}

const search = (text,callback)=>{
  url = "/docs/search"
  
  instance.post(url,{"text":text}).then((res)=>{
    callback(null,res)
  }).catch((err)=>{
    callback(err,null)
  })
}

const getDash = (req,res)=>{
    res.render("dash",{data:[],search:""});
}



const postDash=(req,response)=>{
  search(req.body.search, (err,res)=>{
    if(err)throw err
    else{
      li  = res.data
      /*
      li = [[id_doc,match],..... ]
      */
      data=[]
      for (i in li){
        pack={
          id:"",
          text:"",
          similarity:0.0
        }
        pack["id"] = li[i][0]
        pack["text"]=li[i][1]
        pack["similarity"]=li[i][2]
        data.push(pack)
      }
       
      response.render("dash",{data:data,search:req.body.search})

    }
  })
}


const testPostDash=(req,res)=>{
  search(req.body.search,(err,result)=>{
    console.log(req.body.search)

    if(err)console.log(err)
    else{
      console.log(result)
    }
  })
}

  const init = ()=>{
    url=config.url
    instance = axios.create({
        baseURL: url,
        timeout: 1000,
      });
  }

  router.get("/search",getDash)

router.post("/search",postDash)

module.exports= {
    init,
    getDoc,
    router
}