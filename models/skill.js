const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, "Skill name must be at least 2 characters"],
        maxlength: [50, "Skill name can be at most 50 characters"],
    },
    level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
        required: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxlength: [50, "Category can be at most 50 characters"],
    },
    iconUrl: {
        type: String,
        required: false,
        // match: [/^https?:\/\/\S+\.\S+$/, "Please enter a valid URL for the icon"],
    },
    description: {
        type: String,
        required: false,
        trim: true,
        maxlength: [250, "Description can be at most 250 characters"],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
