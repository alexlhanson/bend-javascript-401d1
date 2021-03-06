'use strict';

// 3rd Party Libraries
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


let app = express();

// App level middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

let server = false;

module.exports = {
  start: (port) => {
    if(! server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log(`Server up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close( () => {
      console.log('Server has been stopped');
    });
  },
};
