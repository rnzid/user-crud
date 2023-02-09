import uuid from "react-uuid";

export const getListUsers = ()=>{
    if(!localStorage["@users"]){
        localStorage["@users"] = JSON.stringify([])
    }

    let users=JSON.parse(localStorage["@users"]);
    return users;
}

export const addUser = (user)=>{
    const users = getListUsers();
    users.push({id: uuid(),...user});
    localStorage["@users"] = JSON.stringify(users);
}