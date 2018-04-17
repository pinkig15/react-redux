import * as ActionTypes from '../state/action-types';

const INITIAL_STATE = {
    statesData: []
}

export default function stateReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ActionTypes.FETCH_STATE_SUCCESS:
            return Object.assign({}, state, {statesData: action.payload});  
            break;
        case ActionTypes.STATE_VIEW:
            return Object.assign({}, state, {statesData: action.payload});
        case ActionTypes.STATE_EDIT:
            return {  
                id: action.id
            }
        case ActionTypes.FETCH_STATE_ERROR:
            return null;
            break;
        case ActionTypes.STATE_ADD:
            return Object.assign({}, state, {statesData: action.payload});
        
        default:
            return state;
    }
}