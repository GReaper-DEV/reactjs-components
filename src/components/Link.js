import {useContext} from 'react';
import {NavigationContext} from "../context/navigation";

function Link({to, children}){

    const {navigate} = useContext(NavigationContext);

    const handleClick = (event) => {

        //allow to open in new tab.
        if (event.ctrlKey || event.metaKey){
            return;
        }

        event.preventDefault();
        navigate(to);
    }

    return <a href={to} onClick={handleClick}>{children}</a>
}
export default Link;