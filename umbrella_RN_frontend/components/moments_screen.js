import React from 'react';
import { StyleSheet,
         View,
         Text,
         Image,
         Button,
         AsyncStorage,
         FlatList,
         TouchableOpacity,
         RefreshControl,
         Modal
        } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class MomentsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      isTeacher: false,
      modalVisible: false,
      modalImage:""
    };
  }

  static navigationOptions = {
    tabBarLabel: 'Moments',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="newspaper-o" size={30} color={tintColor}  />
    )
  };

  openModal(image_url){
    this.setState({modalVisible:true,modalImage: `${image_url}`},()=>{console.log("setState",this.state);})
  }

  _renderItem = ({ item }) => {
    const privacy = item.is_public ? 'Public' : 'Private';
    const author = this.props.users[item.author_id];
    const timeStampSplit = item.created_at.split('T');
    const dateStamp = timeStampSplit[0];
    const timeStamp = timeStampSplit[1].split('.')[0];
    let momentImage;
    if(item.image_url !== null){
      momentImage = (<TouchableOpacity>
        <Image
          source={{ uri: item.image_url }}
          style={styles.moments_image}
          />
      </TouchableOpacity>)
    }
    console.log('this it the item in the render item moments index: ', item);
    return(
      <View style={styles.moments_container}>
        <View style={styles.image_container}>
          <Image
            source={{ uri:`${author.profile_pic}` }}
            style={styles.profile_pic}
          />
        </View>
        <View style={styles.moment}>
          <Text style={styles.name}>{`${author.name}`}</Text>
          <Text style={styles.moment_body}>{`${item.body}`}</Text>
          {momentImage}
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
          <TouchableOpacity
            onPress={this._addMoment}
            style={styles.addMoment}
            >
            <Text style = {styles.addMomentText}>Add</Text>
            <Icon name='plus' size={20} color='#000' />
          </TouchableOpacity>
        </View>
      );
    }
  }

  componentDidMount(){
    this.setState({refreshing: true});

    if (this.props.currentUser && this.props.currentUser.teacher_class) {
      this.setState({ isTeacher: true});
    }
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
        <Modal
          visible = {this.state.modalVisible}
        >
          <Image source = {{uri:this.state.modalImage}}></Image>
        </Modal>
      </View>
    );
  }
}

export default MomentsScreen;

export const styles = StyleSheet.create({
  moments_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  profile_pic: {
    height: 50,
    width: 50
  },
  moment: {
    marginLeft: 20,
    flex: 1
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
  },
  moment_body: {
    flex: 1,
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
    justifyContent: 'flex-start',
  },
  footer_info: {
    fontSize: 12,
    marginTop: 5,
    color: "grey"
  },
  addMoment: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    paddingTop: 25,
    marginLeft: 50,
    marginRight: 10
  },
  addMomentContainer: {
    height: 50,
  },
  addMomentText: {
    marginRight: 8,
    marginTop: 2
  }
});
