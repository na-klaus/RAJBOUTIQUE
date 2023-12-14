import React from 'react';

const Button = ({ styles }) => {
  const redirectToLink = () => {
    // Redirect to the specified link
    window.location.href = 'https://g.co/kgs/pBwcQX';
  };

  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      onClick={redirectToLink}
    >
      VISIT US
    </button>
  );
};

export default Button;

