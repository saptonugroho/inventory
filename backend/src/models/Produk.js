import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Produk = db.define('produk',{
    nama_produk:{
        type: DataTypes.STRING
    },
    stok:{
        type: DataTypes.INTEGER
    },
},{
    freezeTableName: true
})

export default Produk;