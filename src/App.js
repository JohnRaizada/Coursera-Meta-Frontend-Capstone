import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import { createContext, useState } from "react";
export const SidebarContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
});
export const HeaderContext = createContext({
  headerVisible: true,
  setHeaderVisible: () => {},
});
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <HeaderContext.Provider value={{ headerVisible, setHeaderVisible }}>
        <div className="app">
          <Header />
          <Main />
          <Aside />
          <Footer />
        </div>
      </HeaderContext.Provider>
    </SidebarContext.Provider>
  );
}

export default App;
