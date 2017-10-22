import React from 'react'

const Layout = ({header,sidebar}) => (
    <div>
        <header>
            {header}
        </header>
        <div className='container-fluid'>
            <div className='row'>
<<<<<<< HEAD
                <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
                    {sidebar}
                </div>
=======
                <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                    {sidebar}
                </nav>
>>>>>>> f25130ff7d7d2e3382c97a08fb1c5f08e4f52523
            </div>        
        </div>
    </div>
    )
export default Layout
