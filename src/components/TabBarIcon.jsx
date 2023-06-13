import {StyleSheet, View, Text,Image } from 'react-native'
import React from 'react'

export default function TabBarIcon({icon}) {
  return (
    <Image
        style={styles.image}
        source={icon}
      />
  )
}


const styles = StyleSheet.create({
    image: {
      width: '80',
      height: '80',
      resizeMode: 'contain',
    },
  });