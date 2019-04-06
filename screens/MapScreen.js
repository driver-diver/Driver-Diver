import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions, MapView, Marker } from 'expo';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Pools Near You',
        headerStyle: {backgroundColor: '#00609c'},
        headerTitleStyle: {color: '#f8ffa5'},
    };


    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
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
        const { navigation  } = this.props;
        this.setState({latitude: navigation.getParam('latitude', 37.78825),
                       longitude: navigation.getParam('longitude', -122.4324)});
    }

    render() {

        const points = [
            {latitude: 38.476245, longitude: -122.711245, title: "Person A", description: "Needs a ride"},
            {latitude: 38.484449, longitude: -122.720893, title: "Person B", description: "Is giving a ride"},
            {latitude: 38.484576, longitude: -122.699887, title: "Person C", description: "Needs a ride"},
        ]

        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                region={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {points.map((point, key) => {
                    return (
                    <MapView.Marker 
                    key={key}
                    coordinate={{
                        latitude: point.latitude, 
                        longitude: point.longitude
                    }}
                    title={point.title}
                    description={point.description} />
                    );
                })}
            </MapView>

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
