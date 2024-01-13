import { useEffect, useState } from 'react';
import { THEMES } from '../../shared/enums';
import { addBodyNoScroll, combineClasses, getCategories, removeBodyNoScroll } from '../../utils/utils';
import classes from './Navbar.module.scss';
import { Text, LinkTo } from '../../components';
import { useTheme } from 'next-themes';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdOutlineClose } from 'react-icons/md';
import NavCatergoryDD from '../Misc/NavCategoryDD';
import { iNavLink, iNavSetup, iNavSocials } from '../../shared/interfaces';

interface IProps {
    openSidebar: boolean;
    closeNavSidebar: () => void;
    navSetup: iNavSetup;
    changeTheme: () => void;
}

const NavSidebar = ({ openSidebar = false, closeNavSidebar, navSetup, changeTheme }: IProps) => {
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        openSidebar
            ? addBodyNoScroll()
            : removeBodyNoScroll()

        return () => {
            removeBodyNoScroll()
        }
    }, [openSidebar]);

    const env = process.env.NODE_ENV;
    const [openDD, setOpenDD] = useState(false)

    return (
        <>
            {openSidebar ? (
                <div className="backdrop" onClick={closeNavSidebar}></div>
            ) : null}

            <aside className={combineClasses(classes.nav_sidebar_wrapper, openSidebar && classes.open, 'dark:bg-slate-900 dark:text-white bg-white text-black')}>
                <div className='flex items-center justify-between pb-3' onClick={closeNavSidebar}>
                    <p className='mx-13 my-3  hover:text-green-500 shadow-md hover:shadow-lg hover:shadow-pink transition-all mb-3 md:mx-5 transform hover:scale-105'>menu</p>
                    <div><MdOutlineClose className='text-slate-800 dark:text-white text-[25px] hover:text-green-500 transition-all mb-3 md:mx-5 transform hover:scale-105' /></div>
                </div>
                <hr />
                <div className='my-15'>
                    {
                        navSetup.sideNavLinks.map((each: iNavLink, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                <LinkTo href={each.path} key={i} passHref className='text-[16px] block my-3  hover:text-green-500 shadow-md hover:shadow-lg hover:shadow-pink transition-all mb-3 md:mx-5 transform hover:scale-105 '>
                                    {each.label}
                                </LinkTo> :
                                <a href={each.path} key={each.path} target="_blank" rel="noopener noreferrer" className='text-[16px] block my-3 flex-wrap'>
                                    {each.label}
                                </a>
                                :
                                <NavCatergoryDD label={each.label} openDD={openDD} setOpenDD={() => setOpenDD(!openDD)} />
                        ))
                    }
            

                </div>
                <hr />
                <div className='my-5'>
                    {
                        navSetup.socials && <>
                            <p className='font-light hover:text-green-500 transition-all mb-3 md:mx-5 transform hover:scale-105'>Follow us : </p> {
                                navSetup.socials.map((each: iNavSocials) => (
                                    <a href={each.link} key={each.link} target="_blank" rel="noopener noreferrer" className='text-[28px] inline-block mr-5 mt-2 hover:text-pink-400 transition-all mb-3 md:mx-5 transform hover:scale-105'>{each.icon}</a>
                                ))
                            }
                            <hr className='mt-5' />
                        </>
                    }
                </div>
                <div className='mt-5 mb-4'>
                    <p className='mb-3 font-light hover:text-green-500 transition-all md:mx-5 transform hover:scale-105'>Switch To {theme === THEMES.LIGHT ? 'Dark' : 'Light'} Theme :</p>
                    <button name="theme-switch" aria-label="theme-switch" className={combineClasses(classes.theme_switch, 'dark:text-white text-black hover:text-green-500 transition-all mb-3 md:mx-5 transform hover:scale-105')} onClick={() => changeTheme()}>
                    {
                            theme === THEMES.DARK ? <BsFillSunFill className="text-2xl hover:text-green-500 transition-all mb-3 md:mx-5 transform hover:scale-105'" /> : <BsFillMoonFill className="text-lg hover:text-green-500 transition-all mb-3 md:mx-5 transform hover:scale-105" />
                        }
                    </button>
                </div>
                <hr />
                {/* <div className='my-5'>
                    <p className='text-sm font-light dark:text-gray-400 text-gray-500 mb-1'>Copyright © 2022</p>
                    <LinkTo href="/privacy-policy" passHref className='text-sm font-light dark:text-gray-400 text-gray-500 pr-3'>
                        Privacy Policy
                    </LinkTo>
                    <LinkTo href="/terms-and-condition" passHref className='text-sm font-light dark:text-gray-400 text-gray-500'>
                        Terms and Conditions
                    </LinkTo>
                </div> */}
            </aside>
        </>
    )
}

export default NavSidebar