import { exp } from "react-native-reanimated";

export const ADD_AREA4 = "ADD_AREA4";

export const GET_AREA4 = "GET_AREA4";

export const DELETE_AREA4 = "DELETE_AREA4";

export const GET_FILTERED_AREA4 = "GET_FILTERED_AREA4";

let initialArea3 = [
    
]
import Area2 from '../../Models/Area2';
import { getAllArea4, insertNewArea4, deleteArea4FromDB } from '../database/area4DB'
import {deleteLocationDoc} from '../database/locationDoc';
// export const fetchArea4 = (id) => {
//     return async (dispatch, getState) => {
//         console.log("fetch area2 action", id)
//         try {

//             dispatch({
//                 type: GET_AREA4,
//                 areas: initialArea3.filter(item => item.parentID === id)
//             });

//         } catch (error) {

//         }
        
//     }
// }

export const addArea4 = (id, name, nameCoordinate, coordinates, parentID, docID) => {
    console.log("ADD_AREA4 triggered in ACTION", id)
    return async (dispatch, getState) => {
        try {
            let newArea4 = new Area2(id, name, coordinates, nameCoordinate, parentID, docID)
            await insertNewArea4(JSON.stringify(newArea4), parentID).then((i)=>{
                console.log("inserted 4", i)
                newArea4.id = i.insertId
                newArea4.docID = i.docID
            })

            dispatch({
                type: ADD_AREA4,
                areaData: newArea4
            });

        } catch (error) {
            throw error
        }
        
    } 
}

export const fetchFilteredList = (id) => {
    return async (dispatch, getState) => {
        console.log("filter action area4 inited", id)
        try {

            let filteredArray = []
            await getAllArea4(id).then((i) => {
                i.rows._array.forEach(element => {
                    let parsedItem = JSON.parse(element.data)
                    parsedItem.id = element.id
                    parsedItem.docID = element.docID
                    filteredArray.push(parsedItem)
                });
            })
            dispatch({
                type: GET_FILTERED_AREA4,
                areaData: filteredArray
            });

        } catch (error) {

        }
        
    }
}

export const deleteArea4 = (item) => {
    return async (dispatch) => {
        console.log("deleting cell id", item)
        try {
            await deleteArea4FromDB(item.id)
            if (item.docID !== null) {
                await deleteLocationDoc(item.docID)
            }
            dispatch({
                type: DELETE_AREA4,
                id: item.id
            })

        } catch (error) {

        }
    }
}

