import s from "./RecoveryPage.module.scss";
import HeaderLogo from "../../../component/HeaderLogo/UI/HeaderLogo";
import RecoveryPass from "../../../component/RecoveryPass/UI/RecoveryPass";

const RecoveryPage = () => {
  return (
    <div className={s.RecoveryPage}>
      <HeaderLogo />
      <div className={s.style}>
        <RecoveryPass />
      </div>
    </div>
  );
};

export default RecoveryPage;
