import Toko from "../models/Toko.js";

export const getToko = async(req, res)=> {
    try {
        const toko = await Toko.findAll({
            attributes: ['nama','alamat','nohp']
        });
        res.json(toko);
    } catch (error) {
        console.log(error);
    }
}


export const addToko = async(req, res)=>{
    const {nama, alamat, nohp} = req.body;
   

    try {
        await Toko.create({
            nama: nama,
            alamat: alamat,
            nohp: nohp,
        })
        res.status(201).json({message: "Tambah Toko Berhasil", data: req.body})
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

export const updateToko = async(req, res) =>{
    try {
        await Toko.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Toko Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
