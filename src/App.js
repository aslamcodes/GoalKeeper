import "./App.css";
import Navbar from "./Components/UI/Navbar/Navbar.jsx";
function App() {
  return (
    <Navbar
      title="Goal Keeper"
      items={[
        { item: "💘", href: "#" },
        { item: "💔", href: "#" },
      ]}></Navbar>
  );
}

export default App;
