import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative p-4 text-center text-white font-semibold text-xs sm:text-sm z-[2]">
      Designed by{" "}
      <Link href="https://www.youtube.com/channel/UCmT9TwcIb_yAe7-Uqhn3fBA">
        <a className="hover:opacity-80" target="_blank">Code Commerce</a>
      </Link>
      . Coded by{" "}
      <Link href="https://github.com/MohMostafa-Web">
        <a className="hover:opacity-80" target="_blank">MohMostafa</a>
      </Link>
      .
    </footer>
  );
};

export default Footer;