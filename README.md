# TJ Nite
This is a project for Engineer 2014, the Technical Fest of NITK Surathkal, as a part of Technites. The code is written with the aim of detecting beats on the music being played, and then pushing colors for the clients, mobile phones of the audience, to display.

For music processing, phosphene is being used, a python library authored by Shashi Gowda. Websockets are being used for the connection between the clients and the server. A node.js server is used to broadcast the data to the clients.

## Usage :

### Set up server :

``` bash
cd server
npm install
npm start
```
This will set up a server on localhost:5000.

### Play the music :

Run the demo.py file in phosphene/src.
```bash
python demo.py <pathToSong>
```

Head over to localhost:5000 on a browser!

## Dependencies :

- For Phosphene
  * numpy
  * scipy
  * pygame
  * lame

- Additional python dependencies
  * websocket-client

- Node.js
  * ws
  * express
