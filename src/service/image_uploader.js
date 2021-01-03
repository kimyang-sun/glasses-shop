class ImageUploader {
  async upload(file, imgOnChange) {
    const reader = new FileReader();
    reader.onload = finishedEvent => {
      const fileURL = finishedEvent.currentTarget.result;
      fileURL && imgOnChange(fileURL);
    };
    reader.readAsDataURL(file);
  }
}

export default ImageUploader;
