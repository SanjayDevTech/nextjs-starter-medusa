import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"

export async function generateStaticParams() {

  const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
    regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
  )

  return countryCodes.map((countryCode: string | undefined) => ({
    countryCode,
  })).filter(Boolean)
}

export default async function RootLayout(props: {
  children: React.ReactNode
}) {
  return props.children
}
