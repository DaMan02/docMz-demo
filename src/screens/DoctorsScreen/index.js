import React, { Component } from 'react';
import Launch from './Launch';
import DocPublicProf from './DocPublicProf';
import DoctorSearch from './DoctorSearch';
import ConsultOptions from './ConsultOptions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Visit from './Visit';
import AllSpecialities from './AllSpecialities';
import AllDoctors from './AllDoctors';
import SignedOut from '../ProfileScreen/SignedOut';

const Stack = createStackNavigator();

class DoctorScreen extends Component {

    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator
                    initialRouteName='Launch'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="Launch" component={Launch} />
                    <Stack.Screen name="DocPublicProf" component={DocPublicProf} />
                    <Stack.Screen name="DoctorSearch" component={DoctorSearch} />
                    <Stack.Screen name="ConsultOptions" component={ConsultOptions} />
                    <Stack.Screen name="Visit" component={Visit} />
                    <Stack.Screen name="AllSpecialities" component={AllSpecialities} />
                    <Stack.Screen name="AllDoctors" component={AllDoctors} />
                    <Stack.Screen name="SignedOut" component={SignedOut} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default DoctorScreen;
