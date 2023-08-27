import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { getAddCommentFormText } from "features/addCommentForm/model/selectors/addCommentFormSelectors";
import { addCommentFormActions } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
>("addCommentForm/addCommentForArticle", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;

  const userData = getUserAuthData(getState());
  const text = getAddCommentFormText(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue("no data available");
  }

  try {
    const response = await extra.api.post<Comment>("/comments", {
      articleId: article.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(addCommentFormActions.setText(""));
    dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
