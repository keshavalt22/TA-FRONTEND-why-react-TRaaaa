function Header() {
    return (
        <header className ="header">
        <div className = "logo">
          <h2>Demo App</h2>
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