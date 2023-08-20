import { Center } from 'UIKit';
import './Msg.css';


export const Msg = ({ msg, isError }) => {
    return (
        <Center> 
        <div className="error-container">
        <div className="Msg" data-error={isError}>
            <span>{msg}</span>
        </div>
        </div>
        </Center>
    )
}