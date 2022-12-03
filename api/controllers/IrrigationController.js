import Irrigation from '../models/IrrigationModel.js'

import { ObjectId } from 'mongodb';

const getState=async (req, res) => {
    try{

        const data = await Irrigation.find({})
        console.log(data)
        res.status(200).json(data[0])
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
};


export default { getState};