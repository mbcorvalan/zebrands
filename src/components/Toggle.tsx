import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store/store';

/**
 * Interface representing the props for the Toggle component.
 * 
 * @interface ToggleProps
 * @property {(state: RootState) => string} selector - Function to select the value from the Redux state.
 * @property {() => { type: string; }} toggleAction - Redux action to dispatch when the toggle is changed.
 * @property {string} checkedValue - The value that determines whether the toggle is checked.
 * @property {string} name - The name attribute for the checkbox input.
 */
interface ToggleProps {
  selector: (state: RootState) => string;
  toggleAction: () => { type: string; };
  checkedValue: string;
  name: string;
}

/**
 * A functional component that renders a toggle switch.
 * 
 * @component
 * @param {ToggleProps} props - The props for the component.
 * @returns {JSX.Element} The rendered toggle component.
 */
const Toggle: React.FC<ToggleProps> = ({ selector, toggleAction, checkedValue, name }) => {
  const value = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <div className="toggle">
      <fieldset>
        <legend className="toggle__label sr-only"></legend>
        <label className="toggle__switch">
          <input
            checked={value === checkedValue}
            onChange={() => dispatch(toggleAction())}
            type="checkbox"
            name={name}
          />
          <span className="toggle__slider"></span>
        </label>
      </fieldset>
    </div>
  );
};

export default Toggle;
