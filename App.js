/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import Router from './Router';
import store from './configureStore';
import { SIGN_IN_SUCCESS } from './modules/auth';
import { Spinner } from './components/common';
import firebaseConfig from './firebase.json';
import { I18nManager} from 'react-native';


I18nManager.allowRTL(false);
I18nManager.forceRTL(false);


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
  }

  componentWillMount() {
    if (!firebase.apps.length) {
       firebase.initializeApp(firebaseConfig);
     }

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loaded: true });

      if (user) {
        store.dispatch({ type: SIGN_IN_SUCCESS, payload: user });
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.loaded ? <Router /> : <Spinner />}
      </Provider>
    );
  }
}

export default App;
