class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkoutStep: 0, //0, 1, 2, 3, 4 for start, login, shipping, billing, complete
            user: {}
        };
    }

    /******************** STATE CHANGES ********************/
    next(type) {
        //needs to store all submitted data into the state object depending on current state value
        switch (type) {
            case 'new':
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
    }
    processNewUser() {}

    /******************** CHECKOUT STAGES - PAGES ********************/
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
                'Checkout'
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
                    React.createElement('input', { id: 'newsubmit', type: 'submit', value: 'Create New Acccount', onClick: this.next.bind(this, 'new') })
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
            'Shipping'
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

    /************************* MAIN RENDER *************************/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tvdXRTdGVwIiwidXNlciIsIm5leHQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicHJldmlvdXMiLCJwcm9jZXNzTG9naW4iLCJwcm9jZXNzTmV3VXNlciIsInJlbmRlckhvbWUiLCJiaW5kIiwicmVuZGVyTG9naW4iLCJyZW5kZXJTaGlwcGluZyIsInJlbmRlckJpbGxpbmciLCJyZW5kZXJDb21wbGV0ZSIsInJlbmRlciIsIiRBcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsMEJBQWMsQ0FETCxFQUNRO0FBQ2pCQyxrQkFBTTtBQUZHLFNBQWI7QUFJSDs7QUFHTDtBQUNJQyxTQUFLQyxJQUFMLEVBQVc7QUFDUDtBQUNBLGdCQUFRQSxJQUFSO0FBQ0ksaUJBQUssS0FBTDtBQUNBO0FBQ0lDLHdCQUFRQyxHQUFSLENBQVksa0NBQVo7QUFIUjtBQUtBO0FBQ0EsYUFBS0MsUUFBTCxDQUFjO0FBQ1ZOLDBCQUFjLEtBQUtELEtBQUwsQ0FBV0MsWUFBWCxHQUEwQjtBQUQ5QixTQUFkO0FBR0g7QUFDRE8sZUFBVztBQUNQLGFBQUtELFFBQUwsQ0FBYztBQUNWTiwwQkFBYyxLQUFLRCxLQUFMLENBQVdDLFlBQVgsR0FBMEI7QUFEOUIsU0FBZDtBQUdIO0FBQ0RRLG1CQUFlO0FBQ1g7QUFDSDtBQUNEQyxxQkFBaUIsQ0FFaEI7O0FBSUw7QUFDSUMsaUJBQWE7QUFDVCxlQUNJO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFRLElBQUcsZUFBWCxFQUEyQixTQUFTLEtBQUtSLElBQUwsQ0FBVVMsSUFBVixDQUFlLElBQWYsQ0FBcEM7QUFBQTtBQUFBO0FBRkosU0FESjtBQU1IO0FBQ0RDLGtCQUFjO0FBQ1YsZUFDSTtBQUFBO0FBQUE7QUFBQTtBQUNJLDJDQURKO0FBRUksMkNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUksbURBQU8sSUFBRyxTQUFWLEVBQW9CLE1BQUssTUFBekIsRUFBZ0MsY0FBaEMsRUFBeUMsTUFBSyxJQUE5QyxHQUZKO0FBR0ksbURBSEo7QUFBQTtBQUtJLG1EQUFPLElBQUcsVUFBVixFQUFxQixNQUFLLE1BQTFCLEVBQWlDLGNBQWpDLEVBQTBDLE1BQUssSUFBL0MsR0FMSjtBQU1JLG1EQU5KO0FBQUE7QUFRSSxtREFBTyxJQUFHLGFBQVYsRUFBd0IsTUFBSyxNQUE3QixFQUFvQyxjQUFwQyxFQUE2QyxNQUFLLElBQWxELEdBUko7QUFTSSxtREFUSjtBQVVJLG1EQUFPLElBQUcsV0FBVixFQUFzQixNQUFLLFFBQTNCLEVBQW9DLE9BQU0scUJBQTFDLEVBQWdFLFNBQVMsS0FBS1YsSUFBTCxDQUFVUyxJQUFWLENBQWUsSUFBZixFQUFvQixLQUFwQixDQUF6RTtBQVZKO0FBREEsYUFISjtBQWlCSSwyQ0FqQko7QUFrQkk7QUFBQTtBQUFBO0FBQUE7QUFDSSwrQ0FESjtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUksbURBQU8sSUFBRyxTQUFWLEVBQW9CLE1BQUssTUFBekIsRUFBZ0MsY0FBaEMsRUFBeUMsTUFBSyxJQUE5QyxHQUZKO0FBR0ksbURBSEo7QUFBQTtBQUtJLG1EQUFPLElBQUcsVUFBVixFQUFxQixNQUFLLE1BQTFCLEVBQWlDLGNBQWpDLEVBQTBDLE1BQUssSUFBL0MsR0FMSjtBQU1JLG1EQU5KO0FBT0ksbURBQU8sSUFBRyxPQUFWLEVBQWtCLE1BQUssUUFBdkIsRUFBZ0MsT0FBTSxRQUF0QztBQVBKO0FBRkE7QUFsQkosU0FESjtBQWlDSDtBQUNERSxxQkFBaUI7QUFDYixlQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUdIO0FBQ0RDLG9CQUFnQjtBQUNaLGVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKO0FBR0g7QUFDREMscUJBQWlCO0FBQ2IsZUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFHSDs7QUFFTDs7QUFFSUMsYUFBUztBQUNMWixnQkFBUUMsR0FBUixDQUFhLHNCQUFxQixLQUFLTixLQUFMLENBQVdDLFlBQWEsRUFBMUQ7QUFDQSxnQkFBUSxLQUFLRCxLQUFMLENBQVdDLFlBQW5CO0FBQ0ksaUJBQUssQ0FBTDtBQUNJLHVCQUFPLEtBQUtVLFVBQUwsRUFBUDtBQUNKLGlCQUFLLENBQUw7QUFDSU4sd0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLHVCQUFPLEtBQUtPLFdBQUwsRUFBUDtBQUNKLGlCQUFLLENBQUw7QUFDSSx1QkFBTyxLQUFLQyxjQUFMLEVBQVA7QUFDSixpQkFBSyxDQUFMO0FBQ0ksdUJBQU8sS0FBS0MsYUFBTCxFQUFQO0FBQ0osaUJBQUssQ0FBTDtBQUNJLHVCQUFPLEtBQUtDLGNBQUwsRUFBUDtBQUNKO0FBQ0ksdUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQWJSO0FBa0JIO0FBdkg2Qjs7QUE2SGxDRSxPQUFPQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQVA7QUFDQUMsU0FBU0osTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxJQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoZWNrb3V0U3RlcDogMCwgLy8wLCAxLCAyLCAzLCA0IGZvciBzdGFydCwgbG9naW4sIHNoaXBwaW5nLCBiaWxsaW5nLCBjb21wbGV0ZVxuICAgICAgICAgICAgdXNlcjoge31cbiAgICAgICAgfVxuICAgIH1cblxuXG4vKioqKioqKioqKioqKioqKioqKiogU1RBVEUgQ0hBTkdFUyAqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZXh0KHR5cGUpIHtcbiAgICAgICAgLy9uZWVkcyB0byBzdG9yZSBhbGwgc3VibWl0dGVkIGRhdGEgaW50byB0aGUgc3RhdGUgb2JqZWN0IGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlIHZhbHVlXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbmV3JzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiB1bmFibGUgdG8gc3RvcmUgZm9ybSBkYXRhJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGVuIHByb2dyZXNzIHRvIG5leHQgc3RlcFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoZWNrb3V0U3RlcDogdGhpcy5zdGF0ZS5jaGVja291dFN0ZXAgKyAxXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHByZXZpb3VzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoZWNrb3V0U3RlcDogdGhpcy5zdGF0ZS5jaGVja291dFN0ZXAgLSAxXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHByb2Nlc3NMb2dpbigpIHtcbiAgICAgICAgLy90YmRcbiAgICB9XG4gICAgcHJvY2Vzc05ld1VzZXIoKSB7XG5cbiAgICB9XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogQ0hFQ0tPVVQgU1RBR0VTIC0gUEFHRVMgKioqKioqKioqKioqKioqKioqKiovXG4gICAgcmVuZGVySG9tZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+V2VsY29tZSB0byB0aGUgYmVzdCBjaGVja291dCBhcHAgaW4gZXhpc3RhbmNlIVxuICAgICAgICAgICAgICAgIDxkaXY+QXJlIHlvdSByZWFkeSB0byBjaGVja291dD88L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnRjaGVja291dFwiIG9uQ2xpY2s9e3RoaXMubmV4dC5iaW5kKHRoaXMpfT5DaGVja291dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyTG9naW4oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PldlbGNvbWUgdG8gdGhlIGJlc3QgY2hlY2tvdXQgYXBwIGluIGV4aXN0YW5jZSFcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2PkFyZSB5b3UgYSBuZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgYmVsb3c6XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIE5hbWUgKCMgb2YgY2hhciBtYXgpOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld3VzZXInIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzE2Jz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgKCMgb2YgY2hhciBtYXgpOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld2VtYWlsJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCBzaXplPScyMCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIChyZXF1aXJlbWVudHMgVEJEKTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSduZXdwYXNzd29yZCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgc2l6ZT0nMjAnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J25ld3N1Ym1pdCcgdHlwZT0nc3VibWl0JyB2YWx1ZT0nQ3JlYXRlIE5ldyBBY2Njb3VudCcgb25DbGljaz17dGhpcy5uZXh0LmJpbmQodGhpcywnbmV3Jyl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXY+QXJlIHlvdSBhIHJldHVybmluZyB1c2VyPyBMb2dpbiBiZWxvdyAoTk9UIEZVTkNUSU9OQUwpXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICBJbnB1dCB1c2VybmFtZSBvciBlbWFpbDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibG9naW5JRFwiIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgSW5wdXQgcGFzc3dvcmQ6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ncGFzc3dvcmQnIHR5cGU9J3RleHQnIHJlcXVpcmVkIHNpemU9JzIwJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdsb2dpbicgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTG9nIEluJz48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlclNoaXBwaW5nKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5TaGlwcGluZzwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlckJpbGxpbmcoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PkJpbGxpbmc8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXJDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+VGhhbmtzIGZvciBvcmRlcmluZyE8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiogTUFJTiBSRU5ERVIgKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERldGVybWluaW5nIHN0YXRlOiAke3RoaXMuc3RhdGUuY2hlY2tvdXRTdGVwfWApO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGVwKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgbG9naW4nKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvZ2luKCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU2hpcHBpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJCaWxsaW5nKCk7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcGxldGUoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FcnJvciBpbiBjaGVja291dCByZW5kZXIgKHN3aXRjaCBmYWlsdXJlKTwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cblxuXG4kQXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sICRBcHApO1xuIl19