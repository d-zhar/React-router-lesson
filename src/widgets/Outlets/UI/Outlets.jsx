import HeaderTittleUser from "../../../component/HeaderTittleUser/UI/HeaderTittleUser";
import CardOutlets from "../../../component/CardOutlets/UI/CardOutlets";
import { Link } from "react-router-dom";

import s from "./Outlets.module.scss";
import StoreCard from "../../../component/StoreCard/UI/StoreCard";

const Outlets = () => {
  return (
    <div className={s.Outlets}>
      <HeaderTittleUser tittle={"Торговые точки"} />
      <div className={s.wrapper}>
        <Link to="/store/outlets/transactions">
          <CardOutlets
            Name={"Choize Coffee"}
            Price={"120K"}
            Adress={"г. Москва м. Павелецкая стр. 12"}
            Mark={"+"}
            Number={"10K (16,20%)"}
          />
        </Link>
        <Link to="/store/outlets/transactions">
          <CardOutlets
            Name={"Choize Coffee"}
            Price={"120K"}
            Adress={"г. Москва м. Павелецкая стр. 12"}
            Mark={"+"}
            Number={"10K (16,20%)"}
          />
        </Link>
        <Link to="/store/outlets/transactions">
          <CardOutlets
            Name={"Choize Coffee"}
            Price={"120K"}
            Adress={"г. Москва м. Павелецкая стр. 12"}
            Mark={"+"}
            Number={"10K (16,20%)"}
          />
        </Link>
        <Link to="/store/outlets/transactions">
          <CardOutlets
            Name={"Choize Coffee"}
            Price={"120K"}
            Adress={"г. Москва м. Павелецкая стр. 12"}
            Mark={"+"}
            Number={"10K (16,20%)"}
          />
        </Link>
        <Link to="/store/outlets/transactions">
          <CardOutlets
            Name={"Choize Coffee"}
            Price={"120K"}
            Adress={"г. Москва м. Павелецкая стр. 12"}
            Mark={"-"}
            Number={"10K (16,20%)"}
          />
        </Link>
        <Link to="/store/outlets/transactions">
          <CardOutlets
            Name={"Choize Coffee"}
            Price={"120K"}
            Adress={"г. Москва м. Павелецкая стр. 12"}
            Mark={"-"}
            Number={"10K (16,20%)"}
          />
        </Link>
        <Link to="/store/outlets/transactions">
          <CardOutlets
            Name={"Choize Coffee"}
            Price={"120K"}
            Adress={"г. Москва м. Павелецкая стр. 12"}
            Mark={"-"}
            Number={"10K (16,20%)"}
          />
        </Link>
        <Link to="/store/outlets/transactions">
          <CardOutlets
            Name={"Choize Coffee"}
            Price={"120K"}
            Adress={"г. Москва м. Павелецкая стр. 12"}
            Mark={"+"}
            Number={"10K (16,20%)"}
          />
        </Link>
        <StoreCard />
      </div>
    </div>
  );
};

export default Outlets;
