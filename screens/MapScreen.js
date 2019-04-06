import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Pools Near You',
        headerStyle: {backgroundColor: '#00609c'},
        headerTitleStyle: {color: '#f8ffa5'},
    };


    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 0,
                longitude: 0
            },
            errorMessage: null,

        };
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        //this.setState({ region: {latitude: location.coords.latitude, longitude: longitude.coords.longitude} });
        this.setState({ location });
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }


    /*
    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{text}</Text>
            </View>
        );
    }
    */

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                region={{
                    //latitude: this.state.region.coords.latitude,
                    //longitude: this.state.region.coords.longitude,
                    latitude: 38.3386,
                    longitude: -122.6748,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#c7e7f1',

    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
});
