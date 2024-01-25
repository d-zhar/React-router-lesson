import UserBar from "./img/UserBar.png";

import s from "./HeaderTittleUser2.module.scss";

const HeaderTittleUser2 = (props) => {
  return (
    <div className={s.HeaderTittleUser}>
      <div className={s.tittle_box}>
        <p className={s.tittle_text}>{props.tittle}</p>
        <p className={s.tittle_text2}>{props.tittle2}</p>
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

export default HeaderTittleUser2;
