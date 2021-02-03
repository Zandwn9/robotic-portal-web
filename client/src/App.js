import { useContext } from "react";

import { AuthContext } from "./context/AuthProvider";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

function App() {
  const { user } = useContext(AuthContext);
  return user ? <AppStack /> : <AuthStack />;
}

export default App;
