import { RequestHandler } from "express";
import { Resource } from "../models/resourceModel";

// Create a new resource
export const createResource: RequestHandler = async (req, res, next) => {
    try {
        const newResource = await new Resource(req.body).save();
        res.status(201).json({ success: true, data: newResource });
    } catch (error) {
        next(error);
    }
};

// List resources with filters
export const listResources: RequestHandler = async (req, res, next) => {
    try {
        const resources = await Resource.find(req.query);
        res.status(200).json({ success: true, data: resources });
    } catch (error) {
        next(error);
    }
};

// Get a single resource by ID
export const getResource: RequestHandler = async (req, res, next) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            res.status(404).json({ success: false, message: "Resource not found" });
            return;
        }
        res.status(200).json({ success: true, data: resource });
    } catch (error) {
        next(error);
    }
};

// Update resource details
export const updateResource: RequestHandler = async (req, res, next) => {
    try {
        const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!resource) {
            res.status(404).json({ success: false, message: "Resource not found" });
            return;
        }
        res.status(200).json({ success: true, data: resource });
    } catch (error) {
        next(error);
    }
};

// Delete a resource
export const deleteResource: RequestHandler = async (req, res, next) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if (!resource) {
            res.status(404).json({ success: false, message: "Resource not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Resource deleted successfully" });
    } catch (error) {
        next(error);
    }
};
