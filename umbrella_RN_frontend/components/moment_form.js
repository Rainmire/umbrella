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

class MomentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      momentImage: '',
      studentsStatus: {}
    };
    this.selectedStudents = this.selectedStudents.bind(this);
  }

  selectedStudents(){
    return this.state.studentsStatus;
  }

  componentWillReceiveProps(newProps){
    let stus = {};
    newProps.students.forEach((student)=>{
      stus[student.id] = false;
    });
    this.setState({studentsStatus:stus});
  }

  // static navigationOptions = {
  //
  // };

//look at state for props needed
  _renderForm() {
    return (
      <View style={styles.newMomentContainer} >
        <View style={styles.textInputContainer}>
          <TextInput
          style={styles.textInput}
            multiline={ true }
            numberOfLines={4}
            onChangeText={ (text) => this.setState({body: text})}
          />
        </View>

        <TouchableOpacity
          style={styles.addPhoto}
          onPress={console.log('open the camera/ camera roll, set state')} >
          <Icon name='camera' size={50} color='#000' />
        </TouchableOpacity>

        <View >
          <TouchableOpacity
            onPress={this.selectedStudents}
            style={styles.selecteRecipient}
          >
            <Text style={styles.selecteRecipientText}>Select Recipient </Text>
            <Icon
              name='angle-right'
              size={30}
              color='#000'
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.submitContainer}>
          <TouchableOpacity
            onPress={console.log('function for submitting form')}
            style={styles.submit}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this._renderForm()}
      </View>
    );
  }
}

export default MomentForm;

export const styles = StyleSheet.create({
  newMomentContainer: {
    // flex: 1,
  },
  textInputContainer: {
    height: 150,
  },
  textInput: {
    backgroundColor: '#fff',
    margin: 25,
    borderWidth: 1,
    flex: 1,
  },
  addPhoto: {
    margin: 20,
  },
  selecteRecipient: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
  },
  selecteRecipientText: {
    fontSize: 22,
  },
  arrow: {
    marginLeft: 20,
  },
  submitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 200,

  },
  submitText: {
    fontSize: 22,
  }

});
