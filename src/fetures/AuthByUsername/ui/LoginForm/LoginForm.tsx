import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { loginActions } from '../../model/slice/loginSlice';
import {getLoginState} from '../../model/selectors/getLoginState'

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo( ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const loginForm = useSelector(getLoginState)
    const {username, password} = loginForm

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
