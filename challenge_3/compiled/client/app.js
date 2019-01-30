class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkoutStep: 0, //0, 1, 2, 3, 4 for start, login, shipping, billing, complete
            cart: {
                login: {},
                shipping: {},
                billing: {}
            }
        };
    }

    /************************* STATE CHANGES *************************/
    next() {
        //needs to store all submitted data into the state object depending on current state value
        switch (this.state.checkoutStep) {
            case 1:
                //check which button was pressed?
                //TODO: need to allow for user to login
                this.processNewUser();
                break;
            case 2:
                this.processShipping();
                break;
            case 3:
                this.processBilling();
                break;
            case 4:
                this.sendData();
                break;
            default:
                console.log('ERROR: unable to store form data');
        }
        //then progress to next step
        this.setState({
            checkoutStep: this.state.checkoutStep + 1
        });
    }
    previous() {
        this.setState({
            checkoutStep: this.state.checkoutStep - 1
        });
    }
    processLogin() {
        //tbd
        //will need to query server
    }
    processNewUser() {
        //save
        //targets: newuser, newemail, newpassword
        let reference = this.state.cart.login;
        reference.username = document.getElementById('newuser').value;
        reference.email = document.getElementById('newemail').value;
        reference.password = document.getElementById('newpassword').value;
        console.log(reference);
    }
    processShipping() {
        let reference = this.state.cart.shipping;
        reference.name = document.getElementById('shipname').value;
        reference.addressLineOne = document.getElementById('address1').value;
        reference.addressLineOne = document.getElementById('address1').value;
        reference.city = document.getElementById('city').value;
        reference.state = document.getElementById('state').value;
        reference.country = document.getElementById('country').value;
        reference.zip = document.getElementById('zip').value;
        reference.phone = document.getElementById('phone').value;
        console.log(reference);
    }
    processBilling() {
        let reference = this.state.cart.billing;
        reference.name = document.getElementById('billname').value;
        reference.cardnumber = document.getElementById('cardnumber').value;
        reference.expMonth = document.getElementById('expMonth').value;
        reference.expYear = document.getElementById('expYear').value;
        reference.CVV = document.getElementById('CVV').value;
        reference.zip = document.getElementById('zip').value;
        console.log(reference);
    }

    /************************* SERVER COMMUNICATION *************************/

    sendData() {
        //send to node server.
        var connection = new XMLHttpRequest();
        connection.onreadystatechange = () => {
            if (connection.readyState === 4) {
                console.log('cart sent to server');
            }
        };
        //need to specify parameters
        connection.open('POST', 'http://127.0.0.1:3000/cart', true);
        connection.send(JSON.stringify(this.state.cart)); //send the entire cart object
    }

    /************************* CHECKOUT STAGES - FORMS *************************/
    renderHome() {
        return React.createElement(
            'div',
            null,
            'Welcome to the best checkout app in existance!',
            React.createElement(
                'div',
                null,
                'Are you ready to checkout?'
            ),
            React.createElement(
                'button',
                { id: 'startcheckout', onClick: this.next.bind(this) },
                'YES!! LET\'S CHECKOUT'
            )
        );
    }
    renderLogin() {
        return React.createElement(
            'div',
            null,
            'Welcome to the best checkout app in existance!',
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                'div',
                null,
                'Are you a new user? Create an account below:',
                React.createElement(
                    'form',
                    null,
                    'Name (# of char max):',
                    React.createElement('input', { id: 'newuser', type: 'text', required: true, size: '16' }),
                    React.createElement('br', null),
                    'Email (# of char max):',
                    React.createElement('input', { id: 'newemail', type: 'text', required: true, size: '20' }),
                    React.createElement('br', null),
                    'Password (requirements TBD):',
                    React.createElement('input', { id: 'newpassword', type: 'text', required: true, size: '20' }),
                    React.createElement('br', null),
                    React.createElement('input', { id: 'newsubmit', type: 'submit', value: 'Create New Acccount', onClick: this.next.bind(this) })
                )
            ),
            React.createElement('br', null),
            React.createElement(
                'div',
                null,
                'Are you a returning user? Login below (NOT FUNCTIONAL)',
                React.createElement('br', null),
                React.createElement(
                    'form',
                    null,
                    'Input username or email:',
                    React.createElement('input', { id: 'loginID', type: 'text', required: true, size: '20' }),
                    React.createElement('br', null),
                    'Input password:',
                    React.createElement('input', { id: 'password', type: 'text', required: true, size: '20' }),
                    React.createElement('br', null),
                    React.createElement('input', { id: 'login', type: 'submit', value: 'Log In' })
                )
            )
        );
    }
    renderShipping() {
        return React.createElement(
            'div',
            null,
            'Please enter your shipping address below:',
            React.createElement(
                'form',
                null,
                'Name of receipient:',
                React.createElement('input', { id: 'shipname', type: 'text', required: true, size: '16' }),
                React.createElement('br', null),
                'Address Line 1:',
                React.createElement('input', { id: 'address1', type: 'text', required: true, size: '20' }),
                React.createElement('br', null),
                'Address Line 2:',
                React.createElement('input', { id: 'address2', type: 'text', size: '20' }),
                React.createElement('br', null),
                'City:',
                React.createElement('input', { id: 'city', type: 'text', required: true, size: '20' }),
                React.createElement('br', null),
                'State:',
                React.createElement('input', { id: 'state', type: 'text', required: true, size: '20' }),
                React.createElement('br', null),
                'Country',
                React.createElement('input', { id: 'country', type: 'text', required: true, size: '20' }),
                React.createElement('br', null),
                'Zip Code:',
                React.createElement('input', { id: 'zip', type: 'text', required: true, size: '20' }),
                React.createElement('br', null),
                'Phone:',
                React.createElement('input', { id: 'phone', type: 'text', required: true, size: '20' }),
                React.createElement('br', null),
                React.createElement('input', { id: 'newsubmit', type: 'submit', value: 'Store Address', onClick: this.next.bind(this) })
            )
        );
    }
    renderBilling() {
        return React.createElement(
            'div',
            null,
            'Please enter your payment information in our extremely secure system:',
            React.createElement(
                'form',
                null,
                'Name on the Card:',
                React.createElement('input', { id: 'billname', type: 'text', required: true, size: '16' }),
                React.createElement('br', null),
                'Card Number:',
                React.createElement('input', { id: 'cardnumber', type: 'text', required: true, size: '20' }),
                React.createElement('br', null),
                'Enter Expiration (MM/YY)',
                React.createElement('input', { id: 'expMonth', type: 'text', required: true, size: '2' }),
                React.createElement('input', { id: 'expYear', type: 'text', required: true, size: '2' }),
                React.createElement('br', null),
                'Enter CVV',
                React.createElement('input', { id: 'CVV', type: 'text', required: true, size: '3' }),
                React.createElement('br', null),
                'Billing Zip',
                React.createElement('input', { id: 'zip', type: 'text', required: true, size: '20' }),
                React.createElement('br', null),
                React.createElement('input', { id: 'newsubmit', type: 'submit', value: 'Store Billing', onClick: this.next.bind(this) })
            )
        );
    }
    renderConfirmation() {
        return React.createElement(
            'div',
            null,
            'Confirm your details:',
            React.createElement(
                'div',
                null,
                '$',
                JSON.stringify(this.state.cart)
            ),
            React.createElement('br', null),
            React.createElement(
                'button',
                { onClick: this.next.bind(this) },
                'Complete order'
            )
        );
    }
    renderComplete() {
        return React.createElement(
            'div',
            null,
            'Thanks for ordering!',
            React.createElement(
                'p',
                null,
                'eventually this page will redirect to start a new order'
            )
        );
    }

    /****************************** MAIN RENDER ******************************/

    render() {
        console.log(`Determining state: ${this.state.checkoutStep}`);
        switch (this.state.checkoutStep) {
            case 0:
                return this.renderHome();
            case 1:
                console.log('rendering login');
                return this.renderLogin();
            case 2:
                return this.renderShipping();
            case 3:
                return this.renderBilling();
            case 4:
                return this.renderConfirmation();
            case 5:
                return this.renderComplete();
            default:
                return React.createElement(
                    'div',
                    null,
                    'Error in checkout render (switch failure)'
                );
        }
    }
}

