import "./App.css";
import Navbarre from "./Component/Profile/Navbarre";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div>
      <Navbarre/>
      <ProfilePhoto/>
      <FullName/>
      <Address />
    </div>
  );
}

export default App;
