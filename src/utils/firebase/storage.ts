import { app } from ".";
import { getStorage as getStorageFirebase, ref } from "firebase/storage";

// Get the storage bucket from firebase.
export const getStorage = () => getStorageFirebase(app, "gs://personal-cdn-b1662.appspot.com");

// Create a storage reference from our storage service.
export const storageRef = ref(getStorage());
