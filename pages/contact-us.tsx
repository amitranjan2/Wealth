/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const ContactUs = () => {
    // const PAGE_SEO: iSEO = {
    //     title: 'Contact Us',
    //     description: 'For any any queries related to this project / template feel free to connect with us on webexpe13@gmail.com',
    //     keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
    //     author: 'Mayur Nalwala, Rupali Yadav'
    // } 
    return (
        <PageLayout  home>
            <section className='container px-3 pb-10 md:pt-20 pt-[80px]'>
                <Text title className="!text-5xl !font-light">
                    Contact Us
                </Text>

                
                <div className="flex flex-wrap mt-8 justify-between">
    <div className="md:w-1/2 w-full md:pl-2">
        <Text p className="!text-lg leading-relaxed">
            For any queries related to becoming a <span className="font-bold text-green-500">member</span> or to take <span className="font-bold text-blue-500">mentorship</span>, feel free to connect with us at the given email.
            You can also reach out to us  on our 
            <a href="https://www.instagram.com/wealthinsync/" target="_blank" rel="noopener noreferrer" className="font-bold text-pink-500">
                <u><i> Instagram</i></u>
            </a>.
        </Text>
    </div>


                    <div className="md:w-1/3 w-full">
                        <Text p>
                            write to us at
                        </Text>
                        <Text subtitle className="!font-light md:!text-3xl">
                            wealthinsync@gmail.com
                        </Text>
                    </div>
                </div>
            </section>


            <section className={"dark:bg-slate-800 bg-blue-100 mt-10 container py-10 md:px-20 px-5"}>
    <div className="text-center">
    <h2 className="text-4xl font-bold mb-4 text-indigo-700">Welcome! to <span className="text-pink-500">WealthInSync</span></h2>

        {/* <p className="text-lg font-bold text-pink-400 leading-relaxed">
            WealthInSync
        </p> */}
    </div>
</section>
        </PageLayout>
    )
}

export default ContactUs