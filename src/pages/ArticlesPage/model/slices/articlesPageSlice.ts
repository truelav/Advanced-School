import {
    createEntityAdapter,
    createSlice,PayloadAction
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from '../types/articlesPageSchema';


const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticle = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {

        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchCommentsByArticleId.fulfilled, (
    //             state,
    //             action: PayloadAction<Comment[]>,
    //         ) => {
    //             state.isLoading = false;
    //             commentsAdapter.setAll(state, action.payload);
    //         })
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
