import { StackNavigator, TabNavigator } from "react-navigation";

import LoginForm from "../components/login_form";
import ProfilePage from "../components/profile_page";


export const SignedOut = StackNavigator({
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

// not sure if this tab navigator needs to go in here
export const SignedIn = TabNavigator({
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  }
});