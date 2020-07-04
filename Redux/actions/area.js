import Area from '../../Models/Area';
import { getAllArea1, insertNewArea1, deleteAllArea1 } from '../database/db';

export const ADD_AREA = "ADD_AREA";
export const ADD_AREA2 = "ADD_AREA2";
export const ADD_AREA3 = "ADD_AREA3";

export const GET_AREA = "GET_AREA";
export const GET_AREA2 = "GET_AREA2";
export const GET_AREA3 = "GET_AREA3";

export const DELETE_AREA = "DELETE_AREA";

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

// import { getAllArea1, insertNewArea1, deleteAllArea1 } from '../database/db'


export const fetchArea = () => {

    return async (dispatch, getState) => {
        try {
            let newArray = []
            await getAllArea1().then((i)=>{
                i.rows._array.forEach(element => {
                    let pasedData = JSON.parse(element.data)
                    newArray.push(pasedData)
                });
            })
            dispatch({
                type: GET_AREA,
                // areas: initialArea
                areas: newArray
            });
        } catch (error) {
            throw error
        }
        
    }
}

export const addArea = (id, name, coordinates, nameCoordinate) => {
    const addingAreaData = new Area(id, name, coordinates, nameCoordinate)


    return async (dispatch, getState) => {
        try {
            await insertNewArea1(JSON.stringify(addingAreaData))

            dispatch({
                type: ADD_AREA,
                // areaData: {
                //     id: id, 
                //     name: name, 
                //     coordinates: coordinates, 
                //     nameCoordinate: nameCoordinate, 
                // }
                areaData: addingAreaData
            })
        } catch (error) {

        }

        
        
    } 
}




