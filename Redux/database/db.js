import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('oceanMap.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, title TEXT NOT NULL, department TEXT NOT NULL, email TEXT NOT NULL, phoneNumber TEXT NOT NULL);',
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

export const insertNewUser = (name, title, department, email, phoneNumber) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'INSERT INTO users (name, title, department, email, phoneNumber) VALUES (?,?,?,?,?)',
                [name, title, department, email, phoneNumber],
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

export const fetchUsers = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'SELECT * FROM users',
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

export const deleteUser = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM users WHERE id = ${id}`,
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

export const updateUser = (id, value) => {
    console.log("schema update", value.id)
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `UPDATE users SET name = "${value.name}", title = "${value.title}", department = "${value.department}", email = "${value.email}", phoneNumber = "${value.phoneNumber}" WHERE id = ${id}`,
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
}