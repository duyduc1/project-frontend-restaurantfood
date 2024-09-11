const upload_preset = "order-food";
const cloud_name = "dps8tyni7"
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

export const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);
    formData.append("cloud_name", cloud_name);


    const res = await fetch(api_url, {
        method: "POST",
        body: formData
    });

    const fileData = await res.json();
    return await fileData.url;
}