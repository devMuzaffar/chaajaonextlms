// Formats Route Path into Normalized Text
// ex: "/contact-us" to "Contact Us"
export const normalizedText = (pathName) => {
  return pathName
    .replace(/^\/+/, "")
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
    ;
};

// Formats Normalized Text to Route Path
// Does not adds prefix Slash(/)
export const formatToPath = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-');
}


// Removes prefix Slash(/) from path
export const removeSlashPath = (pathName) => {
  return pathName.replace("/", "");
}


