import { Post } from "./state";

export const jsonPlaceholder = {
    getPosts: async (): Promise<Post[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.json()
    }
}