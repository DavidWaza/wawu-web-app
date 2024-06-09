export const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  export const isValidImageType = (file: File): boolean => {
    const acceptedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ];
    return acceptedTypes.includes(file.type);
  };

  export const isValidFileSize = (file: File): boolean => {
    const MAX_FILE_SIZE_BYTES = 4 * 1024 * 1024; // 4MB
    return file.size <= MAX_FILE_SIZE_BYTES;
  };