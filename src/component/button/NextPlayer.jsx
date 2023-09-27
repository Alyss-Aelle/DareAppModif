import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { nextPlayer } from '../../redux/player'
import { useNavigation } from '@react-navigation/native'

const NextPlayer = ({id }) => {

  

  const navigation = useNavigation()



  //ecrire dans le store la nouvelle position
  const dispatch= useDispatch()
  const {players , index } = useSelector(state =>state.player)


  //boucle pour le changement  d'index(joueur) par rapport a la taille du tableau
  const suivant = () => { 

    navigation.navigate('TruthOrDare', {id: id})
    if (players.length == index + 1) {
      dispatch(nextPlayer(0)) ; 
    }else{
      dispatch(nextPlayer(index + 1)) ; 
    }
   
    
   }
  return (
    <View>
      <Button  onPress={suivant}>NextGame</Button>
    </View>
  )
}

export default NextPlayer