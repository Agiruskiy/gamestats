import React from "react";

import './App.css';
import {Tablelist} from "./Components/TableList/tablelist";
import {Navbar} from "./Components/Navbar/navbar";
import {Userbar} from "./Components/Userbar/userbar";
import {useGamesList} from "./hooks/useGamesList"

export const GlobalContext = React.createContext('')

function App() {
  const [state, dispatch] = useGamesList()
    return (
      <GlobalContext.Provider value = {{ state, dispatch }}>
        <div>
          <Navbar />
            <div className="BodyWrapper">
          <Tablelist />
          <Userbar />
            </div>
        </div>
      </GlobalContext.Provider>
    );
}

export default App;
