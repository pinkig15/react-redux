import * as ActionTypes from '../state/action-types';
import dispatch from 'redux';

export function fetchStateData(data) {
    return {
        type: ActionTypes.FETCH_STATE_DATA,
        payload: data
    }
}
  
export function fetchStateSuccess(stateToView){
    return {
        type: ActionTypes.STATE_VIEW,
        payload: stateToView
    }
}
 
export function addNewState(stateToAdd){
    return {
        type: ActionTypes.STATE_ADD,
        payload: stateToAdd
    }
}

export function fetchStateSuccessToEdit(stateToEdit){
    return {
        type: ActionTypes.STATE_EDIT,
        payload: stateToEdit
    }
}

export function fetchStateSuccessToView(stateToView){
    return {
        type: ActionTypes.STATE_VIEW,
        payload: stateToView
    }
}

export function fetchStateError(){
    return {
        type: ActionTypes.FETCH_STATE_ERROR,
        payload: {}
    }
}

function fetchSingleData(stateId) {

    const URL = "http://localhost:7070/api/states/"+stateId;
    return fetch(URL, { method: 'GET'}).then( (response) => {
        return response.json();
    });
}

export function fetchStateToEdit(id) {
    return (dispatch) => {        
        fetchSingleData().then((data) =>{
            if(data){
                dispatch(fetchStateSuccessToEdit(data))
            }
            else{
                dispatch(fetchStateError())
            }
        })
    }
}

export function fetchStateToView(id) {
    return (dispatch) => {        
        fetchSingleData(id).then((data) =>{
            if(data){
                dispatch(fetchStateSuccessToView(data))
            }
            else{
                dispatch(fetchStateError())
            }
        })
    }
}

function fetchData() {
    const URL = "http://localhost:7070/api/states";
    return fetch(URL, { method: 'GET'})
       .then( response => response.json());
}

export function fetchStates() {
    return (dispatch) => {        
        fetchData().then((data) =>{
            if(data){
                dispatch(fetchStateSuccess(data))
            }
            else{
                dispatch(fetchStateError())
            }
        })
  }
}