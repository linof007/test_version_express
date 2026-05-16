
                                 //.... .....  mar_ExpressServer.js
      const express = require('express');     
          const app = express();
         const path = require('path');
         const port = 3001;
       const {exec} = require('child_process');
           const fs = require('fs');

 // ....Statische Dateien aus dem "publicx" Verzeichnis bereitstellen

       app.use(express.static(path.join(__dirname, 'publicx')));

// ............. send html File zum Browser = Home page ...
      app.get('/',(req,res) => {                   //............................... home page
         const f1=path.join(__dirname, 'index_buttons_express.html')
                 res.sendFile(f1);                           
              });


  app.get('/mp4',(req,res) => {                     //...............................0 : mp4 format
         const f2=path.join(__dirname, 'forExpressServer_mp4.html')
                 res.sendFile(f2);                           
              });

// ..............end test     
 //  ......................   Ein einfacher GET-Endpunkt  .......  
      app.get('/hugo/data', (req, res) => {              //...............................1: send json data  
          res.json({ message: 'hugo_008: Hallo von Expressjs!Test-data' });
      });

 // ...................   noch mehr  Beispielroute  ..........
 
   
 //  ...................................................................

    app.get('/sendtext', (req, res) => {  // .............................................2 :  Send a text 
        res.send('<h1>Über uns 007</h1>');
        });
 // .......................................................................

    app.get('/download', (req, res) => {  // .............................................. 3 :  Download 
  
         const datafile = path.join(__dirname, 'abc.txt');

        res.sendFile( datafile );
           });


//  ............................................................................

   app.get('/read_and_save', (req, res) => {   // ........................................ 7 :  Read and Write(save)
             
    const sourceFilePath = 'abc.txt';
                              
    const targetFilePath = 'abc2_von_gelesen_aus_abc.txt';

                               // ..................Datei lesen
    fs.readFile(sourceFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Fehler beim Lesen der Datei');
        }
                        // ....................... Datei schreiben
        fs.writeFile(targetFilePath, data, 'utf8', (err) => {
            if (err) {
                return res.status(500).send('Fehler beim Schreiben der Datei');
            }
            res.send('<h1>Datei erfolgreich gelesen und gespeichert! :</h1>'+targetFilePath);
        });
     });
   });


//  ...................................................

    app.get('/marweb', (req, res) => {  // ........................................... 8 :  display MarWeb
          res.redirect('http://www.masterallround.de');
         })
//  ..................................................

 
//............. end bsp ........

// ........................................................................ start the server on port 3001
     
      app.listen(port, () => {
          console.log(`Server runs on  http://localhost:${port}`);
      });

