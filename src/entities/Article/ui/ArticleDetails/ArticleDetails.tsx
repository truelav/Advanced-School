import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import cls from "./ArticleDetails.module.scss";
import { useEffect, memo } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById";
import { useSelector } from "react-redux";
import {
  getArticleDetails,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/articleDetails";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetails);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  let content;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    content = (
      <div>
        <Skeleton width={200} height={200} border={"50%"} />;
        <Skeleton width={300} height={32} />;
        <Skeleton width={600} height={24} />;
        <Skeleton width="100%" height={200} />;
        <Skeleton width="100%" height={200} />;
      </div>
    );
  } else if (error) {
    content = <div>Error Happened</div>;
  } else {
    content = <div> Article {id} Details </div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
