# Note-taking Mobile App using AWS AMplify & Expo

Built using react-native-login-template from [ReactNativeMarket.com](http://reactnativemarket.com/)

## Prerequisites

You should have the following :

1. An AWS Account

2. Node.js and npm

3. [Expo](https://docs.expo.io/versions/latest/get-started/installation/)

4. AWS Amplify CLI

## How to run this app ?

##### 1. Install AWS Amplify CLI tool-chain :

```
npm install -g @aws-amplify/cli
```

##### 2. Configure your AWS Amplify CLI

See my [medium](https://medium.com/@khalidbourhaba/mobile-development-go-serverless-with-aws-amplify-a-game-changer-tutorial-c3b94b63282b) article for step by step configuring. Or check out this [video](https://www.youtube.com/watch?v=fWbM5DLh25U&feature=emb_title) from the official documentation.


```
amplify configure 
```

##### 3. Clone this repo using "amplify init -app" magic command:

```
mkdir myNotes
cd myNotes
```

Execute this new magic [command](https://aws.amazon.com/fr/blogs/mobile/amplify-cli-adds-scaffolding-support-for-amplify-apps-and-authoring-plugins/) :

```
amplify init --app https://github.com/khalidbourhaba/myNotes.git
```

**When asked by the CLI, choose the profile you created in the previous step.**

The --app flag enables you to clone the GitHub repo, initilize the amplify project with your configuration, push the necessary resources to the cloud, install the dependecies and start the app !


## Preview

![homescreen](https://github.com/khalidbourhaba/myNotes/blob/master/assets/preview/homescreen.png)
![login](https://github.com/khalidbourhaba/myNotes/blob/master/assets/preview/login.png)
![register](https://github.com/khalidbourhaba/myNotes/blob/master/assets/preview/register.png)
![add_list_note](https://github.com/khalidbourhaba/myNotes/blob/master/assets/preview/add_list_note.png)