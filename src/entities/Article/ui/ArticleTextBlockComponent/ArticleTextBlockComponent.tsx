import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleTextBlockComponent.scss";

interface ArticleTextBlockComponent {
  className?: string;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponent) => {
    const { className } = props;

    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        Article Text Block Component
      </div>
    );
  }
);
