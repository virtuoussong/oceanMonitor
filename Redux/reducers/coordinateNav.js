import {
    GET_COORDINATE,
    UPDATE_COORDINATE
} from '../actions/coordinateNav';


let initialData = {
    focusedPolygon: {
        level: 1
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
                        areaData: action.data.areaData
                    }
                };

            } else if (action.data.level == 2) {

                return {
                    ...state,
                    focusedPolygon : {
                        level: action.data.level,
                        areaData: action.data.areaData,
                        coordinates2: action.data.areaData.coordinates
                    }
                };

            } else if (action.data.level == 3) {

                return {
                    ...state,
                    focusedPolygon : {
                        level: action.data.level,
                        areaData: action.data.areaData,
                        coordinates3: action.data.areaData.coordinates
                    }
                };

            } else if (action.data.level == 4) {
                return {
                    ...state,
                    focusedPolygon : {
                        level: action.data.level,
                        areaData: action.data.areaData,
                        coordinates4: action.data.areaData.coordinates
                    }
                };
            }

            // return {
            //     ...state,
            //     focusedPolygon : action.data
            // };
    }
    return state;
}