import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NumberContainer = props => {
  return (
        <Text style={{...styles.number}}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
    number: {
        marginTop: 10, 
        fontSize: 22, 
        fontWeight: '500'
    }
}) 

export default NumberContainer;