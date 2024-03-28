import Biodata from "../../models/biodata-alumni.model.js"

export const getAllPenggunaTracer = async (req, res) => {
    const list = await Biodata.findAll();

    return res.status(200).json(list);
}

export const getPenggunaTracer = async (req, res) => {
    const data = await Biodata.findOne({
        where: {
            id: req.params.id
        }
    });

    console.log(data)

    if(!data) return res.status(404).json({message: "Data not found"});

    return res.status(200).json(data);
}

export const changePassword = async (req, res) => {
    try {
        const biodata = await Biodata.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!biodata) return res.status(400).json({message: "User not found"});

        const { password } = req.body;
        const passwordHash = await hash(password)   
        const updatePassword = await Biodata.update({
            password: passwordHash
        }, {
            where: {
                id: biodata.id
            }
        })

        if(updatePassword) {
            return res.status(200).json({message: "success update data"});
        } else {
            return res.status(400).json({message: "failed update data"});
        }
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({message: "failed update data with error: ". e.message});
    }
}
