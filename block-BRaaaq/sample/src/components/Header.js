import PropTypes from 'prop-types';

function Header() {
    return (
        <header className ="header">
        <div className = "logo">
          <img src="/images/logo.jpg" alt=""/>
        </div>
        <nav>
          <button className ="btn">Home</button>
          <button className ="btn">About</button>
          <button className ="btn">Contact</button>
        </nav>
      </header>
    )    
}

export default Header;