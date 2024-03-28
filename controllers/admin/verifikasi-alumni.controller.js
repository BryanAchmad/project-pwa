import Biodata from "../../models/biodata-alumni.model.js"

export const getAllVerifikasiAlumni = async (req, res) => {
    const list = await Biodata.findAll();

    return res.status(200).json(list);
}

export const getVerifikasiAlumni = async (req, res) => {
    const data = await Biodata.findOne({
        where: {
            id: req.params.id
        }
    });

    // console.log(data)

    if(!data) return res.status(404).json({message: "Data not found"});

    return res.status(200).json(data);
}
