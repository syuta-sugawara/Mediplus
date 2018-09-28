import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCScnn_m-F1LSzV0cebqKEhMXhqCk56B7k',
  authDomain: 'mediplus-6783a.firebaseapp.com',
  databaseURL: 'https://mediplus-6783a.firebaseio.com/',
  projectId: 'mediplus-6783a',
  storageBucket: 'mediplus-6783a.appspot.com',
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
