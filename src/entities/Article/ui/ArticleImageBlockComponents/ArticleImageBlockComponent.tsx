import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetails.scss";

interface ArticleImageBlockComponent {
  className?: string;
}

export const ArticleImageBlockComponent = (
  props: ArticleImageBlockComponent
) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      Article Image Block Component
    </div>
  );
};
