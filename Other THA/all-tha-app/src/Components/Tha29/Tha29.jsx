import 'bootstrap/dist/css/bootstrap.min.css'
import "./Style29.css"
import Form from './Form';
import WeatherCard from './WeatherCard';
import ToggleTheme from './ToggleTheme';

import { useSelector } from 'react-redux';

const Tha29 = ()=>{
    const theme = useSelector((state)=> state.theme);
    return(
        <div className={theme ? "tha-29 dark" : "tha-29"}>
            <ToggleTheme />
            <Form />
            <WeatherCard />
        </div>
    );
};

export default Tha29;