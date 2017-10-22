import React from 'react'

const Layout = ({header,sidebar}) => (
    <div>
        <header>
            {header}
        </header>
        <div className='container-fluid'>
            <div className='row'>
                <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
                    {sidebar}
                </div>
            </div>        
        </div>
    </div>
    )
export {Layout}
