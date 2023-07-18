import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from "react-i18next";
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {className} = props;
    const { t } = useTranslation("profile");
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />
            <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
            {t("Редактировать")}
            </Button>
        </div>
    )
}