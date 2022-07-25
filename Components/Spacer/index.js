import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Spacer = ({ space, row }) => {
  return (
    <View
      style={{
        marginVertical: space && hp(`${space}%`),
        marginHorizontal: row && wp(`${row}%`),
      }}
    />
  );
};