import { Context } from ".."

export const loadApp = async ({ state, effects }: Context) => {
    state.example.isLoadingPosts = true
    state.example.posts = await effects.example.jsonPlaceholder.getPosts()
    state.example.isLoadingPosts = false
}
