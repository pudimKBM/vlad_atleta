const dotenv = require('dotenv').config();
var sd = require('string_decoder').StringDecoder;
const async = require('es5-async-await/async');
const await = require('es5-async-await/await');
const functions = require('firebase-functions');
const calendar = require('node-google-calendar');
const moment = require('moment-timezone');
const nunjucks = require('nunjucks');
const request = require('request');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const Stream = require('stream').Transform;
const gcloud = require('google-cloud');
const fs = require('fs');
const buf = require('buffer')



const http = require('http');

const https = require('https');

const cors = require('cors');



exports.addTeam = functions.https.onRequest( async ((req, res) => {
    
    const infos= req.body;
    const teamName = infos.teamName;
    const category = infos.Category;
    const Player1_name = infos.Player1_name;
    const Player2_name = infos.Player2_name;
    const Player1_email = infos.Player1_email;
    const Player2_email = infos.Player2_email;
    const Player1_cpf = infos.Player1_CPF;
    const Player2_cpf = infos.Player2_CPF;
    const Player1_cel = infos.Player1_cel;
    const Player2_cel = infos.Player2_cel;
    const Club_sugestion = infos.Club_sugestion;
    const General_sugestion = infos.General_sugestion;
    const obs = infos.obs;
    const disponibility_week =  req.body.disp_sem;
    const disponibility_weekend =  req.body.disp_fds;
  
    var dipsWJ = JSON.stringify(disponibility_week);
  // if(disponibility_week.indexOf(dipsWJ) != -1 ){
  //   var dw = {
  //     manha : true
  //   };
  //     console.log(dw);
  // };
  

     console.log(JSON.stringify(disponibility_week));
    // console.log(Array.isArray(disponibility_week));
    // console.log(disponibility_week[0]);
    const data =
    {
        "Club_sugestion" : Club_sugestion,
        "Obs_diponibility" : General_sugestion,
        "admin_id" : "",
        "admin_email": Player1_email,
        "admin_name" : Player1_name,
        "category" : category,
        "cel" : Player1_cel,
        "cpf_admin" : Player1_cpf,
        "disponibility_week" : arr,
        "disponibility_weekend" : disponibility_weekend,
        "general_sugestions" : General_sugestion,
        "obs" : obs,
        "name" : teamName,
        "team_members" : {
          "cel" : Player2_cel, 
          "cpf" :Player2_cpf,
          "email" : Player2_email,
          "name" : Player2_name
        
        }
    };
    var arr ={};
    if(Array.isArray(disponibility_week)){
      for (let i = 0; i < disponibility_week.length; i++) {
        const element = disponibility_week[i];

       (element + ':' + true);
        arr = {
              element  : true,
        }
        console.log(element);
        
        
      }
      //dispweek.push(dispweek);
    }else if (!Array.isArray(disponibility_week)){

    };
console.log(arr);
    // const data =
    // {
    //     "Club_sugestion" : Club_sugestion,
    //     "Obs_diponibility" : General_sugestion,
    //     "admin_id" : "",
    //     "admin_email": Player1_email,
    //     "admin_name" : Player1_name,
    //     "category" : category,
    //     "cel" : Player1_cel,
    //     "cpf_admin" : Player1_cpf,
    //     "disponibility_week" : arr,
    //     "disponibility_weekend" : disponibility_weekend,
    //     "general_sugestions" : General_sugestion,
    //     "obs" : obs,
    //     "name" : teamName,
    //     "team_members" : {
    //       "cel" : Player2_cel, 
    //       "cpf" :Player2_cpf,
    //       "email" : Player2_email,
    //       "name" : Player2_name
        
    //     }
    // };

    //await ( db.ref('challenges').push(challenge) );

      res.send(infos);
    console.log(JSON.stringify(data));
    
    
    
   }))


   exports.createTeam = functions.https.onRequest(async((req,res)=>{
      console.log(req.body);
      res.send(req.body);
   }))