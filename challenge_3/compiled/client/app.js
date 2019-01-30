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

    /************************* CHECKOUT STAGES - PAGES *************************/
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
            )
        );
    }
    renderComplete() {
        return React.createElement(
            'div',
            null,
            'Thanks for ordering!'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tvdXRTdGVwIiwiY2FydCIsImxvZ2luIiwic2hpcHBpbmciLCJiaWxsaW5nIiwibmV4dCIsInByb2Nlc3NOZXdVc2VyIiwicHJvY2Vzc1NoaXBwaW5nIiwicHJvY2Vzc0JpbGxpbmciLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJwcmV2aW91cyIsInByb2Nlc3NMb2dpbiIsInJlZmVyZW5jZSIsInVzZXJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJhZGRyZXNzTGluZU9uZSIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwicGhvbmUiLCJjYXJkbnVtYmVyIiwiZXhwTW9udGgiLCJleHBZZWFyIiwiQ1ZWIiwicmVuZGVySG9tZSIsImJpbmQiLCJyZW5kZXJMb2dpbiIsInJlbmRlclNoaXBwaW5nIiwicmVuZGVyQmlsbGluZyIsInJlbmRlckNvbmZpcm1hdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW5kZXJDb21wbGV0ZSIsInJlbmRlciIsIiRBcHAiLCJSZWFjdERPTSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQywwQkFBYyxDQURMLEVBQ1E7QUFDakJDLGtCQUFNO0FBQ0ZDLHVCQUFPLEVBREw7QUFFRkMsMEJBQVUsRUFGUjtBQUdGQyx5QkFBUztBQUhQO0FBRkcsU0FBYjtBQVFIOztBQUdMO0FBQ0lDLFdBQU87QUFDSDtBQUNBLGdCQUFRLEtBQUtOLEtBQUwsQ0FBV0MsWUFBbkI7QUFDSSxpQkFBSyxDQUFMO0FBQ0k7QUFDQTtB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QkFBUSxLQUFLRCxLQUFMLENBQVdDLFlBQW5CO0FBQ0ksaUJBQUssQ0FBTDtBQUNJLHVCQUFPLEtBQUsrQixVQUFMLEVBQVA7QUFDSixpQkFBSyxDQUFMO0FBQ0l0Qix3QkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsdUJBQU8sS0FBS3VCLFdBQUwsRUFBUDtBQUNKLGlCQUFLLENBQUw7QUFDSSx1QkFBTyxLQUFLQyxjQUFMLEVBQVA7QUFDSixpQkFBSyxDQUFMO0FBQ0ksdUJBQU8sS0FBS0MsYUFBTCxFQUFQO0FBQ0osaUJBQUssQ0FBTDtBQUNJLHVCQUFPLEtBQUtDLGtCQUFMLEVBQVA7QUFDSixpQkFBSyxDQUFMO0FBQ0ksdUJBQU8sS0FBS0csY0FBTCxFQUFQO0FBQ0o7QUFDSSx1QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBZlI7QUFvQkg7QUExTjZCOztBQWdPbENFLE9BQU96QixTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQVA7QUFDQXlCLFNBQVNGLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsSUFBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja291dFN0ZXA6IDAsIC8vMCwgMSwgMiwgMywgNCBmb3Igc3RhcnQsIGxvZ2luLCBzaGlwcGluZywgYmlsbGluZywgY29tcGxldGVcbiAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICBsb2dpbjoge30sXG4gICAgICAgICAgICAgICAgc2hpcHBpbmc6IHt9LFxuICAgICAgICAgICAgICAgIGJpbGxpbmc6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiogU1RBVEUgQ0hBTkdFUyAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5leHQoKSB7XG4gICAgICAgIC8vbmVlZHMgdG8gc3RvcmUgYWxsIHN1Ym1pdHRlZCBkYXRhIGludG8gdGhlIHN0YXRlIG9iamVjdCBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZSB2YWx1ZVxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGVwKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy9jaGVjayB3aGljaCBidXR0b24gd2FzIHByZXNzZWQ/XG4gICAgICAgICAgICAgICAgLy9UT0RPOiBuZWVkIHRvIGFsbG93IGZvciB1c2VyIHRvIGxvZ2luXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTmV3VXNlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NoaXBwaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQmlsbGluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6IHVuYWJsZSB0byBzdG9yZSBmb3JtIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoZW4gcHJvZ3Jlc3MgdG8gbmV4dCBzdGVwXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hlY2tvdXRTdGVwOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RlcCArIDFcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHJldmlvdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hlY2tvdXRTdGVwOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RlcCAtIDFcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHJvY2Vzc0xvZ2luKCkge1xuICAgICAgICAvL3RiZFxuICAgICAgICAvL3dpbGwgbmVlZCB0byBxdWVyeSBzZXJ2ZXJcbiAgICB9XG4gICAgcHJvY2Vzc05ld1VzZXIoKSB7IC8vc2F2ZVxuICAgICAgICAvL3RhcmdldHM6IG5ld3VzZXIsIG5ld2VtYWlsLCBuZXdwYXNzd29yZFxuICAgICAgICBsZXQgcmVmZXJlbmNlID0gdGhpcy5zdGF0ZS5jYXJ0LmxvZ2luO1xuICAgICAgICByZWZlcmVuY2UudXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3dXNlcicpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3ZW1haWwnKS52YWx1ZTtcbiAgICAgICAgcmVmZXJlbmNlLnBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3Bhc3N3b3JkJykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlZmVyZW5jZSk7XG4gICAgfVxuICAgIHByb2Nlc3NTaGlwcGluZygpIHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZSA9IHRoaXMuc3RhdGUuY2FydC5zaGlwcGluZztcbiAgICAgICAgcmVmZXJlbmNlLm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcG5hbWUnKS52YWx1ZTtcbiAgICAgICAgcmVmZXJlbmNlLmFkZHJlc3NMaW5lT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MxJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5hZGRyZXNzTGluZU9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzMScpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5zdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZScpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5JykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS56aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemlwJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2UpO1xuICAgIH1cbiAgICBwcm9jZXNzQmlsbGluZygpIHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZSA9IHRoaXMuc3RhdGUuY2FydC5iaWxsaW5nO1xuICAgICAgICByZWZlcmVuY2UubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWxsbmFtZScpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuY2FyZG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkbnVtYmVyJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5leHBNb250aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBNb250aCcpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuZXhwWWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBZZWFyJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5DVlYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ1ZWJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS56aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemlwJykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlZmVyZW5jZSk7XG4gICAgfVxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiogQ0hFQ0tPVVQgU1RBR0VTIC0gUEFHRVMgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICByZW5kZXJIb21lKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5XZWxjb21lIHRvIHRoZSBiZXN0IGNoZWNrb3V0IGFwcCBpbiBleGlzdGFuY2UhXG4gICAgICAgICAgICAgICAgPGRpdj5BcmUgeW91IHJlYWR5IHRvIGNoZWNrb3V0PzwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGNoZWNrb3V0XCIgb25DbGljaz17dGhpcy5uZXh0LmJpbmQodGhpcyl9PllFUyEhIExFVCdTIENIRUNLT1VUPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXJMb2dpbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+V2VsY29tZSB0byB0aGUgYmVzdCBjaGVja291dCBhcHAgaW4gZXhpc3RhbmNlIVxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXY+QXJlIHlvdSBhIG5ldyB1c2VyPyBDcmVhdGUgYW4gYWNjb3VudCBiZWxvdzpcbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgTmFtZSAoIyBvZiBjaGFyIG1heCk6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nbmV3dXNlcicgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMTYnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbCAoIyBvZiBjaGFyIG1heCk6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nbmV3ZW1haWwnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQgKHJlcXVpcmVtZW50cyBUQkQpOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld3Bhc3N3b3JkJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nbmV3c3VibWl0JyB0eXBlPSdzdWJtaXQnIHZhbHVlPSdDcmVhdGUgTmV3IEFjY2NvdW50JyBvbkNsaWNrPXt0aGlzLm5leHQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdj5BcmUgeW91IGEgcmV0dXJuaW5nIHVzZXI/IExvZ2luIGJlbG93IChOT1QgRlVOQ1RJT05BTClcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIElucHV0IHVzZXJuYW1lIG9yIGVtYWlsOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsb2dpbklEXCIgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBJbnB1dCBwYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdwYXNzd29yZCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2xvZ2luJyB0eXBlPSdzdWJtaXQnIHZhbHVlPSdMb2cgSW4nPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyU2hpcHBpbmcoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlBsZWFzZSBlbnRlciB5b3VyIHNoaXBwaW5nIGFkZHJlc3MgYmVsb3c6XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIE5hbWUgb2YgcmVjZWlwaWVudDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdzaGlwbmFtZScgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMTYnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIExpbmUgMTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdhZGRyZXNzMScgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIExpbmUgMjpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdhZGRyZXNzMicgdHlwZT0ndGV4dCcgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBDaXR5OlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2NpdHknIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgU3RhdGU6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nc3RhdGUnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgQ291bnRyeVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2NvdW50cnknIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgWmlwIENvZGU6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nemlwJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIFBob25lOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3Bob25lJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nbmV3c3VibWl0JyB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdG9yZSBBZGRyZXNzJyBvbkNsaWNrPXt0aGlzLm5leHQuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXJCaWxsaW5nKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5QbGVhc2UgZW50ZXIgeW91ciBwYXltZW50IGluZm9ybWF0aW9uIGluIG91ciBleHRyZW1lbHkgc2VjdXJlIHN5c3RlbTpcbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgTmFtZSBvbiB0aGUgQ2FyZDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdiaWxsbmFtZScgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMTYnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBDYXJkIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdjYXJkbnVtYmVyJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIEVudGVyIEV4cGlyYXRpb24gKE1NL1lZKVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2V4cE1vbnRoJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2V4cFllYXInIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzInPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBFbnRlciBDVlZcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdDVlYnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzMnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBCaWxsaW5nIFppcFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3ppcCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld3N1Ym1pdCcgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3RvcmUgQmlsbGluZycgb25DbGljaz17dGhpcy5uZXh0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyQ29uZmlybWF0aW9uICgpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5Db25maXJtIHlvdXIgZGV0YWlsczpcbiAgICAgICAgICAgICAgICA8ZGl2PiR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5jYXJ0KX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlckNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5UaGFua3MgZm9yIG9yZGVyaW5nITwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIE1BSU4gUkVOREVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERldGVybWluaW5nIHN0YXRlOiAke3RoaXMuc3RhdGUuY2hlY2tvdXRTdGVwfWApO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGVwKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgbG9naW4nKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvZ2luKCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU2hpcHBpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJCaWxsaW5nKCk7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29uZmlybWF0aW9uKCk7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcGxldGUoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FcnJvciBpbiBjaGVja291dCByZW5kZXIgKHN3aXRjaCBmYWlsdXJlKTwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cblxuXG4kQXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sICRBcHApO1xuIl19