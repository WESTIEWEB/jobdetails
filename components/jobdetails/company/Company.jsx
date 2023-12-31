import { View, Text, Image } from 'react-native'
import React from 'react'

import { icons } from '../../../constants';
import styles from './company.style';
import { checkForImage } from '../../../utils';

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={
      styles.container
    }>
      <View style={
        styles.logoBox
      }>
        <Image 
          source={{
            uri: checkForImage(companyLogo) ? companyLogo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }}
          resizeMode='contain'
          style={
            styles.logoImage
          }
        />
      </View>
      <Text>heloooo</Text>
    </View>
  )
}

export default Company