$App = document.getElementById('app');
ReactDOM.render(React.createElement(App, null), $App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tvdXRTdGVwIiwiY2FydCIsImxvZ2luIiwic2hpcHBpbmciLCJiaWxsaW5nIiwibmV4dCIsInByb2Nlc3NOZXdVc2VyIiwicHJvY2Vzc1NoaXBwaW5nIiwicHJvY2Vzc0JpbGxpbmciLCJzZW5kRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInByZXZpb3VzIiwicHJvY2Vzc0xvZ2luIiwicmVmZXJlbmNlIiwidXNlcm5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibmFtZSIsImFkZHJlc3NMaW5lT25lIiwiY2l0eSIsImNvdW50cnkiLCJ6aXAiLCJwaG9uZSIsImNhcmRudW1iZXIiLCJleHBNb250aCIsImV4cFllYXIiLCJDVlYiLCJjb25uZWN0aW9uIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwib3BlbiIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVuZGVySG9tZSIsImJpbmQiLCJyZW5kZXJMb2dpbiIsInJlbmRlclNoaXBwaW5nIiwicmVuZGVyQmlsbGluZyIsInJlbmRlckNvbmZpcm1hdGlvbiIsInJlbmRlckNvbXBsZXRlIiwicmVuZGVyIiwiJEFwcCIsIlJlYWN0RE9NIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLDBCQUFjLENBREwsRUFDUTtBQUNqQkMsa0JBQU07QUFDRkMsdUJBQU8sRUFETDtBQUVGQywwQkFBVSxFQUZSO0FBR0ZDLHlCQUFTO0FBSFA7QUFGRyxTQUFi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LHVCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFmUjtBQW9CSDtBQWhQNkI7O0FBc1BsQ0UsT0FBTy9CLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNBK0IsU0FBU0YsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxJQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoZWNrb3V0U3RlcDogMCwgLy8wLCAxLCAyLCAzLCA0IGZvciBzdGFydCwgbG9naW4sIHNoaXBwaW5nLCBiaWxsaW5nLCBjb21wbGV0ZVxuICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgIGxvZ2luOiB7fSxcbiAgICAgICAgICAgICAgICBzaGlwcGluZzoge30sXG4gICAgICAgICAgICAgICAgYmlsbGluZzoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiBTVEFURSBDSEFOR0VTICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmV4dCgpIHtcbiAgICAgICAgLy9uZWVkcyB0byBzdG9yZSBhbGwgc3VibWl0dGVkIGRhdGEgaW50byB0aGUgc3RhdGUgb2JqZWN0IGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlIHZhbHVlXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5jaGVja291dFN0ZXApIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvL2NoZWNrIHdoaWNoIGJ1dHRvbiB3YXMgcHJlc3NlZD9cbiAgICAgICAgICAgICAgICAvL1RPRE86IG5lZWQgdG8gYWxsb3cgZm9yIHVzZXIgdG8gbG9naW5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NOZXdVc2VyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2hpcHBpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NCaWxsaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6IHVuYWJsZSB0byBzdG9yZSBmb3JtIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoZW4gcHJvZ3Jlc3MgdG8gbmV4dCBzdGVwXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hlY2tvdXRTdGVwOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RlcCArIDFcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHJldmlvdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hlY2tvdXRTdGVwOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RlcCAtIDFcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHJvY2Vzc0xvZ2luKCkge1xuICAgICAgICAvL3RiZFxuICAgICAgICAvL3dpbGwgbmVlZCB0byBxdWVyeSBzZXJ2ZXJcbiAgICB9XG4gICAgcHJvY2Vzc05ld1VzZXIoKSB7IC8vc2F2ZVxuICAgICAgICAvL3RhcmdldHM6IG5ld3VzZXIsIG5ld2VtYWlsLCBuZXdwYXNzd29yZFxuICAgICAgICBsZXQgcmVmZXJlbmNlID0gdGhpcy5zdGF0ZS5jYXJ0LmxvZ2luO1xuICAgICAgICByZWZlcmVuY2UudXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3dXNlcicpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3ZW1haWwnKS52YWx1ZTtcbiAgICAgICAgcmVmZXJlbmNlLnBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3Bhc3N3b3JkJykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlZmVyZW5jZSk7XG4gICAgfVxuICAgIHByb2Nlc3NTaGlwcGluZygpIHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZSA9IHRoaXMuc3RhdGUuY2FydC5zaGlwcGluZztcbiAgICAgICAgcmVmZXJlbmNlLm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcG5hbWUnKS52YWx1ZTtcbiAgICAgICAgcmVmZXJlbmNlLmFkZHJlc3NMaW5lT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MxJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5hZGRyZXNzTGluZU9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzMScpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5zdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZScpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5JykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS56aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemlwJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2UpO1xuICAgIH1cbiAgICBwcm9jZXNzQmlsbGluZygpIHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZSA9IHRoaXMuc3RhdGUuY2FydC5iaWxsaW5nO1xuICAgICAgICByZWZlcmVuY2UubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWxsbmFtZScpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuY2FyZG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkbnVtYmVyJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5leHBNb250aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBNb250aCcpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuZXhwWWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBZZWFyJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5DVlYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ1ZWJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS56aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemlwJykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlZmVyZW5jZSk7XG4gICAgfVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiBTRVJWRVIgQ09NTVVOSUNBVElPTiAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgc2VuZERhdGEoKSB7XG4gICAgICAgIC8vc2VuZCB0byBub2RlIHNlcnZlci5cbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgY29ubmVjdGlvbi5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhcnQgc2VudCB0byBzZXJ2ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy9uZWVkIHRvIHNwZWNpZnkgcGFyYW1ldGVyc1xuICAgICAgICBjb25uZWN0aW9uLm9wZW4oJ1BPU1QnLCAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2NhcnQnLCB0cnVlKTtcbiAgICAgICAgY29ubmVjdGlvbi5zZW5kKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuY2FydCkpOyAvL3NlbmQgdGhlIGVudGlyZSBjYXJ0IG9iamVjdFxuXG4gICAgfVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqIENIRUNLT1VUIFNUQUdFUyAtIEZPUk1TICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcmVuZGVySG9tZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+V2VsY29tZSB0byB0aGUgYmVzdCBjaGVja291dCBhcHAgaW4gZXhpc3RhbmNlIVxuICAgICAgICAgICAgICAgIDxkaXY+QXJlIHlvdSByZWFkeSB0byBjaGVja291dD88L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdzdGFydGNoZWNrb3V0JyBvbkNsaWNrPXt0aGlzLm5leHQuYmluZCh0aGlzKX0+WUVTISEgTEVUJ1MgQ0hFQ0tPVVQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlckxvZ2luKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5XZWxjb21lIHRvIHRoZSBiZXN0IGNoZWNrb3V0IGFwcCBpbiBleGlzdGFuY2UhXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdj5BcmUgeW91IGEgbmV3IHVzZXI/IENyZWF0ZSBhbiBhY2NvdW50IGJlbG93OlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICBOYW1lICgjIG9mIGNoYXIgbWF4KTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSduZXd1c2VyJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScxNic+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsICgjIG9mIGNoYXIgbWF4KTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSduZXdlbWFpbCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZCAocmVxdWlyZW1lbnRzIFRCRCk6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nbmV3cGFzc3dvcmQnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSduZXdzdWJtaXQnIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J0NyZWF0ZSBOZXcgQWNjY291bnQnIG9uQ2xpY2s9e3RoaXMubmV4dC5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2PkFyZSB5b3UgYSByZXR1cm5pbmcgdXNlcj8gTG9naW4gYmVsb3cgKE5PVCBGVU5DVElPTkFMKVxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgSW5wdXQgdXNlcm5hbWUgb3IgZW1haWw6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nbG9naW5JRCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBJbnB1dCBwYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdwYXNzd29yZCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2xvZ2luJyB0eXBlPSdzdWJtaXQnIHZhbHVlPSdMb2cgSW4nPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyU2hpcHBpbmcoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlBsZWFzZSBlbnRlciB5b3VyIHNoaXBwaW5nIGFkZHJlc3MgYmVsb3c6XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIE5hbWUgb2YgcmVjZWlwaWVudDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdzaGlwbmFtZScgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMTYnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIExpbmUgMTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdhZGRyZXNzMScgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIExpbmUgMjpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdhZGRyZXNzMicgdHlwZT0ndGV4dCcgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBDaXR5OlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2NpdHknIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgU3RhdGU6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nc3RhdGUnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgQ291bnRyeVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2NvdW50cnknIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgWmlwIENvZGU6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nemlwJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIFBob25lOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3Bob25lJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nbmV3c3VibWl0JyB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdG9yZSBBZGRyZXNzJyBvbkNsaWNrPXt0aGlzLm5leHQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXJCaWxsaW5nKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5QbGVhc2UgZW50ZXIgeW91ciBwYXltZW50IGluZm9ybWF0aW9uIGluIG91ciBleHRyZW1lbHkgc2VjdXJlIHN5c3RlbTpcbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgTmFtZSBvbiB0aGUgQ2FyZDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdiaWxsbmFtZScgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMTYnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBDYXJkIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdjYXJkbnVtYmVyJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIEVudGVyIEV4cGlyYXRpb24gKE1NL1lZKVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2V4cE1vbnRoJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2V4cFllYXInIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzInPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBFbnRlciBDVlZcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdDVlYnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzMnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBCaWxsaW5nIFppcFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3ppcCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld3N1Ym1pdCcgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3RvcmUgQmlsbGluZycgb25DbGljaz17dGhpcy5uZXh0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyQ29uZmlybWF0aW9uICgpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5Db25maXJtIHlvdXIgZGV0YWlsczpcbiAgICAgICAgICAgICAgICA8ZGl2PiR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5jYXJ0KX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubmV4dC5iaW5kKHRoaXMpfT5Db21wbGV0ZSBvcmRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlRoYW5rcyBmb3Igb3JkZXJpbmchXG4gICAgICAgICAgICAgICAgPHA+ZXZlbnR1YWxseSB0aGlzIHBhZ2Ugd2lsbCByZWRpcmVjdCB0byBzdGFydCBhIG5ldyBvcmRlcjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIE1BSU4gUkVOREVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERldGVybWluaW5nIHN0YXRlOiAke3RoaXMuc3RhdGUuY2hlY2tvdXRTdGVwfWApO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGVwKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgbG9naW4nKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvZ2luKCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU2hpcHBpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJCaWxsaW5nKCk7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29uZmlybWF0aW9uKCk7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcGxldGUoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FcnJvciBpbiBjaGVja291dCByZW5kZXIgKHN3aXRjaCBmYWlsdXJlKTwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cblxuXG4kQXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sICRBcHApO1xuIl19