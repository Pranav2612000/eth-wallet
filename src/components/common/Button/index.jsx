import clsx from "clsx";
/*
 * type - button/reset/submit
 * variant - primary / secondary / dark
 * text - text to be displayed on the button
 * onClick - function to be called when the button is clicked
 */
const Button = ({type, variant, text, onClick, className}) => {
  if (!type) {
    type = "button"
  }

  return (
    <button type={type} onClick={onClick} className={clsx(variant, className)}>
      {text}
    </button>
  );
};
export default Button;
