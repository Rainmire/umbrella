import { StackNavigator, TabNavigator } from "react-navigation";
import LoginForm from "../components/login_form";
import ProfileScreen from "../components/profile_screen";
import RootNavigator from "./root_navigator";

export const SignedOut = StackNavigator({
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: "Sign In"
    }
  },
});

export const SignedIn = StackNavigator({
  SignedIn: {
    screen: RootNavigator,
  },
});

const Router = StackNavigator({
  SignedIn: {
    screen: SignedIn,
  },
  SignedOut: {
    screen: SignedOut,
  },
});

export default Router;
