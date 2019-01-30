/*
Use Express to serve up an index.html file and its associated assets
Build your UI using ReactJS and pre-compile your views using Babel
Use MongoDB or MySQL to store your user data


*/

const express = require('express');
const app = express();
const path = require('path');
var MongoClient = require('mongodb').MongoClient;
const mongourl = "mongodb://localhost:27017/";

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
                processor.handleCart();
                processor.storeCart();
            });
            res.statusCode = 201;
            res.end();
        });
    }
};

var processor = {
    cart: null,
    handleCart: () => {
        console.log('no cart processing configured');
    },
    storeCart: () => {
        console.log('Saving cart to database');
        MongoClient.connect(mongourl, (err, db) => {
            if (err) throw err;
            //the second parameter in the callback contains a reference
            //to the database (db) object
            db.db('transactions').collection('carts').insertOne(processor.cart, (err, res) => {
                if (err) throw err;
                console.log('Cart inserted successfully!');
                db.close();
            });
        });
    }
};

server.initialize();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBhdGgiLCJNb25nb0NsaWVudCIsIm1vbmdvdXJsIiwic2VydmVyIiwicG9ydCIsImluaXRpYWxpemUiLCJyb3V0ZXIiLCJzZXJ2ZUNsaWVudCIsInJlY2VpdmVEYXRhIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImdldCIsInJlcSIsInJlcyIsInVzZSIsInN0YXRpYyIsIl9fZGlybmFtZSIsInNlbmRGaWxlIiwiam9pbiIsImVyciIsInBvc3QiLCJvbiIsImRhdGEiLCJwcm9jZXNzb3IiLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlQ2FydCIsInN0b3JlQ2FydCIsInN0YXR1c0NvZGUiLCJlbmQiLCJjb25uZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiY2xvc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQVFBLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLE1BQU1DLE1BQU1GLFNBQVo7QUFDQSxNQUFNRyxPQUFPRixRQUFRLE1BQVIsQ0FBYjtBQUNBLElBQUlHLGNBQWNILFFBQVEsU0FBUixFQUFtQkcsV0FBckM7QUFDQSxNQUFNQyxXQUFXLDRCQUFqQjs7QUFJQSxJQUFJQyxTQUFTO0FBQ1RDLFVBQU0sSUFERztBQUVUQyxnQkFBWSxNQUFNO0FBQ2RDLGVBQU9DLFdBQVA7QUFDQUQsZUFBT0UsV0FBUDtBQUNBVCxZQUFJVSxNQUFKLENBQVdOLE9BQU9DLElBQWxCLEVBQXdCLE1BQU07QUFBQ00sb0JBQVFDLEdBQVIsQ0FBYSxrQ0FBaUNSLE9BQU9DLElBQUssRUFBMUQ7QUFBNkQsU0FBNUY7QUFDSDtBQU5RLENBQWI7O0FBU0EsSUFBSUUsU0FBUztBQUNUQyxpQkFBYSxNQUFNO0FBQ2ZSLFlBQUlhLEdBQUosQ0FBUSxHQUFSLEVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDdkJmLGdCQUFJZ0IsR0FBSixDQUFRbEIsUUFBUW1CLE1BQVIsQ0FBZ0IsR0FBRUMsU0FBVSxrQkFBNUIsQ0FBUixFQUR1QixDQUNrQztBQUN6RFAsb0JBQVFDLEdBQVIsQ0FBYSxHQUFFTSxTQUFVLGtCQUF6QjtBQUNBSCxnQkFBSUksUUFBSixDQUFhbEIsS0FBS21CLElBQUwsQ0FBVUYsU0FBVixFQUFxQixvQkFBckIsQ0FBYixFQUEwREcsR0FBRCxJQUFTO0FBQzlELG9CQUFJQSxHQUFKLEVBQVM7QUFDTFYsNEJBQVFDLEdBQVIsQ0FBWVMsR0FBWjtBQUNIO0FBQ0osYUFKRDtBQUtILFNBUkQ7QUFTQTtBQUNILEtBWlE7QUFhVFosaUJBQWEsTUFBTTtBQUNmVCxZQUFJc0IsSUFBSixDQUFTLE9BQVQsRUFBa0IsQ0FBQ1IsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDNUJELGdCQUFJUyxFQUFKLENBQU8sTUFBUCxFQUFnQkMsSUFBRCxJQUFVO0FBQ3JCQywwQkFBVUMsSUFBVixHQUFpQkMsS0FBS0MsS0FBTCxDQUFXSixJQUFYLENBQWpCO0FBQ0FDLDBCQUFVSSxVQUFWO0FBQ0FKLDBCQUFVSyxTQUFWO0FBQ0gsYUFKRDtBQUtBZixnQkFBSWdCLFVBQUosR0FBaUIsR0FBakI7QUFDQWhCLGdCQUFJaUIsR0FBSjtBQUNILFNBUkQ7QUFTSDtBQXZCUSxDQUFiOztBQTBCQSxJQUFJUCxZQUFZO0FBQ1pDLFVBQU0sSUFETTtBQUVaRyxnQkFBWSxNQUFNO0FBQ2RsQixnQkFBUUMsR0FBUixDQUFZLCtCQUFaO0FBQ0gsS0FKVztBQUtaa0IsZUFBVyxNQUFNO0FBQ2JuQixnQkFBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0FWLG9CQUFZK0IsT0FBWixDQUFvQjlCLFFBQXBCLEVBQThCLENBQUNrQixHQUFELEVBQUthLEVBQUwsS0FBWTtBQUN0QyxnQkFBR2IsR0FBSCxFQUFRLE1BQU1BLEdBQU47QUFDUjtBQUNBO0FBQ0FhLGVBQUdBLEVBQUgsQ0FBTSxjQUFOLEVBQXNCQyxVQUF0QixDQUFpQyxPQUFqQyxFQUEwQ0MsU0FBMUMsQ0FBb0RYLFVBQVVDLElBQTlELEVBQW9FLENBQUNMLEdBQUQsRUFBTU4sR0FBTixLQUFjO0FBQzlFLG9CQUFJTSxHQUFKLEVBQVMsTUFBTUEsR0FBTjtBQUNUVix3QkFBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0FzQixtQkFBR0csS0FBSDtBQUNILGFBSkQ7QUFNSCxTQVZEO0FBWUg7QUFuQlcsQ0FBaEI7O0FBc0JBakMsT0FBT0UsVUFBUCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVXNlIEV4cHJlc3MgdG8gc2VydmUgdXAgYW4gaW5kZXguaHRtbCBmaWxlIGFuZCBpdHMgYXNzb2NpYXRlZCBhc3NldHNcbkJ1aWxkIHlvdXIgVUkgdXNpbmcgUmVhY3RKUyBhbmQgcHJlLWNvbXBpbGUgeW91ciB2aWV3cyB1c2luZyBCYWJlbFxuVXNlIE1vbmdvREIgb3IgTXlTUUwgdG8gc3RvcmUgeW91ciB1c2VyIGRhdGFcblxuXG4qL1xuXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBNb25nb0NsaWVudCA9IHJlcXVpcmUoJ21vbmdvZGInKS5Nb25nb0NsaWVudDtcbmNvbnN0IG1vbmdvdXJsID0gXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L1wiO1xuXG5cblxudmFyIHNlcnZlciA9IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIGluaXRpYWxpemU6ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnNlcnZlQ2xpZW50KCk7XG4gICAgICAgIHJvdXRlci5yZWNlaXZlRGF0YSgpO1xuICAgICAgICBhcHAubGlzdGVuKHNlcnZlci5wb3J0LCAoKSA9PiB7Y29uc29sZS5sb2coYFNlcnZlciBvcGVuLCBsaXN0ZW5pbmcgb24gcG9ydCAke3NlcnZlci5wb3J0fWApfSk7XG4gICAgfVxufVxuXG52YXIgcm91dGVyID0ge1xuICAgIHNlcnZlQ2xpZW50OiAoKSA9PiB7XG4gICAgICAgIGFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoYCR7X19kaXJuYW1lfS9jb21waWxlZC9jbGllbnRgKSk7IC8vYWxsb3cgYWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtfX2Rpcm5hbWV9L2NvbXBpbGVkL2NsaWVudGApO1xuICAgICAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcvcHVibGljL2luZGV4Lmh0bWwnKSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgLy90d28gbGluZXMsIG9uZSBmb3Igc2VydmluZyBzdGF0aWMgYXNzZXRzLCBvbmUgc2VydmluZyB0aGUgSFRNTCBmaWxlXG4gICAgfSxcbiAgICByZWNlaXZlRGF0YTogKCkgPT4ge1xuICAgICAgICBhcHAucG9zdCgnL2NhcnQnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIHJlcS5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc29yLmNhcnQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3Nvci5oYW5kbGVDYXJ0KCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc29yLnN0b3JlQ2FydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMTtcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbnZhciBwcm9jZXNzb3IgPSB7XG4gICAgY2FydDogbnVsbCxcbiAgICBoYW5kbGVDYXJ0OiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyBjYXJ0IHByb2Nlc3NpbmcgY29uZmlndXJlZCcpO1xuICAgIH0sXG4gICAgc3RvcmVDYXJ0OiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgY2FydCB0byBkYXRhYmFzZScpO1xuICAgICAgICBNb25nb0NsaWVudC5jb25uZWN0KG1vbmdvdXJsLCAoZXJyLGRiKSA9PiB7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIC8vdGhlIHNlY29uZCBwYXJhbWV0ZXIgaW4gdGhlIGNhbGxiYWNrIGNvbnRhaW5zIGEgcmVmZXJlbmNlXG4gICAgICAgICAgICAvL3RvIHRoZSBkYXRhYmFzZSAoZGIpIG9iamVjdFxuICAgICAgICAgICAgZGIuZGIoJ3RyYW5zYWN0aW9ucycpLmNvbGxlY3Rpb24oJ2NhcnRzJykuaW5zZXJ0T25lKHByb2Nlc3Nvci5jYXJ0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhcnQgaW5zZXJ0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG59XG5cbnNlcnZlci5pbml0aWFsaXplKCk7Il19