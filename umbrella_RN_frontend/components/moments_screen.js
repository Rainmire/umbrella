import React from 'react';
import { StyleSheet,
         View,
         Text,
         Button,
         AsyncStorage,
         ScrollView,
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
    this.state = {
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

  _onRefresh() {
    this.setState({refreshing: true});
    AsyncStorage.getItem('token').then((returntoken) => {
      //is current user is teacher
      if(this.props.currentUser.teacher_class){
        this.props.fetchNewMoments(this.props.moments[0].id, 'user',returntoken)
        .then(() => {
          this.setState({refreshing: false});
        });
      }else{//current user is parent
        this.props.fetchNewMoments(this.props.moments[0].id, `children/${this.props.currentChild.id}`, returntoken)
        .then(() => {
          this.setState({refreshing: false});
        });
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />}
      >
        <Text style={styles.moments}>
          This is the Moments screen.
          This will display an index of messages to the user, posted by the teachers/ admin.
        </Text>

      </ScrollView>
    );
  }
}

export default MomentsScreen;

export const styles = StyleSheet.create({
  moments: {
    margin: 50,
  },
});
