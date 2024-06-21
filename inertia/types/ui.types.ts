type NavbarProps = {
  logo: boolean
  links: {
    href: string
    label: string
  }[]
  buttons: {
    label: string
    onClick?: (params?: any) => any
    type: string
  }[]
}

type ImageProps = {
  width?: string
  height?: string
} & React.ComponentProps<'img'>

type HeroProps = {
  title: string
  description?: string
  button?: {
    text: string
    onClick?: (params?: any) => any
  }
  image?: string
}

type FeatureCardProps = {
  imgUrl: string
  title: string
  description: string
}

type FeaturesProps = {
  title?: string
  description?: string
  cards: FeatureCardProps[]
}

type FooterProps = {
  socials: {
    icon: any
    name: string
    href: string
  }[]
  links: {
    label: string
    href: string
  }[]
  copyright: string
}

type AboutUsProps = {
  title?: string
  description?: string
  stats?: {
    name: string
    value: string
  }[]
}

type NotificationContent = {
  type: TypeNotificationUI
  message: string
}

type TypeNotificationUI =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
