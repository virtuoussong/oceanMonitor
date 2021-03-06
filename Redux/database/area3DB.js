import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('oceanMap.db');

export const initArea3Table = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                // 'DROP TABLE area3',
                'CREATE TABLE IF NOT EXISTS area3 (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL, parentID TEXT NOT NULL, docID TEXT);',
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

export const getAllArea3 = (parentID) => {
    // console.log("db area2 id", parentID)
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM area3 WHERE parentID = ?",
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


export const insertNewArea3 = (data, parentID) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'INSERT INTO area3 (data, parentID) VALUES (?, ?)',
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
                `UPDATE area3 SET docID = ${docID} WHERE id = ${rowID}`,
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

export const deleteArea3FromDB = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM area3 WHERE id = ${id}`,
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

export const deleteAllArea3fromDB = (parentId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM area3 WHERE parentID = ${id}`,
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

