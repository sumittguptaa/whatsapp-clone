import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCa3ZCVflRuNUL1W3wDhvOz0hq5Fw6nEos",
    authDomain: "whatsapp-e617d.firebaseapp.com",
    databaseURL: "https://whatsapp-e617d.firebaseio.com",
    projectId: "whatsapp-e617d",
    storageBucket: "whatsapp-e617d.appspot.com",
    messagingSenderId: "928033893992",
    appId: "1:928033893992:web:14a633c5c72b822b8fd5dd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
 
  const provider = new firebase.auth.GoogleAuthProvider();
//   const provider = new firebase.auth.PhoneAuthProvider();
  export {provider};
  export default firebaseApp;