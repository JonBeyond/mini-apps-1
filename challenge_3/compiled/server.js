/*
Use Express to serve up an index.html file and its associated assets
Build your UI using ReactJS and pre-compile your views using Babel
Use MongoDB or MySQL to store your user data
*/

const express = require('express');
const app = express();
const path = require('path');

var server = {
    port: 3000,
    initialize: () => {
        router.serveClient();
        app.listen(server.port, () => {
            console.log(`Server open, listening on port ${server.port}`);
        });
    }
};

var router = {
    serveClient: () => {
        app.get('/', (req, res) => {
            app.use(express.static(`${__dirname}/compiled/client`)); //allow access
            console.log(`${__dirname}/compiled/client`);
            res.sendFile(path.join(__dirname, '/public/index.html'), err => {
                if (err) {
                    console.log(err);
                }
            });
        });
        //two lines, one for serving static assets, one serving the HTML file
    }
};

var processor = {}; //for any server-side processing

server.initialize();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBhdGgiLCJzZXJ2ZXIiLCJwb3J0IiwiaW5pdGlhbGl6ZSIsInJvdXRlciIsInNlcnZlQ2xpZW50IiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImdldCIsInJlcSIsInJlcyIsInVzZSIsInN0YXRpYyIsIl9fZGlybmFtZSIsInNlbmRGaWxlIiwiam9pbiIsImVyciIsInByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLE1BQU1DLE1BQU1GLFNBQVo7QUFDQSxNQUFNRyxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7QUFHQSxJQUFJRyxTQUFTO0FBQ1RDLFVBQU0sSUFERztBQUVUQyxnQkFBWSxNQUFNO0FBQ2RDLGVBQU9DLFdBQVA7QUFDQU4sWUFBSU8sTUFBSixDQUFXTCxPQUFPQyxJQUFsQixFQUF3QixNQUFNO0FBQUNLLG9CQUFRQyxHQUFSLENBQWEsa0NBQWlDUCxPQUFPQyxJQUFLLEVBQTFEO0FBQTZELFNBQTVGO0FBQ0g7QUFMUSxDQUFiOztBQVFBLElBQUlFLFNBQVM7QUFDVEMsaUJBQWEsTUFBTTtBQUNmTixZQUFJVSxHQUFKLENBQVEsR0FBUixFQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3ZCWixnQkFBSWEsR0FBSixDQUFRZixRQUFRZ0IsTUFBUixDQUFnQixHQUFFQyxTQUFVLGtCQUE1QixDQUFSLEVBRHVCLENBQ2tDO0FBQ3pEUCxvQkFBUUMsR0FBUixDQUFhLEdBQUVNLFNBQVUsa0JBQXpCO0FBQ0FILGdCQUFJSSxRQUFKLENBQWFmLEtBQUtnQixJQUFMLENBQVVGLFNBQVYsRUFBcUIsb0JBQXJCLENBQWIsRUFBMERHLEdBQUQsSUFBUztBQUM5RCxvQkFBSUEsR0FBSixFQUFTO0FBQ0xWLDRCQUFRQyxHQUFSLENBQVlTLEdBQVo7QUFDSDtBQUNKLGFBSkQ7QUFLSCxTQVJEO0FBU0E7QUFDSDtBQVpRLENBQWI7O0FBZUEsSUFBSUMsWUFBWSxFQUFoQixDLENBQW1COztBQUVuQmpCLE9BQU9FLFVBQVAiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblVzZSBFeHByZXNzIHRvIHNlcnZlIHVwIGFuIGluZGV4Lmh0bWwgZmlsZSBhbmQgaXRzIGFzc29jaWF0ZWQgYXNzZXRzXG5CdWlsZCB5b3VyIFVJIHVzaW5nIFJlYWN0SlMgYW5kIHByZS1jb21waWxlIHlvdXIgdmlld3MgdXNpbmcgQmFiZWxcblVzZSBNb25nb0RCIG9yIE15U1FMIHRvIHN0b3JlIHlvdXIgdXNlciBkYXRhXG4qL1xuXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuXG52YXIgc2VydmVyID0ge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgaW5pdGlhbGl6ZTogKCkgPT4ge1xuICAgICAgICByb3V0ZXIuc2VydmVDbGllbnQoKTtcbiAgICAgICAgYXBwLmxpc3RlbihzZXJ2ZXIucG9ydCwgKCkgPT4ge2NvbnNvbGUubG9nKGBTZXJ2ZXIgb3BlbiwgbGlzdGVuaW5nIG9uIHBvcnQgJHtzZXJ2ZXIucG9ydH1gKX0pO1xuICAgIH1cbn1cblxudmFyIHJvdXRlciA9IHtcbiAgICBzZXJ2ZUNsaWVudDogKCkgPT4ge1xuICAgICAgICBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKGAke19fZGlybmFtZX0vY29tcGlsZWQvY2xpZW50YCkpOyAvL2FsbG93IGFjY2Vzc1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7X19kaXJuYW1lfS9jb21waWxlZC9jbGllbnRgKTtcbiAgICAgICAgICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnL3B1YmxpYy9pbmRleC5odG1sJyksIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIC8vdHdvIGxpbmVzLCBvbmUgZm9yIHNlcnZpbmcgc3RhdGljIGFzc2V0cywgb25lIHNlcnZpbmcgdGhlIEhUTUwgZmlsZVxuICAgIH1cbn1cblxudmFyIHByb2Nlc3NvciA9IHt9IC8vZm9yIGFueSBzZXJ2ZXItc2lkZSBwcm9jZXNzaW5nXG5cbnNlcnZlci5pbml0aWFsaXplKCk7Il19