import { 
    View, 
    Text, 
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
     } from 'react-native'
import React, {useState} from 'react'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'


const StartGameScreen = props => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const resetInputHandler = () => {
      setEnteredValue('');
      setConfirmed(false)
  }

  const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert("Error", "Please enter a valid number", [{text: 'Okay'}])
        }
    setConfirmed(true)
    setSelectedNumber(chosenNumber);
    setEnteredValue('')
    Keyboard.dismiss()
  }

  let confirmedOutput; 

  if(confirmed){
    confirmedOutput = (
    <Card style={styles.chosenStyle}>
        <Text>You Selected </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <View style={styles.startButton}>
            <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
        </View>
    </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={
        () => Keyboard.dismiss()
    }>
    <View style={styles.container}>
      <Text style={styles.title}>Start a new game </Text>
      <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input 
          style={styles.inputStyle} 
          blurOnSubmit 
          autoCapitalize="none" 
          autoCorrect={false} 
          keyboardType="number-pad" 
          maxLength={2} 
          value={enteredValue}
          onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Reset" onPress={() => resetInputHandler()} color={Colors.accent} />
              </View>
              <View style={styles.button}>
                <Button title="Confirm" onPress={() => confirmInputHandler()} color={Colors.primary} />
              </View>
          </View>
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20, 
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    inputStyle: {
        width: 50,
        textAlign: 'center'
    },
    chosenStyle: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
     marginTop: 10   
    }

})


export default StartGameScreen