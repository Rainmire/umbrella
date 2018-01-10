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

// I think this has to do with the state updating each time the textinpit
// field is updated, resetting state...this being the fact that student status aren't
// saving, and the body doesn't persist when navigating between screens
class MomentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      momentImage: '',
      studentsStatus: {}
    };
    global.count = 0;
    this.selectedStudents = this.selectedStudents.bind(this);
    this._selectStudents = this._selectStudents.bind(this);
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
    this.props.navigation.navigate('SelectStudents',
      {selectStudents: this._selectStudents});
  }


  // this is passed to select_students screen so that select_students can
  // send back its state, which will tell which children the new moment will
  // be connected to
  _selectStudents(students) {
console.log('_selectStudents');
    this.setState({studentsStatus: students},
      () => this._readyStudentMemberships());
  }

  _readyStudentMemberships() {
    let students = [];

    Object.keys(this.state.studentsStatus).forEach( (id) => {
      if (this.state.studentsStatus[id]) {
        students.push(parseInt(id));
      }
    });

    this.setState({studentsStatus: students},
      () => console.log('student memberships ready: ', this.state));
  }

  _submitMoment (){
    console.log('submit moment', this);

    // this.checkState();
    // debugger
    this.setState({studentsStatus: this.props.navigation.state.params.status}, () => this.checkState())
      // AsyncStorage.getItem('token').then( (returntoken) => {
      //   this.props.createMoment(this.state, returntoken);
      // }).then(this.props.navigation.navigate('MomentsScreen'));

    // this.setState({studentsStatus: this.props.navigation.state.params.status}).then( () => {
    //   AsyncStorage.getItem('token').then( (returntoken) => {
    //     this.props.createMoment(this.state, returntoken);
    //   }).then(this.props.navigation.navigate('MomentsScreen'));
    // });

  }

  debugging() {
    debugger;
    global.count += 1;
    console.log('debugger count', global.count);
  }


// renders once, state is correct; re-renders, and state is reset
// recreate: uncomment debugger below, step through once you've selected
// students, call checkState(); which was placed on the window
  _renderForm() {
// console.log('render fn state', this.state);
// console.log('render fn context', this);
// debugger

// value={this.state.body}
console.log('_renderForm');
this.checkState();
// this.debugging();
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
    console.log('render');
    console.log('moment form', this.state);
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
