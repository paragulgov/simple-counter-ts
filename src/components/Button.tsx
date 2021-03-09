type ButtonPropsType = {
  text: string;
  onClick: () => void;
  disabled: boolean;
};

const Button = (props: ButtonPropsType) => {
  return (
    <button
      className="Button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
