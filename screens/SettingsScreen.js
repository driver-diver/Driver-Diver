import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    Image
} from "react-native";
import { WebBrowser } from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Slack Channels',
    headerStyle: {backgroundColor: '#00609c'},
    headerTitleStyle: {color: '#f8ffa5'},
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://nomahacks.slack.com/'
    );
  };


  _handleHelpPress2 = () => {
    WebBrowser.openBrowserAsync(
        'https://SonomaTech.slack.com/'
    );
  };
  
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <Image style={{width: 250, height:250}} source={require('../assets/images/51553744-4130b580-1e7c-11e9-889e-486937b69475.png')} />
        <TouchableOpacity onPress={this._handleHelpPress}>
          <Text style={styles.buttonText}>Noma Hacks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._handleHelpPress2}>
          <Text style={styles.buttonText}>Sonoma Tech</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._handleHelpPress}>
          <Text style={styles.buttonText}>Gym</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._handleHelpPress}>
          <Text style={styles.buttonText}>CS club</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#c7e7f1'
  },
  buttonText: {
    fontSize: 40,
  }
});
