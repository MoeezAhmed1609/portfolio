// Icons
import { BsCart4, BsBoxSeam } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import {
  FaMagnifyingGlassChart,
  FaUpload,
  FaRegLightbulb,
} from "react-icons/fa6";
import {
  SiCraftcms,
  SiPayloadcms,
  SiCanva,
  SiMongodb,
  SiFirebase,
  SiChakraui,
  SiVite,
  SiStripe,
} from "react-icons/si";
import { BiLogoFirebase, BiLogoBlogger } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";
import { GrSystem } from "react-icons/gr";
import { AiOutlineApi, AiOutlineFundProjectionScreen } from "react-icons/ai";
const experiences = [
  {
    image:
      "https://res.cloudinary.com/drszige36/image/upload/v1692604157/portfolio/xtrack-x_lix7yv.png",
    title: "XTRACK",
    period: "January 2023 - June 2023",
    duration: "6 months",
    link: "xtrack",
    key: "E-Commerce",
    description:
      "XTRACK is an online e-commerce store with a niche of Gym Supplements, Accessories and Outfits.",
    client: "Muhammad Bilal",
    email: "xtrack.pk@gmail.com",
    keys: [
      { title: "E-Commerce", icon: <BsCart4 /> },
      { title: "Product Management", icon: <BsBoxSeam /> },
      { title: "Reviews", icon: <MdOutlineRateReview /> },
      { title: "SEO", icon: <FaMagnifyingGlassChart /> },
      { title: "Sanity", icon: <SiPayloadcms /> },
      { title: "Headless CMS", icon: <SiCraftcms /> },
      { title: "Firebase", icon: <BiLogoFirebase /> },
      { title: "UI / UX", icon: <RiComputerLine /> },
      { title: "Blogs", icon: <BiLogoBlogger /> },
      { title: "Graphics Designing", icon: <SiCanva /> },
      { title: "Deployment", icon: <FaUpload /> },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/drszige36/image/upload/v1692604121/portfolio/being_f0hxdm.png",
    title: "Being Strong Fitness",
    period: "April 2023 - July 2023",
    duration: "4 months",
    link: "bsf",
    key: "Managment Systems",
    description: "Being Strong Fitness is a locally based physical GYM.",
    client: "Khizar Hasan",
    email: "khizarhasan5256@gmail.com",
    keys: [
      { title: "Dashboard UI", icon: <GrSystem /> },
      { title: "MongoDB", icon: <SiMongodb /> },
      { title: "Management Logics", icon: <FaRegLightbulb /> },
      { title: "API", icon: <AiOutlineApi /> },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/drszige36/image/upload/v1692604156/portfolio/property-logo_dvwrdk.png",
    title: "Property Turkey",
    period: "July 2023 - Present",
    duration: "1 months",
    link: "property",
    key: "Project Handling",
    client: "Muhammad Muzammil",
    email: "muzammil786@gmail.com",
    description:
      "Property Turkey is a Turkish based company working to fulfill with Turkey and USA Real State needs",
    keys: [
      { title: "Project Management", icon: <AiOutlineFundProjectionScreen /> },
      { title: "Firebase", icon: <SiFirebase /> },
      { title: "Chakra UI", icon: <SiChakraui /> },
      { title: "Vite JS", icon: <SiVite /> },
      { title: "Stripe", icon: <SiStripe /> },
    ],
  },
];
export default experiences;
