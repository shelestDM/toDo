import { useSelector } from "react-redux";
import Busket from "./components/Busket";
import ItemsList from "./components/ItemsList";
import Nav from "./components/Nav";

function App() {

  const isBusketVisible = useSelector(state=>state.main.isBusketVisible)

  return (
    <>
      <Nav/>
      {isBusketVisible && <Busket/>}
      <ItemsList/>
    </>
  );
}

export default App;
