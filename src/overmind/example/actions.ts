import { effects } from ".";
import { Context } from "..";

export const loadApp = async ({ state }: Context) => {
    state.example.isLoadingPosts = true
    state.example.posts = await effects.jsonPlaceholder.getPosts()
    state.example.isLoadingPosts = false
}
