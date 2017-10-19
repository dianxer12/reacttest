let id=0;
const menu = (text,link='#',active=false) => {
    return {
        id: id++,
        text,
        link,
        active
    };
}

export {menu}