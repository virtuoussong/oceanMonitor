import Area from '../../Models/Area';
import { getAllArea1, insertNewArea1, deleteAllArea1, deleteArea1FromDB } from '../database/db';
import {deleteRegionDoc} from '../database/regionDoc';
import { getAllArea2, deleteArea2FromDB } from '../database/area2DB';
import {getAllArea3, deleteArea3FromDB} from '../database/area3DB';
import {getAllArea4, deleteArea4FromDB} from '../database/area4DB';
import {deleteLocationDoc} from '../database/locationDoc';

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
    // deleteAllArea1()
    return async (dispatch, getState) => {
        try {
            let newArray = []
            await getAllArea1().then((i)=>{
                i.rows._array.forEach(element => {
                    let pasedData = JSON.parse(element.data)
                    pasedData.id = element.id
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
    let addingAreaData = new Area(id, name, coordinates, nameCoordinate)
    return async (dispatch, getState) => {
        try {
            await insertNewArea1(JSON.stringify(addingAreaData)).then((i)=>{
                console.log(i.insertId)
                addingAreaData.id = i.insertId
            })

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
            throw error
        }
    } 
}

export const deleteArea1 =(item) => {
    return async (dispatch, getState) => {
        try {
            await deleteArea1FromDB(item.id)

            await getAllArea2(item.id).then((area2Array)=>{
                area2Array.rows._array.forEach((area2Item)=>{
                    let parsedItem = JSON.parse(area2Item.data)
                    parsedItem.id = area2Item.id
                    parsedItem.docID = area2Item.docID
                    deleteArea2FromDB(parsedItem.id)
                    deleteRegionDoc(parsedItem.docID)

                    getAllArea3(parsedItem.id).then((area3Array)=>{
                        area3Array.rows._array.forEach((area3Item)=>{
                            let parsedItem = JSON.parse(area3Item.data)
                            parsedItem.id = area3Item.id
                            parsedItem.docID = area3Item.docID

                            deleteArea3FromDB(parsedItem.id)
                            deleteLocationDoc(parsedItem.docID)

                            getAllArea4(parsedItem.id).then((area4Array)=>{

                                area4Array.rows._array.forEach((area4Item)=>{
                                    let parsedItem = JSON.parse(area4Item.data)
                                    parsedItem.id = area4Item.id
                                    parsedItem.docID = area4Item.docID
        
                                    deleteArea4FromDB(parsedItem.id)
                                    deleteLocationDoc(parsedItem.docID)
        
                                })

                            })
                        })
                        
                    })
                })
            })
             
            dispatch({
                type: DELETE_AREA,
                id: item.id
            })
        } catch (error) {
            throw error
        }

    }
}




