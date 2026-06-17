
                                 //.... .....  mar_ExpressServer.js
      const express = require('express');     
          const app = express();
         const path = require('path');
         const port = 8080;
       const {exec} = require('child_process');
            const fs=require('fs');



 // ....Statische Dateien aus dem "publicx" Verzeichnis bereitstellen

       app.use(express.static(path.join(__dirname, 'publicx')));

// ............. send html File zum Browser = Home page ...
      app.get('/',(req,res) => {
         const f=path.join(__dirname, 'index_buttons_express.html')
                 res.sendFile(f);                           
              });

  app.get('/mp4',(req,res) => {
         const f2=path.join(__dirname, 'forExpressServer_mp4.html')
                 res.sendFile(f2);                           
              });

// ..............end test     
 //  ......................   Ein einfacher GET-Endpunkt  .......  
      app.get('/api/data', (req, res) => {              //...............................0 : send json data  
          res.json({ message: 'hugo_009: Hallo von Expressjs!Test-data' });
      });

 // ...................   noch mehr  Beispielroute  ..........
 
     app.get('/home', (req, res) => {                        //........................... 1 :  home page    
       res.send('<center><h1>Willkommen auf der Startseite!(default-Input)</h1></center');
       }); 
 //  ...................................................................

    app.get('/sendatext', (req, res) => {  // .............................................2 :  Send a text 
        res.send('<h1>Über uns 007</h1>');
        });
 // .......................................................................

    app.get('/download', (req, res) => {  // .............................................. 3 :  Download 
      // const filePath = path.join(__dirname, 'abc.txt');
 const datafile = path.join(__dirname, 'abc.txt');

        res.sendFile( datafile );
           });

//  ............................................................................

   app.get('/read_and_save', (req, res) => {   // ........................................ 4 :  Read and Write(save)
                    // .... Pfad zur Quelldatei (liegt in gleicher Ebene wie .js file)
    const sourceFilePath = 'abc.txt';
                                // ............... Pfad zur Zieldatei
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

    app.get('/marweb', (req, res) => {  // ........................................... 5 :  display MarWeb
          res.redirect('http://www.masterallround.de');
         })
//  ..................................................

  app.get('/stg1', (req, res) => {    // .......................................  6 :  Render .bat file : stage1
         exec('stage1.bat' , (error,stdout,stderr) => {    

            res.send('stdout: $(stdout)');                  
          }); 
        });

//  ........................................

     app.get('/marfin', (req, res) => {    // ................................... 7 :  Render .bat file : marfin
             exec('marfin.bat' , (error,stdout,stderr) => {    
                res.send('stdout: $(stdout)');                  
          }); 
        });
//............. end bsp ........

// ........................................................................ start the server on port 8080
     
      app.listen(port, () => {
          console.log(`Server runs on  http://localhost:${port}`);
      });

