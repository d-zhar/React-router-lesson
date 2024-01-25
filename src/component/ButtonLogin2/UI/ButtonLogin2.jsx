import s from "./ButtonLogin2.module.scss";

const ButtonLogin2 = (props) => {
  return (
    <div className={s.ButtonLogin2}>
      <button className={s.reg}>{props.children}</button>
    </div>
  );
};
export default ButtonLogin2;
