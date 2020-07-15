import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('oceanMap.db');

export const initLocationDocTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS locationDoc (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL);',
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

export const getLocationDoc = (id) => {

    const promise = new Promise((resolve) => {
        db.transaction( tx => {
            tx.executeSql(
                'SELECT * FROM locationDoc WHERE id = ?',
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

export const newLocationDoc = (data) => {

    const promise = new Promise((resolve) => {
        db.transaction( tx => {
            tx.executeSql(
                'INSERT INTO locationDoc (data) VALUES (?)',
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

export const updateLocationDoc = (data, docID) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `UPDATE locationDoc SET data = ? WHERE id = ?`,
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