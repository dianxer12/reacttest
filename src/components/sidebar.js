const Sidebar = ({items,onMenuClick}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {items.map((item) => <a class="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>)}
        </nav>
    );
}