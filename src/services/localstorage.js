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


export const getUserById = (id) => {
    const users = getListUsers();
    const user = users.find((user) => user.id === id);
    return user;
}

export const editUser = (id, newUser) => {
    let users = getListUsers();
    users = users.filter((user) => user.id !== id);
    users.push(newUser);
    localStorage["@users"] = JSON.stringify(users);
  };

 
  