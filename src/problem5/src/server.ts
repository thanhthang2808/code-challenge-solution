import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database";
import resourceRoutes from "./routes/resourceRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/resources", resourceRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});
