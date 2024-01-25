import s from "./SwitchLang.module.scss";
import flag from "./icon/flag.svg";

const SwitchLang = () => {
  return (
    <div className={s.SwitchLang}>
      <button className={s.SwitchLang_btn}>
        <img className={s.style} src={flag} alt="Sun" />
        <p className={s.SwitchLang_text}>РУС</p>
        <div className={s.triangle}></div>
      </button>
    </div>
  );
};

export default SwitchLang;
