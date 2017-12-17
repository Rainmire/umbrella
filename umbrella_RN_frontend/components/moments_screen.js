import React from 'react';
import { StyleSheet,
         View,
         Text,
         Button,
         AsyncStorage,
         ListView,
         RefreshControl
        } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class MomentsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Moments',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="newspaper-o" size={30} color="#00F" />
    )
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      refreshing: false,
    };
  }

  componentWillMount(){
    this.setState({refreshing: true});
    AsyncStorage.getItem('token').then((returntoken)=> {
      this.props.fetchCurrentUser(returntoken);
    }).then(()=>{
      this.setState({refreshing: false});
    });
  }

  _fetch(type) {
    // this.setState({refreshing: true});
    AsyncStorage.getItem('token').then((returntoken) => {
      //is current user is teacher
      if(this.props.currentUser.teacher_class){
        this.props.fetchMoments(type,this.props.moments[0].id, 'user',returntoken)
        .then(() => {
          this.setState({refreshing: false});
        });
      }else{//current user is parent
        this.props.fetchMoments(type,this.props.moments[0].id, `children/${this.props.currentChild.id}`, returntoken)
        .then(() => {
          this.setState({refreshing: false});
        });
      }
    })
  }

  // _onEndReached(){
  //   // this.setState({refreshing})
  //   AsyncStorage.getItem('token').then((returntoken) => {
  //
  //   }
  // }

  render() {
    console.log(this.props)
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {(rowData) => <Text>{rowData}</Text>}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={ () => this._fetch('new')}
          />}
        onEndReached={ () => this._fetch('more') }
      >
        <Text style={styles.moments}>
          This is the Moments screen.
          This will display an index of messages to the user, posted by the teachers/ admin.
        </Text>

      </ListView>
    );
  }
}

export default MomentsScreen;

export const styles = StyleSheet.create({
  moments: {
    margin: 50,
  },
});
