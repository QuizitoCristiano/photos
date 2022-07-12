import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage' // <----
import { firebaseConfig } from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export const storage = firebase.storage().ref()

export default {
    createUser: async (u) => {
        return await db.collection('users').doc(u.id).set(
            {
                name: u.name,
                email: u.email,
                password: u.password,
            },
            { merge: true }
        )
    },
    listUsers: async () => {
        let list = []
        let results = await db.collection('users').get()
        results.forEach((user) => list.push(user.data()))
        return list
    },
}
