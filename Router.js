import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Signin from './containers/auth/Signin';
import Signup from './containers/auth/Signup';
import PostCreate from './containers/post/PostCreate';
import PostEdit from './containers/post/PostEdit';
import PostList from './containers/post/PostList';
import requireAuth from './containers/auth/requireAuth';
import requireNotAuth from './containers/auth/requireNotAuth';

const RouterComponent = () => (
  <Router
    sceneStyle={{ backgroundColor: '#edecec' }}
    navigationBarStyle={styles.navigationBarStyle}
    titleStyle={{ color: '#4d4d4d' }}
  >


  <Scene key="root" hideNavBar={true} >

    <Scene key="auth">
      <Scene key="signup" component={requireNotAuth(Signup)} title="Please Sign up" />
      <Scene key="signin" component={requireNotAuth(Signin)} title="Please Sign in" />
    </Scene>
    <Scene key="post">
      <Scene
        key="postList"
        component={requireAuth(PostList)}
        title="Posts"
        leftTitle="Sign out"
        onLeft={() => { firebase.auth().signOut(); Actions.auth(); }}
        onRight={() => Actions.postCreate()}
        rightTitle="Add"
      />
      <Scene key="postCreate" component={requireAuth(PostCreate)} title="Create Post" />
      <Scene key="postEdit" component={requireAuth(PostEdit)} title="Edit Post" />
    </Scene>
    </Scene>
  </Router>
);

const styles = {
  navigationBarStyle: {
    backgroundColor: '#fff',
    height: 40,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,

  },
};

export default RouterComponent;
