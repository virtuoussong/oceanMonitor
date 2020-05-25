import {
    GET_AREA,
    ADD_AREA,
    DELETE_AREA
} from '../actions/area';

import Area from '../../Models/Area';

let initialArea = [
    {
        coordinates: [
            {
            latitude: 34.897496004554114,
            longitude: 127.66647946089506,
            },
            {
            latitude: 34.88281733008958,
            longitude: 127.79087428003548,
            },
            {
            latitude: 34.712926735580794,
            longitude: 127.70314324647188,
            }
        ],
        id: 0,
        name: "1-1",
        nameCoordinate: null
    }
]

export default (state = initialArea, action) => {
    switch (action.type) {
        case GET_AREA:
            return {
                areaList : action.areas
            };
        case ADD_AREA:
            
            console.log("ADD_AREA triggered in reducer")

            const addingAreaData = new Area(
                action.areaData.id,
                action.areaData.name,
                action.areaData.coordinates,
                action.areaData.nameCoordinate
            )

            console.log("adding data", addingAreaData)

            return {
                ...state,
                areaList : state.areaList.concat(addingAreaData)
            };
    }
    return state;
}
