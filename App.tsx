import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import Home from './screens/Home/index';
import Season from './screens/Season/index';

export type RootStackParamList = {
    Home: undefined;
    Season: { year: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export default class App extends Component {
    state = {
        isReady: false,
    };

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...
            Ionicons.font,
        });

        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Season" component={Season} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
