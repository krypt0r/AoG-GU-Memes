import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const {
    dialogflow
} = require('actions-on-google');
const app = dialogflow({
    debug: true
});


app.intent("jokes", conv => {
    // const appliances: string[] = conv.parameters[''];
    // const numberOfAppliances: number[] = conv.parameters[''];
    
    return conv.close(`new BasicCard({
        image: new image({
          url: 'https://i.imgur.com/Ynn2QZa.png',
          alt: 'GU Memes',
        }),
        display: 'CROPPED',
      })`);
        
})

exports.googleAction = functions.https.onRequest(app);