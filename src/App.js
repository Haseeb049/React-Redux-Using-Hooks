import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContner from "./components/IceCreamContner";
import NewCakeContainer from "./components/NewCakeContainer";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContner />
        <NewCakeContainer />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
