import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ThemeSwitcher.module.scss'

import MoonIcon from 'shared/assets/icons/icon-moon.svg'
import SunIcon from 'shared/assets/icons/icon-sun.svg'
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === "light" ? <MoonIcon className="themeIcon"/> : <SunIcon className="themeIcon"/>}
        </Button>
        </>
  )
}
