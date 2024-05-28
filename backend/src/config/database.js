import { Sequelize } from "sequelize";


const db = new Sequelize("inventory","root","",{
    host: "localhost",
    dialect: "mysql"
});

export default db;