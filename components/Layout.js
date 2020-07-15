import Head from 'next/head'

const Layout = ({ children }) => {
  const head = () => (
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
  )

  const nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">
        Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
        About
          </a>
        </li>
      </ul>
    </nav>
  )

  return <React.Fragment>
    {head()}
    {nav()}
    {children}
  </React.Fragment>
}

export default Layout
