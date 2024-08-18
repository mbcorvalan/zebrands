import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store/store';
import { toggleTheme } from "../redux/reducers/themeReducer";

export default function Toggle() {

    const theme = useSelector((state: RootState) => state.theme.theme);
    const dispatch = useDispatch();
    return (
        <form className="toggle">
            <fieldset>
                <legend className="toggle__label sr-only"></legend>
                <label className="toggle__switch">
                    <input checked={theme === 'dark'}
                        onChange={() => dispatch(toggleTheme())} type="checkbox" name="dark" />
                    <span className="toggle__slider"></span>
                </label>
            </fieldset>
        </form>
    );
}
