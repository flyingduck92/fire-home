// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj-R9m64g4gSfXqsC_SB1Oh59gqeFJTYM",
  private_key_id: "7c0ab3d9f6d37d79e87fe2bd30ee60bb1f3d2f2d",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYh8VubMxOxymK\ncVBsFMVbcf/SghFPyh8Ju1sjptizwdlM/0l6SWCyT07vfBFSE6kxQXG2NjAl4H9m\n2BaCmkHMhzKv80IrkMRy96zmxDFUYyKZIPahkxKkigUojJV15KEjdo2FE8eL/UDo\ni6AgHOIEHvT+RNOdZtcijSGfBBsnVUSOMVRyJv/xzHxai3+kpGi2pwoH+d2BDDay\nHVbyFnzWwSIJ2S6xEISD3gSDv9so4l+ILMlyWDkG85W7FsaWoat6aHolEipMof6U\n3onCyP/FcUkKuABfD9Kzy5kfspiZG+IRlzvCwzwxAvB13ZM4NME289SkA3+VOzNf\nGQ8kTQ6JAgMBAAECggEAAiCF6GM5hSa3WwAiB458QxPHphXyFltX9qDc0EDhIulC\n4GqV9HqF+plAXUwXtL3j8op6WA4Q5VJTDH+FGYH7sBW5kfpnM5LTqSka3uahASTX\nGcIRK7x7On1XPZMaTs18UXGI3zB2VwArhyKn/hKmXzmBn/McmARpXx4PODe3MOOf\na1CGjWlCcRYjvbiTBWq/qgD6OTA9qiNXFqDeZlWwqFkCNeNJftzmWUQ72bO3NS4s\ngKbFznH20+oR9rBF7q+ie+AOWDXxsD/C5AowsYTvOLEXNTZPrF8C/oZvXXQpnWJu\nEey1yCHKrlnrtLn+mA0V6S6yy4HJQOB01EM83txJ5QKBgQDK5ddN12lhObuhM/oV\nZLJXAzteB3C+nNHDdGi1OxHlck64mTiCIK8xMJM0slAVpnDM5r+3qlKxS91K4N1b\nfcAPA2KYJr2C0EyNB98KVeCgFKPBEp7z1HZhJQ70Ivoa+Frach365rtistthc9+Z\nTqrxzlZgYe8BqTTYT07RrFfnJQKBgQDAc08dhXtARUpB69G/94HoaCWyWf69QmRD\nfZVYMsGNmebmNm9QP4DlSabjuWAEYJtCJaHh8Ax04WvOyILGKy/DBj4xqFk2AlXT\nFflXB8w5m0lqePHLkvlrhlpy7L8Z0xGHQVLp1dMB2+rOA+uJ/osO2WZlGQtKu3uw\nUW82dimOlQKBgEPXUAM2CIU6wZLoBzGKBttzODF7eWYylyysSqp2QsieTNYKXUud\nVBa1cDMJgB+NFGBeszHdIGMpw6dawojp5gLfFeNb6LfJoB7zx87z4fSEkjBnYoCS\nxLY8puBYpZnI+s/Zok6XQYaB2TqffN8M37mUTWtSs5Cxm/rLocYXwxiFAoGBAIUa\ne1qQqnj+M2i6gByEQ84I0iGzirM9Svk+z17r4+Ba1E7e0UgwU6bBtPKFkLoWUuuB\n+Z+5lfP0wMqI9aG31tXM6JERvXnUTaWr6gLeespQ84r3UUyaP3W1u7MGuPlUeSgR\n7xWZdNIxVwnbvjl32pePlvlPQ/cRCnAdMoz5Vq6tAoGADR1rY/AGnjf1wV0BqprU\nwmVgEx+Y2Yj2LZIpU5OqAtsvBxBISFcEvzkWeO1AfrazJExC6FqfUSBtILNzL8DU\nHQoPjhK4Uk7m9YW7ip8AUHSFlO2MVC/gfShaettlIfOdBM3Cw8AxjnRsBpNTU8vU\nM8m6T+J7uETLxFw+Bbsle0Q=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@fire-home-e4f09.iam.gserviceaccount.com",
  client_id: "101943726104686290546",
  authDomain: "fire-home-e4f09.firebaseapp.com",
  projectId: "fire-home-e4f09",
  storageBucket: "fire-home-e4f09.firebasestorage.app",
  messagingSenderId: "730679495363",
  appId: "1:730679495363:web:a7594ced7a08a590107076"
}

const currentApps = getApps()
let auth: Auth
let storage: FirebaseStorage

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  storage = getStorage(app)
} else {
  const app = currentApps[0]
  auth = getAuth(app)
  storage = getStorage(app)
}

export { auth, storage }