import {
    GET_AREA4,
    ADD_AREA4,
    DELETE_AREA4,
    GET_FILTERED_AREA4
} from '../actions/area4';

import Area2 from '../../Models/Area2';


let initialState4 = {
    areaList: [],
    filteredList: [],
    parentID: null
}

export default (state = initialState4, action) => {
    switch (action.type) {
        case GET_AREA4:
            let data = state.areaList.filter(item => item.parentID == action.parentID)

            return {
                areaList : action.areas,
                filteredList: data
            };
        case ADD_AREA4:

            const addingAreaData = new Area2(
                action.areaData.id,
                action.areaData.name,
                action.areaData.coordinates,
                action.areaData.nameCoordinate,
                action.areaData.parentID
            )

            return {
                ...state,
                areaList : state.areaList.concat(addingAreaData)
            };
        
        case GET_FILTERED_AREA4: 
           
            let filteredData = state.areaList.filter(item => item.parentID == action.parentID)
            return {
                ...state,
                filteredList : filteredData,
            };

    }
    return state;
}
