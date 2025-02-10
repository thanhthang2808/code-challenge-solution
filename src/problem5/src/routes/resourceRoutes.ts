import express from "express";
import { createResource, deleteResource, getResource, listResources, updateResource } from "../controllers/resourceController";

const router = express.Router();

router.post("/", createResource);
router.get("/", listResources);
router.get("/:id", getResource);
router.put("/:id", updateResource);
router.delete("/:id", deleteResource);

export default router;
