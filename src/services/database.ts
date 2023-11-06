import { getFirestore } from 'firebase/firestore'

import firebaseApp from '../config/firebase'

const db = getFirestore(firebaseApp)

export default db
