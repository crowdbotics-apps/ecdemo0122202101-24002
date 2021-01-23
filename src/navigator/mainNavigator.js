import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile4195462Navigator from '../features/UserProfile4195462/navigator';
import Maps7195459Navigator from '../features/Maps7195459/navigator';
import SplashScreen1195465Navigator from '../features/SplashScreen1195465navigator';
//onboarding, login, terms, privacy, articles

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile4195462: { screen: UserProfile4195462Navigator },
Maps7195459: { screen: Maps7195459Navigator },
    
//onboarding, login, terms, privacy, articles
SplashScreen1195465: { screen: SplashScreen1195465Navigator },
    
    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: "SplashScreen1195465", // Splash Screen
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
