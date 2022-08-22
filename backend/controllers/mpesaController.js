require("dotenv").config();
const axios=require("axios");
// const { default: next } = require("next");
const datetime=require("node-datetime")
const passkey=process.env.PASSKEY;
const shortcode=process.env.SHORTCODE;
const consumerkey=process.env.CONSUMERKEY;
const consumersecret=process.env.CONSUMERSECRET


const newPassword=()=>{
    const dt=datetime.create();
    const formatted=dt.format("YmdHMS");
    const passString=shortcode+passkey+formatted;
const base64EncodedPassword=Buffer.from(passString).toString("base64");

    return base64EncodedPassword
};

exports.token=(req,res,next)=>{
    
}



exports.mpesaPassword=(req,res)=>{
    res.send(newPassword());
}



