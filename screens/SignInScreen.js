import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
/*import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyASbOPwnQvRs-B3dCBx-yomcqixuCBRoZQ",
    authDomain: "driver-diver.firebaseapp.com",
    databaseURL: "https://driver-diver.firebaseio.com",
    projectId: "driver-diver",
    storageBucket: "driver-diver.appspot.com",
    messagingSenderId: "954443209968"
};
firebase.initializeApp(config);*/

/*
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});
*/
export default class App extends Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.description}>
                        This demo shows how using available TextInput customizations can make
                        forms much easier to use. Try completing the form and notice that different
                        fields have specific optimizations and the return key changes from focusing
                        next input to submitting the form.
                    </Text>
                </View>
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
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
                    onChangeText={password => this.setState({password})}
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
        alert(`Welcome! Confirmation email has been sent to ${this.state.email}`);
        const { navigate } = this.props.navigation;
        navigate('Routes');
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