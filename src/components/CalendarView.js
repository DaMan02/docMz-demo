import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import fonts from '../assets/fonts';
import colors from '../assets/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

function getTodayString() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    if (month < 10) month = '0' + month;
    var today = year + '-' + month + '-' + date;
    return today;
}

export default class CalendarView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }

    onDayPress = (day) => {
        // console.log(day)
        this.setState({ selected: day.dateString });
        this.props.callback(day);
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.text}>Select a date</Text>
                    <Calendar
                        style={styles.calendar}
                        theme={calTheme}
                        hideExtraDays
                        onDayPress={this.onDayPress}
                        markedDates={{
                            [this.state.selected]: {
                                selected: true,
                                disableTouchEvent: true,
                                selectedDotColor: 'orange'
                            }
                        }}
                    />
                </View>
            </ScrollView>
        );
    }
}

const colorsList = {
    main: '#00A3B4',
    dark: '#007A9B',
    today: '#CF8700'
}

const styles = StyleSheet.create({
    container: {
    },
    calendar: {
        // marginBottom: 8,
    },
    text: {
        ...fonts.large,
        alignSelf: 'flex-start',
    }
});


const calTheme = {
    // Disclaimer: Issues that arise because something breaks after using stylesheet override 
    // will not be supported. Use this option at your own risk.
    /* arrowColor: 'white',
     'stylesheet.calendar.header': {
         week: {
            marginTop: 5,
            flexDirection: 'row',
           justifyContent: 'space-between'
       }
     }, */
    backgroundColor: 'white',
    calendarBackground: 'white',
    textSectionTitleColor: colorsList.main,
    selectedDayBackgroundColor: colorsList.main,
    selectedDayTextColor: '#ffffff',
    todayTextColor: colorsList.today,
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: colors.button,
    disabledArrowColor: '#d9e1e8',
    monthTextColor: colorsList.dark,
    // indicatorColor: 'blue',
    textDayFontFamily: 'balooThambi2_Regular',
    textMonthFontFamily: 'balooThambi2_Medium',
    textDayHeaderFontFamily: 'balooThambi2_Regular',
    textDayFontWeight: '100',
    textDayHeaderFontWeight: '100',
    textDayFontSize: 18,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 14
}