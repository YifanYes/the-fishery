const Image = (props: ImageProps) => {
  return (
    <img
      {...props}
      className={`
        w-${`[${props.width}]` || `[${props.height}]` || 'auto'} 
        h-${`[${props.height}]` || `[${props.width}]` || 'auto'} 
        text-${`[${props.color || '#000000'}]`}
      `}
    />
  )
}

export default Image
