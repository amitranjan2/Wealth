import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Cookies from "js-cookie";
interface iNavLink {
    label: string;
    path: string;
    type?: string | null;
  }

export const MAYUR: IAuthor = {
    name: "",
    designation: "Software Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: ''
        },
        {
            icon: <AiFillLinkedin />,
            link: ''
        },
    ]
}

export const RUPALI: IAuthor = {
    name: "",
    designation: "IT Analyst",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: ''
        },
        {
            icon: <AiFillLinkedin />,
            link: ''
        },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'WealthInSync';
export const WEBSITE_URL: string = '';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */

export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    logo: {
      type: LogoType.TEXT,
      logo: 'WealthInSync',
    },
    navLinks: [],
    sideNavLinks: [],
    socials: [
      {
        link: 'https://www.instagram.com/wealthinsync/',
        icon: <AiFillInstagram />
      },
    ]
  };

  const CACHE_KEY = 'apiDataCacheNavBar';
const CACHE_DURATION = 30 * 60 * 1000;  // 30 minutes in milliseconds


const fetchData = async () => {
    try {
      if (typeof localStorage !== 'undefined') {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const currentTime = Date.now();
  
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
  
          if (currentTime - timestamp <= CACHE_DURATION) {
            // Use cached data if not older than CACHE_DURATION
            updateNavLinks(data);
            return;
          }
        }
  
        // Fetch new data if there is no cached data or cached data is too old
        const response = await fetch('http://localhost:8002/internal/homepage/navbar');
        const newData = await response.json();
  
        // Update navLinks and sideNavLinks based on the API response
        PRIMARY_NAV.navLinks = parseApiLinks(newData.ctaDtoList);
        PRIMARY_NAV.sideNavLinks = parseApiLinks(newData.ctaDtoList);
  
        // Cache the new data with a timestamp
        const cacheObject = { data: newData, timestamp: currentTime };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
      }
    } catch (error) {
      console.error('Error fetching navLinks:', error);
      return;
    }
  };

  
  const parseApiLinks = (apiLinks: any[]): iNavLink[] => {
    return apiLinks
      .filter((link) => !(link.type === 'JOIN' && Cookies.get('jwtToken'))) // Exclude items with type 'JOIN' and jwtToken present
      .map((link) => ({
        label: link.title,
        path: link.hrefLink,
        type: link.type,
      }));
  };
  
  
  const updateNavLinks = (data: any) => {
    PRIMARY_NAV.navLinks = parseApiLinks(data.ctaDtoList);
    PRIMARY_NAV.sideNavLinks = parseApiLinks(data.ctaDtoList);
  };
  
  fetchData();

  /*
export const PRIMARY_NAV: iNavSetup = {

    
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'WealthInSync',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us',
            type:''
        },
        // {
        //     // to open a link in new tab pass newTab: true
        //     label: 'Support Us',
        //     path: 'https://www.buymeacoffee.com/webexpe13z',
        //     newTab: true
        // },
    
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        // {
        //     label: 'Support Us',
        //     path: 'https://www.buymeacoffee.com/webexpe13z',
        //     newTab: true
        // },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        // {
        //     link: 'https://www.facebook.com/',
        //     icon: <AiFillFacebook />
        // },
        {
            link: 'https://www.instagram.com/',
            icon: <AiFillInstagram />
        },
        // {
        //     link: 'https://twitter.com/WebExpe',
        //     icon: <AiOutlineTwitter />
        // },
    ]
} */

export const DEFAULT_SEO: iSEO = {
    title: "Nextjs simple blog template",
    description: "A simple blog template using NextJS and Typescript.",
    keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${MAYUR.name}, ${RUPALI.name}`,
    twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}