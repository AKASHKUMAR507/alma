import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ICONS } from '../../assets/color/thems'

const Notification = ({Press}) => {
  return (
    <TouchableOpacity onPress={Press}>
      <Image source={ICONS.notification} />
    </TouchableOpacity>
  )
}

export default Notification

const styles = StyleSheet.create({})