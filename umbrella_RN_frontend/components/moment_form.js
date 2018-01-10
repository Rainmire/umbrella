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

// will be passing back children as an array, with student id's present
// if they are to have membership to the moment

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

    this.selectedStudents = this.selectedStudents.bind(this);
    this._selectStudents = this._selectStudents.bind(this);
    this.setParentState = this.setState.bind(this);
    window.checkState = this.checkState.bind(this);
  }

  componentDidUpdate() {
    console.log('I updated...right?...', this.state);
  }

  checkState() {
    console.log('current moment state: ', this.state);
    return this;
  }
// {setParentState: newState => this.setState(newState)}
  selectedStudents(){
    this.props.navigation.navigate('SelectStudents',
      {selectStudents: this._selectStudents});
    // return this.state.studentsStatus;
  }

  // selectedStudents(){
  //   this.props.navigation.navigate('SelectStudents',
  //     {setParentState: this.setParentState});
  //   // return this.state.studentsStatus;
  // }


  // this is passed to select_students screen so that select_students can
  // send back its state, which will tell which children the new moment will
  // be connected to
  _selectStudents(students) {
    console.log('students ', students);
    // console.log('context before setting: ', this);
    // console.log('state before setting: ', this.state);
    // let status = Object.assign({}, this.state.studentsStatus, students);
    // console.log('heres the status after students: ', status);

    this.setState({studentsStatus: students}, () => this._readyStudentMemberships());
    console.log('context after setting?,', this);
    // console.log('state after setting?,', this.state);
    // console.log('context after setting 2?,', this);
  }

// this gives the id as a string--what's it expecting in the backend?
  _readyStudentMemberships() {
    let students = [];
    // console.log('value of the status: ', this.state.studentsStatus );
// console.log('here is the final context within _readyStudentMemberships: ', this);
    Object.keys(this.state.studentsStatus).forEach( (id) => {
      if (this.state.studentsStatus[id]) {
        students.push(parseInt(id));
      }
    });
    // console.log('these are the new students: ', students);
    this.setState({studentsStatus: students}, () => console.log('student memberships ready: ', this.state));
  }

  // componentWillReceiveProps(newProps){
  //   console.log('I updated...right?...will receive props', this.state);
  //   console.log('new props', newProps);
  //   let stus = {};
  //   newProps.students.forEach((student)=>{
  //     stus[student.id] = false;
  //   });
  //
  //   this.setState({studentsStatus:stus});
  // }

  _submitMoment (){
    console.log('submit moment props', this.props);
    AsyncStorage.getItem('token').then( (returntoken) => {
      this.props.createMoment(this.state, returntoken);
    }).then(this.props.navigation.navigate('MomentsScreen'));

    // console.log('here is the final context before hitting _readyStudentMemberships: ', this);
    // console.log('here is the final state before hitting _readyStudentMemberships: ', this.state);
    // this._readyStudentMemberships();
    // this.props.navigation.navigate('MomentsScreen');
  }

// renders once, state is correct; re-renders, and state is reset
// recreate: uncomment debugger below, step through once you've selected
// students, call checkState(); which was placed on the window
  _renderForm() {
console.log('render fn state', this.state);
console.log('render fn context', this);
// debugger
this.checkState();
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
    // console.log('moment form props: ', this.props);
    // console.log('new moment props: ', this.props);
    // console.log('new moment form state: ', this.state);
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
