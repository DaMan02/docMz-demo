import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  BackHandler,
  StatusBar,
  Image
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Api } from '../../constants';
import { Axios } from '../../config';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import Speciality from '../../components/Speciality';
import DoctorPreview from '../../components/DoctorPreview';
import Icon from 'react-native-vector-icons/Ionicons';
import dimen from '../../assets/dimen';
import docs from '../../database/doctorsDemo.json'
import specs from '../../database/specialityDemo.json'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ViewAll from '../../components/ViewAll';
import Searchbar from '../../components/Searchbar';
import Titlebar from '../../components/Titlebar';

class DoctorSearch extends Component {
  state = {
    selectedOption: 1,
    doctorsList: [],
    specialityList: [],
    isLoading: true,
  };

  backAction = () => {
    this.props.navigation.goBack()
    return true;
  };

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
    try {
      // let doctorList = await Axios.post(Api.doctors + Api.getDoctors);
      // let doctorsList = docs.doctor_details;
      // let specialityList = await Axios.get(Api.doctors + Api.getSpecialities);
      this.setState({
        doctorsList: docs.doctor_details,
        specialityList: specs.specialities,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
      alert(error.message);
    }
  }

  onChangeText() {

  }

  render() {
    return (
      <View
        onStartShouldSetResponderCapture={() => { this.setState({ enableScrollViewScroll: true }); }}
        style={styles.container}>
        <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
        <Titlebar title='DocMz'/>
        <Searchbar onChangeText={(text) => this.onChangeText(text)}
          hint='Search doctors' />
        <ScrollView>
          <View
            style={styles.catMain}>
            <ViewAll title='SELECT SPECIALITY' onPress={() => this.props.navigation.navigate('AllSpecialities')}/>
            <ScrollView
              horizontal={this.state.specialityList.length > 0}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scroll}>
              {this.state.specialityList.length > 0 ? (
                this.state.specialityList.slice(0, 6).map(sp => {
                  return (
                    <Speciality onPress={() => console.log('click')}
                      title={sp.name} uri={require('../../assets/images/stetho.png')} />
                  );
                })
              ) : (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: hp('20%'),
                    }}>
                    {this.state.isLoading ? (
                      <ActivityIndicator size="large" color={colors.primary2} />
                    ) : (
                        <Text>No speciality found</Text>
                      )}
                  </View>
                )}
                <View style={{width: 28}}></View>
            </ScrollView>
          </View>
          {/* start free docs */}
          <ViewAll title='FREE CHECKUP' onPress={() => this.props.navigation.navigate('AllDoctors', { docType: 'All Free Checkups'})}/>
          {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.slice(0, 3).map(doctor => {
              return (
                <View key={doctor.id}>
                  <DoctorPreview
                    onPress={() => this.props.navigation.navigate('DocPublicProf',
                      { doc: doctor })}
                      // onClick={() => this.props.navigation.navigate('Visit')}
                    name={doctor.name} spec={doctor.speciality} avail={doctor.available_in_min} />
                </View>
              );
            })
          ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp('20%'),
                }}>
                {this.state.isLoading ? (
                  <ActivityIndicator size="large" color={colors.primary2} />
                ) : (
                    <Text>No doctors found</Text>
                  )}
              </View>
            )}
          {/* end free docs */}

          <ViewAll title='TOP DOCTORS' onPress={() => this.props.navigation.navigate('AllDoctors', { docType: 'All Doctors'})} />
          {/* <ScrollView > */}
          {/* {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.map(doctor => {
              return (
                <View key={doctor._id}>
                  <DoctorPreview
                    onPress={() => this.props.navigation.navigate('DocPublicProf',
                      { docName: doctor.basic.name })}
                    name={doctor.basic.name}  spec='General Physician' loc='Las Vegas, United States' avail={28}/>
                </View>
              ); 
            }) */}
          {this.state.doctorsList.length > 0 ? (
            this.state.doctorsList.slice(0, 10).map(doctor => {
              return (
                <View key={doctor.id}>
                  <DoctorPreview
                    onPress={() => this.props.navigation.navigate('DocPublicProf',
                      { doc: doctor })}
                    name={doctor.name} spec={doctor.speciality} avail={doctor.available_in_min} />
                </View>
              );
            })
          ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp('20%'),
                }}>
                {this.state.isLoading ? (
                  <ActivityIndicator size="large" color={colors.primary2} />
                ) : (
                    <Text>No doctors found</Text>
                  )}
              </View>
            )}
          {/* </ScrollView> */}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg
  },
  catMain: {
    minHeight: hp('25%'),
    backgroundColor: colors.bg
  },
  title: {
    ...fonts.para,
    marginStart: 18,
    marginBottom: hp('1%'),
    marginTop: hp('4%')
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20,
  },
});

export default DoctorSearch;
