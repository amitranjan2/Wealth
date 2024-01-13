import LinkTo from "../LinkTo";
import { IArticleHeaderData,MainArticleContent } from "../../shared/interfaces";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import classes from "./ArticleCard.module.scss";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import Image from "next/image";
import NewAvatar from "../Misc/NewAvatar";








  interface IProp {
    article: MainArticleContent;
   
}




const NewArticleCard = ({ article }: IProp) => {
  // set url and path
//   const origin =
//     typeof window !== "undefined" && window.location.origin
//       ? window.location.origin
//       : "";

  const imgLoader = ({ src, width, quality }: any) => {
    return `${origin}${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={"w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px]"}>
      <LinkTo
      href={`/tutorial/article-component?keys=${article.id}`}
    
        passHref
        className={combineClasses(
          classes.article_card,
          "border-b-[5px] border-yellow-200 dark:bg-gray-900 dark:text-white dark:drop-shadow-lg flex flex-col justify-between"
        )}
      >
        <div>
        <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative border-purple-400 "} style={{  borderWidth: '2px', borderStyle: 'solid' }}>
  {/* <Image
    src={(article.imageUrl)}
   
    layout="fill"
    quality={100}
    objectFit="cover"
    loader={imgLoader}
  /> */}

  <img
    src={(article.image)} alt={article.title}
    className="w-full h-full object-cover"
    style={{
      boxShadow: '0 4px 8px rgba(120, 144, 156, 0.2)', // Soft blue-gray shadow
      transition: 'transform 0.3s ease-in-out',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} 
  />
</div>


          <div className={"d-block px-[15px] py-0"}>
            <p className={"font-normal text-xs pt-3 mb-0 md:mb-3"}>
              {article.createdAt}
            </p>
            <div >
              <h1
                className={
                  "text-[22px] font-bold cursor-pointer tracking-wide hover:text-green-300"
                }
              >
                {article.title}
              </h1>
            </div>
            <p
              className={combineClasses(
                classes.article_card__intro,
                "text-sm font-normal mt-2 md:mt-1"
              )}
            >
              {article.description?.slice(0, 100)} ...
            </p>
            <ArticleTags tags={article.description} />
          </div>
        </div>
        <div
          className={combineClasses(
            classes.article_card_footer,
            "mt-4 mb-3 flex items-center px-3"
          )}
        >
          <div className={"flex items-center"}>
            <NewAvatar
              author={article.image}
              className="w-[40px] h-[40px] mr-3 text-xl"
            />
            <div
        
              className={combineClasses(
                classes.author_name,
                "text-sm font-medium"
              )}
            >
              {article.title}
            </div>
            {/* <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
              {article.author.name}
            </p> */}
          </div>
          {/* <ArticleCardCategory category={article.category} /> */}
        </div>
      </LinkTo>
    </div>
  );
};

export default NewArticleCard;
