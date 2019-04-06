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
                {id: 0, name: "Work"},
                {id: 1, name: "Home"},
                {id: 2, name: "Gym"}
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
                <Text style={styles.poolTitle}>Select your pool</Text>
                {this.state.poolList.map((item) => {
                    return(
                        <TouchableOpacity key={item.id} onPress={() => navigate('Maps', {latitude: 51.503457, longitude: -0.112777})} style={styles.item}>
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
      justifyContent: "center",
      alignItems: "center"
    },
    item: {
        marginBottom: 10,
    },
    poolTitle: {
        fontSize: 20,
        marginBottom: 10,
    }
  });
