import LightMode from "../../LightMode/UI/LightMode";
import Logo from "../../Logo/UI/Logo";
import SwitchLang from "../../SwitchLang/UI/SwitchLang";
import s from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <div className={s.HeaderLogo}>
      <Logo />
      <div className={s.disp_setting}>
        <LightMode />
        <SwitchLang />
      </div>
    </div>
  );
};

export default HeaderLogo;
