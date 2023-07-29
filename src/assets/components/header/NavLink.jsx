
const NavLink = ({text}) => {
  return (
    <>
      <a href="#" className="relative py-8 group">
        <span className="group-hover:text-Orange-Primary">{text}</span>
        <span className="absolute bottom-0 left-0 block h-1 w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-Orange-Primary"></span>
        
        </a>
    </>
  )
}

export default NavLink
