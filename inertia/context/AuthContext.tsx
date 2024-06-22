import React, { useCallback, useEffect, useState } from 'react'
import { User } from '~/models'
import { Api, Cookie, Notification } from '~/services'
import Config from '~/services/Config.service'
import { useStore } from '~/state'

type AuthContextType = {
  isLogged: boolean
  isLoading: boolean
  isSettingUp: boolean
  user?: User
  register: (data: { username: string; email: string; password: string }) => Promise<boolean>
  login: (data: { email: string; password: string }) => Promise<boolean>
  logout: () => Promise<boolean>
}

const initialAuthContext: AuthContextType = {
  isLogged: false,
  isLoading: true,
  isSettingUp: true,
  user: undefined,
  login: () =>
    new Promise((resolve, reject) => {
      reject()
    }),
  register: () =>
    new Promise((resolve, reject) => {
      reject()
    }),
  logout: () =>
    new Promise((resolve, reject) => {
      reject()
    }),
}

export const AuthContext = React.createContext(initialAuthContext)

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(true)
  const [isSettingUp, setIsSettingUp] = useState(true)
  const [trigger, setTrigger] = useState(true)
  const { user, setUser } = useStore((state) => ({ user: state.user, setUser: state.setUser }))

  const setupContext = useCallback(async () => {
    if (!trigger) {
      return
    }

    setIsSettingUp(true)

    const accessToken = Cookie.get(Config.token)

    if (!accessToken) {
      setIsSettingUp(false)
      setTrigger(false)
      return
    }

    await autoLogin()
  }, [])

  useEffect(() => {
    setupContext()
  }, [setupContext, trigger])

  const autoLogin = async (): Promise<boolean> =>
    new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true)

        const id = Cookie.get(Config.token)

        if (!id) {
          return
        }

        const res = await Api.get(`/api/users/${id}`)
        setUser(res.data.data)
        resolve(true)
      } catch (error) {
        reject(false)
      } finally {
        setIsLoading(false)
        setIsLogged(true)
        setIsSettingUp(false)
      }
    })

  const login = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<boolean> =>
    new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true)
        const res = await Api.post(`/api/login`, { email, password })
        Cookie.set(Config.token, res.data.data, {
          expires: 7, // seconds to days
        })
        Notification.success('¡Bienvenido/a!')
        resolve(true)
      } catch (error) {
        Notification.error('Un error ocurrió al acceder, inténtalo de nuevo más tarde')
        reject(false)
      } finally {
        setTrigger(true)
        setIsLoading(false)
      }
    })

  const register = async ({
    username,
    password,
    email,
  }: {
    username: string
    password: string
    email: string
  }): Promise<boolean> =>
    new Promise(async (resolve, reject) => {
      try {
        const res = await Api.post(`/api/register`, { username, password, email })
        setUser(res.data.data)
        Notification.success('¡Registro exitoso!')
        resolve(true)
      } catch (error) {
        Notification.error('Un error ocurrió al crear la cuenta, inténtalo de nuevo más tarde')
        reject(false)
      } finally {
        setIsLoading(false)
        setIsLogged(true)
      }
    })

  const logout = async (): Promise<boolean> =>
    new Promise(async (resolve, reject) => {
      try {
        await Api.post(`/api/logout`)
        Cookie.remove(Config.token)
        setUser(undefined)
        resolve(true)
      } catch (error: any) {
        reject(false)
      } finally {
        setIsLoading(false)
        setIsLogged(false)
      }
    })

  useEffect(() => {
    setupContext()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        isLoading,
        isSettingUp,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
