import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
  
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._handleHelpPress}>
          <Text style={styles.buttonText}>Open Slack</Text>
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
