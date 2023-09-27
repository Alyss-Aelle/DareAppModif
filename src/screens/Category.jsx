import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoading } from '../redux/loading'
import { loadData } from '../commonjs/db'
import ItemCategory from '../component/ItemCategory'


const Category = ({navigation}) => {

  const [categories, setCategories] = useState([]) ;

  const loading = useSelector(state =>state.loading) ;
  const dispatch = useDispatch() ;

  //lance le loading 
  const loadCategory = async() => { 

    //recupere la fonction du store pour le chargement 
    dispatch(updateLoading()) ;


    //recuperation des categories dans la collection 
    const dataCategories = await loadData('category') ;

    setCategories(dataCategories) ; 

    dispatch(updateLoading()) ;


   }
  
   useEffect(() => {
    loadCategory()
  }, [])
  


  return (
    <View>
      {/* listing des categories et utilisation de la props a injecter dans itemcategory */}
      <FlatList
      data={categories}
      renderItem={({item}) => <ItemCategory category={item}/> }
      keyExtractor={item => item.id}  />
    </View>
  )
}

export default Category