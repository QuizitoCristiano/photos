import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"; // <----
import firebaseconfig from "./firebaseconfig";

const firebaseApp = firebase.initializeApp(firebaseconfig)
const db = firebaseApp.firestore();

export const storage = firebase.storage().ref();

export default {
    createUser: async (u) => {

        return await db.collection("users").doc(u.id).set(
            {
                name: u.name,
                email: u.email,
                password: u.password,
            },
            { merge: true }
        );
    },
    listUsers: async () => {
        let list = [];
        let results = await db.collection("users").get();
        results.forEach((user) => list.push(user.data()));
        return list;
    }
}

