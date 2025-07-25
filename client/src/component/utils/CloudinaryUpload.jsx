import axios from "axios";

function CloudinaryUpload() {
  const uploadFile = async (file, type, onProgress) => {
    console.log("type is :-", type);
    type = type === "videos" ? "video" : type === "article" ? "image" : type;
    if (!file) {
      console.error("No file provided");
      return null;
    }

    const validTypes = ["image", "video"];
    if (!validTypes.includes(type)) {
      console.log(" retype is :-", type);

      console.error('Invalid type specified. Use "image" or "video"');
      return null;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "News_app");
    formData.append("folder", type === "video" ? "videos" : "images");

    try {
      const resourceType = type === "video" ? "video" : "image";
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/do1ui12rk/${resourceType}/upload`,
        formData,
        {
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total);
            console.log(`${percent}% uploaded`);
            if (typeof onProgress === "function") {
              onProgress(percent);
            }
          },
        }
      );

      return response.data?.secure_url ?? null;
    } catch (err) {
      console.error(
        `Error uploading ${type} to Cloudinary:`,
        err.response?.data || err.message
      );
      return null;
    }
  };

  return { uploadFile };
}

export default CloudinaryUpload;
