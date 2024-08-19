import React from 'react';

/**
 * Interface representing the props for the ButtonLayout component.
 */
export interface ButtonLayoutProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The label text to display on the button.
   */
  label?: string;

  /**
   * The icon to display on the button, can be a React node.
   */
  icon?: JSX.Element;

  /**
   * A prop for additional class names.
   */
  className?: string;
}

/**
 * A functional component that renders a button with an optional icon and label.
 *
 * @param {ButtonLayoutProps} props - The props for the component.
 * @param {string} [props.label] - The label text to display on the button.
 * @param {React.ReactNode} [props.icon] - The icon to display on the button, can be a React node.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Additional button attributes and event handlers.
 * @returns {JSX.Element} The rendered button component.
 */
const Button: React.FC<ButtonLayoutProps> = ({ label, icon, className = '', ...props }: ButtonLayoutProps): JSX.Element => {
  return (
    <button className={`button ${className}`} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {label && <span className="button-label">{label}</span>}
    </button>
  );
};

export default Button;
