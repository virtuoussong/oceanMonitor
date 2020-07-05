import { exp } from "react-native-reanimated";

export const ADD_AREA3 = "ADD_AREA3";

export const GET_AREA3 = "GET_AREA3";

export const DELETE_AREA3 = "DELETE_AREA3";

export const GET_FILTERED_AREA3 = "GET_FILTERED_AREA3";

let initialArea3 = [
    
]

import Area2 from '../../Models/Area2';
import { getAllArea3, insertNewArea3 } from '../database/area3DB'

export const fetchArea3 = (id) => {
    return async (dispatch, getState) => {
        console.log("fetch area2 action", id)

        dispatch({
            type: GET_AREA3,
            areas: initialArea3.filter(item => item.parentID === id)
        });
    }
}

export const addArea3 = (id, name, nameCoordinate, coordinates, parentID, docID) => {
    console.log("ADD_AREA3 triggered in ACTION", id)
    return async (dispatch, getState) => {
        try {

            let newArea3 = new Area2(id, name, coordinates, nameCoordinate, parentID, docID)

            await insertNewArea3(JSON.stringify(newArea3), parentID).then((i) => {
                console.log(i.insertId)
                newArea3.id = i.insertId
            })

            dispatch({
                type: ADD_AREA3,
                areaData: newArea3
            });

        } catch (error) {
            throw error
        }
        
    } 
}

export const fetchFilteredList = (id) => {
    return async (dispatch, getState) => {
        console.log("filter action area3 inited", id)

        try {

            let filteredArray = []
            await getAllArea3(id).then((i) => {
                i.rows._array.forEach(element => {
                    let parsedItem = JSON.parse(element.data)
                    filteredArray.push(parsedItem)
                });
            })

            dispatch({
                type: GET_FILTERED_AREA3,
                areaData: filteredArray
            });

        } catch (error) {

        }
        
    }
}

