import {Link} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

function Navbar() {
  return (
   <>
    <nav className="navbar ">
  <div className="container-fluid   ">
    <Link className="navbar-brand"  to = '/'><h2 className='text-white'>Tech-Shop</h2></Link>
    <ul className='d-flex  list-unstyled'>
        <li className='m-2'><CiSearch /></li>
       <Link className='text-none' to= '/cart'><li className='m-2 text-white'><IoCartOutline /></li></Link>
        <li className='m-2'><CiUser /></li>
      </ul>
    </div>
    
</nav>

   </>
   
  )
}

export default Navbar;
