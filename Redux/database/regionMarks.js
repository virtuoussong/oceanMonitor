import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('oceanMap.db');

export const initRegionMarkTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS regionMark (id INTEGER PRIMARY KEY NOT NULL, coordinate TEXT NOT NULL, name TEXT NOT NULL);',
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


export const getRegionMarks = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'SELECT * FROM regionMark',
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

export const insertNewMark = (coordinate, name) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'INSERT INTO regionMark (coordinate, name) VALUES (?,?)',
                [coordinate, name],
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

export const deleteMark = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM regionMark WHERE id = ${id}`,
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