console.log('Starting nova-read-messages function...');

const AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });

exports.handler = function (event, context, callback) {
    let messageId = event.messageId;
    console.log(messageId);

    if (messageId === "") {
        var scanningParameters = {
            TableName: 'nova_alexa_messages',
            Limit: 100
        };

        docClient.scan(scanningParameters, function (err, data) {
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, data);
            }
        });
    }
    else {
        var params = {
            TableName: 'nova_alexa_messages',
            Key: {
                "message_id": +messageId
            }
        }

        docClient.get(params, function (err, data) {
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, data);
            }
        });
    }
}