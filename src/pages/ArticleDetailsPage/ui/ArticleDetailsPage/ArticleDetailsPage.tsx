import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      Article Details Page
    </div>
  );
};

export default memo(ArticleDetailsPage);
