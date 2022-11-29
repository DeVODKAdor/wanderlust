import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { addDoc, collection, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw1LfGp7e6aauM6CMzXIX-Te-TTbSBtNs",
    authDomain: "wanderlustvr-45815.firebaseapp.com",
    projectId: "wanderlustvr-45815",
    storageBucket: "wanderlustvr-45815.appspot.com",
    messagingSenderId: "293491598327",
    appId: "1:293491598327:web:263083238ae80c5d1a04f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

class Users {
    constructor(nome, sobrenome, email, contato, estado, arquivo, local) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.contato = contato;
        this.estado = estado;
        this.arquivo = arquivo;
        this.local = local;
    }
    toString() {
        return this.nome + ', ' + this.sobrenome + ', ' + this.email + ', ' + this.contato + ', ' + this.estado + ', ' + this.arquivo + ', ' + this.local;
    }
}


// Firestore data converter
const usersConverter = {
    toFirestore: (users) => {
        return {
            nome: users.name,
            sobrenome: users.state,
            email: users.email,
            contato: users.country,
            estado: users.name,
            arquivo: users.state,
            local: users.country
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Users(data.nome, data.sobrenome, data.email, data.contato, data.estado, data.arquivo, data.local);
    }
};

const usersRef = collection(db, "users")

const Enviar = async () => {
    await addDoc(usersRef, usersConverter)
}