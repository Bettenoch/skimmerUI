import React from 'react';

type CliptextProps = {
  text: string;
  img: string;
};

const Cliptext: React.FC<CliptextProps> = ({ text, img }) => {
  return (
    <h1
      className="clip-text text-5xl font-bold"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {text}
    </h1>
  );
};

export default Cliptext;
