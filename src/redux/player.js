import { createSlice } from "@reduxjs/toolkit"
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer"

const initState = {
                players:[{id:1,name: 'gulliano0'},
                        {id:2,name: 'gulliano1'},
                        {id:3,name: 'gulliano2'},
                        {id:4,name: 'gulliano3'}],
                index: 0,
}
export const player = createSlice({
    name: 'player', 
    initialState: initState , 
    reducers: {
        addPlayer: (state,action)=>{ //ajouter un joueur
            console.log(action.payload)
            //ajoute element a la fin du tableau
            state.players.push(action.payload)
            return state ;
        } , 
        deletePlayer:(state,action)=>{ //supprimer un joueur
            console.log("action.payload",action.payload)
                
            //filtrer joueur
            const newPlayers = state.players.filter(item=>item.id != action.payload.id)

            console.log(newPlayers)

            //formater le state
            //recherche l'index => recupere tous les elements qui n'ont pas l'id de l'élément supprimé
            const newState = {
                players: newPlayers,
                index: state.index,
            }
            console.log(newState)
            return newState ;
        } ,
        resetPlayer:(state,action)=>{ //mettre a zero un joueur
            console.log("vide")
            return initState ;
        } ,
        nextPlayer:(state, action) =>{
            console.log('nextplayer',action.payload)

            const nexState = { ...state,  index:action.payload }
            return nexState ;
        },
    }
})

export const {addPlayer, deletePlayer,resetPlayer, nextPlayer} = player.actions ; 
export default player.reducer;