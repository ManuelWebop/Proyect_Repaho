import { Schema,model,models } from "mongoose";

const taskSchema =new Schema({
    user: {
        type: String,
        required: [true, 'El titulo es requerido'],
        unique: true,
        maxlength: [40, 'Requiere 40 caracteres la ubicacion']
    },
    text:{
        type: String,
        required: [true, 'Escribe una descripcion en la publicacion'],
        unique:true,
        minlenght: [20, 'minimo 20 caracteres tienes que escribir']
    }
},{
    timestamps: true,
    versionKey: false
})

export default models.Task || model('Task', taskSchema)