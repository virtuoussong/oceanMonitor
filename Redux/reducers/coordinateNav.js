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
            console.log("update polygonnav reducer", action.data)
            return {
                focusedPolygon : action.data
            };
    }
    return state;
}