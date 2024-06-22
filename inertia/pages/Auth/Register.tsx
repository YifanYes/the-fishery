import { Head } from '@inertiajs/react'
import { FormikValues, useFormik } from 'formik'
import { useContext, useEffect, useMemo } from 'react'
import * as Yup from 'yup'
import { AuthContext } from '~/context/AuthContext'
import { FormHelper } from '~/helpers'
import { Cookie } from '~/services'
import Config from '~/services/Config.service'

const Register = () => {
  const { register, isLogged } = useContext(AuthContext)

  const validationSchema = useMemo(
    () =>
      Yup.object({
        username: Yup.string().required('Añade un nombre de usuario'),
        email: Yup.string().email('El email no es valido').required('Añade un nombre de usuario'),
        password: Yup.string()
          .min(7, 'La contraseña tiene que tener al menos 8 caracteres')
          .required('Añade una contraseña'),
        repeatPassword: Yup.string()
          .min(7, 'La contraseña tiene que tener al menos 8 caracteres')
          .required('Repite la contraseña'),
      }),
    []
  )

  const onSubmit = async ({ username, email, password }: FormikValues) => {
    await register({ username, email, password })
  }

  const { values, errors, touched, setFieldTouched, handleSubmit, setFieldValue } = useFormik({
    initialValues: { username: '', email: '', password: '', repeatPassword: '' },
    validationSchema,
    onSubmit,
  })

  useEffect(() => {
    const accessToken = Cookie.get(Config.token)

    if (isLogged && accessToken) {
      window.location.assign('/')
      return
    }
  }, [isLogged])

  return (
    <>
      <Head>
        <title>Registro</title>
        <link rel="icon" type="svg+xml" sizes="32x32" href="/images/logo.webp" />
        <meta
          name="The Fishery"
          content="The Fishery helps you develop your projects from the idea to the project success"
        />
      </Head>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-24 w-auto" src="/images/logo.webp" alt="The Fishery" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crear nueva cuenta
          </h2>
        </div>
        <div className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre de usuario
            </label>
            <div className="mt-2 space-y-1">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={values.username}
                onChange={(event: any) => {
                  setFieldValue('username', event.target.value)
                  setFieldTouched('username', true)
                }}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
              />
              {FormHelper.inputHasError('username', errors, touched) && (
                <p className="text-red-600 text-xs">{errors.username}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2 space-y-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event: any) => {
                  setFieldValue('email', event.target.value)
                  setFieldTouched('email', true)
                }}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
              />
              {FormHelper.inputHasError('email', errors, touched) && (
                <p className="text-red-600 text-xs">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2 space-y-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                value={values.password}
                onChange={(event: any) => {
                  setFieldValue('password', event.target.value)
                  setFieldTouched('password', true)
                }}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
              />
              {FormHelper.inputHasError('password', errors, touched) && (
                <p className="text-red-600 text-xs">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Repetir contraseña
              </label>
            </div>
            <div className="mt-2 space-y-1">
              <input
                id="repeat-password"
                name="repeat-password"
                type="password"
                autoComplete="password"
                value={values.repeatPassword}
                onChange={(event: any) => {
                  setFieldValue('repeatPassword', event.target.value)
                  setFieldTouched('repeatPassword', true)
                }}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
              />
              {FormHelper.inputHasError('repeatPassword', errors, touched) && (
                <p className="text-red-600 text-xs">{errors.repeatPassword}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="flex w-full justify-center rounded-md bg-[#5bc592] text-[#f7f8fa] px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-[#7bdcad] hover:text-white transition-colors duration-200 ease-in-out"
            >
              Únete a The Fishery
            </button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?{' '}
            <a
              href="/login"
              className="font-semibold leading-6 text-[#5bc592] hover:text-[#7bdcad] transition-colors duration-200 ease-in-out"
            >
              Entra aquí
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
