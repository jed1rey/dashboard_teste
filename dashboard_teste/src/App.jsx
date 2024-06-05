import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
