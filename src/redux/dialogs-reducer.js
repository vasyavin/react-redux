const SEND_MASSAGE = 'SEND_MASSAGE';
const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';

let initialState = {

        imageProfile: [

            {
                id: 1,
                img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'
            },
            {
                id: 2,
                img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'
            },
            {
                id: 3,
                img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'
            },
            {
                id: 4,
                img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'
            }
        ],

        dialogs: [
            {id: 1, name: 'Vasya'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Pavlo'},
            {id: 4, name: 'Vova'}
        ],

        Massages: [
            {id: 1, massage: 'Hi'},
            {id: 2, massage: 'How are you?'},
            {id: 3, massage: 'Good'},
            {id: 4, massage: 'Good luck'}
        ],
        newMassageBody: ""

}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            return  {
                ...state,
                newMassageBody: action.body
            };
        case SEND_MASSAGE:
            let body = state.newMassageBody;
            return {
                ...state,
                newMassageBody: '',
                Massages: [...state.Massages, {id: 4, massage: body}]
            };
        default:
            return state;
    }
}

export const addSendMassegeCreator = () => {
    return {type: SEND_MASSAGE};
}

export const UpdeteNewMassegeBodyCreator = (body) => {
    return {type: UPDATE_NEW_MASSAGE_BODY, body: body}
}

export default dialogReducer;