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
    processBilling() {}

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
                React.createElement('input', { id: 'address2', type: 'text', required: true, size: '20' }),
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
            'Billing'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tvdXRTdGVwIiwiY2FydCIsImxvZ2luIiwic2hpcHBpbmciLCJiaWxsaW5nIiwibmV4dCIsInByb2Nlc3NOZXdVc2VyIiwicHJvY2Vzc1NoaXBwaW5nIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicHJldmlvdXMiLCJwcm9jZXNzTG9naW4iLCJyZWZlcmVuY2UiLCJ1c2VybmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwiYWRkcmVzc0xpbmVPbmUiLCJjaXR5IiwiY291bnRyeSIsInppcCIsInBob25lIiwicHJvY2Vzc0JpbGxpbmciLCJyZW5kZXJIb21lIiwiYmluZCIsInJlbmRlckxvZ2luIiwicmVuZGVyU2hpcHBpbmciLCJyZW5kZXJCaWxsaW5nIiwicmVuZGVyQ29tcGxldGUiLCJyZW5kZXIiLCIkQXBwIiwiUmVhY3RET00iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsMEJBQWMsQ0FETCxFQUNRO0FBQ2pCQyxrQkFBTTtBQUNGQyx1QkFBTyxFQURMO0FBRUZDLDBCQUFVLEVBRlI7QUFHRkMseUJBQVM7QUFIUDtBQUZHLFNBQWI7QUFRSDs7QUFHTDtBQUNJQyxXQUFPO0FBQ0g7QUFDQSxnQkFBUSxLQUFLTixLQUFMLENBQVdDLFlBQW5CO0FBQ0ksaUJBQUssQ0FBTDtBQUNJO0FBQ0E7QUFDQSxxQkFBS00sY0FBTDtBQUNBO0FBQ0osaUJBQUssQ0FBTDtBQUNJLHFCQUFLQyxlQUFMO0FBQ0E7QUFDSjtBQUNJQyx3QkFBUUMsR0FB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eUJDLElBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tvdXRTdGVwOiAwLCAvLzAsIDEsIDIsIDMsIDQgZm9yIHN0YXJ0LCBsb2dpbiwgc2hpcHBpbmcsIGJpbGxpbmcsIGNvbXBsZXRlXG4gICAgICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgICAgICAgbG9naW46IHt9LFxuICAgICAgICAgICAgICAgIHNoaXBwaW5nOiB7fSxcbiAgICAgICAgICAgICAgICBiaWxsaW5nOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqIFNUQVRFIENIQU5HRVMgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZXh0KCkge1xuICAgICAgICAvL25lZWRzIHRvIHN0b3JlIGFsbCBzdWJtaXR0ZWQgZGF0YSBpbnRvIHRoZSBzdGF0ZSBvYmplY3QgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUgdmFsdWVcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RlcCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vY2hlY2sgd2hpY2ggYnV0dG9uIHdhcyBwcmVzc2VkP1xuICAgICAgICAgICAgICAgIC8vVE9ETzogbmVlZCB0byBhbGxvdyBmb3IgdXNlciB0byBsb2dpblxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc05ld1VzZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NTaGlwcGluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6IHVuYWJsZSB0byBzdG9yZSBmb3JtIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoZW4gcHJvZ3Jlc3MgdG8gbmV4dCBzdGVwXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hlY2tvdXRTdGVwOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RlcCArIDFcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHJldmlvdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hlY2tvdXRTdGVwOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RlcCAtIDFcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHJvY2Vzc0xvZ2luKCkge1xuICAgICAgICAvL3RiZFxuICAgICAgICAvL3dpbGwgbmVlZCB0byBxdWVyeSBzZXJ2ZXJcbiAgICB9XG4gICAgcHJvY2Vzc05ld1VzZXIoKSB7IC8vc2F2ZVxuICAgICAgICAvL3RhcmdldHM6IG5ld3VzZXIsIG5ld2VtYWlsLCBuZXdwYXNzd29yZFxuICAgICAgICBsZXQgcmVmZXJlbmNlID0gdGhpcy5zdGF0ZS5jYXJ0LmxvZ2luO1xuICAgICAgICByZWZlcmVuY2UudXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3dXNlcicpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3ZW1haWwnKS52YWx1ZTtcbiAgICAgICAgcmVmZXJlbmNlLnBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3Bhc3N3b3JkJykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlZmVyZW5jZSk7XG4gICAgfVxuICAgIHByb2Nlc3NTaGlwcGluZygpIHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZSA9IHRoaXMuc3RhdGUuY2FydC5zaGlwcGluZztcbiAgICAgICAgcmVmZXJlbmNlLm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcG5hbWUnKS52YWx1ZTtcbiAgICAgICAgcmVmZXJlbmNlLmFkZHJlc3NMaW5lT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MxJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5hZGRyZXNzTGluZU9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzMScpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5zdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZScpLnZhbHVlO1xuICAgICAgICByZWZlcmVuY2UuY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5JykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS56aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemlwJykudmFsdWU7XG4gICAgICAgIHJlZmVyZW5jZS5waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2UpO1xuICAgIH1cbiAgICBwcm9jZXNzQmlsbGluZygpIHtcblxuICAgIH1cblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqIENIRUNLT1VUIFNUQUdFUyAtIFBBR0VTICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcmVuZGVySG9tZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+V2VsY29tZSB0byB0aGUgYmVzdCBjaGVja291dCBhcHAgaW4gZXhpc3RhbmNlIVxuICAgICAgICAgICAgICAgIDxkaXY+QXJlIHlvdSByZWFkeSB0byBjaGVja291dD88L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnRjaGVja291dFwiIG9uQ2xpY2s9e3RoaXMubmV4dC5iaW5kKHRoaXMpfT5ZRVMhISBMRVQnUyBDSEVDS09VVDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyTG9naW4oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PldlbGNvbWUgdG8gdGhlIGJlc3QgY2hlY2tvdXQgYXBwIGluIGV4aXN0YW5jZSFcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2PkFyZSB5b3UgYSBuZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgYmVsb3c6XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIE5hbWUgKCMgb2YgY2hhciBtYXgpOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld3VzZXInIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzE2Jz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgKCMgb2YgY2hhciBtYXgpOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld2VtYWlsJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIChyZXF1aXJlbWVudHMgVEJEKTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSduZXdwYXNzd29yZCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld3N1Ym1pdCcgdHlwZT0nc3VibWl0JyB2YWx1ZT0nQ3JlYXRlIE5ldyBBY2Njb3VudCcgb25DbGljaz17dGhpcy5uZXh0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXY+QXJlIHlvdSBhIHJldHVybmluZyB1c2VyPyBMb2dpbiBiZWxvdyAoTk9UIEZVTkNUSU9OQUwpXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICBJbnB1dCB1c2VybmFtZSBvciBlbWFpbDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibG9naW5JRFwiIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgSW5wdXQgcGFzc3dvcmQ6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ncGFzc3dvcmQnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdsb2dpbicgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTG9nIEluJz48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlclNoaXBwaW5nKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5QbGVhc2UgZW50ZXIgeW91ciBzaGlwcGluZyBhZGRyZXNzIGJlbG93OlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICBOYW1lIG9mIHJlY2VpcGllbnQ6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nc2hpcG5hbWUnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzE2Jz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgQWRkcmVzcyBMaW5lIDE6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nYWRkcmVzczEnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgQWRkcmVzcyBMaW5lIDI6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nYWRkcmVzczInIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgQ2l0eTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdjaXR5JyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3N0YXRlJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIENvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdjb3VudHJ5JyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIFppcCBDb2RlOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3ppcCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICBQaG9uZTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdwaG9uZScgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld3N1Ym1pdCcgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3RvcmUgQWRkcmVzcycgb25DbGljaz17dGhpcy5uZXh0LmJpbmQodGhpcyl9PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXJCaWxsaW5nKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5CaWxsaW5nPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlRoYW5rcyBmb3Igb3JkZXJpbmchPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTUFJTiBSRU5ERVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgRGV0ZXJtaW5pbmcgc3RhdGU6ICR7dGhpcy5zdGF0ZS5jaGVja291dFN0ZXB9YCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5jaGVja291dFN0ZXApIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlcmluZyBsb2dpbicpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTG9naW4oKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJTaGlwcGluZygpO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckJpbGxpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wbGV0ZSgpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkVycm9yIGluIGNoZWNrb3V0IHJlbmRlciAoc3dpdGNoIGZhaWx1cmUpPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuXG5cbiRBcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgJEFwcCk7XG4iXX0=