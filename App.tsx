import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import Card from './src/components/CreditCard';


export default function App() {
  const [creditNumber, setCreditNumber] = useState({
    name: '',
    cardNumber: '',
    securityCode: '',
    expiresIn: ''
  })

  return (
    <View style={styles.container}>
      <Card data={
        creditNumber} />
      <View style={styles.group}>

        <TextInputMask
          style={styles.input}
          placeholder="card number"
          type={'credit-card'}
          options={{
            obfuscated: false,
          }}
          value={creditNumber.cardNumber}
          onChangeText={text => {
            setCreditNumber({ ...creditNumber, cardNumber: text })
          }}
        />

        <TextInput style={styles.input}
          value={creditNumber.name}
          placeholder="cardhold name"
          maxLength={23}
          onChangeText={text => {
            setCreditNumber({ ...creditNumber, name: text })
          }}
        />

      </View>
      <View style={styles.groupIn}>

        <TextInputMask
          style={styles.inputMini}
          type={'datetime'}
          placeholder="expires"
          options={{
            format: 'MM/DD'
          }}
          value={creditNumber.expiresIn}
          onChangeText={text => {
            setCreditNumber({ ...creditNumber, expiresIn: text })
          }}
        />

        <TextInput style={styles.inputMini}
          placeholder="CVV"
          value={creditNumber.securityCode}
          maxLength={3}
          onChangeText={text => {
            setCreditNumber({ ...creditNumber, securityCode: text })
          }}
        />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  groupIn: {
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#dcdde1',
    width: '80%',
    height: 50,
    marginBottom: 8,
    borderRadius: 8,
    fontSize: 26,
    paddingLeft: 10
  },
  inputMini: {
    backgroundColor: '#dcdde1',
    width: '40%',
    marginLeft: '1%',
    height: 50,
    marginBottom: 8,
    borderRadius: 8,
    fontSize: 26,
    paddingLeft: 10
  },
});
