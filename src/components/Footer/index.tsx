import { WEBSITE_NAME } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import LinkTo from "../LinkTo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="dark:bg-slate-900 dark:text-white bg-slate-100 text-black">
      <div className="md:container flex items-center md:justify-center justify-around flex-wrap md:text-[14px] text-[12px] py-5">
      <p className="my-0 mr-[10px] md:mr-3">
    Copyright © {year} 
    <span className="font-bold text-blue-500"> {WEBSITE_NAME}</span>
</p>
        {/* <LinkTo
          href="/privacy-policy"
          passHref={true}
          className="pr-[10px] md:pr-3 hover:underline"
        >
          Privacy Policy
        </LinkTo>
        <LinkTo href="/terms-and-condition" passHref={true} className="hover:underline">
          Terms and Conditions
        </LinkTo> */}
      </div>
    </div>
  );
};

export default Footer;
