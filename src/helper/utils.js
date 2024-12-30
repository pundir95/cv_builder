export const IMAGE_ALLOWED_EXTENSIONS = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/svg+xml",
  ];


  export const validateCharacterCount = (value, min = 200, max = 10000) => {
    const charCount = value?.replace(/<[^>]*>/g, '').length; // Remove HTML tags to count plain text
    if (charCount < min) return `Minimum ${min} characters required.`;
    if (charCount > max) return `Maximum ${max} characters allowed.`;
    return true;
  };

  export const getPlainText = string => {
    if (string) {
      const plainText = string.replace(/(<([^>]+)>)/gi, '');
      return plainText;
    } else {
      return '';
    }
  };