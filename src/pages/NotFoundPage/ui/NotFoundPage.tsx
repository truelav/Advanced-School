
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page Not Found')}
        </div>
    )
}
