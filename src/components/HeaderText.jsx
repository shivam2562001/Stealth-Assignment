import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HeaderText({text}) {
  return (
    <View>
      <Text style={styles.headerTextStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerTextStyle:{
        fontWeight:600,
         fontSize:20,
      }
})