const HeaderHero = () => {
  return (
    <header className="hero">
    <div className="textos-hero">
      <h1>Pagina web ya migrada a codigo REACT</h1>
      <h2>Website from html to jsx</h2>
      
      <p>Lo que hice fue pasar una pagina web normal de html y css, a codigo REACT. No cuento con los derechos de autor del codigo fuente.</p>
      <a href="#contacto">Contactame</a>
    </div>
    <div className="svg-hero" style={{ height: 150, overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#fff" }}
        />
      </svg>
    </div>
  </header>
  )
}

export default HeaderHero