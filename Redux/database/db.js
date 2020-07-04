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


export const initArea1Table = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS area1 (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL);',
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


// export const initArea2Table = () => {
//     const promise = new Promise((resolve, reject) => {
//         db.transaction( tx => {
//             tx.executeSql(
//                 'CREATE TABLE IF NOT EXISTS area2 (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL);',
//                 [],
//                 () => {
//                     resolve();
//                 },
//                 (_, err)=> {
//                     reject(err);
//                 }
//             );
//         });
//     })
//     return promise
// };

export const initArea3Table = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS area3 (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL);',
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

export const initArea4Table = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS area4 (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL);',
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


//USER
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


//AREA 1
export const getAllArea1 = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'SELECT * FROM area1',
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

export const insertNewArea1 = (data) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'INSERT INTO area1 (data) VALUES (?)',
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

export const deleteAllArea1 = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                'Delete FROM area1',
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