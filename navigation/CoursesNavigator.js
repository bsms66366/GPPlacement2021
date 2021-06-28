import { createStackNavigator } from 'react-navigation-stack';
import ModulesScreen from '../screens/ModulesScreen';
import CoursesScreen from '../screens/CoursesScreen';
 
export default createStackNavigator({
  Courses: CoursesScreen,
  Modules: ModulesScreen,
}, {
  initialRouteName: 'Courses',
});