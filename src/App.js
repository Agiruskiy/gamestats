import './App.css';
import {Tablelist} from "./Components/TableList/tablelist";
import {Navbar} from "./Components/Navbar/navbar";
import {Userbar} from "./Components/Userbar/userbar";

function App() {
    return (
      <div>
        <Navbar />
          <div className="BodyWrapper">
        <Tablelist />
        <Userbar />
          </div>
      </div>
    );
}

export default App;
