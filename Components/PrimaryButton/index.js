import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import COLORS from '../../theme/Colors';

import { FONT_SIZE } from '../../Utilities/FontSize';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export function PrimaryButton({ text, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={
        disabled ? styles.disabledStyle :
          styles.primarybtn}
      onPress={onPress}
      disabled={disabled}>

      <Text style={disabled ? styles.disabledText : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primarybtn: {

    backgroundColor: COLORS.LightBlack,
    width: width * 0.25,
    borderRadius: 30,
    height: height * 0.058,

  },
  disabledStyle: {

    backgroundColor: COLORS.SoftGrey,
    width: width * 0.30,
    borderRadius: 30,
    height: height * 0.061,
  },
  disabledText: {
    paddingTop: heightPercentageToDP(1.7),
    textAlign: 'center',
    color: COLORS.OffWhite,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.ExtraMedium,

  },
  text: {

    paddingTop: heightPercentageToDP(1.7),
    textAlign: 'center',
    color: COLORS.White,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.ExtraMedium,

  },
});
