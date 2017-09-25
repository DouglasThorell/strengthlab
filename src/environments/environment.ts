// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


// Initialize Firebase
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAXFkTk3lrmUucjCVBKDw2lbkjbvwTWcPo',
    authDomain: 'strengthlab-31507.firebaseapp.com',
    databaseURL: 'https://strengthlab-31507.firebaseio.com',
    projectId: 'strengthlab-31507',
    storageBucket: "strengthlab-31507.appspot.com",
    messagingSenderId: "766351249287"
  }
};
