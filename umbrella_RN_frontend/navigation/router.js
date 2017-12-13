import { StackNavigator, TabNavigator } from "react-navigation";
import LoginForm from "../components/login_form";
import ProfileScreen from "../components/profile_screen";
import RootNavigator from "./root_navigator";

// export const SignedOut = StackNavigator({
//   LoginForm: {
//     screen: LoginForm,
//     navigationOptions: {
//       title: "Sign In"
//     }
//   },
// });
//
// export const SignedIn = StackNavigator({
//   SignedIn: {
//     screen: SignedIn,
//   },
// });

// const Router = StackNavigator({
//   SignedIn: {
//     screen: SignedIn,
//   },
//   SignedOut: {
//     screen: SignedOut,
//   },
// });

// import { NavigationActions } from 'react-navigation'
//
// const navigateAction = NavigationActions.navigate({
//
//   routeName: 'SwitchChildPage',
//
//   params: {},
//
//   action: NavigationActions.navigate({ routeName: 'SwitchChildPage'})
// })
//
// // this.props.navigation.dispatch(navigateAction)
//
//
//
// export default navigateAction;
