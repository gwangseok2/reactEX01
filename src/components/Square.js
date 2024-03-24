import "./Square.css";
const Square = ({ value, event }) => {
  console.log(value, "자식컴포넌트");
  return (
    <button type="button" className="square" onClick={event}>
      {value}
    </button>
  );
};

export default Square;
