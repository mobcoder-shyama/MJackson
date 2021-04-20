import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




//Screens

import Splash from '../screens/initial/Splash';
import Home from '../screens/main/Home';
import Details from '../screens/main/Details';






const Stack = createStackNavigator();

const RootStack = props => {

  const [state, setState] = React.useState({
    loading: true,
  })

  React.useEffect(() => {
    setTimeout(() => {
      setState({ loading: false })
    }, 2000);
  }, [props.IsLogin, props.UserToken]);


  if (state.loading) {
    return <Splash />;
  }







  return (
    <NavigationContainer>

      <Stack.Navigator headerMode="none" initialRouteName={'main'}>

       <Stack.Screen
          name="main"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="details"
          component={Details}
          options={{ headerShown: false }}
        />




      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default RootStack;
