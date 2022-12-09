import { Amplify, Auth } from 'aws-amplify';

//please do not alter or edit any item within this file 

//first userpool => active-tv-web
// Amplify.configure({

//     Auth: {
//         // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//         identityPoolId: "us-east-2:8d0c89ea-1ab0-43b5-aaa8-0882c055a031",//"us-east-2:8d0c89ea-1ab0-43b5-aaa8-0882c055a031", //'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
//         //  indentityPoolId:'us-east-2:066ceeec-734d-4b62-bfa5-80b9019a96c',
//         // REQUIRED - Amazon Cognito Region
//         region: 'us-east-2',

//         // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
//         // Required only if it's different from Amazon Cognito Region
//         identityPoolRegion: 'us-east-2',

//         // OPTIONAL - Amazon Cognito User Pool ID
//         userPoolId: 'us-east-2_jGv4x7t1b',                //'XX-XXXX-X_abcd1234',

//         // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolWebClientId: '5srg77q19ue9ails59lnkkert7', //'active38fde85b_app_clientWeb', //'4g2oc7praeobt637599bqdm6hh' 

//         // OPTIONAL - Hosted UI configuration
//         oauth: {
//             domain: 'activetvwebapp16baf347-16baf347-dev.auth.us-east-2.amazoncognito.com', //'your_cognito_domain',
//             scope: [
//                 // 'phone',
//                 'email',
//                 'profile',
//                 'openid'
//             ],
//             redirectSignIn: 'http://localhost:3000/', //'https://www.activetvonline.co.za/',   //        'http://localhost:3000/',
//             redirectSignOut: 'http://localhost:3000/signup', //'https://www.activetvonline.co.za/signout/',//'http://localhost:3000/signup', //'https://www.activetvonline.co.za/signout/',    //'http://localhost:3000/signup',
//             responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
//             // responseType:'code'
//         }
//     }
// });

// You can get the current config object
//  const currentConfig = Auth.configure();



// second userpool=> test-Conformation-userpool

Amplify.configure({

    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: "us-east-2:939de7f6-03e1-4a73-bca6-c3c9b6cded14", //changed

        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_7YgBfdqvz',//changed

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '2v0n86ar28d4cfi6h9kb8ac9h4', //changed

        // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'activetv38fde85b-38fde85b-dev.auth.us-east-2.amazoncognito.com', //changed
            // scope: [
            //     'phone',
            //     'email',
            //     'profile',
            //     'openid'
            // ],
            redirectSignIn: 'http://localhost:3000/', //'https://www.activetvonline.co.za/',   //        'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/signup', //'https://www.activetvonline.co.za/signout/',//'http://localhost:3000/signup', //'https://www.activetvonline.co.za/signout/',    //'http://localhost:3000/signup',
            responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
            // responseType:'code'
        }
    }
});


export const CurrentConfig = Auth.configure()
//Amplify.Logger.LOG_LEVEL = "DEBUG"; //for debugging purposes

