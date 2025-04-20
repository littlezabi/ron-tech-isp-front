import Home from "./pages/home";
import Header from "./components/Headers";
import Services from "./pages/Services/Services";
import Packages from "./pages/Packages";
import About from "./pages/About";
import { Icon } from "@iconify-icon/react";
import { useContextProvider } from "./store/context";
import { Modal } from "antd";
import { useEffect } from "react";
import SignUp from "./pages/regsiter";
import Login from "./pages/login";

function App() {
  const { modals, updateModals } = useContextProvider();
  useEffect(() => {
    console.log("modals", modals);
  }, [modals]);
  return (
    <div className="">
      {modals.login && (
        <Modal
          style={{ top: 20 }}
          className="custom-modal"
          open={modals.login}
          keyboard={true}
          centered={true}
          onCancel={() => updateModals({ login: false })}
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
          styles={{ body: { backgroundColor: "black", color: "white" } }}
          closeIcon={<Icon icon="mdi:close" style={{ color: "white" }} />}
        >
          <Login />
        </Modal>
      )}

      {modals.signup && (
        <Modal
          style={{ top: 20 }}
          className="custom-modal"
          open={modals.signup}
          keyboard={true}
          centered={true}
          onCancel={() => updateModals({ signup: false })}
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
          styles={{ body: { backgroundColor: "black", color: "white" } }}
          closeIcon={<Icon icon="mdi:close" style={{ color: "white" }} />}
        >
          <SignUp />
        </Modal>
      )}

      <Header />
      <Home />
      <Services />
      <Packages />
      <About />
    </div>
  );
}

export default App;
