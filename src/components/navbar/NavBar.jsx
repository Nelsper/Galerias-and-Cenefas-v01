import './css/navbar.css';


const NavBar = () => {

    return(
        <>
            <nav>
                <img className='logo' src="LogoWhite.svg" alt="logo" />
                <ul>
                    <li className='homeLi'>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <li>Acerca de</li>
                </ul>
            </nav>
        </>
    )
};

export default NavBar;