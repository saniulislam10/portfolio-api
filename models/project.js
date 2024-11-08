const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, "Title must be at least 2 characters"],
        maxlength: [100, "Title can be at most 100 characters"],
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, "Description must be at least 10 characters"],
        maxlength: [1000, "Description can be at most 1000 characters"],
    },
    technologies: {
        type: [String],
        required: true,
        validate: {
            validator: function(array) {
                return array.length > 0;
            },
            message: "At least one technology is required",
        },
    },
    projectUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\/\S+\.\S+$/, "Please enter a valid URL"],
    },
    imageUrl: {
        type: String,
        required: false,
        match: [/^https?:\/\/\S+\.\S+$/, "Please enter a valid image URL"],
    },
    startDate: {
        type: Date,
        required: false,
    },
    endDate: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        enum: ["completed", "in progress", "planned"],
        required: true,
    },
    skills: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill',
        required: false,
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
