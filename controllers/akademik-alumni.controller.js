import Akademik from "../models/akademik-alumni.model.js"

export const get = async (req, res) => {
    const list = await Akademik.findAll();

    return res.status(200).json(list);
}

export const getOne = async (req, res) => {
    const data = await Akademik.findOne({
        where: {
            id: req.params.id
        }
    });

    console.log(data)

    if(!data) return res.status(404).json({message: "Data not found"});

    return res.status(200).json(data);
}

export const getByAlumniId = async (req, res) => {
    const biodata = await Akademik.findOne({
        where: {
            user_id: req.params.alumniId
        }
    })

    if(!biodata) return res.status(404).json({message: "Data not found"})

    return res.status(200).json(biodata);
}

export const create = async (req, res) => {
    const {
        angkatan,
        tahun_lulus,
        tanggal_yudisium,
        ipk,
        lama_studi,
        nilai_toefl,
        studi_lanjut,
    } = req.body;

    try{
        const createAkademik = await Akademik.create({ 
            angkatan,
            tahun_lulus,
            tanggal_yudisium,
            ipk,
            lama_studi,
            nilai_toefl,
            studi_lanjut,
            user_id: req.params.id
        });
        
        return res.status(201).json(createAkademik);
    } catch (e) {
        return res.status(400).json({message: "Failed to create biodata, error: "+e.message});
    }
}

export const update = async (req, res) => {
    const akademik = await Akademik.findOne({
        where: {
            id: req.params.id
        }
    });

    const {
        no_alumni, 
        nim, 
        nama, 
        jenis_kelamin,
        alamat,
        kode_pos,
        tempat_lahir,
        tanggal_lahir
    } = req.body

    try {
        const updateAkademik = await Akademik.update({
            nama: nama,
            jenis_kelamin: jenis_kelamin,
            alamat: alamat,
            kode_pos: kode_pos,
            tempat_lahir: tempat_lahir,
            tanggal_lahir: tanggal_lahir,
        }, {
            where: {
                id: biodata.id
            }
        })
        
        return res.status(200).json({message: "Success to update data"});
    } catch (e) {
        return res.status(400).json({message: "Failed to update data, with error: " + e.message})
    }
}

export const deleteBiodata = async (req, res) => {
    const akademik = await Akademik.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!akademik) return res.status(404).json({msg: "data tidak ditemukan"});
    try {
        await Akademik.destroy({
            where:{
                id: akademik.id
            }
        });
        return res.status(200).json({msg: "Data successfully Deleted"});
    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
}
