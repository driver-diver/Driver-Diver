import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyASbOPwnQvRs-B3dCBx-yomcqixuCBRoZQ",
    authDomain: "driver-diver.firebaseapp.com",
    databaseURL: "https://driver-diver.firebaseio.com",
    projectId: "driver-diver",
    storageBucket: "driver-diver.appspot.com",
    messagingSenderId: "954443209968"
};
firebase.initializeApp(config);


/*

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});
*/

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: "",
            email: '',
            password: '',
        };

    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.description}>

                    </Text>
                </View>
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={x => this.setState({email: x})}
                    ref={ref => {this._emailInput = ref}}
                    placeholder="email@example.com"
                    autoFocus={true}
                    autoCapitalize="words"
                    autoCorrect={true}
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={this._next}
                    blurOnSubmit={false}
                />
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={x => this.setState({password: x})}
                    ref={ref => {this._passwordInput = ref}}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    returnKeyType="send"
                    onSubmitEditing={this._submit}
                    blurOnSubmit={true}
                />
            </View>
        );
    }

    _next = () => {
        this._passwordInput && this._passwordInput.focus();
    };

    _submit = () => {
        var temp = firebase.database().ref('users/').push({
            'email' : this.state.email,
            'password' : this.state.password,
        });
        // Handle Errors here.
        /*
        var errorCode = error.code;
        var errorMessage = error.message;
        */
        // ...
        var temp2 = temp.key
        console.log(temp2);
        this.setState({userID: temp2})
        alert(`Welcome! Confirmation email has been sent to ${this.state.email}`);
        console.log(this.state.userID);
        this.props.navigation.navigate('AddPools', {userID: this.state.userID});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    header: {
        paddingTop: 20 + Constants.statusBarHeight,
        padding: 20,
        backgroundColor: '#336699',
    },
    description: {
        fontSize: 14,
        color: 'white',
    },
    input: {
        margin: 20,
        marginBottom: 0,
        height: 34,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
    },
});