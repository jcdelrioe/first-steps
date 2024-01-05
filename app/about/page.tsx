import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JCDRE about",
  description: "About description",
  keywords: ["About page", "JCDRE"],
}

const AboutPage = () => {
  return <div className="text-5xl">AboutPage</div>
}

export default AboutPage
