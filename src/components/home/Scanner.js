import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICONS } from '../../assets/color/thems'

const Scanner = ({Press}) => {
  return (
    <TouchableOpacity
      onPress={Press}
    >
      <Image  source={ICONS.scan}/>
    </TouchableOpacity>
  )
}

export default Scanner

const styles = StyleSheet.create({})