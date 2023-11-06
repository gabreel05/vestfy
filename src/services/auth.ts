import { getAuth } from 'firebase/auth'

import firebaseApp from '../config/firebase'

const auth = getAuth(firebaseApp)

export default auth
