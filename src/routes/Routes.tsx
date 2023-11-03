import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParams } from '../types';
import Home from '../screens/Home';
import Detail from '../screens/Home/Detail';

const Stack = createNativeStackNavigator<RootStackParams>();
const routesScreensDefaultOptions = {
    headerStyle: {
        backgroundColor: '#000C91'
    },
    headerTitleStyle: {
        color: '#FFF',
    },

};

const Routes = () => (

    <NavigationContainer >
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name='Home' component={Home} options={routesScreensDefaultOptions} />
            <Stack.Screen name='Detail' component={Detail} options={routesScreensDefaultOptions} />
        </Stack.Navigator>
    </NavigationContainer>
);


export default Routes;