import { CHANGE_LANGUAGE } from "./actionConstant";

// export function changeLanguage  (payload) {
//     return{
//         type:CHANGE_LANGUAGE,
//         payload,
//     }

// }

export const changeLanguage = (language) => dispatch => {
    dispatch({
        type:CHANGE_LANGUAGE,
        payload:language,
    })
}