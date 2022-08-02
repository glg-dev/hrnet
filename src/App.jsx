import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeesList from "./pages/EmployeesList";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<CreateEmployee />} />
          <Route path='/employees' element={<EmployeesList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
