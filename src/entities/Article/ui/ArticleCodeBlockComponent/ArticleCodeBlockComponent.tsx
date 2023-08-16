import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetails.scss'

interface ArticleCodeBlockComponent {
    className?: string;
}

export const ArticleDetails = (props: ArticleCodeBlockComponent) => {
    const {className} = props

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            Article Code Block Component
        </div>
    )
}