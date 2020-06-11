import {
    GET_COORDINATE,
    UPDATE_COORDINATE,
    NAVBACK
} from '../actions/coordinateNav';


let initialData = {
    focusedPolygon: {
        level: 1,
        areaData: "",
        coordinates2: [],
        coordinates3: [],
        coordinates4: []
    }
}
    
export default (state = initialData, action) => {
    switch (action.type) {
        case GET_COORDINATE:
            return {
                focusedPolygon : state.focusedPolygon,
            };

        case UPDATE_COORDINATE:
            console.log("update polygon nav reducer", action)
            if (action.data.level == 1) {
                
                return {
                    ...state,
                    focusedPolygon : {
                        level: action.data.level,
                        areaData: action.data.areaData,
                    }
                };

            } else if (action.data.level == 2) {

                return {
                    ...state,
                    focusedPolygon : {
                        level: action.data.level,
                        areaData: action.data.areaData,
                        // coordinates2: action.data.areaData.coordinates,
                        coordinates2: action.data.areaData,
                        coordinates3: state.focusedPolygon.coordinates3,
                        coordinates4: state.focusedPolygon.coordinates4
                    }
                };

            } else if (action.data.level == 3) {

                return {
                    ...state,
                    focusedPolygon : {
                        level: action.data.level,
                        areaData: action.data.areaData,
                        coordinates2: state.focusedPolygon.coordinates2,

                        coordinates3: action.data.areaData,

                        coordinates4: state.focusedPolygon.coordinates4
                    }
                };

            } else if (action.data.level == 4) {
                return {
                    ...state,
                    focusedPolygon : {
                        level: action.data.level,
                        areaData: action.data.areaData,

                        coordinates2: state.focusedPolygon.coordinates2,
                        coordinates3: state.focusedPolygon.coordinates3,

                        coordinates4: action.data.areaData
                    }
                };
            }
        
        case NAVBACK: 
            console.log("navback", action)
            return {
                ...state,
                focusedPolygon : {
                    level: action.data.level,
                    areaData: state.focusedPolygon.areaData,
                    coordinates2: state.focusedPolygon.coordinates2,
                    coordinates3: state.focusedPolygon.coordinates3,
                    coordinates4: state.focusedPolygon.coordinates4
                }
            };
    }
    return state;
}