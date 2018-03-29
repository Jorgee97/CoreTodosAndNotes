import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('AuthScreen');
const initialNavState = router.getStateForAction(mainNavAction);


const NavReducer = (state = initialNavState, action) => {
  return router.getStateForAction(action, state);
};

export default NavReducer;
