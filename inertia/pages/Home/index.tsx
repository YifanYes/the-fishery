import { Head } from '@inertiajs/react'
import { AboutUs, Features, Footer, Hero } from '~/components/molecules'
import { Navbar } from '~/components/organisms'
import { aboutUs, features, footer, hero, navbar } from './home.data'

export default function Home() {
  return (
    <main className="bg-[#f0f0f0] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(144, 144, 144, 0.3),rgba(255,255,255,0))]">
      <Head>
        <title>Welcome</title>
        <link rel="icon" type="svg+xml" sizes="32x32" href="/images/logo.webp" />
        <meta
          name="The Fishery"
          content="The Fishery helps you develop your projects from the idea to the project success"
        />
      </Head>
      <div className="flex flex-col items-center flex-nowrap w-full h-full gap-32">
        <Navbar navbar={navbar} />
        <Hero hero={hero} />
        <Features features={features} />
        <AboutUs aboutUs={aboutUs} />
        <Footer footer={footer} />
      </div>
    </main>
  )
}
