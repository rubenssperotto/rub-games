import { BannerFragmentFragment, GameFragmentFragment, HighlightFragmentFragment } from 'graphql/generated/graphql'

export const bannerMapper = (banners: BannerFragmentFragment) => {
  return banners?.data.map((banner) => ({
    img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
    title: banner.attributes?.title,
    subtitle: banner.attributes?.subtitle,
    buttonLabel: banner.attributes?.button?.label,
    buttonLink: banner.attributes?.button?.link,
    ...(banner.attributes?.ribbon && {
      ribbon: banner.attributes?.ribbon?.text,
      ribbonColor: banner.attributes?.ribbon?.color,
      ribbonSize: banner.attributes?.ribbon?.size
    })
  }))
}

export const gamesMapper = (games: GameFragmentFragment | null | undefined) => {
    return (
        games && (games.data.map((game) => ({
            tiitle: game.attributes?.name,
            slug: game.attributes?.slug,
            developer: game.attributes?.developers?.data[0].attributes?.name,
            img: `http://localhost:1337${game.attributes?.cover.data?.attributes?.url}`,
            price: game.attributes?.price
          })))
    )
}

export const highlightMapper = (highlight: HighlightFragmentFragment | null | undefined) => {
    return (
        highlight && {
            title: highlight.title,
            subtitle: highlight.subtitle,
            backgroundImage: `http://localhost:1337${highlight.background.data?.attributes?.url}`,
            floatImage: `http://localhost:1337${highlight.floatimage?.data?.attributes?.url}` ,
            buttonLabel: highlight.buttonLabel,
            buttonLink: highlight.buttonLink,
            alignment: highlight.alignment,
          }
    )
}