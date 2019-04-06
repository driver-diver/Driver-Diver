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
    title: 'app.json',
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'slack://open'
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
    alignItems: "center"
  },
  buttonText: {
    fontSize: 40,
  }
});
