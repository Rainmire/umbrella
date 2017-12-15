import {StyleSheet} from 'react-native';
import React from 'react';

export default StyleSheet.create({
  profileScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 50,
  },
  childInfoContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  childInfo1: {
    height: 75,
    width: 300,
    borderWidth: .5,
  },
  childInfo2: {
    height: 75,
    width: 300,
    borderWidth: .5,
  },
  text: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingLeft: 10,
  },
  photo: {
    height: 150,
    width: 150,
    borderWidth: 2,
    marginBottom: 50,
    borderRadius: 75,
  },
  buttonContainer: {
    height: 150,
    width: 300,
    flex: 1,
    flexDirection: 'column',
  },
  profileButton: {
    height: 50,
    width: 300,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#bddfeb',
    borderRadius: 30,
    marginBottom: 20,
    paddingRight: 20
  },
  logOutButton: {
    height: 50,
    width: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bddfeb',
    borderRadius: 30,
    marginBottom: 20,
    paddingRight: 20
  },
  switchChildButtonText: {
    fontSize: 24,
    color: 'blue',
    paddingRight: 40
  },
  signOutButtonText: {
    fontSize: 24,
    color: 'blue',
  }
});
