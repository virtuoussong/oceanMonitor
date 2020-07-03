import Realm from 'realm';
export const USERLIST_SCHEMA = "UserList";
export const USER_SCHEMA = "User";

export const UserSchema = {
    name: USER_SCHEMA,
    primaryKey: 'id',
    properties : {
        id: 'int',
        name: {type: 'string', indexed: true, default: ""},
        title: {type: 'string', default: ""},
        department : {type: 'string', default: ""},
        email: {type: 'string', default: ""},
        phoneNumber: {type: 'string', default: ""}
    }
};

export const UserList = {
    name: USERLIST_SCHEMA,
    primaryKey: 'id',
    properties : {
        id: 'int',
        name: 'string',
        list : {type: 'list', objectType: USER_SCHEMA}
    }
};

const databaseOptions = {
    path: 'userList.realm',
    schema: [USER_SCHEMA, USERLIST_SCHEMA],
};

export const insertNewUser = newUser => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then( realm => {
        realm.write(()=>{
            realm.create(USERLIST_SCHEMA, newUser);
            resolve(newUser)
        }).catch((error)=>reject(error));
    })
});

export const updateUser = userList => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then( realm => {
        realm.write(()=>{
            let updatingUserList = realm.objectForPrimaryKey(USERLIST_SCHEMA, userList.id);
            updatingUserList = userList
            resolve()
        }).catch((error)=>reject(error));
    })
});

export const deleteUser = userListId => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then( realm => {
        realm.write(()=>{
            let deletingUserList = realm.objectForPrimaryKey(USERLIST_SCHEMA, userListId);
            realm.delete(deletingUserList)
            resolve()
        }).catch((error)=>reject(error));
    })
});

export const deleteAllUsers = userListId => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then( realm => {
        realm.write(()=>{
            let allUsers = realm.objects(USERLIST_SCHEMA);
            realm.delete(allUsers)
            resolve()
        }).catch((error)=>reject(error));
    })
});

export const getAllUsers=()=> new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then(realm => {
        let allUsers = realm.objects(USERLIST_SCHEMA);
        resolve(allUsers);
    }).catch((error)=>{
        reject(error);
    })
});

export default new Realm(databaseOptions);

