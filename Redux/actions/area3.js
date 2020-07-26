import { exp } from "react-native-reanimated";

export const ADD_AREA3 = "ADD_AREA3";

export const GET_AREA3 = "GET_AREA3";

export const DELETE_AREA3 = "DELETE_AREA3";

export const GET_FILTERED_AREA3 = "GET_FILTERED_AREA3";

let initialArea3 = [
    
]

import Area2 from '../../Models/Area2';
import { getAllArea3, insertNewArea3, deleteArea3FromDB } from '../database/area3DB'
import { getAllArea4, deleteArea4FromDB } from '../database/area4DB';
import {deleteLocationDoc} from '../database/locationDoc';

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
                newArea3.docID = i.docID
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
                    parsedItem.id = element.id
                    parsedItem.docID = element.docID
                    filteredArray.push(parsedItem)
                });
            })

            dispatch({
                type: GET_FILTERED_AREA3,
                areaData: filteredArray
            });

        } catch (error) {
            throw error
        }
        
    }
}

export const deleteArea3 = (item) => {
    console.log("area action 3 delete id", item.id)
    return async (dispatch, getState) => {
        try {
            await getAllArea4(item.id).then((i)=>{
                i.rows._array.forEach(element => {
                    let parsedItem = JSON.parse(element.data)
                    parsedItem.id = element.id
                    parsedItem.docID = element.docID
                    deleteArea4FromDB(parsedItem.id)
                    if (parsedItem.docID !== null) {
                        deleteLocationDoc(parsedItem.docID)
                    }
                });
            })

            await deleteArea3FromDB(item.id)

            if (item.docID !== null) {
                await deleteLocationDoc(item.docID)
            }

            dispatch({
                type: DELETE_AREA3,
                id: item.id
            });

        } catch (error) {
            throw error
        }
        
    }
}

