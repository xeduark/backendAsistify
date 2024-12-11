const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

db.collection('test').add({ test: 'Test Connection' })
  .then(() => {
    console.log('Conexión a Firestore establecida correctamente');
  })
  .catch((error) => {
    console.error('Error al conectarse a Firestore:', error);
  });
  
module.exports = db;

