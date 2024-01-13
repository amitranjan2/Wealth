import { LogoType, NavbarType } from "./enums";

export interface MainArticleInsideDetails {
  image?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}

export interface MainArticleContent {
  id?: number;
  image: string;
  title?: string;
  subTitle?: string;
  description: string;
  category?: string;
  createdAt?: string;
  smallImageUrl?: string;
  footerTitle?: string;
  featureArticle?: boolean;
  mainArticleInsideDetails?: MainArticleInsideDetails[];
}

export interface MainApiResponse {
  content?: MainArticleContent[];
  totalPages?: number;
  totalElements?: number;
  ctaDtoList: CtaDto[];
  title?: string | null;
description: string | null;
  subTitle: string | null;
}


export interface IAuthor {
  profilePic?: string;
  name: string;
  designation?: string;
  bio?: string;
  social?: iNavSocials[];
}

export interface IArticleHeaderData {
  author: IAuthor;
  date: string;
  articleTitle: string;
  tags: string;
  thumbnail: string;
  shortIntro: string;
  category?: string;
}

export interface iArticle {
  path: string;
  featureArticle?: boolean;
  preview: IArticleHeaderData;
  seo?: iSEO;
}



export interface CtaDto {
  type: string;
  title: string;
  hrefLink: string;
}

export interface Article {
  date: string;
  title: string;
  subTitle: string;
  topHeader: string;
  imageUrl: string ;
  description: string;
}

export interface HeaderResponseDto {
  title: string;
  articlesList: Article[];
}

export interface FooterResponseDto {
  title: string;
  articlesList: Article[];
}

export interface ApiResponse {
  title: string;
  description: string | null;
  subTitle: string;
  ctaDtoList: CtaDto[];
  headorResponseDto: HeaderResponseDto;
  footerResponseDto: FooterResponseDto | null;
}

export interface HomePageFeaturedArticles {
  sideBarTitle: string;
  href: string ;
  insideMainArticleContent: InsideMainArticleContent | null;
 
}

export interface OutsideMainArticleContent {
  title: string | null;
  subTitle: string | null;
  type: string | null;
  date: string | null;
  description: string | null;
  contents:HomePageFeaturedArticles[];
}


interface ImageDto {
  title: string | null;
  description: string | null;
  imageUrl: string;
}

interface VideoDto {

  title: string | null;
  description: string | null;
  imageUrl: string;
  // Define properties for VideoDto if needed
}

interface InsideMainArticleContent {
  title: string;
  type: string;
  videoUrl: string;
  subTitle: string | null;
  date: string | null;
  description: string | null;
  imageDto: ImageDto[] | null;
  videoDto: VideoDto [] | null;
}





export interface iSEO {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  twitterHandle?: string;
  author?: string;
  url?: string;
}

export interface iNavbar {
  openSearch: () => void;
  toggleSideMenu: () => void;
  changeTheme?: () => void;
  openSidebar: boolean;
  navSetup: iNavSetup;
  onShareClick: () => void;
}

export interface iNavSetup {
  type: NavbarType,
  navLinks: iNavLink[];
  sideNavLinks: iNavLink[];
  socials: iNavSocials[];
  logo: iNavLogo;
}

export interface iNavLogo {
  type: LogoType;
  logo: string;
  logoLight?: string;
}

export interface iNavLink {
  label: string;
  path: string;
  type?: string | null;
  newTab?: boolean;
  
}

export interface iNavSocials {
  link: string;
  icon: any;
}
