import axios, { AxiosResponse } from 'axios'
import Config from './Config.service'
import Cookie from './Cookie.service'

type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const call = async (method: ApiMethod, url: string, body?: any): Promise<AxiosResponse> => {
  const token = Cookie.get(Config.token)
  return await axios({
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Localization': 'es',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body && method !== 'GET' ? { data: body } : {}),
  })
}

const get = async (url: string): Promise<AxiosResponse> => await call('GET', url)

const post = async (url: string, body?: any): Promise<AxiosResponse> =>
  await call('POST', url, body)

const put = async (url: string, body?: any): Promise<AxiosResponse> => await call('PUT', url, body)

const deleteCall = async (url: string, body?: any): Promise<AxiosResponse> =>
  await call('DELETE', url, body)

const Api = {
  get,
  post,
  put,
  delete: deleteCall,
}

export default Api
