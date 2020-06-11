export const GET_COORDINATE = "GET_COORDINATE";
export const UPDATE_COORDINATE = "UPDATE_COORDINATE"
export const NAVBACK = "NAVBACK"

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
                // areaData: areaData,
                areaData: {
                    id: areaData.id,
                    name: areaData.name,
                    coordinates: areaData.coordinates
                },
            }
        })
    }
}

export const navBack = (level) => {

    // console.log("update polygon focus ACTION",level, areaData)
    return async (dispatch) => {
        dispatch({
            type: NAVBACK,
            data: {
                level: level,
            }
        })
    }
}
