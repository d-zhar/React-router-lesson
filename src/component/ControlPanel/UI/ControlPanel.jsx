import HeaderTittleUser from "../../HeaderTittleUser/UI/HeaderTittleUser";
import StatisticBox from "../../StatisticBox/UI/StatisticBox";
import s from "./ControlPanel.module.scss";

const ControlPanel = () => {
  return (
    <div className={s.ControlPanel}>
      <HeaderTittleUser tittle={"Панель управления"} />
      <div className={s.wrapper}>
        <StatisticBox />
      </div>
    </div>
  );
};

export default ControlPanel;
