import React from 'react'; 
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Chapters from './pages/Chapters';
import Verses from './pages/Verses';
import Preferences from './pages/Preferences';
import Privacy from './pages/Privacy';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();


function HomeScreen() {
    return (
        <Drawer.Navigator drawerContentOptions={{
            activeTintColor: '#c19666',
            itemStyle: { marginVertical: 10 },
          }}>

            <Drawer.Screen name="Início" component={Home} />
            {/* <Drawer.Screen name="Preferências" component={Preferences} /> */}
            <Drawer.Screen name="Política de Privacidade" component={Privacy} />

        </Drawer.Navigator>
    )
}

const Routes = () => {

    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                      backgroundColor: "#fff",
                    },
                  }}
            >
                <AppStack.Screen name="Home" component={HomeScreen} />

                <AppStack.Screen name="Chapters" component={Chapters} />

                <AppStack.Screen name="Verses" component={Verses} />
                
            </AppStack.Navigator>

        </NavigationContainer>
    )
}

export default Routes;