// import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST"
import { MainApiResponse, iArticle } from "../../shared/interfaces"
import ArticleCard from '../ArticleCards/ArticleCard';
import LinkTo from "../LinkTo";
import {ApiResponse} from "../../shared/interfaces";
import NewArticleCard from "../ArticleCards/NewArtcileCard";
import { useState, useEffect } from 'react';

interface HomeNonFeatureArticlesProps {
    apiData: MainApiResponse | null;
  }

  

const HomeNonFeatureArticles: React.FC<HomeNonFeatureArticlesProps> = ({ apiData }) => {

  
    const [isDarkMode, setIsDarkMode] = useState(false);

    const featureArticle = apiData?.content;

    featureArticle?.map((each,i) =>(console.log("each",each)));

    useEffect(() => {
        const body = document.body;
        setIsDarkMode(body.classList.contains('dark'));
      }, []);

    

    // const restArticles = SORTED_ARTICLES_BY_DATE.filter((article: iArticle) => !article.featureArticle);
    const articlesToDisplay = 6;
    return (
        <>

        {
       featureArticle?.length ?
       featureArticle.slice(0, articlesToDisplay).map((each, i) => (
           <NewArticleCard article={each}  key={i} />
       )) : null
        }
            {/* {
                restArticles.length ?
                    restArticles.slice(0, articlesToDisplay).map((each, i) => (
                        <ArticleCard article={each.preview} path={each.path} key={each.path + i} />
                    )) : null
            } */}

            {/* {
                
                    (
                        <div className="w-full flex items-center">
                            <LinkTo
                                href="/pages/blog"
                                className="
                                    w-auto h-auto text-sm py-3 px-10 
                                    text-center 
                                    bg-yellow-300 rounded-full mx-auto text-black font-bold 
                                    dark:bg-yellow-300
                                    hover:bg-white hover:text-green-500 shadow-lg hover:shadow-none transition-all">
                                View All Articles
                            </LinkTo>
                        </div>
                    ) 
            } */}

        </>
    )
}

export default HomeNonFeatureArticles