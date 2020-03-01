import { login } from '@/utils/request'

// login
export function fetchLogin (options) {
  return {
    type: 'LOGIN',
    payload: options,
  }
}