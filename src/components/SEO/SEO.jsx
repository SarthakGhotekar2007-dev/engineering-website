import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    // Update og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

  }, [title, description]);

  return null;
};

export default SEO;
