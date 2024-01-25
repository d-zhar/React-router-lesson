import s from "./ButtonLogin.module.scss";

const ButtonLogin = (props) => {
  return (
    <div className={s.ButtonLogin}>
      <button className={s.entrance}>{props.children}</button>
    </div>
  );
};
export default ButtonLogin;
