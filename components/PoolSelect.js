import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

class PoolSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            poolList: [
                {id: 0, name: "Work", latitude: 38.481456, longitude: -122.710475},
                {id: 1, name: "Home", latitude: 38.339992, longitude: -122.674369},
                {id: 2, name: "Gym", latitude: 38.346659, longitude: -122.711001}
            ]
        }
    }
    
    onItemSelect() {
        navigate('Maps');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.poolTitle}>Where are you going?</Text>
                {this.state.poolList.map((item) => {
                    return(
                        <TouchableOpacity key={item.id} onPress={() => navigate('Maps', {latitude: item.latitude, longitude: item.longitude})} style={styles.item}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}

export default PoolSelect;

const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      alignItems: "center"
    },
    item: {
        marginBottom: 10,
    },
    poolTitle: {
        fontSize: 35,
        marginBottom: 10,
    }
  });
