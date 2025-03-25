// Importa o Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging.js');

// Inicializa o Firebase
firebase.initializeApp({
apiKey: "AIzaSyCzNe37Xu-N2XTTKKwX636vWp7ZOQX6CSk",

  authDomain: "serinaflutter.firebaseapp.com",

  projectId: "serinaflutter",

  storageBucket: "serinaflutter.firebasestorage.app",

  messagingSenderId: "854174063637",

  appId: "1:854174063637:web:089425d8239d0e8d47421c",

  measurementId: "G-4YRYXJ5V2F"

});

// Obtenha a instância do Firebase Messaging
const messaging = firebase.messaging();

// Lida com notificações em segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('Mensagem recebida em segundo plano', payload);
});