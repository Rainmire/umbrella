import React from 'react';
import { StyleSheet,
         View,
         Text,
         Button,
         AsyncStorage,
         FlatList,
         TouchableOpacity,
         RefreshControl
        } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class MomentsScreen extends React.Component {
  constructor(props) {
    super(props);
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      refreshing: false,
      isTeacher: false
    };
  }

  static navigationOptions = {
    tabBarLabel: 'Moments',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="newspaper-o" size={30} color="#00F" />
    )
  };

  _renderItem = ({ item }) => {
    const privacy = item.is_public ? 'Public' : 'Private';
    const author = this.props.users[item.author_id];
    return(
      <View style={styles.moments_container}>
        <View style={styles.image_container}>
          <Image
            source={{ uri: "https://www.security-camera-warehouse.com/images/profile.png" }}
            style={styles.profile_pic}
          />
        </View>
        <View style={styles.moment}>
          <Text style={styles.name}>{`${author.name}`}</Text>
          <Text style={styles.moment_body}>{`${item.body}`}</Text>
          <Image
            source={{ uri: "https://www.security-camera-warehouse.com/images/profile.png" }}
            style={styles.moments_image}
          />
          <Text style={styles.footer_info}>{`${item.created_at}` `${privacy}`}</Text>
        </View>
      </View>
    )
  }

  _addMoment = () => (
    this.props.navigation.navigate('MomentForm')
  )

  _addMomentButton = () => {
// change condition to check whether currentUser is teacher

    if (this.state.isTeacher) {
      return (
        <View style={styles.addMomentContainer}>
          <TouchableOpacity
            onPress={this._addMoment}
            style={styles.addMoment}
            >
            <Icon name='plus' size={50} color='#000' />
          </TouchableOpacity>
        </View>
      );
    }
  }

// not positive if this will work, but I think it should...for rendering the
// add moment button
  componentWillMount(){
    this.setState({refreshing: true});
    AsyncStorage.getItem('token').then((returntoken)=> {
      if(returntoken){
        this.props.fetchCurrentUser(returntoken);
      }
    }).then(()=> this.setState({refreshing: false}));
  }

  componentWillReceiveProps() {
    if (this.props.currentUser && this.props.currentUser.teacher_class) {
      this.setState({ isTeacher: true});
    }
  }

  _fetch(type) {
    this.setState({refreshing: true});
    AsyncStorage.getItem('token').then((returntoken) => {
      //is current user is teacher
      if(true){
        this.props.fetchMoments(type,this.props.moments[0].id, 'user',returntoken)
        .then(() => {
          this.setState({refreshing: false});
        }).then(() => console.log(this.props));
      }else{//current user is parent
        this.props.fetchMoments(type,this.props.moments[0].id, `children/${this.props.currentChild.id}`, returntoken)
        .then(() => {
          this.setState({refreshing: false});
        });
      }
    })
  }

  render() {
  console.log('moments screen props: ', this.props)
  console.log('moments screen props.moments: ', this.props.moments)
    return (
      <View>
        {this._addMomentButton()}
        <FlatList>
          data={this.props.moments}
          extraData={this.state}
          keyExtractor={ (item) => item.id }
          renderItem={ this._renderItem }
        </FlatList>
        <Text>
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        This is some test text
        </Text>
      </View>
    );
  }
}

export default MomentsScreen;
// <ListView
// dataSource = {this.state.dataSource}
// renderRow = {(rowData) => <Text>{rowData}</Text>}
// refreshControl={
//   <RefreshControl
//   refreshing={this.state.refreshing}
//   onRefresh={ () => this._fetch('new')}
//   />}
//   onEndReached={ () =>{
//     if(this.props.moments.length > 10){
//       this._fetch('more')
//     }
//   }}
//   >
//   </ListView>

export const styles = StyleSheet.create({
  moments_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 25,
    // borderWidth: 1,
  },
  profile_pic: {
    height: 50,
    width: 50,
    marginTop: 20,
  },
  moment: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
  },
  moment_body: {
    marginBottom: 20,
  },
  moments_image: {
    height: 100,
    width: 150
  },
  image_container: {
    marginLeft: 15,
  },
  footer_info: {
    fontSize: 12,
    marginTop: 5,
  },
  addMoment: {
    backgroundColor: 'pink',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMomentContainer: {
    backgroundColor: 'yellow',
    marginTop: 20,

  }
});
