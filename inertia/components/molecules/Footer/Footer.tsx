const Footer = ({ footer }: { footer: FooterProps }) => {
  return (
    <footer className="bg-white dark:bg-[#404040] w-full mt-24">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col-reverse md:flex-row md:items-center md:justify-between">
        {footer.copyright && <span className="text-sm text-gray-400">{footer.copyright}</span>}
        <div className="flex flex-col gap-4 mb-8 md:items-end md:justify-end md:mb-0">
          {footer.socials && (
            <div className="flex flex-row gap-4 mb-4 md:mb-0">
              {footer.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <item.icon width="1.4rem" height="1.4rem" />
                </a>
              ))}
            </div>
          )}
          {footer.links && (
            <ul className="flex flex-wrap items-center mt-3 gap-6 sm:mt-0">
              {footer.links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-gray-400 hover:text-gray-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
