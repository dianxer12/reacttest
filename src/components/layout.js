const Layout = (header) => (
    <div className='container'>
    <div id='header' className='row'>
        {header}
    </div>
    {/* <div className='row'>
        <div id='left' className='col-12 col-md-4'>
            {this.props.children[0]}
        </div>
        <div id='center' className='col-12 col-md-4'>
            {this.props.children[1]}
        </div>
        <div id='right' className='col-12 col-md-4'>
            {this.props.children[2]}   
        </div>
    </div> */}
</div>
)