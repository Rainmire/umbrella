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
  Dimensions
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-camera';

class MomentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      image_url: null,
      children: [],
      is_public: false,

    };
    // global.count = 0; // used for this.debugging() to see if state gets reset
    this.selectedStudents = this.selectedStudents.bind(this);
    window.checkState = this.checkState.bind(this);
    // remember, to access checkState on the window, change 'top'
    // to 'webworker'-somethingoranother in dev tools
  }


// mounting hit twice; instead of setting the state in the other component,
// instead send back the object in the navigation state params instead
// and use it there
  componentDidMount() {
    console.log('component mounted: ', this);
    console.log('component mounted: ', this.props);
    let body = this.props.navigation.state.params.body;
    let status = this.props.navigation.state.params.status;
    let isPublic = this.props.navigation.state.params.is_public;

    if (body) {
      this.setState({body: body});
    }

    if (status) {
      this.setState({children: status});
    }

    if (isPublic) {
      this.setState({is_public: isPublic});
    }


  }

  componentWillMount() {
    console.log('will mount hit');

  }

  componentWillReceiveProps() {
    console.log('will receive props', this.state);
  }

  componentWillUpdate() {
    console.log('will update', this.state);

  }

  checkState() {
    console.log('current moment state: ', this.state);
    return this;
  }

  selectedStudents(){
    console.log('selectedStudents');
    this.props.navigation.navigate('SelectStudents', {body: this.state.body});
  }

  // _readyStudentMemberships(studentsObject) {
  //   let students = [];
  //
  //   Object.keys(studentsObject).forEach( (id) => {
  //     if (this.state.children[id]) {
  //       students.push(parseInt(id));
  //     }
  //   });
  //
  //   this.setState({children: students});
  // }

// need to comment out 'teacher' requirement in moment controller;
// also need to set 'isPrivate', since this is a requirement in cont.
  _submitMoment (){
    AsyncStorage.getItem('token').then( (returnToken) => this.props.createMoment(this.state, returnToken));
    

    // AsyncStorage.getItem('token')
    //   .then( (returntoken) => this.props.createMoment(this.state, returntoken))
    //   .then( () => this.props.navigation.navigate('MomentsScreen'))
      // .then( () => this.debugging);
  }

  debugging() {
    debugger;
    global.count += 1;
    console.log('debugger count', global.count);
  }

  _renderForm() {

    return (
      <View style={styles.newMomentContainer} >
        <View style={styles.textInputContainer}>
          <TextInput
          style={styles.textInput}
            multiline={ true }
            numberOfLines={4}
            value={this.state.body}
            onChangeText={ (text) => this.setState({body: text})}
          />
        </View>

        <TouchableOpacity
          style={styles.addPhoto}
          onPress={ () => {
            this.props.navigation.navigate('CaptureImage');
          }}
        >
          <Icon name='camera' size={50} color='#000' />
        </TouchableOpacity>

        <View >
          <TouchableOpacity
            onPress={this.selectedStudents}
            style={styles.selecteRecipient}
          >
            <Text style={styles.selecteRecipientText}>
              Select Recipient
            </Text>
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
            onPress={ this._submitMoment.bind(this)}
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
