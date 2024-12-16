import { useQuery, useQueryClient } from "@tanstack/react-query"
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

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: api.users.getAll
  })
}

export const useUsersPrefetch = () => {
  const queryClient = useQueryClient()
  return queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: api.users.getAll
  })
}

export const InvalidatePosts = () => {
  const queryClient = useQueryClient()
  return queryClient.invalidateQueries({ queryKey: ['posts'], exact: true })
}