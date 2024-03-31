// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
export const environment = {
  production: false,
   firebaseConfig: {
    apiKey: "AIzaSyC4ctDVSt5wzXCtiMeARXoWh4BxEILmUpE",
    authDomain: "app-busca-preco.firebaseapp.com",
    projectId: "app-busca-preco",
    storageBucket: "app-busca-preco.appspot.com",
    messagingSenderId: "505438678680",
    appId: "1:505438678680:web:944aa10295877d47f76aed",
    measurementId: "G-MD2CXMKF4K"
  }
  
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
