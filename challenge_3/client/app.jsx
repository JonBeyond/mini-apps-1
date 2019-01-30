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
        }
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
        })
    }
    previous() {
        this.setState({
            checkoutStep: this.state.checkoutStep - 1
        })
    }
    processLogin() {
        //tbd
        //will need to query server
    }
    processNewUser() { //save
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
        return (
            <div>Welcome to the best checkout app in existance!
                <div>Are you ready to checkout?</div>
                <button id="startcheckout" onClick={this.next.bind(this)}>YES!! LET'S CHECKOUT</button>
            </div>
        )
    }
    renderLogin() {
        return (
            <div>Welcome to the best checkout app in existance!
                <br></br>
                <br></br>
                <div>Are you a new user? Create an account below:
                <form>
                    Name (# of char max):
                    <input id='newuser' type='text' required size='16'></input>
                    <br></br>
                    Email (# of char max):
                    <input id='newemail' type='text' required size='20'></input>
                    <br></br>
                    Password (requirements TBD):
                    <input id='newpassword' type='text' required size='20'></input>
                    <br></br>
                    <input id='newsubmit' type='submit' value='Create New Acccount' onClick={this.next.bind(this)}></input>
                </form>
                </div>
                <br></br>
                <div>Are you a returning user? Login below (NOT FUNCTIONAL)
                    <br></br>
                <form>
                    Input username or email:
                    <input id="loginID" type='text' required size='20'></input>
                    <br></br>
                    Input password:
                    <input id='password' type='text' required size='20'></input>
                    <br></br>
                    <input id='login' type='submit' value='Log In'></input>
                </form>
                </div>
            </div>
        )
    }
    renderShipping() {
        return (
            <div>Please enter your shipping address below:
                <form>
                    Name of receipient:
                    <input id='shipname' type='text' required size='16'></input>
                    <br></br>
                    Address Line 1:
                    <input id='address1' type='text' required size='20'></input>
                    <br></br>
                    Address Line 2:
                    <input id='address2' type='text' size='20'></input>
                    <br></br>
                    City:
                    <input id='city' type='text' required size='20'></input>
                    <br></br>
                    State:
                    <input id='state' type='text' required size='20'></input>
                    <br></br>
                    Country
                    <input id='country' type='text' required size='20'></input>
                    <br></br>
                    Zip Code:
                    <input id='zip' type='text' required size='20'></input>
                    <br></br>
                    Phone:
                    <input id='phone' type='text' required size='20'></input>
                    <br></br>
                    <input id='newsubmit' type='submit' value='Store Address' onClick={this.next.bind(this)}></input>
                </form>
            </div>
        )
    }
    renderBilling() {
        return (
            <div>Please enter your payment information in our extremely secure system:
                <form>
                    Name on the Card:
                    <input id='billname' type='text' required size='16'></input>
                    <br></br>
                    Card Number:
                    <input id='cardnumber' type='text' required size='20'></input>
                    <br></br>
                    Enter Expiration (MM/YY)
                    <input id='expMonth' type='text' required size='2'></input>
                    <input id='expYear' type='text' required size='2'></input>
                    <br></br>
                    Enter CVV
                    <input id='CVV' type='text' required size='3'></input>
                    <br></br>
                    Billing Zip
                    <input id='zip' type='text' required size='20'></input>
                    <br></br>
                    <input id='newsubmit' type='submit' value='Store Billing' onClick={this.next.bind(this)}></input>
                </form>
            </div>
        )
    }
    renderConfirmation (){
        return (
            <div>Confirm your details:
                <div>${JSON.stringify(this.state.cart)}</div>
            </div>
        )
    }
    renderComplete() {
        return (
            <div>Thanks for ordering!</div>
        )
    }

/****************************** MAIN RENDER ******************************/

    render() {
        console.log(`Determining state: ${this.state.checkoutStep}`);
        switch (this.state.checkoutStep) {
            case 0:
                return this.renderHome();
            case 1:
                console.log('rendering login')
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
                return (
                    <div>Error in checkout render (switch failure)</div>
                )
        }

    }
}




$App = document.getElementById('app');
ReactDOM.render(<App />, $App);
