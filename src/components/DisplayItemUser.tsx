import React from 'react';

/**
 * Interface representing the props for the DisplayItemUser component.
 */
interface DisplayItemUserProps {
  /**
   * The name of the user to be displayed.
   */
  name: string;

  /**
   * The URL of the user's avatar image.
   */
  imgItem: string;

  /**
   * The URL link to the user's profile.
   */
  urlLink: string;
}

/**
 * A functional component that displays a user item with an avatar, name, and link to their profile.
 *
 * @param {DisplayItemUserProps} props - The props for the component.
 * @param {string} props.name - The name of the user to be displayed.
 * @param {string} props.imgItem - The URL of the user's avatar image.
 * @param {string} props.urlLink - The URL link to the user's profile.
 * @returns {JSX.Element} The rendered list item component.
 */
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
