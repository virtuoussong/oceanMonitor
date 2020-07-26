import {
    GET_AREA4,
    ADD_AREA4,
    DELETE_AREA4,
    GET_FILTERED_AREA4
} from '../actions/area4';

// import Area2 from '../../Models/Area2';


let initialState4 = {
    areaList: [],
    filteredList: [],
    parentID: null
}

export default (state = initialState4, action) => {
    switch (action.type) {
        case GET_AREA4:
            // let data = state.areaList.filter(item => item.parentID == action.parentID)

            return {
                areaList : action.areaData,
                filteredList: action.areaData
            };
        case ADD_AREA4:

            // const addingAreaData = new Area2(
            //     action.areaData.id,
            //     action.areaData.name,
            //     action.areaData.coordinates,
            //     action.areaData.nameCoordinate,
            //     action.areaData.parentID
            // )

            return {
                ...state,
                filteredList : state.filteredList.concat(action.areaData)
            };
        
        case GET_FILTERED_AREA4: 
           
            // let filteredData = state.areaList.filter(item => item.parentID == action.parentID)
            return {
                ...state,
                filteredList : action.areaData,
            };
        case DELETE_AREA4:
            return {
                ...state,
                filteredList: state.filteredList.filter(item => item.id !== action.id)
            }

    }
    return state;
}
