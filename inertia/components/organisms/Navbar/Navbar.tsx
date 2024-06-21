import { Logo } from '~/components/atoms'

const Navbar = ({ navbar }: { navbar: NavbarProps }) => {
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
              className="bg-[#5bc592] text-[#f0f0f0] px-4 py-2 rounded-full"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
