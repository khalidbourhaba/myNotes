# Note-taking Mobile App using AWS AMplify & Expo

Built using react-native-login-template from [ReactNativeMarket.com](http://reactnativemarket.com/)

## Prerequisites

You should have the following :

1. An AWS Account

2. Node.js and npm

3. [Expo](https://docs.expo.io/versions/latest/get-started/installation/)

4. AWS Amplify CLI

## How to run this app ?

1. Install AWS Amplify CLI tool-chain :

```
npm install -g @aws-amplify/cli
```

2. Configure your AWS Amplify CLI

```console
Amplify configure 
```

See my [medium]() article for step by step configuring. Or check out this [video](https://www.youtube.com/watch?v=fWbM5DLh25U&feature=emb_title) from the official documentation.

3. Clone this repo

Execute this new magic [command](https://aws.amazon.com/fr/blogs/mobile/amplify-cli-adds-scaffolding-support-for-amplify-apps-and-authoring-plugins/) :

```
mkdir myNotes
cd myNotes
amplify init --app https://github.com/khalidbourhaba/myNotes.git
```

The --app flag enables you to clone the GitHub repo, initilize the amplify project with your configuration, push the necessary resources to the cloud, install the dependecies and start the app !

This command should be run inside an empty folder.

When asked by the CLI, choose the profile you created in the previous step.


## Preview

![homescreen](https://raw.githubusercontent.com/venits/react-native-market/master/assets/simple-login-template/homescreen.png)
![login](https://raw.githubusercontent.com/venits/react-native-market/master/assets/simple-login-template/login.png)
![register](https://raw.githubusercontent.com/venits/react-native-market/master/assets/simple-login-template/register.png)
![forgot](https://raw.githubusercontent.com/venits/react-native-market/master/assets/simple-login-template/forgot.png)
![dashboard](https://raw.githubusercontent.com/venits/react-native-market/master/assets/simple-login-template/dashboard.png)



## Contribution

This project was created using login template from [ReactNativeMarket.com](http://reactnativemarket.com/)

