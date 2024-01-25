import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes/UI/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
