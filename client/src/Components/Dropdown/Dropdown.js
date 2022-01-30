import './Dropdown.css'
import { Link } from 'react-router-dom'

const Dropdown = () => {

    const data=[{
        name:'Items-needed',
        path:'/items-needed'

    },
{
    name:'Logout',
    path:'/logout'
} 
]
const handleClick=(e)=>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
}

    return ( 
        <div className="dropdown">
             <div class="header">
    <div className="dropdown" data-dropdown>
      <button className="link" data-dropdown-button onClick={handleClick}>Information</button>
      <div className="dropdown-menu information-grid">
        <div>
          <div className="dropdown-heading">Free Tutorials</div>
          <div className="dropdown-links">
              {data.map((item,i)=>{
                  return(
<a href="#" className="link" key={i}>{item.name}</a>
                  )
              })}
            
           
          </div>
        </div>
        
      </div>
    </div>
   
        </div>
        </div>
     );
}
 
export default Dropdown;