import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    TextInput
} from "react-native";
import * as firebase from 'firebase';

function add() {
    firebase.database().ref('/carpools/').push({
        userID: this.state.userID,
        'yourName': this.state.yourName,
        'poolName': this.state.poolName,
        'latitude': this.state.latitude,
        'longitude': this.state.longitude,
        'departureTime': this.state.departureTime,
        'slackChannel': this.state.slackChannel,
    })
}

export default class AddPoolsScreen extends React.Component {
    static navigationOptions = {
        title: 'Add a Pool',
        headerStyle: {backgroundColor: '#00609c'},
        headerTitleStyle: {color: '#f8ffa5'}
    };

    constructor(props) {
        super(props);

        this.state = { yourName: '',
                        poolName: '',
                        latitude: '',
                        longitude: '',
                        departureTime: '',
                        slackChannel: '',
                        userID: this.props.navigation.state.params.userID,
                        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePoolChange = this.handlePoolChange.bind(this);
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
        this.handleDepartureChange = this.handleDepartureChange.bind(this);
        this.handleSlackChange = this.handleSlackChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(yourName) {
        this.setState({ yourName });
    }

    handlePoolChange(poolName) {
        this.setState({ poolName });
    }

    handleLatitudeChange(latitude) {
        this.setState({ latitude });
    }

    handleLongitudeChange(longitude) {
        this.setState({ longitude });
    }

    handleDepartureChange(departureTime) {
        this.setState({ departureTime });
}

    handleSlackChange(slackChannel) {
        this.setState({ slackChannel });
    }

    handleSubmit() {
        return(
            firebase.database().ref('/carpools/').push({
                'userID': this.state.userID,
                'yourName': this.state.yourName,
                'poolName': this.state.poolName,
                'latitude': this.state.latitude,
                'longitude': this.state.longitude,
                'departureTime': this.state.departureTime,
                'slackChannel': this.state.slackChannel,
            })

        )
    };

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your name"
                        maxLength={20}
                        value={this.state.yourName}
                        onChangeText={this.handleNameChange}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Name of Pool"
                        maxLength={20}
                        value={this.state.poolName}
                        onChangeText={this.handlePoolChange}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Latitude of departure area"
                        maxLength={20}
                        value={this.state.latitude}
                        onChangeText={this.handleLatitudeChange}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Longitude of departure area"
                        maxLength={20}
                        value={this.state.longitude}
                        onChangeText={this.handleLongitudeChange}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Time you will be leaving HH:MM"
                        maxLength={20}
                        value={this.state.departureTime}
                        onChangeText={this.handleDepartureChange}
                    />
                    <TextInput
                    style={styles.textInput}
                    placeholder="Name of the Slack channel to link to"
                    maxLength={20}
                    value={this.state.slackChannel}
                    onChangeText={this.handleSlackChange}
                    />
                    <View style={styles.saveContainer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={this.handleSubmit}
                        >
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7e7f1'
    },
    buttonText: {
        fontSize: 40,
    },
    inputContainer: {
        paddingTop: 0,
        backgroundColor: '#c7e7f1'

    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    saveButton: {
        borderWidth: 1,
        borderColor: '#f8ffa5',
        backgroundColor: '#f8ffa5',
        padding: 15,
        margin: 5,
        borderRadius: 10,
        width: "60%",
    },
    saveButtonText: {
        color: '#00609c',
        fontSize: 20,
        textAlign: 'center'
    },
    saveContainer: {
        paddingTop: 10,
        backgroundColor: '#c7e7f1',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
