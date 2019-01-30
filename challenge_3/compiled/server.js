/*
Use Express to serve up an index.html file and its associated assets
Build your UI using ReactJS and pre-compile your views using Babel
Use MongoDB or MySQL to store your user data
*/

const express = require('express');
const app = express();

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
        app.get('/', (req, res) => res.send('client serving not available yet'));
        //two lines, one for serving static assets, one serving the HTML file
    }
};

var processor = {}; //for any server-side processing

server.initialize();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInNlcnZlciIsInBvcnQiLCJpbml0aWFsaXplIiwicm91dGVyIiwic2VydmVDbGllbnQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsInByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLE1BQU1DLE1BQU1GLFNBQVo7O0FBRUEsSUFBSUcsU0FBUztBQUNUQyxVQUFNLElBREc7QUFFVEMsZ0JBQVksTUFBTTtBQUNkQyxlQUFPQyxXQUFQO0FBQ0FMLFlBQUlNLE1BQUosQ0FBV0wsT0FBT0MsSUFBbEIsRUFBd0IsTUFBTTtBQUFDSyxvQkFBUUMsR0FBUixDQUFhLGtDQUFpQ1AsT0FBT0MsSUFBSyxFQUExRDtBQUE2RCxTQUE1RjtBQUNIO0FBTFEsQ0FBYjs7QUFRQSxJQUFJRSxTQUFTO0FBQ1RDLGlCQUFhLE1BQU07QUFDZkwsWUFBSVMsR0FBSixDQUFRLEdBQVIsRUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBY0EsSUFBSUMsSUFBSixDQUFTLGtDQUFULENBQTNCO0FBQ0E7QUFDSDtBQUpRLENBQWI7O0FBT0EsSUFBSUMsWUFBWSxFQUFoQixDLENBQW1COztBQUVuQlosT0FBT0UsVUFBUCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVXNlIEV4cHJlc3MgdG8gc2VydmUgdXAgYW4gaW5kZXguaHRtbCBmaWxlIGFuZCBpdHMgYXNzb2NpYXRlZCBhc3NldHNcbkJ1aWxkIHlvdXIgVUkgdXNpbmcgUmVhY3RKUyBhbmQgcHJlLWNvbXBpbGUgeW91ciB2aWV3cyB1c2luZyBCYWJlbFxuVXNlIE1vbmdvREIgb3IgTXlTUUwgdG8gc3RvcmUgeW91ciB1c2VyIGRhdGFcbiovXG5cbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbnZhciBzZXJ2ZXIgPSB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBpbml0aWFsaXplOiAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5zZXJ2ZUNsaWVudCgpO1xuICAgICAgICBhcHAubGlzdGVuKHNlcnZlci5wb3J0LCAoKSA9PiB7Y29uc29sZS5sb2coYFNlcnZlciBvcGVuLCBsaXN0ZW5pbmcgb24gcG9ydCAke3NlcnZlci5wb3J0fWApfSk7XG4gICAgfVxufVxuXG52YXIgcm91dGVyID0ge1xuICAgIHNlcnZlQ2xpZW50OiAoKSA9PiB7XG4gICAgICAgIGFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKCdjbGllbnQgc2VydmluZyBub3QgYXZhaWxhYmxlIHlldCcpKTtcbiAgICAgICAgLy90d28gbGluZXMsIG9uZSBmb3Igc2VydmluZyBzdGF0aWMgYXNzZXRzLCBvbmUgc2VydmluZyB0aGUgSFRNTCBmaWxlXG4gICAgfVxufVxuXG52YXIgcHJvY2Vzc29yID0ge30gLy9mb3IgYW55IHNlcnZlci1zaWRlIHByb2Nlc3Npbmdcblxuc2VydmVyLmluaXRpYWxpemUoKTsiXX0=