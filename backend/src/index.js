import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
import db from "./config/database.js";
import Users from "./models/User.js";
import Pelanggan from "./models/Pelanggan.js";
import Pemasok from "./models/Pemasok.js";
import Produk from "./models/Produk.js";
import Toko from "./models/Toko.js";
import Transaksi from "./models/Transaksi.js";
import Role from "./models/Role.js";
dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('db ok');
    await Users.sync();
    await Pelanggan.sync();
    await Pemasok.sync();
    await Produk.sync();
    await Toko.sync();
    await Transaksi.sync();
    // await Result.sync();
    // await Log.sync();
    await Role.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(5000, ()=> console.log('Berjalan di port 5000'));