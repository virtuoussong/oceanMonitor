
export const ADD_AREA2 = "ADD_AREA2";

export const GET_AREA2 = "GET_AREA2";

export const DELETE_AREA2 = "DELETE_AREA2";

export const GET_FILTERED_AREA2 = "GET_FILTERED_AREA2";

export const BACK_LEVEL1 = "BACK_LEVEL1";

// let initialArea2 = [
//     {
//         coordinates: [
//             {
//             latitude: 34.897496004554114,
//             longitude: 127.66647946089506,
//             },
//             {
//             latitude: 34.88281733008958,
//             longitude: 127.79087428003548,
//             },
//             {
//             latitude: 34.712926735580794,
//             longitude: 127.70314324647188,
//             }
//         ],
//         id: 0,
//         name: "2-1",
//         nameCoordinate: null,
//         parentID: "12345"
//     }
// ]


export const fetchFilteredList = (id) => {
    return async (dispatch, getState) => {
        console.log("filter action area2 inited", id)

        dispatch({
            type: GET_FILTERED_AREA2,
            parentID: id
        });
    }
}


export const fetchArea2 = (id) => {
    return async (dispatch, getState) => {
        // console.log("area 2 get action inited", id)
        dispatch({
            type: GET_AREA2,
            parentID: id
        });
    }
}

export const addArea2 = (id, name, nameCoordinate, coordinates, parentID) => {
    console.log("ADD_AREA triggered in ACTION2 parentID", parentID)
    return async (dispatch, getState) => {
        dispatch({
            type: ADD_AREA2,
            areaData: {
                id, 
                name, 
                nameCoordinate, 
                coordinates,
                parentID
            }
        });
    } 
}

export const backToLevel1 = (id) => {
    console.log("animate back to level 1", id)
    return async (dispatch, getState) => {
        dispatch({
            type: BACK_LEVEL1,
            id: id
        })
    }
}

