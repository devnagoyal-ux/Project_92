import React from 'react';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';


export default class App extends React.Component {
  render(){
  return(
  <AppContainer/>
  );
}
}

const switchNavigator = createSwitchNavigator({
  Screen1 : {screen: Screen1},
  Screen2 : {screen: Screen2}
})

const AppContainer = createAppContainer(switchNavigator);



