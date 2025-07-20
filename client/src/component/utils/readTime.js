/**
 * Estimates reading time based on word count (avg: 200 words per minute).
 * @param {string} text - The article content.
 * @returns {string} - Estimated read time (e.g., "2 min read").
 */
export const calculateReadTime = (text) => {
  if (!text) return "0.5 min read"; // Fallback if no content

  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return `${minutes} min read`;
};
