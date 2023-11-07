import Cookies from 'js-cookie'

export function useAuth() {
  const tokenKey = 'future-music-key'

  const useGetToken = () => {
    return Cookies.get(tokenKey)
  }

  const useSetToken = (token: string) => {
    Cookies.set(tokenKey, token)
  }

  const useRemoveToken = () => {
    Cookies.remove(tokenKey)
  }

  return {
    useGetToken,
    useSetToken,
    useRemoveToken,
  }
}
