import React from 'react'

export default function footer() {
    return (
        <footer className="footer">
            <div className="row text-center">
                <div className="col-6 offset-3">
                    <span className="text-muted">&copy; Jack Moody 2020</span>
                </div>
                <div className="col-3 social-icons">
                    <a href="https://github.com/jackmoody11" target="_blank" className="mr-3" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/jacklmoody" target="_blank" className="mr-3" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://stackoverflow.com/users/8206432/jack-moody" target="_blank" className="mr-3" rel="noopener noreferrer">
                        <i className="fab fa-stack-overflow"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
