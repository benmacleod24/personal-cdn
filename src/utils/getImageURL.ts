import { getStorage } from "./firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const getImageURL = async (title: string, format: string = "png") => {
	const storage = getStorage();
	// Create Storage reference to pull image.
	const storageRef = ref(storage, `images/${title}.${format}`);
	// Return the URL.
	return await getDownloadURL(storageRef);
};
