import { useContext } from 'react'
import { Logo } from '~/components/atoms'
import { AuthContext } from '~/context/AuthContext'

const Navbar = ({ navbar }: { navbar: NavbarProps }) => {
  const { logout, isLogged } = useContext(AuthContext)

  return (
    <nav className="hidden md:block bg-opacity-50 backdrop-blur-lg px-4 fixed w-full top-0 z-50">
      <div className="mx-auto flex flex-row justify-between items-center">
        {navbar.logo && <Logo />}
        <div className="flex space-x-8">
          {navbar.links.map(({ href, label }, index) => (
            <a key={index} href={`#${href}`} className="text-gray-900 hover:text-gray-600">
              {label}
            </a>
          ))}
        </div>
        <div className="flex flex-row gap-4 items-center">
          {navbar.buttons.map(({ label, onClick }, index) => (
            <button
              key={index}
              {...(onClick ? { onClick } : {})}
              className="bg-[#5bc592] text-[#f7f8fa] px-4 py-2 rounded-full"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => {
              if (isLogged) {
                logout()
              }
              window.location.assign('/login')
            }}
            className="bg-[#5bc592] text-[#f7f8fa] px-4 py-2 rounded-full"
          >
            {isLogged ? 'Cerrar sesión' : 'Acceder'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
