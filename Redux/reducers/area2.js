import {
    GET_AREA2,
    ADD_AREA2,
    GET_FILTERED_AREA2,
    DELETE_AREA2,
    BACK_LEVEL1
} from '../actions/area2';

import Area2 from '../../Models/Area2';


let initialState2 = {
    areaList: [],
    filteredList: [],
    parentID: null
}

export default (state = initialState2, action) => {
    switch (action.type) {
        
        case GET_AREA2:

            // let data = state.areaList.filter(item => item.parentID === action.parentID)
            // console.log("reducer filter area 2", data)
            let data = state.areaList.filter(item => item.parentID == action.parentID)
            return {
                areaList : state.areaList,
                filteredList: data
            };

        case ADD_AREA2:
            console.log("reducer area2 get area:", action.parentID);

            const addingAreaData = new Area2(
                action.areaData.id,
                action.areaData.name,
                action.areaData.coordinates,
                action.areaData.nameCoordinate,
                action.areaData.parentID
            );

            return {
                ...state,
                areaList : state.areaList.concat(addingAreaData)
            };

        case GET_FILTERED_AREA2: 
            // console.log("reducer area2 filter inited ID:", state);
            // let parentID = action.parentID
            let filteredData = state.areaList.filter(item => item.parentID == action.parentID)
            // console.log("reducer filter area 2", data)
            return {
                ...state,
                // areaList: state.areaList.filter(item => item.parentID == action.parentID),
                filteredList : filteredData,
                // parentID : action.parentID
            };

        case BACK_LEVEL1:
            console.log("reducer back to level 1", action.id);
            return {
                ...state,
                idForLevel1: action.id
            };
    }
    return state;
}
