import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const TruthOrDare = ({navigation}) => {

  
  return (
    <View>
      <Button onPress={()=> navigation.navigate('ShowTruthOrDare')}>ShowTruth</Button>
      <Button onPress={()=> navigation.navigate('ShowTruthOrDare')}>ShowDare</Button>
    </View>
  )
}

export default TruthOrDare