import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import CheckableTag from "antd/lib/tag/CheckableTag";
// import {TermModel} from "../models/Term";
// import {ImportOrganisation} from "../views/admin/organisation/OrganisationsImport";
// import {Employment} from "../models/Employment";
// import {ProfileFormField} from "../models/ProfileFormField";
// import {ImportUser} from "../views/admin/user/UsersImport";
// import {MetaDataOption} from "../models/MetaDataOption";
// import {Industry} from "../models/Industry";
// import {UserAcceptedTerm} from "../models/userAcceptedTerm";
// import {EmailReciver, EmailTemplate} from "../models/EmailTemplate";
// import {EducationDataModel} from "../models/EducationDataModel";
// import emailBuilder from "../helpers/emailbuilder.helper";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

class Firebase {
  public auth: app.auth.Auth;
  public firestore: app.firestore.Firestore;
  public storage: app.storage.Storage;
  public backend: app.functions.Functions;

  constructor() {
    // app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.firestore = app.firestore();
    this.backend = app.functions();
    this.storage = app.storage();
  }

  public async login(email: string, password: string) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  public async register(inputData: any) {
    console.log(inputData);
  }

}

const FirebaseWrapper = new Firebase();
export default FirebaseWrapper;
