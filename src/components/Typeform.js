import React, { useEffect } from 'react';

const Typeform = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div data-tf-live="01HF7K4E0F2YN6BSXTPBNGYVRA"></div>
  );
};

export default Typeform;