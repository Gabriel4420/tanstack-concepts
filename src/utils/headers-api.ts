import { Post } from "../../types/post"

export const createOptions = (post: Omit<Post, 'id'>) => {
  return {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json'
    }
  }
}