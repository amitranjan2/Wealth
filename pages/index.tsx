/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
// import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { ApiResponse,MainApiResponse } from "../src/shared/interfaces";


import { ToastContainer, toast } from "react-toastify";
import Loader from "../src/components/Loader";


// Define types for the response structure

// ... (imports and other code)

const Home = () => {
  // const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [apiData, setApiData] = useState<MainApiResponse | null>(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const CACHE_KEY = 'apiDataCache';
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
  const [isDarkMode, setIsDarkMode] = useState(false);

    
  if (!navigator.onLine) {
    // Handle case where there is no internet connection
    console.error("No internet connection");
    toast.error("No internet connection. Please check your network.", {
      position: toast.POSITION.TOP_RIGHT,
    });

    // Return a styled and centered message with animation
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Adjust the height as needed
          animation: 'fadeIn 1s ease-out', // Add a fade-in animation
        }}
      >
        <div
          style={{
            background: '#ffcccc', // Adjust background color as needed
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0 }}>
            No internet connection. Please check your network.
          </p>
        </div>
      </div>
    );
  }
  

  useEffect(() => {
    const jwtToken = Cookies.get('jwtToken');
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true when starting to fetch data

        const response = await fetch('http://localhost:8002/internal/homepage/api/main-featured-articles');
        const data = await response.json();
        setApiData(data);

        // Store data in localStorage with timestamp
        const cacheObject = { data, timestamp: Date.now() };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
      } catch (error) {
        console.error('Error fetching API data:', error);
        return;
      } finally {
        setLoading(false); // Set loading to false when data fetching is completed (either success or error)
      }
    };

    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);

      // Check if the cached data is not older than CACHE_DURATION
      if (Date.now() - timestamp <= CACHE_DURATION) {
        setApiData(data);
        setLoading(false); // Set loading to false when data is loaded from cache
      } else {
        // Fetch new data if the cached data is too old
        fetchData();
      }
    } else {
      // Fetch data if there is no cached data
      fetchData();
    }
    const body = document.body;
    setIsDarkMode(body.classList.contains('dark'));
  }, []);

  useEffect(() => {
    const body = document.body;
    setIsDarkMode(body.classList.contains('dark'));
  }, []);

  console.log("inside blog");

  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      {loading ? ( // Render loader SVG while data is loading
    <Loader />
  
    
    
     
      ) : (
        // Render the rest of your component when data is not loading
        <div>
          <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-gradient-to-r from-teal-400 to-yellow-200'>
            <div className="container text-center px-3">
            <Text title className={`text-3xl ${isDarkMode ? 'text-white' : 'text-black'}`}>

                {apiData?.title}
              </Text>
              <Text p className="mt-3 text-xl">
                {apiData?.subTitle}
              </Text>
              <div className='flex justify-center mt-5 flex-wrap '>
                {apiData &&
                  apiData.ctaDtoList.map((link, index) => {
                    const isJoinLinkWithToken = link.type === 'JOIN';

                    // Add a condition before rendering the LinkTo component
                    if (link.type === 'JOIN' && Cookies.get('jwtToken')) {
                      return null; // Skip rendering for 'JOIN US' with JWT token
                    }

                    return (
                      <LinkTo
                        key={index}
                        href={`/articles/?type=${encodeURIComponent(link.type)}`}
                        passHref
                        className={`flex items-center justify-center rounded-md ${!isJoinLinkWithToken ? 'bg-green-500' : 'bg-red-500'} px-4 pb-2 text-white hover:bg-white hover:text-green-500 shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2`}
                        
                      >
                        <span className='text-xl pt-2 block'>{link.title}</span>
                      </LinkTo>
                    );
                  })}
              </div>
            </div>
          </section>
          <div className="container mx-auto lg:px-[15px] px-0">
            <div className={'flex flex-wrap'}>
              <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below recent articles on stocks</h1>
              <hr className='border-1 mb-5 w-[98%] mx-auto' />
              <HomeNonFeatureArticles apiData={apiData} />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

export default Home;
