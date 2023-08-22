"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageRef = exports.getStorage = void 0;
const _1 = require(".");
const storage_1 = require("firebase/storage");
// Get the storage bucket from firebase.
const getStorage = () => (0, storage_1.getStorage)(_1.app, "gs://personal-cdn-b1662.appspot.com");
exports.getStorage = getStorage;
// Create a storage reference from our storage service.
exports.storageRef = (0, storage_1.ref)((0, exports.getStorage)());
//# sourceMappingURL=storage.js.map