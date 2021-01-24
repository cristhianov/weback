const {Schema, model} = require("mongoose");

const videogameSchema = new Schema(
    {
        _owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "El videojuego debe tener un dueño."]
        },
        name: {
            type: String,
            required: [true, "El videojuego debe tener nombre"]
        },
        description: String,
        images: {
            type: [String],
            minlength: [1, "Debes agregar por lo menos una imagen"]
        },
        price: {
            type: Number,
            min: [1, "El precio de la propiedad es muy bajo"],
            required: [true, "Debes agregar un precio"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("Videogame", videogameSchema);

//Cambio 