import {
    GET_AREA3,
    ADD_AREA3,
    DELETE_AREA3,
    GET_FILTERED_AREA3
} from '../actions/area3';

// import Area2 from '../../Models/Area2';


let initialState3 = {
    areaList: [],
    filteredList: [],
    // parentID: null
}

export default (state = initialState3, action) => {
    switch (action.type) {
        case GET_AREA3:
            // let data = state.areaList.filter(item => item.parentID == action.parentID)

            return {
                areaList : action.areaData,
                filteredList: action.areaData
            };
        
        case ADD_AREA3:
            console.log("reducer area3 add area:", action.areaData.name);
            
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
    
        
        case GET_FILTERED_AREA3: 
           
            // let filteredData = state.areaList.filter(item => item.parentID == action.parentID)
            return {
                ...state,
                filteredList : action.areaData,
            };

       
    }
    return state;
}
