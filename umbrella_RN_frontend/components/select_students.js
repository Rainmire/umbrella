import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class SelectStudents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentsStatus: [],
    }

    // this.selectStudents = this.props.navigation.state.params.selectStudents;
  }

  // componentDidMount() {
  //   console.log('select student screen state', this.state);
  // }
  //
  // componentWillUnmount() {
  //   console.log('surprise?...');
  // }

// used for trying to set state locally and pass back studentsStatus
// object to moment form; not entirely sure if this is needed here...
  // componentDidMount(){
  //   console.log('componentDidMount');
  //   let stus = [];
  //
  //   this.props.students.forEach((student)=>{
  //     stus[student.id] = false;
  //   });
  //
  //   let status = Object.assign({}, this.studentsStatus, stus)
  //   this.setState({ studentsStatus: status });
  // }

// toggles the studentsStatus between true/ false
// must use Object.assign to merge state
  _selectStudent(id) {
    console.log('_selectStudent(id)');
    let studentIds = this.state.studentsStatus;

    if (studentIds.includes(id)) {
      let remove = studentIds.indexOf(id);

      studentIds = studentIds.slice(0, remove)
        .concat(studentIds
        .slice(remove + 1, studentIds.length));
    } else {
      studentIds.push(id);
    }

    this.setState({ studentsStatus: studentIds }, () => console.log('setting state in select students for select student by id: ', this.state));
  }

// had to use for loop to break early in case all students were already
// selected; this allows the teacher to toggle between selecting all students
  _selectAllStudents() {
    console.log('_selectAllStudents');
    let studentIds = [];
    let status = this.state.studentsStatus;
    let students = this.props.students;

    for (let i = 0; i < students.length; i ++) {
      if (status.length === students.length) {
        this.setState({ studentsStatus: [] });
        return;
      }
      if (!status.includes(students[i].id)) {
        studentIds.push(students[i].id);
      }
    }
    
    this.setState({studentsStatus: studentIds.concat(this.state.studentsStatus)}, () => console.log('selected all students?', this.state.studentsStatus));
  }

  _finishSelecting() {
    // new Promise (() => this.selectStudents(this.state.studentsStatus)).then(
    // this.props.navigation.navigate('MomentForm'));
    // this.selectStudents(this.state.studentsStatus);
    this.props.navigation.navigate('MomentForm', {status: this.state.studentsStatus});
  }

 _renderItem = ({ item }) => {
  // console.log('_renderItem');
    return(
      <TouchableOpacity
        onPress={ () => this._selectStudent(item.id) }
        style={styles.switchChildContainer}>
        <View>
          <Image
            source={{ uri: `${item.profile_pic}` }}
            style={styles.photo}
            />
        </View>
        <View style={styles.name}>
          <Text>{`${item.name}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
// console.log('render');

    return (
      <View>
        <TouchableOpacity
          onPress={ () => this._finishSelecting() }
          style={styles.button}
        >
          <Text>Finished</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ this._selectAllStudents.bind(this) }
          style={styles.button}>
          <View style={styles.name}>
            <Text style={{fontSize: 24}}>Select All Students</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={ this.props.students }
          keyExtractor={ (item) => item.id }
          renderItem={ this._renderItem }
        ></FlatList>
      </View>
    );
  }
}

export default SelectStudents;

export const styles = StyleSheet.create({
  switchChildContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 182, 193, .5)',
    marginTop: 20
  },
  photo: {
    height: 50,
    width: 50,
    borderWidth: 2,
    marginLeft: 50,
    borderRadius: 25,
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 25,
    alignItems: 'center'
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(255, 182, 193, .5)',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
