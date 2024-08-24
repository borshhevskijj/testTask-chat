import "./App.scss";
import { ChatItemList } from "./pages/ChatItemList/ChatItemList";
import { RoutesContent } from "./pages/routes/RoutesContent";

const App = () => {
  return (
    <div className="App">
      <ChatItemList />
      <RoutesContent />
    </div>
  );
};

export default App;
