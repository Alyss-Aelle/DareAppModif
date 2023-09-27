import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import NextPlayer from '../component/button/NextPlayer'

const ShowTruthOrDare = () => {
  const {players , index } = useSelector(state => state.player)
  console.log(players, index)
  return (
    <View>
      <Text>{players[index].name}</Text>
      <NextPlayer id={id} />
    </View>
  )
}

export default ShowTruthOrDare