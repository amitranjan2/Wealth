import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";
import Loader from "../../src/components/Loader";
import {
  PageLayout,
  Text,
  LinkTo,
  Slider,
  Seperator,
  Image,
  List,
  Accordian,
  VideoPlayer,
} from "../../src/components";
import { ListType, ImageSize } from "../../src/shared/enums";
import { combineClasses } from "../../src/utils/utils";
import CodeBlock from "../../src/components/CodeBlock";
import {
  HowToUseList,
  HowToUseSeperator,
  HowToUsePageLayout,
  HowToUseImageCode,
  HowToUseTextCode,
  HowToUseLinkTo,
  HowToUseSlider,
  HowToUseAccordian,
  HowToUseVideo,
} from "../../src/constants/codeBlocks";
import { HomePageFeaturedArticles, OutsideMainArticleContent } from "../../src/shared/interfaces";

interface iSideBtnLinks {
  component: string;
  types?: {
    label: string;
    href: string;
  }[];
  href?: string;
}


// ... (other imports and code)

const AllFComponents = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { key } = router.query;
  const routerIncludesHash = router.asPath.includes("#");
  const [activeHash, setActiveHash] = useState("");
  const [apiData, setApiData] = useState<OutsideMainArticleContent | null>(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const cardBBorder =
    "border-b-[8px] border-blue-500 bg-white dark:bg-slate-800 shadow-md md:rounded-lg px-3 pb-2 pt-1 mb-8";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8002/internal/homepage/featureArticle/${router.query.keys}`);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when fetching is done
      }
    };

    fetchData();

    if (routerIncludesHash) {
      const split = router.asPath.split('#');
      setActiveHash(split[split.length - 1]);
    }
  }, [router,router.query.keys]);

  const isActive = (href: string) => href === "#" + activeHash;
  const sideBtnsComponents = () => {
    if (apiData && Array.isArray(apiData.contents) && apiData.contents.length > 0) {
      return apiData.contents.map((item, index) => {
        const { sideBarTitle } = item;
        const href = `#${item.href || ""}`;
  
        return (
          <div
            key={index}
            className={combineClasses(
              "mb-3",
              "border-2",
              "border-transparent",
              "transition",
              "hover:border-green-300",
              "rounded-md",
              "p-1",
              "shadow-md",
              "transform", // Added transform for hover effect
              "hover:scale-105", // Zoom in on hover
            )}
          >
            <LinkTo
              href={href}
              className={combineClasses(
                "md:text-xl text-md font-semibold mb-3 block whitespace-nowrap md:mr-0 mr-5",
                isActive(href) && "text-green-500"
              )}
            >
              {sideBarTitle}
            </LinkTo>
          </div>
        );
      });
    }
  
    return null;
  };
  
  

  return (
    <PageLayout>
      <section className="container md:pt-10 pt-20 px-0 md:px-[15px]">
        <div className="md:px-0 px-3">
          <Text title className="text-blue-600">
            {apiData?.title || (loading ? (<Loader />) : 'Welcome !!')}
          </Text>
          <hr className="my-5" />
          <Text subtitle>
            {apiData?.subTitle}
          </Text>
        </div>

        <div className="flex md:flex-nowrap flex-wrap relative items-start mt-8">
          {/* side btns */}
          <aside className="md:w-1/5 w-full md:sticky md:top-[90px] ">
            <div className="md:rounded-lg md:p-3 md:block px-2 py-3 md:pb-0 bg-white dark:bg-slate-800 shadow-md mb-5 flex overflow-auto">
              {sideBtnsComponents()}
            </div>
          </aside>

          {/* components */}
          <aside className="md:w-4/5 w-full md:px-[15px]">
            {loading ? (
              // Loader while data is being fetched
              <Loader/>
            ) : (
              // Render components when data is available
              apiData && Array.isArray(apiData.contents) && apiData.contents.length > 0 && apiData.contents.map((item: HomePageFeaturedArticles, index: number) => {
                const firstValidImageUrl = item.insideMainArticleContent?.imageDto?.find(image => image.imageUrl)?.imageUrl;

                return (
                  <section key={index} className={cardBBorder} id={item.href || ""}>
                    <Text
                      subtitle
                      className="mb-5 pb-3 border-b md:!text-3xl font-bold"
                    >
                      {item.insideMainArticleContent?.title || ""}
                    </Text>
                    <Text>
                      {item.insideMainArticleContent?.description || ""}
                    </Text>
                    
                    {item.insideMainArticleContent?.imageDto && item.insideMainArticleContent.imageDto.length > 0 && (
                      item.insideMainArticleContent.imageDto.filter(image => image.imageUrl).length > 1 ? (
                        <Slider
                          className="mb-5"
                          images={item.insideMainArticleContent.imageDto.map(image => image.imageUrl)}
                        />
                      ) : (
                        <Image
                          src={firstValidImageUrl || ''}
                          alt="Image Alt Text"
                          caption="Image Caption"
                          size={ImageSize.FUll}
                          className="mb-5"
                        />
                      )
                    )}

                    { item.insideMainArticleContent?.type=="VIDEO" && item.insideMainArticleContent?.videoUrl && (
                        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                        {/* Use an aspect ratio container */}
                        <iframe 
                          className="absolute top-0 left-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${item.insideMainArticleContent?.videoUrl}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) }
                  </section>
                );
              })
            )}
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllFComponents;



