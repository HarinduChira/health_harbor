import './NavigationStyle/Header.css'

const Header = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Health Harbor</div>

      <ul className="nav-menu">
        <li className="nav-item">Home</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Cart</li>
        <li className="nav-item-contact">Contact</li>
      </ul>
      
    </div>
  )
}

export default Header
