import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import cls from './ArticleDetails.scss'

interface ArticleDetailsProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const {className} = props

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                Article Details
            </div>
        </DynamicModuleLoader>
    )
}