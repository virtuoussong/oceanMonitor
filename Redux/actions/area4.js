import { exp } from "react-native-reanimated";

export const ADD_AREA4 = "ADD_AREA4";

export const GET_AREA4 = "GET_AREA4";

export const DELETE_AREA4 = "DELETE_AREA4";

export const GET_FILTERED_AREA4 = "GET_FILTERED_AREA4";

let initialArea3 = [
    
]

export const fetchArea4 = (id) => {
    return async (dispatch, getState) => {
        console.log("fetch area2 action", id)

        dispatch({
            type: GET_AREA4,
            areas: initialArea3.filter(item => item.parentID === id)
        });
    }
}

export const addArea4 = (id, name, nameCoordinate, coordinates, parentID) => {
    console.log("ADD_AREA4 triggered in ACTION", id)
    return async (dispatch, getState) => {
        dispatch({
            type: ADD_AREA4,
            areaData: {
                id, 
                name, 
                nameCoordinate, 
                coordinates,
                parentID
            }
        });
    } 
}

export const fetchFilteredList = (id) => {
    return async (dispatch, getState) => {
        console.log("filter action area4 inited", id)

        dispatch({
            type: GET_FILTERED_AREA4,
            parentID: id
        });
    }
}

