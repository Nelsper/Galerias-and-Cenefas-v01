
import flayer from '../../assets/imgFlayer/Flayer.jpg';
import cyber from '../../assets/imgFlayer/Cyber.jpg';
import './css/flayer.css';

const Flayer = () => {

    return(
        <>
            <img className="imgFlayer" src={flayer.src} alt='Promociones, Descuentos, Saldos'/>
            <img src={cyber.src} alt="Cyber Monday" />
        </>
    )
};

export default Flayer;