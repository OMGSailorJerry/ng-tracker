// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyABedPbXu3nyVIpujSChhRmfoDW_KY-Vko',
    authDomain: 'ng-fitness-tracker-9e6bd.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-9e6bd.firebaseio.com',
    projectId: 'ng-fitness-tracker-9e6bd',
    storageBucket: 'ng-fitness-tracker-9e6bd.appspot.com',
    messagingSenderId: '650837163077'
  }
};
