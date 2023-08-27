import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
        <Image 
            source={iconUrl}
            resizeMode='cover'
            style={styles.btnImg(dimension)}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn