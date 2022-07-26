import React from "react";
import { SafeAreaView, View, Text, ScrollView, TextInput, Image, ImageBackground, TouchableOpacity } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Header from '../Components/Headers/index';
import COLORS from "../theme/Colors";
import { FONT_NAME } from "../Utilities/FontName";
import { FONT_SIZE } from "../Utilities/FontSize";
import { PrimaryButton } from '../Components/PrimaryButton'
import IMAGE_PATHS from "../Utilities/ImagePath";
import { Spacer } from "../Components/Spacer";
import OtpScreen from "./OtpScreen";

const PhoneScreen = ({ navigation }) => {

    return (
        <ImageBackground source={IMAGE_PATHS.BgImage2} style={{ flex: 1 }}>
            <SafeAreaView >

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Header
                        bgColor={COLORS.White}
                        headerImage={IMAGE_PATHS.BackLogo}

                        extraHeaderImage={IMAGE_PATHS.LeafLogo}
                        name={'chevron-back'}
                        size={28}
                        onPress={() => navigation}
                        navigation={navigation}
                    />
                </View>

                <ScrollView scrollEnabled={false} style={{ height: heightPercentageToDP(100) }}>
                    <View style={{ paddingHorizontal: widthPercentageToDP(2), paddingVertical: heightPercentageToDP(0.5) }}>
                        <Image source={require('../assets/Images/SubtractImage/Subtract.jpg')} />
                    </View>
                    <View style={{ paddingHorizontal: widthPercentageToDP(5), paddingTop: heightPercentageToDP(0.5) }}>
                        <Text style={{ color: COLORS.Black, fontSize: FONT_SIZE.ExtraLarge }}>
                            Hello,
                        </Text>
                        <Text style={{ color: COLORS.Black, color: COLORS.Black, fontSize: FONT_SIZE.ExtraLarge }}>
                            What's your mobile
                        </Text>
                        <Text style={{ color: COLORS.Black, fontSize: FONT_SIZE.ExtraLarge }}>
                            number?
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: widthPercentageToDP(5), paddingVertical: widthPercentageToDP(10) }}>
                        <TextInput
                            keyboardType="number-pad"
                            style={{
                                color: COLORS.Black,
                                borderWidth: 1,
                                fontSize: FONT_SIZE.ExtraMedium,
                                borderRadius: 15,
                                paddingHorizontal: widthPercentageToDP(5),
                                borderColor: COLORS.Black,
                                width: widthPercentageToDP(89),
                                height: heightPercentageToDP(7)
                            }}>

                        </TextInput>
                        <Spacer space={3} />
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
                    <Spacer space={5} />

                    <View style={{ paddingHorizontal: widthPercentageToDP(68) }}>
                        <PrimaryButton text={'Next'} onPress={() => navigation.navigate('OtpScreen')} />

                    </View>
                </ScrollView>
            </SafeAreaView >
        </ImageBackground>
    )
}
export default PhoneScreen;