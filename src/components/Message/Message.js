import "./Message.css";
function Message(props) {
  return (
    <div className="Message">
      <h2>Модель: {props.model}</h2>
      <h2>Мощность: {props.power}</h2>
      <h2>Цвет: {props.color}</h2>
    </div>
  );
}

export default Message;
