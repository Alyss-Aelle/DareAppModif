import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


const Category = ({navigation}) => {

  


  return (
    <View>
      <Button onPress={ ()=> navigation.navigate('TruthOrDare')}>Action verité</Button>
    </View>
  )
}

export default Category