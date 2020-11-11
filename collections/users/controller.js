const moment = require('moment');
const day = moment('2012 juillet', 'YYYY MMM', 'jp');
console.log(day.toString());
const { saveUser, readUser, borrarUser, actualizarUser } = require('./store');

const postUser = (name, app, apm, mail, pass, birthDay) => {
    return new Promise((resolve, reject) => {
        if (!name || !app || !apm || !mail || !pass || !birthDay) {
            reject("Los datos estan incompletos")
        }
        const fullUser = {
            name,
            app,
            apm,
            mail,
            pass,
            birthDay,
            date: moment().format("LLLL"),
        }
        resolve(saveUser(fullUser))
    });
}

const getUser = (filter) => {
    return new Promise((resolve, reject) => {
        const result = readUser(filter)
        if (result.length === 0) {
            resolve("Esta DB no contiene Usuarios con este apellido")
        }
        resolve(result)
    });
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject("Falta id para borrar")
        }
        resolve(borrarUser(id))
    });
}

const putUser = (id, tag, value) => {
    return new Promise((resolve, reject) => {
        let update = {}
        if (!id || !tag || !value) {
            reject("Faltan datos")
        }
        switch (tag) {
            case "name":
                update = { name: value }
                break;
            case "app":
                update = { app: value }
                break;
            case "apm":
                update = { apm: value }
                break;
            case "mail":
                update = { mail: value }
                break;
            case "pass":
                update = { pass: value }
                break;
            case "birthDay":
                update = { birthDay: value }
                break;
            default:
                reject("No se reconece el tag")
                break;
        }
        resolve(actualizarUser(id, update))
    });
}

module.exports = {
    postUser,
    getUser,
    deleteUser,
    putUser
}