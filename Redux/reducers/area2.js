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

        //     // let data = state.areaList.filter(item => item.parentID === action.parentID)
        //     // console.log("reducer filter area 2", data)

        //     // let data = state.areaList.filter(item => item.parentID == action.parentID)
        //     // return {
        //     //     areaList : state.areaList,
        //     //     filteredList: data
        //     // };
        //     console.log("area2 data in reducer", action.areaData)
            return {
                areaList: action.areaData,
                filteredList : action.areaData
            }


        case ADD_AREA2:
            console.log("reducer area2 get area:", action.parentID);

            // const addingAreaData = new Area2(
            //     action.areaData.id,
            //     action.areaData.name,
            //     action.areaData.coordinates,
            //     action.areaData.nameCoordinate,
            //     action.areaData.parentID
            // );

            return {
                ...state,
                filteredList : state.filteredList.concat(action.areaData)
            };

        case GET_FILTERED_AREA2: 
            // console.log("reducer area2 filter inited ID:", state);
            // let parentID = action.parentID
            // let filteredData = state.areaList.filter(item => item.parentID == action.parentID)
            console.log("reducer filter area 2")
            
            return {
                ...state,
                // areaList: action.areaData,
                filteredList : action.areaData,
                // areaList : action.areaData,
                // parentID : action.parentID
            };

        case BACK_LEVEL1:
            console.log("reducer back to level 1", action.id);
            return {
                ...state,
                idForLevel1: action.id
            };
        
        case DELETE_AREA2: 
            console.log("reducer delete", action.id)
            return {
                ...state,
                filteredList: state.filteredList.filter(item => item.id !== action.id)
            }
    }
    return state;
}
