import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Irrigation = new Schema({
    _id: ObjectId,
    irrigation:Number
})


export default mongoose.model('states',Irrigation);