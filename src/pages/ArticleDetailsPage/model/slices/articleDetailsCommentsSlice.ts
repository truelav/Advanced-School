import {
  createSlice,
  createEntityAdapter,
  EntityState,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsCommentsSlice",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: ["1", "2"],
    entities: {
      1: {
        id: "1",
        text: "comment 1",
        user: { id: "1", username: "vasile" },
      },
      2: {
        id: "1",
        text: "comment 2",
        user: { id: "2", username: "andreica" },
      },
    },
  }),
  reducers: {},
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
