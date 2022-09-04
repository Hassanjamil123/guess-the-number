import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const GameOverScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Game Over</Text>
      <Text>
          Number of rounds : {props.roundsNumber}
      </Text>
      <Text>
          The number was : {props.userNumber}
      </Text>
      <Button 
      title="NEW GAME"
      onPress={props.onRestart}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen