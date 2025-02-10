import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export const Resource = mongoose.model("Resource", ResourceSchema);
