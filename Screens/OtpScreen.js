import React, { useRef } from 'react';
import { SafeAreaView, View, Text, ScrollView, TextInput, Image, StyleSheet, Touchable, TouchableOpacity, ImageBackground } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Header from '../Components/Headers/index';
import COLORS from "../theme/Colors";

import { FONT_SIZE } from "../Utilities/FontSize";
import { PrimaryButton } from '../Components/PrimaryButton'
import IMAGE_PATHS from "../Utilities/ImagePath";
import { Spacer } from "../Components/Spacer";
import OTPTextView from 'react-native-otp-textinput';


const OtpScreen = ({ navigation }) => {



    return (
        <ImageBackground source={IMAGE_PATHS.BgImage2} style={{ flex: 1 }}>
            <SafeAreaView >

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
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
                    <View style={{ paddingHorizontal: widthPercentageToDP(2.5), paddingVertical: heightPercentageToDP(0.5) }}>
                        <Image source={IMAGE_PATHS.UnionImage} />
                    </View>
                    <View style={{ paddingHorizontal: widthPercentageToDP(5), paddingTop: heightPercentageToDP(0.5) }}>
                        <Text style={{ color: COLORS.Black, fontSize: FONT_SIZE.ExtraLarge }}>
                            Enter the
                        </Text>
                        <Text style={{ color: COLORS.Black, fontSize: FONT_SIZE.ExtraLarge }}>
                            verfication code
                        </Text>
                        <Text style={{ color: COLORS.Black, paddingVertical: heightPercentageToDP(1), color: COLORS.LightBlue, fontSize: FONT_SIZE.ExtraMedium }}>
                            We've sent it to 7506027757
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: widthPercentageToDP(5), paddingVertical: heightPercentageToDP(2), }}>
                        <OTPTextView

                            containerStyle={styles.textInputContainer}
                            textInputStyle={styles.roundedTextInput}
                            defaultValue=""
                            tintColor={COLORS.LightGrey}

                        />
                        <View style={{ flexDirection: 'row', paddingVertical: heightPercentageToDP(2) }}>
                            <Text style={{ fontSize: FONT_SIZE.MidSmall, color: COLORS.LightBlue, paddingRight: widthPercentageToDP(1), fontWeight: '300' }}> Didn't get the code?</Text>
                            <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: COLORS.Black }}><Text style={{ fontWeight: '500', fontSize: FONT_SIZE.MidSmall, color: COLORS.LightBlue }} >Resend in 30 seconds</Text></TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

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
                    </View>

                    <Spacer space={4} />

                    <View style={{ paddingHorizontal: widthPercentageToDP(68) }}>
                        <PrimaryButton text={'Next'} onPress={() => navigation.navigate('ProfileScreen')} />

                    </View>
                </ScrollView>
            </SafeAreaView >
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    textInputContainer: {
        // backgroundColor: 'red',
        paddingRight: widthPercentageToDP(50)
    },
    roundedTextInput: {
        borderRadius: 14,

        borderWidth: 1,
        borderBottomWidth: 1,
        height: heightPercentageToDP(7)
    },
})
export default OtpScreen;