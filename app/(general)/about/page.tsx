import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JCDRE about",
  description: "About description",
  keywords: ["About page", "JCDRE"],
}

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">AboutPage</span>
    </main>
  )
}

export default AboutPage
