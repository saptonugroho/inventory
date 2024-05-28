import Produk from "../models/Produk.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getProduk = async(req, res)=> {
    try {
        const produk = await Produk.findAll({
            attributes: ['nama_produk','stok']
        });
        res.json(produk);
    } catch (error) {
        console.log(error);
    }
}

export const addProduk = async(req, res)=>{
    const {nama_produk} = req.body;
   

    try {
        await Produk.create({
            nama_produk: nama_produk,
            stok: 0,
        })
        res.status(201).json({message: "Tambah Produk Berhasil", data: req.body})
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

export const updateProduk = async(req, res) =>{
    try {
        await Produk.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Produk Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
