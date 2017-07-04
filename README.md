# Nova Messenger
Angular front-end, Amazon Echo and Raspberry Pi IoT POC

## What for
This e2e application has three modules, Angular 4 UI, AWS API Gateway with DynamoDB, RaspberryPI and Echo integration (to be developed). Angular UI to view, create and edit messages stored in DynamoDB. Amazon Echo will speak out the messages on demand.

## How to start the UI
This application is built on NG-CLI so run `npm install` and then `ng serve`

## AWS Authentication

This application uses AWS CLI credential management.

Using the ~/.aws/credentials and ~/.aws/config files you may specify AWS_PROFILE to tell apex which one to reference. However, if you do not have a ~/.aws/config file, or “region” is not defined, you should set it with the AWS_REGION environment variable. To read more on configuring these files view [Configuring the AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).

Here’s an example of ~/.aws/credentials:

`aws_access_key_id = xxxxxxxx` <br />
`aws_secret_access_key = xxxxxxxxxxxxxxxxxxxxxxxx` <br />

Here’s an example of ~/.aws/config:

`output = json` <br />
`region = us-west-2`