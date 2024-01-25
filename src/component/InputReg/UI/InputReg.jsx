import Star from "./icon/star.svg";
import s from "./InputReg.module.scss";

const InputReg = (props) => {
  return (
    <div className={s.InputReg}>
      <div className={s.name_style}>
        <p className={s.name}>{props.children}</p>

        <img src={Star} alt="" />
      </div>
      <input type="text" className={s.input} />
    </div>
  );
};
export default InputReg;
