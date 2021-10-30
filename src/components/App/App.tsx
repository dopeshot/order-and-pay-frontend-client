import React, { useEffect } from 'react';
import { useActions, useAppState } from '../../overmind';
import { Post } from '../../overmind/example/state';

export const App: React.FunctionComponent = () => {
  const { posts, isLoadingPosts } = useAppState().example
  const { loadApp } = useActions().example

  useEffect(() => {
    loadApp()
  }, [loadApp])

  return (
    <div className="container mx-auto">
      <h3 className="text-xl font-bold pb-4 bg-red-100">Hello World!</h3>
      {isLoadingPosts ? <p>Loading posts...</p> : (
        <ul>
          {posts.map((post: Post, index) => (<li key={index}>{post.title}</li>))}
        </ul>
      )}
    </div>
  );
}
