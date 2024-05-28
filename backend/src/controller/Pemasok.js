import Pemasok from "../models/Pemasok.js";

export const getPemasok = async(req, res)=> {
    try {
        const pemasok = await Pemasok.findAll({
            attributes: ['nama','alamat','nohp']
        });
        res.json(pemasok);
    } catch (error) {
        console.log(error);
    }
}


export const addPemasok = async(req, res)=>{
    const {nama, alamat, nohp} = req.body;
   

    try {
        await Pemasok.create({
            nama: nama,
            alamat: alamat,
            nohp: nohp,
        })
        res.status(201).json({message: "Tambah Pemasok Berhasil", data: req.body})
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

export const updatePemasok = async(req, res) =>{
    try {
        await Pemasok.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Pemasok Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
