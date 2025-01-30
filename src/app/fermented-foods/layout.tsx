import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artisanal Fermented Foods in Medellín | Better Health",
  description: "Discover our locally crafted, probiotic-rich fermented foods in Medellín. Kombucha, Kimchi, and more made fresh using traditional methods and organic ingredients.",
  keywords: "fermented foods Medellín, kombucha Medellín, kimchi Colombia, probiotics, gut health, organic food Medellín, healthy food delivery",
  openGraph: {
    title: "Artisanal Fermented Foods in Medellín | Better Health",
    description: "Premium fermented foods made fresh in Medellín using traditional methods and organic ingredients. Boost your gut health with our probiotic-rich products.",
    type: "website",
    locale: "es_CO",
  }
}

export default function FermentedFoodsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 