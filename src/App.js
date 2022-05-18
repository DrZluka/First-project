import React, { Component, Suspense } from 'react';
import './App.css';
import Navbarone from './components/Navbarone/Navbarone';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import {initializeApp} from "./Redux/app-reducer"
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import store from './Redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  catchAllUnhendledErrors = (reason, promise) => {
    alert("Some error occured");
    //console.erroe(promiseRejectionEvent);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhedledrejection", this.catchAllUnhendledErrors);
  }

  componentWillUnmount(){
    window.removeEventListener("unhedledrejection", this.catchAllUnhendledErrors);
  }


  render(){
    if(!this.props.initialized){ 
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbarone />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/News' render={() => < News />} />
          <Route path='/Music' render={() => < Music />} />
          <Route path='/Setting' render={() => < Setting />} />
          <Route path='/Friends' render={() => < Friends />} />
          <Route path='/Users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

let FirstJSProjectApp = (props) => {
  return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default FirstJSProjectApp;