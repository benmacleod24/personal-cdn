"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const getImageURL_1 = require("./utils/getImageURL");
// Load environment variables from .env file
dotenv_1.default.config({});
// Create an Express app
const app = (0, express_1.default)();
// Middleware for parsing JSON requests
app.use(express_1.default.json());
// Define endpoint to handle image requests
app.get("/images/:filename", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract parameters from the request
    const imageFilename = req.params.filename;
    const imageFormat = req.query.format || "png";
    // Check if image filename is provided
    if (!imageFilename) {
        return res.status(404).json("Filename not found.");
    }
    try {
        // Get Firebase image URL
        const imageURL = yield (0, getImageURL_1.getImageURL)(imageFilename, imageFormat);
        // Redirect to the obtained image URL
        return res.redirect(imageURL);
    }
    catch (error) {
        // Handle errors gracefully
        console.error("Error fetching image URL:", error);
        return res.status(500).json("Internal Server Error");
    }
}));
// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map