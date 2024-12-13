import { Post } from '../../types/post'
import { User } from '../../types/user'
import { createOptions } from './headers-api'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const api = {
  posts: {
    getAll: async (): Promise<Post[]> => {
      const response = await fetch(`${API_BASE_URL}/posts`)

      return !response.ok ? Promise.reject(new Error('Error ao buscar posts')) : response.json()

    },

    getById: async (id: number): Promise<Post> => {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`)

      return !response.ok ? Promise.reject(new Error(`Erro ao buscar post ${id}`)) : response.json()
    },

    create: async (post: Omit<Post, 'id'>): Promise<Post> => {
      const response = await fetch(`${API_BASE_URL}/posts`, createOptions(post))

      return !response.ok ? Promise.reject(new Error('Erro ao criar post')) : response.json()
    }
  },
  users: {
    getAll: async (): Promise<User[]> => {
      const response = await fetch(`${API_BASE_URL}/users`)

      return !response.ok ? Promise.reject(new Error('Erro ao buscar usuários')) : response.json()
    }
  }
}