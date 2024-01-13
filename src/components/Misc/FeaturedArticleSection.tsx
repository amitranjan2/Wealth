// import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST"
import { iArticle ,ApiResponse} from "../../shared/interfaces"
import FeaturedArticle from "../ArticleCards/FeaturedArticle"
import NewA from "../ArticleCards/NewA"
import Seperator from "../Seperator"
import Text from "../Text"
  

  
  interface FeaturedArticleSectionProps {
    apiData: ApiResponse | null;
  }
  const FeaturedArticleSection: React.FC<FeaturedArticleSectionProps> = ({ apiData }) => {

    console.log("inside FeaturedArticleSectionProps",apiData);

    const featureArticle = apiData?.headorResponseDto.articlesList;

    featureArticle?.map((each,i) =>(console.log("each",each)));


    // const featureArticles = SORTED_ARTICLES_BY_DATE.filter((article: iArticle) => article.featureArticle === true)

    console.log("inside FeaturedArticleSectionProps",apiData);
    return (
        featureArticle?.length ? 

            (<>
                <Text subtitle className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium">
                    Featured Articles
                </Text>
                <hr className='border-1 mb-5 w-[98%] mx-auto' />

                {
                 
                 featureArticle.map((each, i) => (
                        
                        <NewA article={each} key={ i} />
                       
                    ))
                }

                <Seperator />
            </>) : null

            
        

        // featureArticles.length ?
        //     (<>
        //         <Text subtitle className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium">
        //             Featured Articles
        //         </Text>
        //         <hr className='border-1 mb-5 w-[98%] mx-auto' />

        //         {
                 
        //             featureArticles.map((each, i) => (
                        
        //                 <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} />
        //             ))
        //         }

        //         <Seperator />
        //     </>) : null
    )
}

export default FeaturedArticleSection