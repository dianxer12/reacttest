import React from 'react'


const Layout = ({header,sidebar}) => (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id='dash-nav'>
            <a className="navbar-brand" href={"#Dashboard" } id='dash-navbrand'>Dashboard</a>
            <div className="collapse navbar-collapse">
                {header}
            </div>
        </nav>
        <div className='container-fluid'>
            <div className='row'>
                <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                    {sidebar}
                </nav>
            </div>
            <main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3">
                <h1>Dashboard</h1>
                <section row text-center placeholders>
                </section>
                
            </main>        
         </div> 
    </div>
    )
export default Layout
