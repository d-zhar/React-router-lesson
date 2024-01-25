import s from "./LightMode.module.scss";
import Sun from "./icon/Sun.svg";

const LightMode = () => {
  return (
    <div className={s.LightMode}>
      <button className={s.light_mode_btn}>
        <img src={Sun} alt="Sun" />
        <p className={s.light_mode_text}>Light Mode</p>
      </button>
    </div>
  );
};

export default LightMode;
