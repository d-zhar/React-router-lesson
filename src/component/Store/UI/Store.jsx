import HeaderTittleUser from "../../HeaderTittleUser/UI/HeaderTittleUser";
import StoreCard from "../../StoreCard/UI/StoreCard";

import s from "./Store.module.scss";

const Store = () => {
  return (
    <div className={s.Store}>
      <HeaderTittleUser tittle={"Торговая точка"} />
      <div className={s.wrapper}>
        <StoreCard />
      </div>
    </div>
  );
};

export default Store;
