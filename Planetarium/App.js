import React from 'react';
import {Text} from 'react-native';
import SolarSystem from './components/solarsystem';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import InfoPage from './InfoPage';

class App extends React.Component {
  constructor(){
    super()
  }

  render() {     
    
    return (      
      <InfoPage/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Planetarium: { screen: SolarSystem },
  Info: { screen: App }
  
});

export default createAppContainer(TabNavigator);

