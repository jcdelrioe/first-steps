import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JCDRE Contact",
  description: "Contact description",
  keywords: ["Contact page", "JCDRE"],
}

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">ContactPage</span>
    </main>
  )
}

export default ContactPage
