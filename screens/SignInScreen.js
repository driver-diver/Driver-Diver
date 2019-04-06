import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants, Google } from 'expo';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDeiWJyPBzim_yMDUo-csLkwfblVt6dAWE",
    authDomain: "alset-snack.firebaseapp.com",
    databaseURL: "https://alset-snack.firebaseio.com",
    projectId: "alset-snack",
    storageBucket: "alset-snack.appspot.com",
    messagingSenderId: "873097287154"
};

// Ensure that you do not login twice.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

function storeHighScore(userId, score) {
    firebase.database().ref('users/' + userId).set({
        highscore: score
    });
}

function setupHighscoreListener(userId) {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
        const highscore = snapshot.val().highscore;
        console.log("New high score: " + highscore);
    });
}

function setUserLocation(location){
    firebase.database.ref('users/' + userId).on('value', (snapshot) => {
        const location = snapshot.val().location;
        console.log("Location: " + location);
    });
}

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
        console.log("We are authenticated now!");
    } else {
        console.log("We did not authenticate.")
    }

    // Do other things
});

export default class App extends Component {
    _handleGoogleLogin = async () => {
        try {
            const { type, user,idToken, accessToken } = await Google.logInAsync({
                androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
                iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
                androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
                iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });

            switch (type) {
                case 'success': {
                    Alert.alert(
                        'Logged in!',
                        `Hi ${user.name}!`,
                    );
                    console.log(user);
                    console.log(type);
                    console.log(idToken);
                    console.log(accessToken);

                    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);

                    /* This next code fails with this error message:
                      Invalid Idp Response: the Google id_token is not allowed to be used with this application. Its audience (OAuth 2.0 client ID) is 603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com, which is not authorized to be used in the project with project_number: 873097287154.
                    */
                    firebase.auth().signInWithCredential(credential).catch((error) => {
                        // Handle Errors here.
                        console.log("Error authenticating with Google");
                        console.log(error);
                        console.log(error.message);
                    });

                    break;
                }
                case 'cancel': {
                    Alert.alert(
                        'Cancelled!',
                        'Login was cancelled!',
                    );
                    break;
                }
                default: {
                    Alert.alert(
                        'Oops!',
                        'Login failed!',
                    );
                }
            }
        } catch (e) {
            Alert.alert(
                'Oops!',
                'Login failed!',
            );
        }
    };



    render() {
        return (
            <View style={styles.container}>

                <Button
                    title="Login with Google"
                    onPress={this._handleGoogleLogin}
                />

                <Text style={styles.paragraph}>
                    How do we authorize Firebase login after we have our Google idToken and accessToken?
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});