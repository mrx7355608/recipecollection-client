const secrets = import.meta.env;

export const clientConfig = {
    apiUrl: secrets.VITE_API_URL,
    cloudinaryCloudName: secrets.VITE_CLOUDINARY_CLOUD_NAME,
};
