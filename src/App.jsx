import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import LoginState from "./components/LoginState.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <LoginState />
        <Signup />
        <Login />
      </main>
    </>
  );
}

export default App;
