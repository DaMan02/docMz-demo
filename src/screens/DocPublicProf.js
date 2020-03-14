import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import fonts from '../assets/fonts';
import OutlineButton from '../components/OutlineButton'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../assets/colors';
import NormalButton from '../components/NormalButton';

const ms = wp('10%');

class DocPublicProf extends React.Component {

    render() {
        const { navigation } = this.props;
        const { docName } = this.props.route.params;
        return (
            <View style={styles.main}>
                <View style={styles.dp}>
                    <Image source={require('../assets/images/doc.jpg')}
                        style={styles.image} />
                    <View style={styles.btn}>
                        <NormalButton onPress={() => navigation.navigate('ConsultOptions')}
                            radius={8} text='CONSULT NOW' backgroundColor={colors.greenblue}></NormalButton>
                    </View>
                </View>
                <ScrollView>
                    <Text style={{ ...fonts.large, alignSelf: 'flex-start', marginStart: wp('10%'), marginTop: hp('2%') }}>Dr. {docName}</Text>
                    <Text style={{ ...fonts.h3_thin, marginStart: ms, alignSelf: 'flex-start', marginBottom: hp('2%') }}>Surgeon</Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Status:   </Text>
                        <Text style={{ color: colors.darkgreen }}>Available</Text>
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Gender:   </Text>
                        <Text>Male</Text>
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Country:   </Text>
                        <Text>United States</Text>
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Address:   </Text>
                        <Text>21 S END AVE, New York - 110023</Text>
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Country:   </Text>
                        <Text>United States</Text>
                    </Text>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    dp: {
        marginTop: hp('1%'),
        flexDirection: 'row'
    },
    btn: {
        marginTop: hp('24%'),
        marginStart: wp('4%')
    },
    image: {
        marginTop: hp('10%'),
        marginStart: wp('10%'),
        height: hp('24%'),
        alignSelf: 'flex-start',
        width: 100,
        borderRadius: 10,
    },
    txt: {
        ...fonts.h3_thin,
        marginStart: ms,
        marginTop: 10
    }
});

export default DocPublicProf;