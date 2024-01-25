import { Link } from "react-router-dom";

import Logo from "./img/Logo.png";
import ControlPanel from "./icon/controlp.png";
import Message from "./icon/Message.png";
import Buyer from "./icon/buyer.png";
import Store from "./icon/store.png";
import Setting from "./icon/Setting.png";
import Info from "./icon/InfoSquare.png";
import Help from "./icon/Help.png";
import SunMoon from "./icon/SunMoon.png";

import s from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={s.SideBar}>
      <img src={Logo} alt="Логотип" />
      <div className={s.Sidebar_style}>
        <p className={s.title}>Главное меню</p>
        <ul>
          <li className={s.listItem}>
            <img src={ControlPanel} alt="" />
            <Link to="/" className={s.text_style}>
              Панель управления
            </Link>
          </li>
          <li className={s.listItem}>
            <img src={Message} alt="" />
            <div className={s.listItem_box}>
              <p className={s.text_style}>Telegram</p>
              <div className={s.listItem_box_border}>3 новых</div>
            </div>
          </li>
        </ul>
      </div>
      <div className={s.Sidebar_style}>
        <p className={s.title}>Процессы</p>
        <ul>
          <li className={s.listItem}>
            <img src={Store} alt="" />
            <Link to="/store" className={s.text_style}>
              Торговые точки
            </Link>
          </li>
          <li className={s.listItem}>
            <img src={Buyer} alt="" />
            <Link to="/buyers" className={s.text_style}>
              Покупатели
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.Sidebar_style}>
        <p className={s.title}>Опции</p>
        <ul>
          <li className={s.listItem}>
            <img src={Setting} alt="" />
            <Link to="/setting" className={s.text_style}>
              Настройки
            </Link>
          </li>
          <li className={s.listItem}>
            <img src={Info} alt="" />
            <Link to="/support" className={s.text_style}>
              Служба поддержки
            </Link>
          </li>
          <li className={s.listItem}>
            <img src={Help} alt="" />
            <p className={s.text_style}>О нас</p>
          </li>
          <li className={s.listItem}>
            <img src={SunMoon} alt="" />
            <p className={s.text_style}>Светлая тема</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
