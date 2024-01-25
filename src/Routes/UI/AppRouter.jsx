import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/UI/HomePage";
import BuyersPage from "../../pages/BuyersPage/UI/BuyersPage";
import MainLayout from "../../component/MainLayout/UI/MainLayout";
import NewStoreCard from "../../widgets/NewStoreCard/UI/NewStoreCard";
import Outlets from "../../widgets/Outlets/UI/Outlets";
import OutletsId from "../../widgets/OutletsId/UI/OutletsId";
import OutletsBuyers from "../../widgets/OutletsBuyers/UI/OutletsBuyers";
import OutletsSetting from "../../widgets/OutletsSetting/UI/OutletsSetting";
import BuyersId from "../../widgets/BuyersId/UI/BuyersId";
import BuyersVisited from "../../widgets/BuyersVisited/UI/BuyersVisited";
import BuyersStock from "../../widgets/BuyersStock/UI/BuyersStock";
import SettingPage from "../../pages/SettingPage/UI/SettingPage";
import SettingChangePass from "../../widgets/SettingChangePass/UI/SettingChangePass";
import SupportPage from "../../pages/SupportPage/UI/SupportPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/store" element={<Outlets />} />
          <Route path="/store/newstorecard" element={<NewStoreCard />} />
          <Route path="/store/outlets" element={<Outlets />} />
          <Route path="/store/outlets/transactions" element={<OutletsId />} />
          <Route path="/store/outlets/buyers" element={<OutletsBuyers />} />
          <Route path="/store/outlets/setting" element={<OutletsSetting />} />
          <Route path="/buyers" element={<BuyersPage />} />
          <Route path="/buyers/transactions" element={<BuyersId />} />
          <Route path="/buyers/visited-places" element={<BuyersVisited />} />
          <Route path="/buyers/stock" element={<BuyersStock />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/setting/change-pass" element={<SettingChangePass />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
