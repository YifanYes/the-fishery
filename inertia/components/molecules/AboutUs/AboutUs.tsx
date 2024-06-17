const AboutUs = ({ aboutUs }: { aboutUs: AboutUsProps }) => {
  return (
    <div id="about_us" className="relative isolate w-full pt-36">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        {(aboutUs.title || aboutUs.description) && (
          <div className="mx-auto max-w-2xl lg:mx-0">
            {aboutUs.title && (
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {aboutUs.title}
              </h2>
            )}
            {aboutUs.description && (
              <p
                className="mt-6 text-lg leading-8 text-gray-700"
                dangerouslySetInnerHTML={{ __html: aboutUs.description }}
              />
            )}
          </div>
        )}
        {aboutUs.stats && (
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {aboutUs.stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-500">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  )
}

export default AboutUs
