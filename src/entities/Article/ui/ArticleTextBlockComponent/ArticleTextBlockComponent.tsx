import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleTextBlockComponents.module.scss";
import { ArticleTextBlock } from "entities/Article/model/types/article";

interface ArticleTextBlockComponent {
  className?: string;
  block?: ArticleTextBlock;
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
