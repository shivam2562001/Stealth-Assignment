import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LightText({text}) {
  return (
    <View>
      <Text style={styles.LightTextStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    LightTextStyle:{
        fontWeight:400,
         fontSize:14,
      }
})