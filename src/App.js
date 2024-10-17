import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
// import { ExpenseTracker } from "./pages/expense-tracker/index";
import { Dashboard } from "./pages/dashboard/index";
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          {/* <Route path="/expense-tracker" element={<ExpenseTracker />} /> */}
          <Route path="/expense-tracker" element={<Dashboard />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;