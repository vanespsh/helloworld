let initialState = {
  MusicsNames: [
    { id: 1, name: "Funny bebra" },
    { id: 2, name: "Ababa Obobo" },
    { id: 3, name: "Fukin Mother" },
    { id: 4, name: "Your Mom" },
    { id: 5, name: "Your Sister" },
    { id: 6, name: "Something Wrong" },
    { id: 7, name: "Summer" },
    { id: 8, name: "Winter" },
  ],
  SingersNames: [
    { id: 1, singername: "Bob - " },
    { id: 2, singername: "Fucker - " },
    { id: 3, singername: "MotherFucker - " },
    { id: 4, singername: "Spining Dick - " },
    { id: 5, singername: "WrongRotate Pussy - " },
    { id: 6, singername: "Angular - " },
    { id: 7, singername: "Ass Penetrator - " },
    { id: 8, singername: "Curwa Bober - " },
  ],
  NewMusicsText: '',

}
const MusicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MUSIC': {
      let stateCopy = {
        ...state,
        MusicsNames: [...state.MusicsNames],
        SingersNames: [...state.SingersNames],
      };
      let NewSong = stateCopy.NewMusicsText
      let NewAddetTrack = {
        id: 9,
        name: NewSong,
      };
      let NewAddetName = {
        id: 9,
        singername: 'Undefined',
      };
      stateCopy.MusicsNames.push(NewAddetTrack);
      stateCopy.SingersNames.push(NewAddetName);
      return stateCopy;
    }
    case 'ADD-MUSIC-TEXT': {
      let stateCopy = { ...state };
      stateCopy.NewMusicsText = action.NewMusicText;
      return stateCopy;
    }
    default: return state;
  }

}

export const AddMusictActionCreator = () => ({ type: 'ADD-MUSIC' })
export const AddMusicTextActionCreator = (NewMusicText) => ({ type: 'ADD-MUSIC-TEXT', NewMusicText: NewMusicText })

export default MusicsReducer;