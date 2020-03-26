import React from 'react'
import {Link} from 'gatsby'
import LogoSVG from '../../static/jackmoody_logo.svg'

export default () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pb-2">
        <Link to="/" className={"navbar-brand ml-5"}><img src={LogoSVG} width="50" height="50" alt="Jack Signature Logo"
                id="jackmoody_logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/projects">Projects</a>
                <a className="nav-item nav-link" href="/blog">Blog</a>
            </div>
        </div>
    </nav>
)
