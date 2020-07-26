import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('oceanMap.db');

export const initArea4Table = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                // 'DROP TABLE area4',
                'CREATE TABLE IF NOT EXISTS area4 (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL, parentID TEXT NOT NULL, docID TEXT);',
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

export const getAllArea4 = (parentID) => {
    console.log("db area4 id", parentID)
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM area4 WHERE parentID = ?",
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


export const insertNewArea4 = (data, parentID) => {
    console.log("insert 4", data, parentID)
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'INSERT INTO area4 (data, parentID) VALUES (?, ?)',
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

export const insertDocID4 = (docID, rowID) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `UPDATE area4 SET docID = ${docID} WHERE id = ${rowID}`,
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

export const deleteArea4FromDB = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM area4 WHERE id = ${id}`,
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


