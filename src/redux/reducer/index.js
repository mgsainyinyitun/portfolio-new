import { CHANGE_LANGUAGE } from "../action/actionConstant";

const initial_state = {
    language:"japanese",
}

function rootReducer(state=initial_state,action){
    switch(action.type){
        case CHANGE_LANGUAGE:
             return {...state,language:action.payload}
        default: return state;
    }
}
export default rootReducer;