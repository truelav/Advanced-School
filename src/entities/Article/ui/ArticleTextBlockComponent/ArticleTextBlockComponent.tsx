import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleTextBlockComponent.scss'

interface ArticleTextBlockComponent {
    className?: string;
}

export const ArticleDetails = (props: ArticleTextBlockComponent) => {
    const {className} = props

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            Article Text Block Component
        </div>
    )
}