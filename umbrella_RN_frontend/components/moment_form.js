import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class MomentsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: 'This is the body of the moment',
      moment_image: ''
    };
  };

  // static navigationOptions = {
  //
  // };

  _renderForm = () => (
    <View>
      <TextInput
        multiline={ true }
        numberOfLines = { 4 }
        onChangeText={ (text) => this.setState({text})}
        value={this.state.body}
        />

      <TouchableOpacity
        onPress={console.log('open the camera/ camera roll, set state')} >
          <Icon name='camera' size={20} color='#000' />
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={console.log('function for selecting which users can see')}>//look at state for this
          <Text>Select Recipient</Text>
          <Icon name='angle-right' size={15} color='#000'/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={console.log('function for submitting form')}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View>
        {this._renderForm()}
      </View>
    );
  }
}

export default MomentsScreen;

export const styles = StyleSheet.create({

});
