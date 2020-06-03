import {
    GET_AREA3,
    ADD_AREA3,
    DELETE_AREA3
} from '../actions/area3';

import Area2 from '../../Models/Area2';


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
        case GET_AREA3:
            return {
                areaList : action.areas
            };
        case ADD_AREA3:

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
    }
    return state;
}
