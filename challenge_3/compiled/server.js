/*
Use Express to serve up an index.html file and its associated assets
Build your UI using ReactJS and pre-compile your views using Babel
Use MongoDB or MySQL to store your user data

        mongodb://127.0.0.1:27017
        var mongoPort = 27017;

*/

const express = require('express');
const app = express();
const path = require('path');

var server = {
    port: 3000,
    initialize: () => {
        router.serveClient();
        router.receiveData();
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
    },
    receiveData: () => {
        app.post('/cart', (req, res) => {
            req.on('data', data => {
                processor.cart = JSON.parse(data);
            });
            res.statusCode = 201;
            res.end();
        });
    }
};

var processor = {
    cart: null,
    processCart: () => {
        console.log('no cart processing configured');
    },
    saveCart: () => {
        console.log('Saving cart to database');
    }
};

server.initialize();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBhdGgiLCJzZXJ2ZXIiLCJwb3J0IiwiaW5pdGlhbGl6ZSIsInJvdXRlciIsInNlcnZlQ2xpZW50IiwicmVjZWl2ZURhdGEiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwicmVxIiwicmVzIiwidXNlIiwic3RhdGljIiwiX19kaXJuYW1lIiwic2VuZEZpbGUiLCJqb2luIiwiZXJyIiwicG9zdCIsIm9uIiwiZGF0YSIsInByb2Nlc3NvciIsImNhcnQiLCJKU09OIiwicGFyc2UiLCJzdGF0dXNDb2RlIiwiZW5kIiwicHJvY2Vzc0NhcnQiLCJzYXZlQ2FydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFVQSxNQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxNQUFNQyxNQUFNRixTQUFaO0FBQ0EsTUFBTUcsT0FBT0YsUUFBUSxNQUFSLENBQWI7O0FBR0EsSUFBSUcsU0FBUztBQUNUQyxVQUFNLElBREc7QUFFVEMsZ0JBQVksTUFBTTtBQUNkQyxlQUFPQyxXQUFQO0FBQ0FELGVBQU9FLFdBQVA7QUFDQVAsWUFBSVEsTUFBSixDQUFXTixPQUFPQyxJQUFsQixFQUF3QixNQUFNO0FBQUNNLG9CQUFRQyxHQUFSLENBQWEsa0NBQWlDUixPQUFPQyxJQUFLLEVBQTFEO0FBQTZELFNBQTVGO0FBQ0g7QUFOUSxDQUFiOztBQVNBLElBQUlFLFNBQVM7QUFDVEMsaUJBQWEsTUFBTTtBQUNmTixZQUFJVyxHQUFKLENBQVEsR0FBUixFQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3ZCYixnQkFBSWMsR0FBSixDQUFRaEIsUUFBUWlCLE1BQVIsQ0FBZ0IsR0FBRUMsU0FBVSxrQkFBNUIsQ0FBUixFQUR1QixDQUNrQztBQUN6RFAsb0JBQVFDLEdBQVIsQ0FBYSxHQUFFTSxTQUFVLGtCQUF6QjtBQUNBSCxnQkFBSUksUUFBSixDQUFhaEIsS0FBS2lCLElBQUwsQ0FBVUYsU0FBVixFQUFxQixvQkFBckIsQ0FBYixFQUEwREcsR0FBRCxJQUFTO0FBQzlELG9CQUFJQSxHQUFKLEVBQVM7QUFDTFYsNEJBQVFDLEdBQVIsQ0FBWVMsR0FBWjtBQUNIO0FBQ0osYUFKRDtBQUtILFNBUkQ7QUFTQTtBQUNILEtBWlE7QUFhVFosaUJBQWEsTUFBTTtBQUNmUCxZQUFJb0IsSUFBSixDQUFTLE9BQVQsRUFBa0IsQ0FBQ1IsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDNUJELGdCQUFJUyxFQUFKLENBQU8sTUFBUCxFQUFnQkMsSUFBRCxJQUFVO0FBQ3JCQywwQkFBVUMsSUFBVixHQUFpQkMsS0FBS0MsS0FBTCxDQUFXSixJQUFYLENBQWpCO0FBQ0gsYUFGRDtBQUdBVCxnQkFBSWMsVUFBSixHQUFpQixHQUFqQjtBQUNBZCxnQkFBSWUsR0FBSjtBQUNILFNBTkQ7QUFPSDtBQXJCUSxDQUFiOztBQXdCQSxJQUFJTCxZQUFZO0FBQ1pDLFVBQU0sSUFETTtBQUVaSyxpQkFBYSxNQUFNO0FBQ2ZwQixnQkFBUUMsR0FBUixDQUFZLCtCQUFaO0FBQ0gsS0FKVztBQUtab0IsY0FBVSxNQUFNO0FBQ1pyQixnQkFBUUMsR0FBUixDQUFZLHlCQUFaO0FBRUg7QUFSVyxDQUFoQjs7QUFXQVIsT0FBT0UsVUFBUCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVXNlIEV4cHJlc3MgdG8gc2VydmUgdXAgYW4gaW5kZXguaHRtbCBmaWxlIGFuZCBpdHMgYXNzb2NpYXRlZCBhc3NldHNcbkJ1aWxkIHlvdXIgVUkgdXNpbmcgUmVhY3RKUyBhbmQgcHJlLWNvbXBpbGUgeW91ciB2aWV3cyB1c2luZyBCYWJlbFxuVXNlIE1vbmdvREIgb3IgTXlTUUwgdG8gc3RvcmUgeW91ciB1c2VyIGRhdGFcblxuICAgICAgICBtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3XG4gICAgICAgIHZhciBtb25nb1BvcnQgPSAyNzAxNztcblxuKi9cblxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cblxudmFyIHNlcnZlciA9IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIGluaXRpYWxpemU6ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnNlcnZlQ2xpZW50KCk7XG4gICAgICAgIHJvdXRlci5yZWNlaXZlRGF0YSgpO1xuICAgICAgICBhcHAubGlzdGVuKHNlcnZlci5wb3J0LCAoKSA9PiB7Y29uc29sZS5sb2coYFNlcnZlciBvcGVuLCBsaXN0ZW5pbmcgb24gcG9ydCAke3NlcnZlci5wb3J0fWApfSk7XG4gICAgfVxufVxuXG52YXIgcm91dGVyID0ge1xuICAgIHNlcnZlQ2xpZW50OiAoKSA9PiB7XG4gICAgICAgIGFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoYCR7X19kaXJuYW1lfS9jb21waWxlZC9jbGllbnRgKSk7IC8vYWxsb3cgYWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtfX2Rpcm5hbWV9L2NvbXBpbGVkL2NsaWVudGApO1xuICAgICAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcvcHVibGljL2luZGV4Lmh0bWwnKSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgLy90d28gbGluZXMsIG9uZSBmb3Igc2VydmluZyBzdGF0aWMgYXNzZXRzLCBvbmUgc2VydmluZyB0aGUgSFRNTCBmaWxlXG4gICAgfSxcbiAgICByZWNlaXZlRGF0YTogKCkgPT4ge1xuICAgICAgICBhcHAucG9zdCgnL2NhcnQnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIHJlcS5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc29yLmNhcnQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMTtcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbnZhciBwcm9jZXNzb3IgPSB7XG4gICAgY2FydDogbnVsbCxcbiAgICBwcm9jZXNzQ2FydDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gY2FydCBwcm9jZXNzaW5nIGNvbmZpZ3VyZWQnKTtcbiAgICB9LFxuICAgIHNhdmVDYXJ0OiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgY2FydCB0byBkYXRhYmFzZScpO1xuICAgICAgICBcbiAgICB9XG59XG5cbnNlcnZlci5pbml0aWFsaXplKCk7Il19