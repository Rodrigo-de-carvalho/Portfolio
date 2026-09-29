import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Rodrigo de Carvalho Costa. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
