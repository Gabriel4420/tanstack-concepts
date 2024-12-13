import { useQuery } from "@tanstack/react-query"
import { api } from "./api"

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: api.posts.getAll
  })
}

export const usePostById = (id: number) => {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: () => api.posts.getById(id)
  })
}
