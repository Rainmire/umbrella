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
  }

// for each child, when we click them, we need to get their __?__ so we
// can connect them to the moment when it is sent to the db;
  _renderItem = ({ item }) => {
    return(
      <TouchableOpacity
        onPress={ () =>  console.log('child', `${item.name}`, 'was pressed')}
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
        <FlatList
          data={ this.props.students }
          keyExtractor={(item) => item.id }
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
    marginTop: 10
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
  }
});

// render(){
//   const selectedStudents = this.props.selectedStudents;
//   console.log('select student props: ', this.props);
//   return(
//     <View>
//     <Text>This is where we select which students to send to</Text>
//     </View>
//   );
// }
