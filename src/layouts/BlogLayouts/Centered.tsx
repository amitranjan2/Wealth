import classes from './BlogLayout.module.scss';
import Navbar from '../../components/Navbar';
import { combineClasses, getArticleDetails, isDarkTheme, transformImagePaths, transformPath } from '../../utils/utils';
import { useEffect, useState } from 'react';
import { ARTICLES_LIST } from '../../../BLOG_CONSTANTS/_ARTICLES_LIST';
import { generateRandomAvtar } from '../../constants/appConstants';
import Link from 'next/link';
import SectionSeperator from '../../components/SectionSeperator';

const Centered = ({ children }: any) => {
    const [isDark, setTheme] = useState(false);
    useEffect(() => {
        setTheme(isDarkTheme());
    }, [isDark]);

    const ARTICLE_DETAILS = getArticleDetails();
    const author = ARTICLE_DETAILS.preview.author;
    const relatedArticles = ARTICLES_LIST.filter((each) => each.preview.author === author);

    return (
        <section
            className={combineClasses(classes.centered_article_wrapper, isDark ? classes.dark : null)}>
            <Navbar />
            <div className="container pt-[50px] pb-[50px]">
                <article className={combineClasses(classes.article_content, 'pb-[30px] px-3')}>
                    {children}
                </article>
                <SectionSeperator />
                <div className={combineClasses(classes.author_and_more, 'mx-auto')}>
                    <div className={classes.sidebar_author_details}>
                        <div className={classes.author}>
                            <div className={classes.author_img}>
                                {author.profilePic ? <img src={author.profilePic} alt={author.name} /> : <img src={generateRandomAvtar()} alt={author.name} />}
                            </div>
                            <div>
                                <p className={'text-[20px] font-semibold mb-0 mt-0'}>
                                    {author.name}
                                </p>
                                <p className='text-xs mt-0 mb-0'>{author.designation}</p>
                            </div>
                        </div>
                        <p className='text-[16px] font-light mt-2'>{author.bio}</p>
                        {
                            author.social?.length &&
                            <div className='flex items-center flex-wrap'>
                                {
                                    author.social.map((each, i) =>
                                        <a href={each.link} key={i} target="_blank" className='mr-[15px] text-[32px]'
                                            rel="noopener noreferrer">{each.icon}</a>
                                    )
                                }
                            </div>
                        }
                    </div>
                    {
                        relatedArticles.length &&
                        <div className={combineClasses(classes.more_from_author, "flex flex-wrap items-center")}>
                            <p className='border-b border-gray-300 pb-2 mb-3 font-medium w-full'>More from  Author</p>
                            {
                                relatedArticles.map((each, i) =>
                                    <Link href={transformPath(each.path)} key={i} passHref>
                                        <div className='md:w-1/3 w-full md:pr-3' key={each.path}>
                                            <div className={combineClasses(classes.more_from_author__articles, "border border-gray-200  rounded-[8px] pl-2")}>
                                                <div className={combineClasses(classes.article_image, "h-[80px]")} style={{ background: `url(${transformImagePaths(each.preview.thumbnail)})` }}>
                                                    <img src={transformImagePaths(each.preview.thumbnail)} className="invisible" alt="each.preview.articleTitle" />
                                                </div>
                                                <div className={classes.article_title}>
                                                    {each.preview.articleTitle}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    }
                </div>

            </div>
        </section>
    )
}

export default Centered