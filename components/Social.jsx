import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMedium, FaInstagram, FaSpotify } from 'react-icons/fa6';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ilkcanirturk" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/ilkcanirturk/" },
  { icon: <FaMedium />, path: "https://medium.com/@1lkc4n" },
  { icon: <FaXTwitter />, path: "https://x.com/ilkcan_irturk" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ilkcan.irturk?igsh=MTNqN3ZjZmljaXBhZg%3D%3D&utm_source=qr" },
  { icon: <FaSpotify />, path: "https://open.spotify.com/user/60e6fu31x4v3kpipu5hirkgd0?si=aa6420764fe9413d" }
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
