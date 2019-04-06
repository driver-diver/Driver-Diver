import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PoolSelect from '../components/PoolSelect';

export default class PoolsScreen extends React.Component {
    state = {
        hasPools: true
    };
    
    static navigationOptions = {
        title: 'Pools',
        headerStyle: {backgroundColor: '#00609c'},
        headerTitleStyle: {color: '#f8ffa5'},
    };

    render() {
        return (
            <View style={styles.container}>
            {this.state.hasPools ? 
                <PoolSelect /> :
                <View>
                    <Text style={styles.labelText}>
                        You don't have any pools!
                    </Text>
                    <Text style={styles.infoText}>
                        To add some pools, click on the add tab below.
                    </Text>
                </View>
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#c7e7f1',
    },
    labelText: {
        fontSize: 25,
        lineHeight: 100,
        fontWeight: "bold",
        textAlign: 'center'
    },
    infoText: {
        fontSize: 15,
        lineHeight: 110,
        textAlign: 'center'
    }
});