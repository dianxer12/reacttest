import React from 'react'

const Layout = ({header}) => (
    <div>
        <header>
            {header}
        </header>
        <div className='container-fluid'>
            <div className='row'>
                <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
                    <nav id="navbar-example3" class="navbar navbar-light bg-light">
                        <nav class="nav nav-pills flex-column">
                            <a class="nav-link" href="#item-1">Item 1</a>
                            <nav class="nav nav-pills flex-column">
                                <a class="nav-link ml-3 my-1"href="#item-1-1">Item 1-1</a>
                                <a class="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
                            </nav>
                            <a class="nav-link" href="#item-2">Item2</a>
                            <a class="nav-link" href="#item-3">Item3</a>
                            <nav class="nav nav-pills flex-column">
                                <a class="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
                                <a class="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
                            </nav>
                         </nav>
                    </nav>
                </div>
            </div>        
        </div>
    </div>
    )
export {Layout}
