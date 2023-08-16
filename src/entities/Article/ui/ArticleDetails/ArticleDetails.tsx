import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetails.scss'

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const {className} = props

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            Article Details
        </div>
    )
}