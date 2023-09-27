
import firestore from '@react-native-firebase/firestore';

//chargement données a partir de son name 


export const loadData = async(collectionName) => { 

    //chargement des données

    const snapShot = await firestore().collection(collectionName).get() ;
    

    //verification des donnees

    if (!snapShot.empty) {
        
        const datas = snapShot.docs.map(doc => {

                        return{

                        id: doc.id , ...doc.data()

                            }
        })
        return datas; 

        

    }else{
        return [];
    }
 };// end loadData

