const FeatureCard = ({
  title,
  description,
  imgUrl,
}: {
  title: string
  description: string
  imgUrl: string
}) => {
  return (
    <div className="text-center">
      <div className="size-36 overflow-hidden rounded-full mx-auto">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-6 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  )
}

export default FeatureCard
