import { useState } from "react";

import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import UserDetails from "./components/UserDetails";
import { IUserData } from "./interfaces";

// ** AppNav
function App() {
  const company = "CODEAWY";
  const aboutTxt = "About Us";
  const [isLogged, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    email: "",
    address: "",
    password: "",
    fullName: "",
  });

  return (
    <div style={{ margin: 20 }}>
      <Navbar companyName={company} aboutTxt={aboutTxt} isLoggedIn={isLogged} setIsLoggedIn={setIsLoggedIn} />

      {isLogged ? (
        <UserDetails user={userData} />
      ) : (
        <RegisterForm setIsLoggedIn={setIsLoggedIn} userData={userData} setUserData={setUserData} />
      )}
    </div>
  );
}

export default App;
