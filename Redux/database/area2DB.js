import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('oceanMap.db');

export const initArea2Table = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS area2 (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL, parentID TEXT NOT NULL, docID TEXT);',
                [],
                () => {
                    resolve();
                },
                (_, err)=> {
                    reject(err);
                }
            );
        });
    })
    return promise
};

export const getAllArea2 = (parentID) => {
    // console.log("db area2 id", parentID)
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM area2 WHERE parentID = ?",
                [parentID],
                (_, result) => {
                    resolve(result);
                },
                (_, err)=> {
                    reject(err);
                }
            );
        });
    })
    return promise

} 


export const insertNewArea2 = (data, parentID) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'INSERT INTO area2 (data, parentID) VALUES (?, ?)',
                [data, parentID],
                (_, result) => {
                    resolve(result);
                },
                (_, err)=> {
                    reject(err);
                }
            );
        });
    })
    return promise

};

export const insertDocID = (docID, rowID) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `UPDATE area2 SET docID = ${docID} WHERE id = ${rowID}`,
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err)=> {
                    reject(err);
                }
            );
        });
    })
    return promise
}

export const deleteArea2FromDB = (id) => {
    console.log("delete from db", id)
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM area2  WHERE id = ${id}`,
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err)=> {
                    reject(err);
                }
            );
        });
    })
    return promise
}
