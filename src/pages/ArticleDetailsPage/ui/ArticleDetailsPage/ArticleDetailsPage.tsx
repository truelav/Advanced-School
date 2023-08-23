import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  const comments = [
    {
      "id": "1",
      "text": "some comment",
      "articleId": "1",
      "userId": "1"
    },
    {
      "id": "2",
      "text": "some comment 2",
      "articleId": "1",
      "userId": 1
    },
    {
      "id": "3",
      "text": "some comment 3",
      "articleId": "1",
      "userId": 1
    }
  ]

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
      Comments
      <CommentList comments={comments}/>
    </div>
  );
};

export default memo(ArticleDetailsPage);
