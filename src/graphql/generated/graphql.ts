import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  I18NLocaleCode: any
  JSON: any
  Upload: any
}

export type Banner = {
  __typename?: 'Banner'
  button?: Maybe<ComponentPageButton>
  createdAt?: Maybe<Scalars['DateTime']>
  image: UploadFileEntityResponse
  publishedAt?: Maybe<Scalars['DateTime']>
  ribbon?: Maybe<ComponentPageRibbon>
  subtitle: Scalars['String']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type BannerEntity = {
  __typename?: 'BannerEntity'
  attributes?: Maybe<Banner>
  id?: Maybe<Scalars['ID']>
}

export type BannerEntityResponse = {
  __typename?: 'BannerEntityResponse'
  data?: Maybe<BannerEntity>
}

export type BannerEntityResponseCollection = {
  __typename?: 'BannerEntityResponseCollection'
  data: Array<BannerEntity>
  meta: ResponseCollectionMeta
}

export type BannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<BannerFiltersInput>
  or?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type BannerInput = {
  button?: InputMaybe<ComponentPageButtonInput>
  image?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  ribbon?: InputMaybe<ComponentPageRibbonInput>
  subtitle?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  contains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  eq?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['Boolean']>
  gte?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  lt?: InputMaybe<Scalars['Boolean']>
  lte?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']>
  notContainsi?: InputMaybe<Scalars['Boolean']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  startsWith?: InputMaybe<Scalars['Boolean']>
}

export type Category = {
  __typename?: 'Category'
  createdAt?: Maybe<Scalars['DateTime']>
  games?: Maybe<GameRelationResponseCollection>
  name: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CategoryGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type CategoryEntity = {
  __typename?: 'CategoryEntity'
  attributes?: Maybe<Category>
  id?: Maybe<Scalars['ID']>
}

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse'
  data?: Maybe<CategoryEntity>
}

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection'
  data: Array<CategoryEntity>
  meta: ResponseCollectionMeta
}

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  games?: InputMaybe<GameFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CategoryInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
}

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection'
  data: Array<CategoryEntity>
}

export type ComponentPageButton = {
  __typename?: 'ComponentPageButton'
  id: Scalars['ID']
  label: Scalars['String']
  link: Scalars['String']
}

export type ComponentPageButtonInput = {
  id?: InputMaybe<Scalars['ID']>
  label?: InputMaybe<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
}

export type ComponentPageHighlight = {
  __typename?: 'ComponentPageHighlight'
  alignment?: Maybe<Enum_Componentpagehighlight_Alignment>
  background: UploadFileEntityResponse
  buttonLabel: Scalars['String']
  buttonLink: Scalars['String']
  floatimage?: Maybe<UploadFileEntityResponse>
  id: Scalars['ID']
  subtitle: Scalars['String']
  title: Scalars['String']
}

