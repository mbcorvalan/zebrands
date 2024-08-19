import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store/store';

interface ToggleProps {
  selector: (state: RootState) => string;
  toggleAction: () => { type: string; };
  checkedValue: string;
  name: string;
}

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
