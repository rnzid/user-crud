import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Component";
import { UserForm,UserList } from "./Component";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add-user" element={<UserForm/>}/>
        <Route path="/edit-user/:id" element={<UserForm/>}/>
      </Routes>
    </div>
  );
};
