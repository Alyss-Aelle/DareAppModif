import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { resetPlayer } from '../../redux/player'

const ResetPlayer = () => {
  const dispatch = useDispatch() ; 

  const reset = () => { 

    //utilisation du reducer de mise a zero
    dispatch(resetPlayer()) ;
   }
  return (
    <View>
      <Button onPress={reset}>Reset</Button>
    </View>
  )
}

export default ResetPlayer