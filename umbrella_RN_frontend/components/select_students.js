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
      studentsStatus: {},
    }

    this.setState = this.setState.bind(this);
    this.selectStudents = this.props.navigation.state.params.selectedStudents.bind(this);
  }

  componentDidMount(){
    let stus = {};

    this.props.students.forEach((student)=>{
      stus[student.id] = false;
    });

    let status = Object.assign({}, this.state.studentsStatus, stus)
    this.setState({ studentsStatus: status });
  }

// toggles the studentsStatus between true/ false
// must use Object.assign to merge state
  _selectStudent(id) {
    let status = Object.assign({}, this.state.studentsStatus,
      { [id]: !this.state.studentsStatus[id] })
      console.log('selecting students by id', this.state)

    this.setState({ studentsStatus: status })
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

  _selectAllStudents() {
    let stus = {};

    this.props.students.forEach((student)=>{
      stus[student.id] = stus[student.id] ? false : true;
    });

    this.setState({ studentsStatus: stus });
  }

  _finishSelecting() {
    console.log('hit the button state', this.state.studentsStatus);
    this.selectStudents(this.state.studentsStatus);
    this.props.navigation.navigate('MomentForm');
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
