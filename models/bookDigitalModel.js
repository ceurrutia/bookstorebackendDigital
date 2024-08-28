import mongoose from "mongoose";

const bookDigitalSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        format: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

export const Book = mongoose.model('BookDigital', bookDigitalSchema);
