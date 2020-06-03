
export const ADD_AREA3 = "ADD_AREA3";

export const GET_AREA3 = "GET_AREA3";

export const DELETE_AREA3 = "DELETE_AREA3";

let initialArea3 = [
    
]

export const fetchArea3 = (id) => {
    return async (dispatch, getState) => {
        console.log("fetch area2 action", id)

        dispatch({
            type: GET_AREA3,
            areas: initialArea3.filter(item => item.parentID === id)
        });
    }
}

export const addArea3 = (id, name, nameCoordinate, coordinates, parentID) => {
    console.log("ADD_AREA3 triggered in ACTION", id)
    return async (dispatch, getState) => {
        dispatch({
            type: ADD_AREA3,
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

