import express from "express";
import dotenv from "dotenv";
import { getImageURL } from "./utils/getImageURL";

// Load environment variables from .env file
dotenv.config({});

// Create an Express app
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Define endpoint to handle image requests
app.get("/images/:filename", async (req, res) => {
	// Extract parameters from the request
	const imageFilename = req.params.filename;
	const imageFormat = (req.query.format as string) || "png";

	// Check if image filename is provided
	if (!imageFilename) {
		return res.status(404).json("Filename not found.");
	}

	try {
		// Get Firebase image URL
		const imageURL = await getImageURL(imageFilename, imageFormat);

		// Redirect to the obtained image URL
		return res.redirect(imageURL);
	} catch (error) {
		// Handle errors gracefully
		console.error("Error fetching image URL:", error);
		return res.status(500).json("Internal Server Error");
	}
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
