import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Transaksi = db.define('transaksi',{
    id_barang:{
        type: DataTypes.INTEGER
    },
    nama_barang:{
        type: DataTypes.STRING
    },
    jumlah:{
        type: DataTypes.INTEGER
    },
    type:{
        type: DataTypes.STRING
    },
    user_update:{
        type: DataTypes.INTEGER
    },
},{
    freezeTableName: true
})

export default Transaksi;