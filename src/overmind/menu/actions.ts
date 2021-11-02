import { Context } from ".."


export const loadClient = async ({ state, effects }: Context) => {
    state.menu.isLoadingPosts = true
    state.menu.posts = await effects.example.jsonPlaceholder.getPosts()
    state.menu.isLoadingPosts = true
    console.log(state.menu.isLoadingPosts)
}
