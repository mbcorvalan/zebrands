import React from 'react';

interface DisplayItemUserProps {
  name: string;
  imgItem: string;
  urlLink: string;
}

const DisplayItemUser: React.FC<DisplayItemUserProps> = ({ name, imgItem, urlLink }) => {
  return (
    <li className='displayItem__wrapper'>
      <a href={urlLink} target="_blank" rel="noopener noreferrer" className="displayItem__text">
        <div className="displayItem__img">
          <img width="50" height="50" loading="lazy" src={imgItem} alt={`${name}'s avatar`} />
        </div>
        <div className="displayItem__text">
          <h4>{name}</h4>
        </div>
      </a>
    </li>
  );
};

export default DisplayItemUser;
