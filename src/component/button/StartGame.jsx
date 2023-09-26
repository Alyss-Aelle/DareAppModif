import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const StartGame = () => {

    const navigation = useNavigation()

    //recuperation des players dans le store
    const{ players } = useSelector(state=>state.player) ;
    console.log(players.length)

    //commencer la partie //navigue vers =>
    const start = () => { 
        navigation.navigate('Category')

     }
  return (
    <View>
        {/* lancement de la partie en fonction du nombre de joueurs */}
      {players.length>=2 && <Button mode='outlined' onPress={start}>StartGame</Button>}
    </View>
  )
}

export default StartGame