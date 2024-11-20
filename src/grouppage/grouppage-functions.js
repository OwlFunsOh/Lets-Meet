import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

// hi 