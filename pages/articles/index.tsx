import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import BlogIndexPage from "../../src/components/BlogIndexPage";
import { MainApiResponse } from "../../src/shared/interfaces";
import HomeNonFeatureArticles from "../../src/components/Misc/HomeNonFeatureAricles";
import { PageLayout } from "../../src/components";
import { useRouter } from "next/router";
import Pagination from "../../src/Pagination";

import Loader from '../../src/components/Loader';
import Cookies from 'js-cookie';


const WelcomeMessage = ({ keys }: { keys: string | string[] | undefined }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const getMessage = () => {
    if (keys && keys.length > 0) {
      return `Welcome to The  ${keys}! Section`;
    } else {
      return "Welcome to This Section!";
    }
  };

  return (
    <animated.div style={props} className="text-center mt-10 mb-5">
      <h1 className="text-4xl font-bold text-purple-600">{getMessage()}</h1>
      <p className="text-lg text-gray-600">Explore the latest articles and insights.</p>
    </animated.div>
  );
};


const AllArticles = () => {
  const [apiData, setApiData] = useState<MainApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const jwtToken = Cookies.get('jwtToken');
        if (!router.isReady) return;

        const response = await fetch(`http://localhost:8002/homePage/api/non-featured-articles?category=${router.query.type}&page=${currentPage-1}&size=6`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
        fetchData();
      }
  }, [currentPage,router.isReady,router.query.type]);
//   const totalElements = apiData?.totalPages ?? 0;


  const totalPages =apiData?.totalPages ?? 0;


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return loading ? (
  <Loader/>
  ) : (
    <PageLayout>
      <WelcomeMessage keys={router.query.type} />
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          {/* <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>
            Checkout the below articles on how to use different layouts and components
          </h1> */}
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          <HomeNonFeatureArticles apiData={apiData} />
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

    </PageLayout>
  );
};

export default AllArticles;
