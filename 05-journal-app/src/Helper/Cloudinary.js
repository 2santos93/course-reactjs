export const uploadFileToCloud = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'journalApp');
  try{
    const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/ncaicedo/upload', {
      method: 'POST',
      body: formData
    });
    
    const {secure_url} = await cloudinaryResponse.json();
    return secure_url;

  } catch(e){
    console.log('[UPLOAD] ERROR', e);
  }
}