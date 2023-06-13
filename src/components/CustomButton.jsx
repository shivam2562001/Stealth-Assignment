import {Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function CustomButton({onPress,buttonText}) {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text  style={styles.buttonTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: "98%",
    height: 56,
    borderRadius: 10,
    backgroundColor:"#467BFF",
    
    justifyContent: "center",
    alignItems:'center',
  },buttonTextStyle:{
    fontWeight: 600,
    fontSize: 16,
    textAlign: "center",
    color:"#ffffff",
  }
});