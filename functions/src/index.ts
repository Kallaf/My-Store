import * as functions from 'firebase-functions';

exports.getShippingPrices = functions.https.onCall(() => {
    return [
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
});