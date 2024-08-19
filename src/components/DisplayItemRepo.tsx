import React from 'react';

interface DisplayItemRepoProps {
  name: string;
  imgItem: string;
  urlLink: string;
}

const DisplayItemUser: React.FC<DisplayItemRepoProps> = ({ name, imgItem, urlLink }) => {
  return (
    <li className='displayItem__wrapper'>
      <a href={urlLink} className="displayItem__text" target="_blank" rel="noopener noreferrer">
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
