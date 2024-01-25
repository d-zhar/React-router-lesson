import Card from "../../Card/UI/Card";
import Calendar from "./icon/Calendar.png";
import User3 from "./icon/User3.svg";
import Eye from "./icon/Eye.svg";
import ArrowR from "./icon/ArrowR.svg";

import s from "./StatisticBox.module.scss";
import Graph from "../../Graph/UI/Graph";

const StatisticBox = () => {
  return (
    <div className={s.StatisticBox}>
      <div className={s.wrapper}>
        <div>
          <p className={s.tittle}>Статистика</p>
          <p className={s.tittle_text}>Today vs 7 days ago</p>
        </div>
        <div className={s.calendar_style}>
          <img src={Calendar} alt="" />
          <p className={s.calendar_text}>June 03, 22 to July 02, 22</p>
        </div>
      </div>
      <div className={s.card_style}>
        <Card
          Name={"Visitors"}
          Price={"92,680"}
          iconTop={User3}
          Mark={"+"}
          Number={"+3,840 (26,80%)"}
          IconArrow={"⇅"}
        />
        <Card
          Name={"Page views"}
          Price={"580,5K"}
          iconTop={Eye}
          Mark={"+"}
          Number={"210K (16,20%)"}
          IconArrow={"⇅"}
        />
        <Card
          Name={"Page views"}
          Price={"580,5K"}
          iconTop={Eye}
          Mark={"-"}
          Number={"210K (16,20%)"}
          IconArrow={"⇅"}
        />
        <div className={s.arrow_style}>
          <p className={s.next}>View all</p>
          <img src={ArrowR} alt="" />
        </div>
      </div>
      <div>
        <Graph />
      </div>
    </div>
  );
};

export default StatisticBox;
