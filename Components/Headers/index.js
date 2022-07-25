import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../theme/Colors'
import { FONT_SIZE } from '../../Utilities/FontSize';

const Header = props => {
  const { bgColor, extraHeaderImage, headerImage, text, name, color, size, onPress, navigation } =
    props;
  return (
    <View style={{ paddingBottom: wp(0.4) }}>
      <View
        style={{


          shadowRadius: 1.5,
          elevation: 5,
          position: 'relative',
          paddingHorizontal: wp(2),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          width: wp(100),
          flexDirection: 'row',
          backgroundColor: COLORS.Transparent,
          height: wp(100) / 7,
        }}>
        <View
          style={{

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}></View>

        <View
          style={{
            width: wp(92),

            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={onPress}>
            <Image source={headerImage} resizeMode={'contain'} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={extraHeaderImage} resizeMode={'contain'} />
          </TouchableOpacity>


        </View>
        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
          }}></View>
      </View>
    </View>
  );
};
export default Header;