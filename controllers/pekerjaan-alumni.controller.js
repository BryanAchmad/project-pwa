import Pekerjaan from "../models/pekerjaan-alumni.model.js"
import Biodata from "../models/biodata-alumni.model.js"

export const get = async (req, res) => {
    const list = await Pekerjaan.findAll();

    return res.status(200).json(list);
}

export const getOne = async (req, res) => {
    const data = await Pekerjaan.findOne({
        where: {
            id: req.params.id
        }
    });

    console.log(data)

    if(!data) return res.status(404).json({message: "Data not found"});

    return res.status(200).json(data);
}

export const getByAlumniId = async (req, res) => {
    const pekerjaan = await Pekerjaan.findOne({
        where: {
            user_id: req.params.alumniId
        }
    })

    if(!pekerjaan) return res.status(404).json({message: "Data not found"})

    return res.status(200).json(pekerjaan);
}

export const create = async (req, res) => {
    const {
        is_working,
        is_looking_for_job
    } = req.body;

    try{
        const createPekerjaan = await Pekerjaan.create({ 
            is_working,
            is_looking_for_job,
            user_id: req.params.id
        });
        
        return res.status(201).json(createPekerjaan);
    } catch (e) {
        return res.status(400).json({message: "Failed to create pekerjaan, error: "+e.message});
    }
}

export const update = async (req, res) => {
    const biodata = await Biodata.findOne({
        where: {
            id: req.params.id
        }
    });

    const {
        is_working,
        is_looking_for_job
    } = req.body

    try {
        const updatePekerjaan = await Pekerjaan.update({
            is_working: is_working,
            is_looking_for_job: is_looking_for_job
        }, {
            where: {
                user_id: biodata.id
            }
        })
        
        return res.status(200).json({message: "Success to update data"});
    } catch (e) {
        return res.status(400).json({message: "Failed to update data pekerjaan, with error: " + e.message})
    }
}

export const deletePekerjaan = async (req, res) => {
    const pekerjaan = await Pekerjaan.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!pekerjaan) return res.status(404).json({msg: "data tidak ditemukan"});
    try {
        await Pekerjaan.destroy({
            where:{
                id: pekerjaan.id
            }
        });
        return res.status(200).json({msg: "Data successfully Deleted"});
    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
}
