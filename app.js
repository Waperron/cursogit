firebase.initializeApp({
  apiKey: 'AIzaSyDy0pm7NiO5u00smUuUDHtYSjw5Z_W3oFQ',
  authDomain: 'usuario1-271df.firebaseapp.com',
  projectId: 'usuario1-271df'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});





