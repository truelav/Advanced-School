import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<string>
>("articleDetails/fetchCommentsByArticleId", async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Comment[]>(`/articles`, {
      params: {
        articleId,
        _expand: "user",
      },
    });

    if (!response.data) {
      throw new Error();
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
