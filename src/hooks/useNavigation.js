import { useContext } from 'react';
import NavigationContext from '../context/NavigationContext';

const useNavigation = () => {
    return useContext(NavigationContext);
}

export default useNavigation;
