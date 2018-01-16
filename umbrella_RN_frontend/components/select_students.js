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
      children: [],
      is_public: false,
    }

  }

  componentDidMount() {
    console.log('select student screen state', this);
  }

  _selectStudent(id) {
    console.log('_selectStudent(id)');
    let studentIds = this.state.children;
    let is_public;

    if (studentIds.includes(id)) {
      let remove = studentIds.indexOf(id);

      studentIds = studentIds.slice(0, remove)
        .concat(studentIds
        .slice(remove + 1, studentIds.length));
    } else {
      studentIds.push(id);
    }

    is_public = (studentIds.length === this.props.students.length) ? true : false
console.log('is it public?', is_public);
    this.setState({ children: studentIds, is_public: is_public }, () => console.log('setting state in select students for select student by id: ', this.state));
  }

// had to use for loop to break early in case all students were already
// selected; this allows the teacher to toggle between selecting all students
  _selectAllStudents() {
    console.log('_selectAllStudents');
    let studentIds = [];
    let status = this.state.children;
    let students = this.props.students;

    for (let i = 0; i < students.length; i ++) {
      if (status.length === students.length) {
        this.setState({ children: [], is_public: false });
        return;
      }
      if (!status.includes(students[i].id)) {
        studentIds.push(students[i].id);
      }
    }
    // is there a better way to do this? Like when we use Object.assign() for objects?...
    this.setState({children: studentIds.concat(this.state.children), is_public: true},
      () => console.log('selected all students?', this.state.children));
  }

  _finishSelecting() {
    this.props.navigation.navigate('MomentForm',{
      status: this.state.children,
      body: this.props.navigation.state.params.body,
      is_public: this.state.is_public
    });
  }

 _renderItem = ({ item }) => {
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
