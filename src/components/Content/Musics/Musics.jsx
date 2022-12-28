import React from 'react';
import styles from './Music.module.css';
import SingerNamesItems from './MusicItem/SingerNames';
import NamesItems from './MusicItem/SongsName';


let Musics = (props) => {
    
    let SongsData = props.MusicsPage.MusicsNames.map(names => <NamesItems name= {names.name} id= {names.id}/>)
    
    let SingerNamesData =  props.MusicsPage.SingersNames.map(singernames => <SingerNamesItems singername= {singernames.singername} id= {singernames.id}/>)
    
    let NewTrack = () => {
        props.AddTrack();
        props.ChangeMusicsText('');
        
    }
    let onMusicsChange = (e) => {
        let NewMusicText = e.target.value;
        
        props.ChangeMusicsText(NewMusicText);
    }

    return (
        <div>
            <div>
                <textarea 
                placeholder='Add music'
                onChange={onMusicsChange}
                value={props.MusicsPage.NewMusicsText}> </textarea>
            </div>
            <div>
                <button onClick={NewTrack}>Add</button>
            </div>
        <div className={styles.music}>
            <div>
                {SingerNamesData}
            </div>
            <div>
                {SongsData}
            </div>
        </div>
        </div>
    )
}

export default Musics;