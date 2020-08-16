import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import { isAuth, logout } from '../helpers/auth'

const Layout = ({ children }) => {
  const head = () => (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"/>
    </React.Fragment>
  )

  const nav = () => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">
        Home
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">
        About
            </a>
          </Link>
        </li>

        {!isAuth() && (
          <React.Fragment>
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link" >Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <a className="nav-link">Register</a>
              </Link>
            </li>
          </React.Fragment>
        )}
      </ul>
      <ul className="navbar-nav ml-auto">
        { isAuth() && isAuth().role === 'admin' && (
          <li className="nav-item">
            <Link href="/admin">
              <a className="nav-link">{isAuth().name}</a>
            </Link>
          </li>
        )}

        { isAuth() && isAuth().role === 'subscriber' && (
          <li className="nav-item">
            <Link href="/user">
              <a className="nav-link">{isAuth().name}</a>
            </Link>
          </li>
        )}

        { isAuth() && (
          <li className="nav-item">
            <a onClick={logout} className="nav-link">
             Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  )

  return <React.Fragment>
    {head()}
    {nav()}
    <div className="container pt-5 pb-5">{children}</div>
  </React.Fragment>
}

export default Layout
