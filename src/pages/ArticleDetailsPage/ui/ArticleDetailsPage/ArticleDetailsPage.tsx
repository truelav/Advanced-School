import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        Article Not Found
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      Article Details Page
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
