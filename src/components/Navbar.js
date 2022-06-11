import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom';

export default function Navbar({searchText, setSearchText}) {
    // const history = useHistory();
    const [search, setSearch] = useState('');

    const updateSearchText = (e) => {
        // history.push('/search')
        setSearch(e.target.value)
    }

    const handleonClick = () => {
        setSearchText(search);
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#33adff'}}>
        <div className="container-fluid" style={{color: 'white'}}>
            <img alt='...' className='navbar-brand' src='./favicon.png' style={{width: '40px', height: '40px'}}/>
            <a className="navbar-brand" href="/">News-bar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Watch what's trending</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contacts
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" target="_blank" href="https://www.linkedin.com/in/pulak-das-b99780168"><img height='20px' width='20px' src='./linkedin.png'/> LinkedIN</a></li>
                    <li><a className="dropdown-item" target="_blank" href="https://www.facebook.com/profile.php?id=100009339567415"><img height='20px' width='20px' src='./facebook.png'/> Facebook</a></li>
                    <li><a className="dropdown-item" target="_blank" href="https://www.instagram.com/_pulak_das_/"><img height='20px' width='20px' src='./instagram.png'/> Instagram</a></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input value={search} onChange={updateSearchText} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor: '#ccebff'}}/>
                <button onClick={handleonClick} className="btn btn-outline-primary" type="button" style={{backgroundColor: '#007acc', color: 'white'}}>Search</button>
            </form>
            </div>
        </div>
        </nav>
    );
}
