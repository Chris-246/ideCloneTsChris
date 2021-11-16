import { Switch } from '@mui/material';
import { DarkMode } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from "store/hooks"
import { toggleDarkMode } from 'store/slices/dark-mode/darkMode';

const DarkModeSwitch = () => {
    const isDarkModeEnabled = useAppSelector((state) => state.darkMode);
    const dispatch = useDispatch();

    const onChangeDarkMode = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <>
            <DarkMode />
            <Switch color='default' checked={isDarkModeEnabled} onChange={onChangeDarkMode}/>
        </>
    )
}

export default DarkModeSwitch;