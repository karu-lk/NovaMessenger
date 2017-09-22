import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerCognitoUser() {
    // AWSCognito.config.region = 'us-east-1'; //This is required to derive the endpoint

    // var poolData = {
    //   UserPoolId: 'us-east-1_TcoKGbf7n',
    //   ClientId: '4pe2usejqcdmhi0a25jp4b5sh3'
    // };
    // var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

    // var attributeList = [];

    // var dataEmail = {
    //   Name: 'email',
    //   Value: 'email@mydomain.com'
    // };
    // var dataPhoneNumber = {
    //   Name: 'phone_number',
    //   Value: '+15555555555'
    // };
    // var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
    // var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);

    // attributeList.push(attributeEmail);
    // attributeList.push(attributePhoneNumber);

    // userPool.signUp('username', 'password', attributeList, null, function (err, result) {
    //   if (err) {
    //     alert(err);
    //     return;
    //   }
    //   cognitoUser = result.user;
    //   console.log('user name is ' + cognitoUser.getUsername());
    // });
  }

}
