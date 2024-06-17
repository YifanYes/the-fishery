import FeatureCard from './FeatureCard'

const Features = ({ features }: { features: FeaturesProps }) => {
  return (
    <section id="features" className="pt-36">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {(features.title || features.description) && (
          <div className="text-center">
            {features.title && (
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {features.title}
              </h2>
            )}
            {features.description && (
              <p className="mt-4 text-lg text-gray-500">{features.description}</p>
            )}
          </div>
        )}
        <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-0">
          {features.cards.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
