import React from 'react';

/**
 * Interface representing the props for the DisplayItemUser component.
 */
interface DisplayItemRepoProps {
  /**
   * The name of the item to be displayed.
   */
  name: string;

  /**
   * The URL of the image to be displayed.
   */
  imgItem: string;

  /**
   * The URL link for the item.
   */
  urlLink: string;
}

/**
 * A functional component that displays a list item with an image, name, and link.
 *
 * @param {DisplayItemRepoProps} props - The props for the component.
 * @param {string} props.name - The name of the item to be displayed.
 * @param {string} props.imgItem - The URL of the image to be displayed.
 * @param {string} props.urlLink - The URL link for the item.
 * @returns {JSX.Element} The rendered list item component.
 */
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
