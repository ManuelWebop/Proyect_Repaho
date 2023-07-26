import mongoose from "mongoose";

const SchemaPublic =new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    ubi:{
        type: String,
        required: [true, 'Escribe una descripcion en la publicacion'],
        unique:true,
        maxlenght: [220, 'minimo 20 caracteres tienes que escribir']
    },
    descripcion:{
        type: String,
        require: false,
        minlenght: [500, 'maximo 500 palabras'] 

    },
    ImageUrl:{
        type: String,
        required: true
       
    },
    category: {
        type: String,
        required: true,
        enum:[
            'Rent',
            'Sale',
            'Promotion'
        ]
    }
},{
    timestamps: true
})

export default mongoose?.models?.Public || mongoose.model('Public', SchemaPublic)

 