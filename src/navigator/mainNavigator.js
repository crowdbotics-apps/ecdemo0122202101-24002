import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile4195462Navigator from '../features/UserProfile4195462/navigator';
import Maps7195459Navigator from '../features/Maps7195459/navigator';
import SplashScreen1195465Navigator from '../features/SplashScreen1195465/navigator';
//onboarding, login, terms, privacy, articles
import Onboarding2195464Navigator from '../features/Onboarding2195464/navigator';
import LoginAndSignup3195463Navigator from '../features/LoginAndSignup3195463/navigator';
import Articles5195461Navigator from "../features/Articles5195461/navigator";
import TermsAndConditions8195458Navigator from '../features/TermsAndConditions8195458/navigator';
import PrivacyPolicyScreen9195457Navigator from '../features/PrivacyPolicyScreen9195457/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile4195462: { screen: UserProfile4195462Navigator },
Maps7195459: { screen: Maps7195459Navigator },
    
//onboarding, splash, login, terms, privacy, articles
Onboarding2195464: { screen: Onboarding2195464Navigator },
SplashScreen1195465: { screen: SplashScreen1195465Navigator },
LoginAndSignup3195463: { screen: LoginAndSignup3195463Navigator },
Articles5195461: { screen: Articles5195461Navigator },
TermsAndConditions8195458: { screen: TermsAndConditions8195458Navigator },
PrivacyPolicyScreen9195457: { screen: PrivacyPolicyScreen9195457Navigator },
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
