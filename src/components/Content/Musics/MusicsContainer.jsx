import React from 'react';
import { connect } from 'react-redux';
import {AddMusictActionCreator} from '../../../redux/MusicsReducer'
import {AddMusicTextActionCreator} from '../../../redux/MusicsReducer'
import Musics from './Musics'

//  let MusicsContainer = (props) => {
// let state = props.store.getState();
// let AddTrack = () => {
// props.store.dispatch(AddMusictActionCreator());
//         props.store.dispatch(AddMusicTextActionCreator(''));
        
//      }
//      let ChangeMusicsText = (NewMusicText) => {
        
//         props.store.dispatch(AddMusicTextActionCreator(NewMusicText));
//     }

//      return (<Musics
//          AddTrack = {AddTrack}
//          ChangeMusicsText = {ChangeMusicsText}
//          MusicsPage = {state.MusicsPage}/>)
        
  
//  }
let mapStateToProps = (state) => {
    
    return{
        MusicsPage : state.MusicsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddTrack : () => {
            dispatch(AddMusictActionCreator())
            dispatch(AddMusicTextActionCreator(''))
        },
        ChangeMusicsText : (NewMusicText) => {dispatch(AddMusicTextActionCreator(NewMusicText))}
    }
}
const MusicsContainer = connect (mapStateToProps, mapDispatchToProps)(Musics);

export default MusicsContainer;