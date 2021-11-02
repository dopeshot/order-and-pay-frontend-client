export type Post = {
    title: string,
    body: string
}

export type State = {
    isLoadingPosts: boolean,
    posts: Post[],
    name: string
}

export const state: State = {
    isLoadingPosts: false,
    posts: [],
    name: "Name"
}