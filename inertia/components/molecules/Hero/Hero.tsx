const Hero = ({ hero }: { hero: HeroProps }) => {
  return (
    <section id="home" className="relative pt-24 md:pt-64">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{hero.title}</h1>
          {hero.description && <p className="text-xl text-gray-700 mb-8">{hero.description}</p>}
          {hero.button && (
            <button
              {...(hero.button ? { onClick: hero.button.onClick } : {})}
              className="bg-[#5bc592] text-[#f0f0f0] px-6 py-3 rounded-full"
            >
              {hero.button.text}
            </button>
          )}
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 w-full h-64 rounded-xl">
          {hero.image && (
            <img
              src={hero.image}
              alt="Hero"
              className="w-full h-full object-fit rounded-xl object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
