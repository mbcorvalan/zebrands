export default function Toggle() {
    return (
        <form className="toggle">
            <fieldset>
                <legend className="toggle__label sr-only"></legend>
                <label className="toggle__switch">
                    <input type="checkbox" name="dark" />
                    <span className="toggle__slider"></span>
                </label>
            </fieldset>
        </form>
    );
}
