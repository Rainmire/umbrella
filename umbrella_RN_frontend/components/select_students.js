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

// hard code in as:
// 4: false,
// 6: false
// if componentDidUpdate fn doesn't work
    this.state = {
      studentsStatus: {},
    }

    this.setState = this.setState.bind(this);
    this.selectStudents = this.props.navigation.state.params.selectedStudents.bind(this);
  }

// the logic in this function seems sound, but not working;
// changed to component did update, maybe another lifecycle method needed?
// changed to use object.assign, maybe that will fix it?
// try: componentDidMount, componentWillReceiveProps
  componentDidUpdate(){
    let stus = {};
    console.log('select props', this.props);
    this.props.students.forEach((student)=>{
      stus[student.id] = false;
    });
    console.log('stus', stus);
    this.setState({ studentsStatus: stus });

    Object.assign({}, this.state.studentStatus, stus)
  }

// toggles the studentsStatus between true/ false
// must use Object.assign to merge state
  _selectStudent(id) {

    // if (this.state.studentsStatus[id]) {
    //   let status = Object.assign({}, this.state.studentStatus, { [id]: false })
    //   this.setState({ studentStatus: status })
    // } else {
    //   let status = Object.assign({}, this.state.studentStatus, { [id]: true })
    //   this.setState({ studentStatus: status })
    // }

    let status = Object.assign({}, this.state.studentStatus,
      { [id]: !this.state.studentsStatus[id] })
    this.setState({ studentStatus: status })

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

// broken right now--FIX-- use Object.assign here to fix
//   _selectAllStudents() {
//     this.setState(previousState => {
//       return { studentsStatus: !previousState.studentsStatus };
//     });
//
//     this.setState({ studentsStatus: Object.values(this.state.studentsStatus).map( v => v = !v )})
//     console.log('all students status', this.state.studentsStatus)
//
//   }

  _finishSelecting() {
    console.log('hit the button', this.state.studentStatus);
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
          onPress={ this._selectAllStudents }
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
