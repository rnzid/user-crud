import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const nagivate = useNavigate();
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">User List</a>
      <div  id="navbarColor01">
        <ul className="navbar-nav me-auto">
        
        </ul>
       <button type='button' className='btn btn-outline-secodary my-1 my-sm-0 ' onClick={()=>nagivate("/add-user")} >
        Add  User</button>
      </div>
    </div>
  </nav>
  </>
  )
}
