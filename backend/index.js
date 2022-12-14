/* Depedancies */
const express = require('express')
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


/* config express */
const app = express()


/* Config firebase */
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();


/* Endpoints */
app.get('/posts', (request, response) => {
    let posts = []
    db.collection('posts').get().then(snapshot => {
        snapshot.forEach((doc) => {
            posts.push(doc.data())
        });
        response.send(posts)
    })
})


/* Listen */
app.listen(process.env.PORT || 8080)