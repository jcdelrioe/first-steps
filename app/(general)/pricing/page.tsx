import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JCDRE Pricing",
  description: "Pricing description",
  keywords: ["Pricing page", "JCDRE"],
}

const PricingPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">PricingPage</span>
    </main>
  )
}

export default PricingPage
