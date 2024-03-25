import Prestasi from "../models/prestasi-alumni.model.js"
import Biodata from "../models/biodata-alumni.model.js"

export const get = async (req, res) => {
    const list = await Prestasi.findAll();

    return res.status(200).json(list);
}

export const getOne = async (req, res) => {
    const data = await Prestasi.findOne({
        where: {
            id: req.params.id
        }
    });

    console.log(data)

    if(!data) return res.status(404).json({message: "Data not found"});

    return res.status(200).json(data);
}

export const getByAlumniId = async (req, res) => {
    const prestasi = await Prestasi.findAll({
        where: {
            user_id: req.params.alumniId
        }
    })

    if(!prestasi) return res.status(404).json({message: "Data not found"})

    return res.status(200).json(prestasi);
}

export const create = async (req, res) => {
    const {
        nama_kejuaraan,
        penyelenggara,
        skala,
        keterangan,
        tahun
    } = req.body;

    try{
        const createPrestasi = await Prestasi.create({ 
            nama_kejuaraan,
            penyelenggara,
            skala,
            keterangan,
            tahun,
            user_id: req.params.id
        });
        
        return res.status(201).json(createPrestasi);
    } catch (e) {
        return res.status(400).json({message: "Failed to create prestasi, error: "+e.message});
    }
}

export const update = async (req, res) => {
    const biodata = await Biodata.findOne({
        where: {
            id: req.params.id
        }
    });

    const {
        nama_kejuaraan,
        penyelenggara,
        skala,
        keterangan,
        tahun
    } = req.body

    try {
        const updatePrestasi = await Prestasi.update({
            nama_kejuaraan:nama_kejuaraan,
            penyelenggara:penyelenggara,
            skala:skala,
            keterangan:keterangan,
            tahun:tahun
        }, {
            where: {
                user_id: biodata.id
            }
        })
        
        return res.status(200).json({message: "Success to update data"});
    } catch (e) {
        return res.status(400).json({message: "Failed to update data prestasi, with error: " + e.message})
    }
}

export const deletePrestasi = async (req, res) => {
    const prestasi = await Prestasi.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!prestasi) return res.status(404).json({msg: "data tidak ditemukan"});
    try {
        await Prestasi.destroy({
            where:{
                id: prestasi.id
            }
        });
        return res.status(200).json({msg: "Data successfully Deleted"});
    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
}
