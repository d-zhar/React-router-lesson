import UserBar from "./img/UserBar.png";

import s from "./HeaderTittleUser4.module.scss";

const HeaderTittleUser4 = (props) => {
  return (
    <div className={s.HeaderTittleUser4}>
      <div className={s.tittle_box}>
        <p className={s.tittle_text}>Служба поддержки</p>
        <p className={s.tittle_text1}>Loyale</p>
        <p className={s.tittle_text2}>G</p>
      </div>
      <div className={s.user_bar}>
        <img className={s.avatar_style} src={UserBar} alt="" />
        <div>
          <p className={s.welcome_text}>Добро пожаловать</p>
          <div className={s.user_style}>
            <p className={s.user_text}>Daniel Estasmos</p>
            <div className={s.triangle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTittleUser4;
