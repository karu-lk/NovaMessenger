console.log('Starting nova-post-messages function...');

const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });

exports.handler = function (event, context, callback) {
    console.log(event);

    var params = {
        Item: {
            "message_id": event.message_id,
            "customer_display_name": event.customer_display_name,
            "message": event.message,
            "message_status": event.message_status
        },
        TableName: 'nova_alexa_messages'
    };

    docClient.put(params, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
}