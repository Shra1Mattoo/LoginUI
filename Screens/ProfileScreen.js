import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, Text, ScrollView, TextInput, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Header from '../Components/Headers/index';
import COLORS from "../theme/Colors";

import SelectDropdown from 'react-native-select-dropdown';
import { FONT_SIZE } from "../Utilities/FontSize";
import { PrimaryButton } from '../Components/PrimaryButton'
import IMAGE_PATHS from "../Utilities/ImagePath";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Spacer } from "../Components/Spacer";


const ProfileScreen = ({ navigation }) => {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const citiesDropdownRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setCountries([
                { title: 'Punjab', cities: [{ title: 'Ludhiana' }, { title: 'Sirhind' }] },
                { title: 'Himachal Pradesh', cities: [{ title: 'Shimla' }, { title: 'Mandi' }] },
            ]);
        }, 1000);
    }, []);


    return (
        <ImageBackground source={IMAGE_PATHS.BgImage} style={{ flex: 1 }}>
            <SafeAreaView >

                <View style={{ backgroundColor: COLORS.Transparent, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Header
                        bgColor={COLORS.White}
                        headerImage={IMAGE_PATHS.BackLogo}

                        extraHeaderImage={IMAGE_PATHS.HeaderLogo}
                        name={'chevron-back'}
                        size={28}
                        onPress={() => navigation.goBack()}

                    />
                </View>

                <ScrollView style={{ height: heightPercentageToDP(100) }}>
                    <View style={{ paddingHorizontal: widthPercentageToDP(2), paddingTop: heightPercentageToDP(2) }}>
                        <Image source={IMAGE_PATHS.SubtractImage} />
                    </View>
                    <View style={{ paddingHorizontal: widthPercentageToDP(5), paddingTop: heightPercentageToDP(1.5) }}>
                        <Text style={{ color: COLORS.Black, fontWeight: '300', fontSize: FONT_SIZE.ExtraLarge }}>
                            My name is,
                        </Text>

                        <TextInput placeholderTextColor={COLORS.SoftGrey} placeholder="your full name." style={{ fontWeight: '300', width: widthPercentageToDP(49), paddingBottom: heightPercentageToDP(0), borderBottomColor: COLORS.Black, borderBottomWidth: 1, paddingVertical: heightPercentageToDP(1), fontSize: FONT_SIZE.ExtraLarge }}></TextInput>
                        <Text style={{ color: COLORS.Black, fontWeight: '300', fontSize: FONT_SIZE.ExtraLarge, paddingTop: heightPercentageToDP(5) }}>
                            I currently live in
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <SelectDropdown
                                data={countries}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                    citiesDropdownRef.current.reset();
                                    setCities([]);
                                    setCities(selectedItem.cities);
                                }}
                                defaultButtonText={'state'}

                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem.title;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item.title;
                                }}
                                buttonStyle={styles.dropdown1BtnStyle}
                                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                renderDropdownIcon={isOpened => {
                                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                }}
                                dropdownIconPosition={'right'}
                                dropdownStyle={styles.dropdown1DropdownStyle}
                                rowStyle={styles.dropdown1RowStyle}
                                rowTextStyle={styles.dropdown1RowTxtStyle}
                            />
                            <Text style={{ color: COLORS.Black, fontWeight: '300', paddingLeft: widthPercentageToDP(1), paddingTop: heightPercentageToDP(0.7), fontSize: FONT_SIZE.ExtraLarge }}>and</Text>

                            <SelectDropdown
                                ref={citiesDropdownRef}
                                data={cities}

                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                defaultButtonText={'city'}


                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem.title;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item.title;
                                }}
                                buttonStyle={styles.dropdown2BtnStyle}
                                buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                renderDropdownIcon={isOpened => {
                                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                }}
                                dropdownIconPosition={'right'}
                                dropdownStyle={styles.dropdown2DropdownStyle}
                                rowStyle={styles.dropdown2RowStyle}
                                rowTextStyle={styles.dropdown2RowTxtStyle}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: heightPercentageToDP(2) }}>

                            <Image source={IMAGE_PATHS.LockImage} />
                            <TouchableOpacity
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.Black,
                                    left: 5
                                }}>
                                <Text style={{
                                    color: COLORS.Black, fontSize: FONT_SIZE.ExtraSmall,
                                }}>Setup a pin</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontWeight: '300', fontSize: FONT_SIZE.ExtraLarge }}>
                            and I was born on
                        </Text>
                    </View>

                    <View style={{ paddingHorizontal: widthPercentageToDP(5) }}>
                        <TextInput keyboardType="numeric" placeholder="DDMMYYYY" placeholderTextColor={COLORS.SoftGrey} style={{ color: COLORS.Black, fontWeight: '300', width: widthPercentageToDP(44), paddingBottom: heightPercentageToDP(0), borderBottomColor: COLORS.Black, borderBottomWidth: 1, paddingVertical: heightPercentageToDP(1), fontSize: FONT_SIZE.ExtraLarge }}></TextInput>
                    </View>
                    <Spacer space={2.5} />

                    <View style={{ paddingHorizontal: widthPercentageToDP(4) }}>
                        <PrimaryButton disabled={true} text={'Next'} />

                    </View>
                </ScrollView>
            </SafeAreaView >
        </ImageBackground >
    )
}
const styles = StyleSheet.create({


    dropdown1BtnStyle: {
        height: 50,
        backgroundColor: COLORS.Transparent,
        width: widthPercentageToDP(25),

    },
    dropdown1BtnTxtStyle: { fontWeight: '300', fontSize: FONT_SIZE.ExtraLarge, color: COLORS.LightGrey, textAlign: 'left', paddingRight: widthPercentageToDP(16.7) },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
    divider: { width: 12 },
    dropdown2BtnStyle: {

        height: 50,
        width: widthPercentageToDP(21),
        backgroundColor: COLORS.Transparent,
    },
    dropdown2BtnTxtStyle: { fontWeight: '300', fontSize: FONT_SIZE.ExtraLarge, color: COLORS.LightGrey, textAlign: 'left', paddingRight: widthPercentageToDP(11.5) },
    dropdown2DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown2RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown2RowTxtStyle: { color: '#444', textAlign: 'left' },
});

export default ProfileScreen;