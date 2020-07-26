import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('oceanMap.db');

export const initRegionDocTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS regionDoc (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL);',
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

export const getRegionDoc = (id) => {

    const promise = new Promise((resolve) => {
        db.transaction( tx => {
            tx.executeSql(
                'SELECT * FROM regionDoc WHERE id = ?',
                [id],
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


export const newRegionDoc = (data, parentID) => {

    const promise = new Promise((resolve) => {
        db.transaction( tx => {
            tx.executeSql(
                'INSERT INTO regionDoc (data) VALUES (?)',
                [data],
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


export const updateRegionDoc = (data, docID) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `UPDATE regionDoc SET data = ? WHERE id = ?`,
                [data, docID],
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

export const deleteRegionDoc = (docID) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM regionDoc WHERE id = ?`,
                [docID],
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