import React from 'react';
import { StyleSheet,
         View,
         Text,
         Image,
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

    this.state = {
      refreshing: false,
      isTeacher: false,
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
    const timeStampSplit = item.created_at.split('T');
    const dateStamp = timeStampSplit[0];
    const timeStamp = timeStampSplit[1].split('.')[0];
    // console.log('this it the item in the render item moments index: ', item);
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
          <View style={styles.footer}>
            <Text style={styles.footer_info}>{`${dateStamp}`}</Text>
            <Text style={styles.footer_info}>--{`${timeStamp}`}--</Text>
            <Text style={styles.footer_info}>{`${privacy}`}</Text>
          </View>
        </View>
      </View>
    )
  }

// create actions 
  _addMoment = () => (
    this.props.navigation.navigate('MomentForm', {navigation: this.props.navigation})
  )

  _addMomentButton = () => {
// change condition to check whether currentUser is teacher
// this.state.isTeacher
    if (true) {
      return (
        <View style={styles.addMomentContainer}>
          <Text style={styles.addMomentText}>Add Moment</Text>
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

  componentDidMount(){
    this.setState({refreshing: true});
    AsyncStorage.getItem('token').then((returntoken)=> {
      if (this.props.currentUser === undefined && returntoken) {
        this.props.fetchCurrentUser(returntoken);
      }
    }).then(()=> this.setState({refreshing: false}));
    if (this.props.currentUser && this.props.currentUser.teacher_class) {
      this.setState({ isTeacher: true});
    }
  }


  _fetch(type) {
    this.setState({refreshing: true});
    AsyncStorage.getItem('token').then((returntoken) => {
      let moment_id = `/${this.props.moments[this.props.moments.length - 1].id}`;
      if(type === "new"){
        moment_id = "";
      }
            //is current user is teacher
      if (this.state.isTeacher) {
        this.props.fetchMoments(type, 'user',returntoken,moment_id)
          .then(() => {
            this.setState({refreshing: false});
        });
      } else { //current user is parent
        this.props.fetchMoments(type, `children/${this.props.currentChild.id}`, returntoken,moment_id)
        .then(() => {
          this.setState({refreshing: false});
        });
      }
    })
  }

// once backend fetch for moments is fixed, look at refresh again and fix
  render() {

    return (
      <View>
        {this._addMomentButton()}
        <FlatList
          data={this.props.moments}
          extraData={this.state}
          keyExtractor={ (item) => item.id }
          renderItem={ this._renderItem }
          refreshing={this.state.refreshing}
          initialNumToRender={ 4 }
          onRefresh={ () => this._fetch('new')}
          onEndReachedThreshold ={0}
          onEndReached={ () => {
            if (this.props.moments.length >= 10) {
              this._fetch('more');
            }
          }}
        />
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
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer_info: {
    fontSize: 12,
    marginTop: 5,
  },
  addMoment: {
    // backgroundColor: 'pink',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
    marginTop: 10,
    marginLeft: 50

  },
  addMomentContainer: {
    // backgroundColor: 'yellow',
    marginTop: 20,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  addMomentText: {
    justifyContent: 'center',
    fontSize: 16,
  }
});
