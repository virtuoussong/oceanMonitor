export const GET_COORDINATE = "GET_COORDINATE";
export const UPDATE_COORDINATE = "UPDATE_COORDINATE"


let initialData = {
    level: 1
}

export const fetchCoordinate = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_COORDINATE,
            areaInfo: initialData
        })
    }
}

export const updateCoordinate = (level, areaData) => {

    console.log("update polygon focus ACTION",level, areaData)
    return async (dispatch) => {
        dispatch({
            type: UPDATE_COORDINATE,
            data: {
                level: level,
                areaData: areaData
            }
        })
    }
}
