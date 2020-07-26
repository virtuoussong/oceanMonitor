
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

import Area2 from '../../Models/Area2';
import { getAllArea2, insertNewArea2, deleteArea2FromDB } from '../database/area2DB';
import {getAllArea3, deleteArea3FromDB} from '../database/area3DB';
import {getAllArea4, deleteArea4FromDB} from '../database/area4DB';
import {deleteLocationDoc} from '../database/locationDoc';


export const fetchArea2 = () => {
    return async (dispatch, getState) => {
        // console.log("area 2 get action inited", id)
        try {
            let filteredArray = []
            // await getAllArea2(id).then((i)=>{
            //     console.log("filtered area2", i)
            //     i.rows._array.forEach(element => {
            //         let parsedItem = JSON.parse(element)
            //         filteredArray.push(parsedItem)
            //     });
            // })
            dispatch({
                type: GET_AREA2,
                areaData: filteredArray
            });
        } catch (error) {
            throw error;
        }
        
    }
}

export const addArea2 = (id, name, nameCoordinate, coordinates, parentID, docID) => {
    // console.log("ADD_AREA triggered in ACTION2 parentID", parentID)

    return async (dispatch, getState) => {
        try {
            let newArea2 = new Area2(id, name, coordinates, nameCoordinate, parentID, docID)
            // console.log("area 2 inserted try", JSON.stringify(newArea2))
            await insertNewArea2(JSON.stringify(newArea2), parentID).then((i)=>{
                newArea2.id = i.insertId

            })
            console.log("area 2 inserted", newArea2)
            dispatch({
                type: ADD_AREA2,
                areaData: newArea2
            });

        } catch (error) {

        }
        
    } 
}


export const fetchFilteredList = (id) => {
    return async (dispatch, getState) => {
        // console.log("filter action area2 inited", id)
        try {
            let filteredArray = []
            await getAllArea2(id).then((i)=>{
                // console.log("filtered area2", i)
                i.rows._array.forEach(element => {
                    let parsedItem = JSON.parse(element.data)
                    parsedItem.id = element.id
                    parsedItem.docID = element.docID
                    filteredArray.push(parsedItem)
                });
            })
            
            dispatch({
                type: GET_FILTERED_AREA2,
                areaData: filteredArray
            });

        } catch (error) {
            throw error
        }
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

export const deleteArea2 = (item) => {
    console.log("deleing item id", item.id)
    return async (dispatch, getState) => {
        try {
            console.log("delete area 2", item.id)
            await deleteArea2FromDB(item.id)
            await deleteRegionDoc(item.docID)
            await getAllArea3(item.id).then((area3Array)=>{
                console.log("area3Array.rows._array", area3Array.rows._array)
                area3Array.rows._array.forEach(area3Item => {
                    let parsedItem = JSON.parse(area3Item.data)
                    parsedItem.id = area3Item.id
                    parsedItem.docID = area3Item.docID
                    
                    deleteLocationDoc(parsedItem.docID)
                    deleteArea3FromDB(parsedItem.id)

                    getAllArea4(parsedItem.id).then((area4Array) => {
                        // console.log("area4Array.rows._array", area4Array.rows._array)
                        area4Array.rows._array.forEach(area4Item => {
                            let parsedItem = JSON.parse(area4Item.data)
                            parsedItem.id = area4Item.id
                            parsedItem.docID = area4Item.docID

                            deleteLocationDoc(parsedItem.docID)
                            deleteArea4FromDB(parsedItem.id)
                        })
                    })
                })
            })

            dispatch({
                type: DELETE_AREA2,
                id : item.id
            })
        } catch (error) {
            throw error
        }
    }
}

