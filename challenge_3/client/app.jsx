class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkoutStep: 0, //0, 1, 2, 3, 4 for start, login, shipping, billing, complete
            user: {}
        }
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
        })
    }
    previous() {
        this.setState({
            checkoutStep: this.state.checkoutStep - 1
        })
    }
    processLogin() {
        //tbd
    }
    processNewUser() {

    }



/******************** CHECKOUT STAGES - PAGES ********************/
    renderHome() {
        return (
            <div>Welcome to the best checkout app in existance!
                <div>Are you ready to checkout?</div>
                <button id="startcheckout" onClick={this.next.bind(this)}>Checkout</button>
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
                    <input id='newsubmit' type='submit' value='Create New Acccount' onClick={this.next.bind(this,'new')}></input>
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
            <div>Shipping</div>
        )
    }
    renderBilling() {
        return (
            <div>Billing</div>
        )
    }
    renderComplete() {
        return (
            <div>Thanks for ordering!</div>
        )
    }

/************************* MAIN RENDER *************************/

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
