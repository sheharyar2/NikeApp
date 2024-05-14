import headerLogo from "../assets/images/header-logo.svg"
import hamburger from "../assets/icons/hamburger.svg"
import { navLinks } from "../constants"
const Navbar = () => {
  console.log(navLinks)
  return (
   <header className="padding-x py-8 absolute z-10 w-full bg-slate-200">
      <nav className="flex justify-between items-center max-container">
      <a href="/">
        <img 
        src={headerLogo}
        alt="logo"
        width={130}
        height={29}
        />
      </a>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden" >
        {
          navLinks.map((links,index)=>{
            return(
              <>
              <li id={index}><a 
              href={links.href}
              className="fonts-montserrat 
              leading-normal text-lg
              text-slate-gray"
               >{links.label}</a></li>
              </>
            )  
          })
        }
      </ul>
      <div className="hidden max-lg:block">
        <img 
        src={hamburger}
        alt="hamburger"
        width={25}
        height={25}
        />
      </div>
      </nav>
   </header>
  )
}

export default Navbar