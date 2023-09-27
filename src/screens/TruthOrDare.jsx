import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const TruthOrDare = ({navigation, route}) => {

  const {id} = route.params ; 


  
  return (
    <View>
      <Button onPress={()=> navigation.navigate('ShowTruthOrDare', {id: id , type: 'dare'})}>Dare</Button>
      <Button onPress={()=> navigation.navigate('ShowTruthOrDare',{id: id , type: 'truth'})}>Truth</Button>
    </View>
  )
}

export default TruthOrDare