export type ComponentPageHighlightFiltersInput = {
  alignment?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentPageHighlightFiltersInput>>>
  buttonLabel?: InputMaybe<StringFilterInput>
  buttonLink?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentPageHighlightFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentPageHighlightFiltersInput>>>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentPageHighlightInput = {
  alignment?: InputMaybe<Enum_Componentpagehighlight_Alignment>
  background?: InputMaybe<Scalars['ID']>
  buttonLabel?: InputMaybe<Scalars['String']>
  buttonLink?: InputMaybe<Scalars['String']>
  floatimage?: InputMaybe<Scalars['ID']>
  id?: InputMaybe<Scalars['ID']>
  subtitle?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type ComponentPagePopularGames = {
  __typename?: 'ComponentPagePopularGames'
  games?: Maybe<GameRelationResponseCollection>
  highlight?: Maybe<Array<Maybe<ComponentPageHighlight>>>
  id: Scalars['ID']
  title: Scalars['String']
}

export type ComponentPagePopularGamesGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentPagePopularGamesHighlightArgs = {
  filters?: InputMaybe<ComponentPageHighlightFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentPagePopularGamesInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  highlight?: InputMaybe<Array<InputMaybe<ComponentPageHighlightInput>>>
  id?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
}

export type ComponentPageRibbon = {
  __typename?: 'ComponentPageRibbon'
  color?: Maybe<Enum_Componentpageribbon_Color>
  id: Scalars['ID']
  size?: Maybe<Enum_Componentpageribbon_Size>
  text?: Maybe<Scalars['String']>
}

export type ComponentPageRibbonInput = {
  color?: InputMaybe<Enum_Componentpageribbon_Color>
  id?: InputMaybe<Scalars['ID']>
  size?: InputMaybe<Enum_Componentpageribbon_Size>
  text?: InputMaybe<Scalars['String']>
}

export type ComponentPageSection = {
  __typename?: 'ComponentPageSection'
  highlight?: Maybe<ComponentPageHighlight>
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
}

export type ComponentPageSectionInput = {
  highlight?: InputMaybe<ComponentPageHighlightInput>
  id?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
}

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  contains?: InputMaybe<Scalars['Date']>
  containsi?: InputMaybe<Scalars['Date']>
  endsWith?: InputMaybe<Scalars['Date']>
  eq?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  ne?: InputMaybe<Scalars['Date']>
  not?: InputMaybe<DateFilterInput>
  notContains?: InputMaybe<Scalars['Date']>
  notContainsi?: InputMaybe<Scalars['Date']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  startsWith?: InputMaybe<Scalars['Date']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  eq?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  ne?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  startsWith?: InputMaybe<Scalars['DateTime']>
}

export type Developer = {
  __typename?: 'Developer'
  createdAt?: Maybe<Scalars['DateTime']>
  games?: Maybe<GameRelationResponseCollection>
  name: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type DeveloperGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type DeveloperEntity = {
  __typename?: 'DeveloperEntity'
  attributes?: Maybe<Developer>
  id?: Maybe<Scalars['ID']>
}

export type DeveloperEntityResponse = {
  __typename?: 'DeveloperEntityResponse'
  data?: Maybe<DeveloperEntity>
}

export type DeveloperEntityResponseCollection = {
  __typename?: 'DeveloperEntityResponseCollection'
  data: Array<DeveloperEntity>
  meta: ResponseCollectionMeta
}

export type DeveloperFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  games?: InputMaybe<GameFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<DeveloperFiltersInput>
  or?: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type DeveloperInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
}

export type DeveloperRelationResponseCollection = {
  __typename?: 'DeveloperRelationResponseCollection'
  data: Array<DeveloperEntity>
}

export enum Enum_Componentpagehighlight_Alignment {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentpageribbon_Color {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentpageribbon_Size {
  Normal = 'normal',
  Small = 'small'
}

export enum Enum_Game_Rating {
  Br0 = 'BR0',
  Br10 = 'BR10',
  Br12 = 'BR12',
  Br14 = 'BR14',
  Br16 = 'BR16',
  Br18 = 'BR18'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  contains?: InputMaybe<Scalars['Float']>
  containsi?: InputMaybe<Scalars['Float']>
  endsWith?: InputMaybe<Scalars['Float']>
  eq?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']>
  notContainsi?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  startsWith?: InputMaybe<Scalars['Float']>
}

export type Game = {
  __typename?: 'Game'
  categories?: Maybe<CategoryRelationResponseCollection>
  cover: UploadFileEntityResponse
  createdAt?: Maybe<Scalars['DateTime']>
  description: Scalars['String']
  developers?: Maybe<DeveloperRelationResponseCollection>
  gallery?: Maybe<UploadFileRelationResponseCollection>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<GameRelationResponseCollection>
  name: Scalars['String']
  platforms?: Maybe<PlatformRelationResponseCollection>
  price: Scalars['Float']
  publishedAt?: Maybe<Scalars['DateTime']>
  publisher?: Maybe<PublisherEntityResponse>
  rating?: Maybe<Enum_Game_Rating>
  release_date: Scalars['Date']
  short_description: Scalars['String']
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type GameCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GameDevelopersArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GameGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GameLocalizationsArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GamePlatformsArgs = {
  filters?: InputMaybe<PlatformFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GameEntity = {
  __typename?: 'GameEntity'
  attributes?: Maybe<Game>
  id?: Maybe<Scalars['ID']>
}

export type GameEntityResponse = {
  __typename?: 'GameEntityResponse'
  data?: Maybe<GameEntity>
}

export type GameEntityResponseCollection = {
  __typename?: 'GameEntityResponseCollection'
  data: Array<GameEntity>
  meta: ResponseCollectionMeta
}

export type GameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  categories?: InputMaybe<CategoryFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  developers?: InputMaybe<DeveloperFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<GameFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<GameFiltersInput>
  or?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  platforms?: InputMaybe<PlatformFiltersInput>
  price?: InputMaybe<FloatFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  publisher?: InputMaybe<PublisherFiltersInput>
  rating?: InputMaybe<StringFilterInput>
  release_date?: InputMaybe<DateFilterInput>
  short_description?: InputMaybe<StringFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type GameInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  cover?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  platforms?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  price?: InputMaybe<Scalars['Float']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publisher?: InputMaybe<Scalars['ID']>
  rating?: InputMaybe<Enum_Game_Rating>
  release_date?: InputMaybe<Scalars['Date']>
  short_description?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
}

export type GameRelationResponseCollection = {
  __typename?: 'GameRelationResponseCollection'
  data: Array<GameEntity>
}

export type GenericMorph =
  | Banner
  | Category
  | ComponentPageButton
  | ComponentPageHighlight
  | ComponentPagePopularGames
  | ComponentPageRibbon
  | ComponentPageSection
  | Developer
  | Game
  | Home
  | I18NLocale
  | Platform
  | Publisher
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type Home = {
  __typename?: 'Home'
  createdAt?: Maybe<Scalars['DateTime']>
  freeGames?: Maybe<ComponentPageSection>
  newGames?: Maybe<ComponentPageSection>
  popularGames?: Maybe<ComponentPagePopularGames>
  publishedAt?: Maybe<Scalars['DateTime']>
  upcomingGames?: Maybe<ComponentPageSection>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type HomeEntity = {
  __typename?: 'HomeEntity'
  attributes?: Maybe<Home>
  id?: Maybe<Scalars['ID']>
}

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse'
  data?: Maybe<HomeEntity>
}

export type HomeInput = {
  freeGames?: InputMaybe<ComponentPageSectionInput>
  newGames?: InputMaybe<ComponentPageSectionInput>
  popularGames?: InputMaybe<ComponentPagePopularGamesInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  upcomingGames?: InputMaybe<ComponentPageSectionInput>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  eq?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  ne?: InputMaybe<Scalars['ID']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']>
  notContainsi?: InputMaybe<Scalars['ID']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  startsWith?: InputMaybe<Scalars['ID']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contains?: InputMaybe<Scalars['Int']>
  containsi?: InputMaybe<Scalars['Int']>
  endsWith?: InputMaybe<Scalars['Int']>
  eq?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']>
  notContainsi?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  startsWith?: InputMaybe<Scalars['Int']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  contains?: InputMaybe<Scalars['JSON']>
  containsi?: InputMaybe<Scalars['JSON']>
  endsWith?: InputMaybe<Scalars['JSON']>
  eq?: InputMaybe<Scalars['JSON']>
  gt?: InputMaybe<Scalars['JSON']>
  gte?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  lt?: InputMaybe<Scalars['JSON']>
  lte?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']>
  notContainsi?: InputMaybe<Scalars['JSON']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  startsWith?: InputMaybe<Scalars['JSON']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createBanner?: Maybe<BannerEntityResponse>
  createCategory?: Maybe<CategoryEntityResponse>
  createDeveloper?: Maybe<DeveloperEntityResponse>
  createGame?: Maybe<GameEntityResponse>
  createGameLocalization?: Maybe<GameEntityResponse>
  createPlatform?: Maybe<PlatformEntityResponse>
  createPublisher?: Maybe<PublisherEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteBanner?: Maybe<BannerEntityResponse>
  deleteCategory?: Maybe<CategoryEntityResponse>
  deleteDeveloper?: Maybe<DeveloperEntityResponse>
  deleteGame?: Maybe<GameEntityResponse>
  deleteHome?: Maybe<HomeEntityResponse>
  deletePlatform?: Maybe<PlatformEntityResponse>
  deletePublisher?: Maybe<PublisherEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateBanner?: Maybe<BannerEntityResponse>
  updateCategory?: Maybe<CategoryEntityResponse>
  updateDeveloper?: Maybe<DeveloperEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateGame?: Maybe<GameEntityResponse>
  updateHome?: Maybe<HomeEntityResponse>
  updatePlatform?: Maybe<PlatformEntityResponse>
  updatePublisher?: Maybe<PublisherEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationCreateBannerArgs = {
  data: BannerInput
}

export type MutationCreateCategoryArgs = {
  data: CategoryInput
}

export type MutationCreateDeveloperArgs = {
  data: DeveloperInput
}

export type MutationCreateGameArgs = {
  data: GameInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateGameLocalizationArgs = {
  data?: InputMaybe<GameInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreatePlatformArgs = {
  data: PlatformInput
}

export type MutationCreatePublisherArgs = {
  data: PublisherInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteBannerArgs = {
  id: Scalars['ID']
}

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']
}

export type MutationDeleteDeveloperArgs = {
  id: Scalars['ID']
}

export type MutationDeleteGameArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeletePlatformArgs = {
  id: Scalars['ID']
}

export type MutationDeletePublisherArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateBannerArgs = {
  data: BannerInput
  id: Scalars['ID']
}

export type MutationUpdateCategoryArgs = {
  data: CategoryInput
  id: Scalars['ID']
}

export type MutationUpdateDeveloperArgs = {
  data: DeveloperInput
  id: Scalars['ID']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateGameArgs = {
  data: GameInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateHomeArgs = {
  data: HomeInput
}

export type MutationUpdatePlatformArgs = {
  data: PlatformInput
  id: Scalars['ID']
}

export type MutationUpdatePublisherArgs = {
  data: PublisherInput
  id: Scalars['ID']
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']
  pageCount: Scalars['Int']
  pageSize: Scalars['Int']
  total: Scalars['Int']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  start?: InputMaybe<Scalars['Int']>
}

export type Platform = {
  __typename?: 'Platform'
  createdAt?: Maybe<Scalars['DateTime']>
  games?: Maybe<GameRelationResponseCollection>
  name: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type PlatformGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type PlatformEntity = {
  __typename?: 'PlatformEntity'
  attributes?: Maybe<Platform>
  id?: Maybe<Scalars['ID']>
}

export type PlatformEntityResponse = {
  __typename?: 'PlatformEntityResponse'
  data?: Maybe<PlatformEntity>
}

export type PlatformEntityResponseCollection = {
  __typename?: 'PlatformEntityResponseCollection'
  data: Array<PlatformEntity>
  meta: ResponseCollectionMeta
}

export type PlatformFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  games?: InputMaybe<GameFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PlatformFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PlatformInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
}

export type PlatformRelationResponseCollection = {
  __typename?: 'PlatformRelationResponseCollection'
  data: Array<PlatformEntity>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Publisher = {
  __typename?: 'Publisher'
  createdAt?: Maybe<Scalars['DateTime']>
  games?: Maybe<GameRelationResponseCollection>
  name: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type PublisherGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type PublisherEntity = {
  __typename?: 'PublisherEntity'
  attributes?: Maybe<Publisher>
  id?: Maybe<Scalars['ID']>
}

export type PublisherEntityResponse = {
  __typename?: 'PublisherEntityResponse'
  data?: Maybe<PublisherEntity>
}

export type PublisherEntityResponseCollection = {
  __typename?: 'PublisherEntityResponseCollection'
  data: Array<PublisherEntity>
  meta: ResponseCollectionMeta
}

export type PublisherFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  games?: InputMaybe<GameFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PublisherFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PublisherInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  banner?: Maybe<BannerEntityResponse>
  banners?: Maybe<BannerEntityResponseCollection>
  categories?: Maybe<CategoryEntityResponseCollection>
  category?: Maybe<CategoryEntityResponse>
  developer?: Maybe<DeveloperEntityResponse>
  developers?: Maybe<DeveloperEntityResponseCollection>
  game?: Maybe<GameEntityResponse>
  games?: Maybe<GameEntityResponseCollection>
  home?: Maybe<HomeEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  platform?: Maybe<PlatformEntityResponse>
  platforms?: Maybe<PlatformEntityResponseCollection>
  publisher?: Maybe<PublisherEntityResponse>
  publishers?: Maybe<PublisherEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryBannerArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryBannersArgs = {
  filters?: InputMaybe<BannerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryDeveloperArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryDevelopersArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryGameArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryPlatformArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryPlatformsArgs = {
  filters?: InputMaybe<PlatformFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryPublisherArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryPublishersArgs = {
  filters?: InputMaybe<PublisherFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  containsi?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  eq?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Scalars['String']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  username?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type BannerFragmentFragment = {
  __typename?: 'BannerEntityResponseCollection'
  data: Array<{
    __typename?: 'BannerEntity'
    attributes?: {
      __typename?: 'Banner'
      title: string
      subtitle: string
      image: {
        __typename?: 'UploadFileEntityResponse'
        data?: {
          __typename?: 'UploadFileEntity'
          attributes?: { __typename?: 'UploadFile'; url: string } | null
        } | null
      }
      button?: {
        __typename?: 'ComponentPageButton'
        label: string
        link: string
      } | null
      ribbon?: {
        __typename?: 'ComponentPageRibbon'
        text?: string | null
        color?: Enum_Componentpageribbon_Color | null
        size?: Enum_Componentpageribbon_Size | null
      } | null
    } | null
  }>
}

export type GameFragmentFragment = {
  __typename?: 'GameEntityResponseCollection'
  data: Array<{
    __typename?: 'GameEntity'
    attributes?: {
      __typename?: 'Game'
      name: string
      slug: string
      price: number
      cover: {
        __typename?: 'UploadFileEntityResponse'
        data?: {
          __typename?: 'UploadFileEntity'
          attributes?: { __typename?: 'UploadFile'; url: string } | null
        } | null
      }
      developers?: {
        __typename?: 'DeveloperRelationResponseCollection'
        data: Array<{
          __typename?: 'DeveloperEntity'
          attributes?: { __typename?: 'Developer'; name: string } | null
        }>
      } | null
    } | null
  }>
}

export type HighlightFragmentFragment = {
  __typename?: 'ComponentPageHighlight'
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  alignment?: Enum_Componentpagehighlight_Alignment | null
  background: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      attributes?: { __typename?: 'UploadFile'; url: string } | null
    } | null
  }
  floatimage?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      attributes?: { __typename?: 'UploadFile'; url: string } | null
    } | null
  } | null
}

export type QueryGamesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
}>

export type QueryGamesQuery = {
  __typename?: 'Query'
  games?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      attributes?: {
        __typename?: 'Game'
        name: string
        slug: string
        price: number
        cover: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        }
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type QueryGameBySlugQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type QueryGameBySlugQuery = {
  __typename?: 'Query'
  games?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      attributes?: {
        __typename?: 'Game'
        name: string
        short_description: string
        description: string
        price: number
        rating?: Enum_Game_Rating | null
        release_date: any
        gallery?: {
          __typename?: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              src: string
              label?: string | null
            } | null
          }>
        } | null
        cover: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; src: string } | null
          } | null
        }
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
        publisher?: {
          __typename?: 'PublisherEntityResponse'
          data?: {
            __typename?: 'PublisherEntity'
            attributes?: { __typename?: 'Publisher'; name: string } | null
          } | null
        } | null
        categories?: {
          __typename?: 'CategoryRelationResponseCollection'
          data: Array<{
            __typename?: 'CategoryEntity'
            attributes?: { __typename?: 'Category'; name: string } | null
          }>
        } | null
        platforms?: {
          __typename?: 'PlatformRelationResponseCollection'
          data: Array<{
            __typename?: 'PlatformEntity'
            attributes?: { __typename?: 'Platform'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type QueryHomeQueryVariables = Exact<{ [key: string]: never }>

export type QueryHomeQuery = {
  __typename?: 'Query'
  banners?: {
    __typename?: 'BannerEntityResponseCollection'
    data: Array<{
      __typename?: 'BannerEntity'
      attributes?: {
        __typename?: 'Banner'
        title: string
        subtitle: string
        image: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        }
        button?: {
          __typename?: 'ComponentPageButton'
          label: string
          link: string
        } | null
        ribbon?: {
          __typename?: 'ComponentPageRibbon'
          text?: string | null
          color?: Enum_Componentpageribbon_Color | null
          size?: Enum_Componentpageribbon_Size | null
        } | null
      } | null
    }>
  } | null
  newGames?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      attributes?: {
        __typename?: 'Game'
        name: string
        slug: string
        price: number
        cover: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        }
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
  upcomingGames?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      attributes?: {
        __typename?: 'Game'
        name: string
        slug: string
        price: number
        cover: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        }
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
  freeGames?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      attributes?: {
        __typename?: 'Game'
        name: string
        slug: string
        price: number
        cover: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        }
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
  sections?: {
    __typename?: 'HomeEntityResponse'
    data?: {
      __typename?: 'HomeEntity'
      attributes?: {
        __typename?: 'Home'
        newGames?: {
          __typename?: 'ComponentPageSection'
          title?: string | null
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLabel: string
            buttonLink: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatimage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
        } | null
        popularGames?: {
          __typename?: 'ComponentPagePopularGames'
          title: string
          highlight?: Array<{
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLabel: string
            buttonLink: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatimage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null> | null
          games?: {
            __typename?: 'GameRelationResponseCollection'
            data: Array<{
              __typename?: 'GameEntity'
              attributes?: {
                __typename?: 'Game'
                name: string
                slug: string
                price: number
                cover: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                    } | null
                  } | null
                }
                developers?: {
                  __typename?: 'DeveloperRelationResponseCollection'
                  data: Array<{
                    __typename?: 'DeveloperEntity'
                    attributes?: {
                      __typename?: 'Developer'
                      name: string
                    } | null
                  }>
                } | null
              } | null
            }>
          } | null
        } | null
        upcomingGames?: {
          __typename?: 'ComponentPageSection'
          title?: string | null
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLabel: string
            buttonLink: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatimage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
        } | null
        freeGames?: {
          __typename?: 'ComponentPageSection'
          title?: string | null
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLabel: string
            buttonLink: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatimage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export const BannerFragmentFragmentDoc = gql`
  fragment BannerFragment on BannerEntityResponseCollection {
    data {
      attributes {
        image {
          data {
            attributes {
              url
            }
          }
        }
        title
        subtitle
        button {
          label
          link
        }
      }
      attributes {
        ribbon {
          text
          color
          size
        }
      }
    }
  }
`
export const GameFragmentFragmentDoc = gql`
  fragment GameFragment on GameEntityResponseCollection {
    data {
      attributes {
        name
        slug
        cover {
          data {
            attributes {
              url
            }
          }
        }
      }
      attributes {
        developers {
          data {
            attributes {
              name
            }
          }
        }
      }
      attributes {
        price
      }
    }
  }
`
export const HighlightFragmentFragmentDoc = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      data {
        attributes {
          url
        }
      }
    }
    floatimage {
      data {
        attributes {
          url
        }
      }
    }
    buttonLabel
    buttonLink
    alignment
  }
`
export const QueryGamesDocument = gql`
  query QueryGames($limit: Int) {
    games(pagination: { limit: $limit }) {
      ...GameFragment
    }
  }
  ${GameFragmentFragmentDoc}
`

/**
 * __useQueryGamesQuery__
 *
 * To run a query within a React component, call `useQueryGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryGamesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useQueryGamesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    QueryGamesQuery,
    QueryGamesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QueryGamesQuery, QueryGamesQueryVariables>(
    QueryGamesDocument,
    options
  )
}
export function useQueryGamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QueryGamesQuery,
    QueryGamesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<QueryGamesQuery, QueryGamesQueryVariables>(
    QueryGamesDocument,
    options
  )
}
export type QueryGamesQueryHookResult = ReturnType<typeof useQueryGamesQuery>
export type QueryGamesLazyQueryHookResult = ReturnType<
  typeof useQueryGamesLazyQuery
>
export type QueryGamesQueryResult = Apollo.QueryResult<
  QueryGamesQuery,
  QueryGamesQueryVariables
>
export const QueryGameBySlugDocument = gql`
  query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

/**
 * __useQueryGameBySlugQuery__
 *
 * To run a query within a React component, call `useQueryGameBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryGameBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryGameBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useQueryGameBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QueryGameBySlugQuery, QueryGameBySlugQueryVariables>(
    QueryGameBySlugDocument,
    options
  )
}
export function useQueryGameBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >(QueryGameBySlugDocument, options)
}
export type QueryGameBySlugQueryHookResult = ReturnType<
  typeof useQueryGameBySlugQuery
>
export type QueryGameBySlugLazyQueryHookResult = ReturnType<
  typeof useQueryGameBySlugLazyQuery
>
export type QueryGameBySlugQueryResult = Apollo.QueryResult<
  QueryGameBySlugQuery,
  QueryGameBySlugQueryVariables
>
export const QueryHomeDocument = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }
    newGames: games(
      filters: { release_date: { lte: "2022-07-22" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }
    upcomingGames: games(
      filters: { release_date: { gt: "2022-07-22" } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }
    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }
    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          popularGames {
            title
            highlight {
              ...HighlightFragment
            }
            games(pagination: { limit: 8 }) {
              data {
                attributes {
                  name
                  slug
                  cover {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                attributes {
                  developers {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
                attributes {
                  price
                }
              }
            }
          }
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }
  ${BannerFragmentFragmentDoc}
  ${GameFragmentFragmentDoc}
  ${HighlightFragmentFragmentDoc}
`

/**
 * __useQueryHomeQuery__
 *
 * To run a query within a React component, call `useQueryHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryHomeQuery(
  baseOptions?: Apollo.QueryHookOptions<QueryHomeQuery, QueryHomeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QueryHomeQuery, QueryHomeQueryVariables>(
    QueryHomeDocument,
    options
  )
}
export function useQueryHomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QueryHomeQuery,
    QueryHomeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<QueryHomeQuery, QueryHomeQueryVariables>(
    QueryHomeDocument,
    options
  )
}
export type QueryHomeQueryHookResult = ReturnType<typeof useQueryHomeQuery>
export type QueryHomeLazyQueryHookResult = ReturnType<
  typeof useQueryHomeLazyQuery
>
export type QueryHomeQueryResult = Apollo.QueryResult<
  QueryHomeQuery,
  QueryHomeQueryVariables
>
