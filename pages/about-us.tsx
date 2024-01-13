/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    // const PAGE_SEO: iSEO = {
    //     title: 'About Us',
    //     description: `Hi we are WebExpe. This is an open source blog template which can help you start a simple static blog.`,
    //     keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
    //     author: 'Mayur Nalwala, Rupali Yadav'
    // }
    return (
        // <PageLayout PAGE_SEO={PAGE_SEO} home>
             <PageLayout  home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a href="/" target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/images/WealthInSync.jpeg" alt="webexpe.com" className="rounded-lg overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        WealthInSync
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        This is an one stop platfrom for you trading and investment in indian stocks.
                    </Text>

                    <Text p className='text-lg'>
                    WealthInSync, your ultimate one-stop platform for seamless trading and investment in Indian stocks, offers a comprehensive experience tailored to meet all your financial needs. Unlock the power of informed decision-making with our dynamic features that include <b>real-time charts,</b> breaking news updates, and in-depth analysis specifically curated for <b>small cap</b>, <b>large cap</b>, and <b>midcap</b> stocks. Stay ahead of the market trends and make confident investment choices with the wealth of information at your fingertips. Whether you're a seasoned trader or a novice investor, WealthInSync is your trusted companion in navigating the complexities of the Indian stock market.                    </Text>
                    <Seperator />
                    {/* <a href="https://www.instagram.com/wealthinsync/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Instagram.png" className="ml-0" alt="webexpe.com" />
                    </a> */}
                    <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                        <Text p className="!text-lg leading-relaxed mb-0">
                            For any any queries  feel free to connect with us at <u>wealthinsync@gmail.com</u>.
                            You can also react out  <a href="https://www.instagram.com/wealthinsync/" target="_blank" rel="noopener noreferrer" className="text-pink-500"><u><i>on our instagram</i></u></a>.
                        </Text>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs