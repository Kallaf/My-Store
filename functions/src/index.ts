import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const getShippingPrices = functions.https.onRequest((request, response) => {
    const prices = [
        {
            "type": "Overnight",
            "price": 25.99
        },
        {
            "type": "2-Day",
            "price": 9.99
        },
        {
            "type": "Postal",
            "price": 2.99
        }
    ];
    response.send(prices);
});
