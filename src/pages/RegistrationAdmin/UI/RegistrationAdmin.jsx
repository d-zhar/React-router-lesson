import s from "./RegistrationAdmin.module.scss";
import HeaderLogo from "../../../component/HeaderLogo/UI/HeaderLogo";
import RegAdmin from "../../../component/RegAdmin/UI/RegAdmin";

const RegistrationAdmin = () => {
  return (
    <div className={s.LoginPage}>
      <HeaderLogo />
      <div className={s.style}>
        <RegAdmin />
      </div>
    </div>
  );
};

export default RegistrationAdmin;
