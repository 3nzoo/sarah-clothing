
import React from 'react';
import './App.css';
import HomePage from './pages/hompage/HomePage';
import {Switch, Route ,Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/auth/SignInAndSignUp';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats here</h1>
    </div>
  )
}

const SneakersPage = () => {
  return (
    <div>
      <h1>sneakers here</h1>
    </div>
  )
}

const WomenPage = () => {
  return (
    <div>
      <h1>women here</h1>
    </div>
  )
}

const MensPage = () => {
  return (
    <div>
      <h1>mens here</h1>
    </div>
  )
}

const JacketsPage = () => {
  return (
    <div>
      <h1>jackets here</h1>
    </div>
  )
}

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 
  render(){    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop/hats" component={HatsPage}/>
          <Route path="/shop/mens" component={MensPage}/>
          <Route path="/shop/womens" component={WomenPage}/>
          <Route path="/shop/sneakers" component={SneakersPage}/>
          <Route path="/shop/jackets" component={JacketsPage}/>
          <Route path="/shop/" component={ShopPage}/>
          <Route exact path="/signin" render={ () => this.props.currentUser ? (
            <Redirect to='/' />)
              : (
                  <SignInAndSignUp />
              ) }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
