const request = require('request');
const mysql = require("mysql");

module.exports = {
/**
 * Return random image URLs from an api
 * @param string keyword - search term
 * @param int   imageCount - number of random images
 * @return array of image URLs
 * */
    // getRandomImages: function (keyword,imageCount){
    //     var requestURL = "https://api.unsplash.com/photos/random?query="+keyword+"&count="+imageCount+"&client_id=5e244509372fe153e4f571a4e992c0828f6ca481adfbca1ebbbd93365dc2a9ca&orientation=landscape";
        
    //     return new Promise( function(resolve, reject){
    //       request(requestURL, function (error, response, body) {

    //             if (!error){
    //               var parseData = JSON.parse(body);
    //               var imageURLs = [];
                  
    //               for (let i = 0; i < imageCount; i++) {
    //                   imageURLs.push(parseData[i].urls.regular);
    //               }
    //               console.log(imageURLs)
    //               resolve(imageURLs);
    //             } else {
                    
    //                 console.log("error", error);
    //             }
    //         });//request  
    //     })
    // },//function
    
    // getRandomImages_cb: function (keyword, imageCount, callback){
    //     var requestURL = "https://api.unsplash.com/photos/random?query="+keyword+"&count="+imageCount+"&client_id=5e244509372fe153e4f571a4e992c0828f6ca481adfbca1ebbbd93365dc2a9ca&orientation=landscape";
        
    //     request(requestURL, function (error, response, body) {
            
    //         if (!error){
    //           var parseData = JSON.parse(body);
              
    //           var imageURLs = [];
                  
    //           for (let i = 0; i < imageCount; i++) {
    //               imageURLs.push(parseData[i].urls.regular);
    //           }
    //           console.log(imageURLs)
    //           callback(imageURLs);
    //         } else {
                    
    //             console.log("error", error);
    //         }
    //     });//request  
    // }, //function
    
    // createConnection: function() {
    //     /**
    //      * creates database connection
    //      * @return database connection
    //      */
    //     var conn = mysql.createConnection({
    //         host: "cst336db.space", 
    //         user: "cst336_dbUser004",
    //         password: "clmxkg",
    //         database: "cst336_db004"
    //     });
    //     return conn;
    // }

}