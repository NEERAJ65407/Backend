import {v2 as cloudinary} from 'cloudinary'; //we upload file from local system to multer and from mukter it is uploaded to cloudinary and it gives an url 
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:  process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath){
            return err = new Error("File path not found");
        }
        //uploading file on coudinary 
        const uploadResponse = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        });
        //file has been uploaded successfully
        console.log("File is uploaded on cloudinary",uploadResponse.url);

        return(uploadResponse.url); // returning the fileurl provided by cloudinary to user
    
    } catch (error){
    
        fs.unlinkSync(localFilePath); //removing file from local storage if upload operation fails 
    
        return null;
    }
}

export {uploadOnCloudinary}