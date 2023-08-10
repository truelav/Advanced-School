import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      Articles Page
    </div>
  );
};

export default ArticleDetailsPage;
