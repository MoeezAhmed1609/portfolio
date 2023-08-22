// Icons
import {
  SiGithub,
  SiWhatsapp,
  SiLinkedin,
  SiUpwork,
  SiGmail,
} from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";

const connections = [
  {
    title: "Github",
    link: "https://github.com/MoeezAhmed1609",
    icon: <SiGithub />,
  },
  {
    title: "WhatsApp",
    link: "https://wa.me/923113868525",
    icon: <SiWhatsapp />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/moiz-ahmed-aa2505194/",
    icon: <SiLinkedin />,
  },
  {
    title: "UpWork",
    link: "https://www.upwork.com/",
    icon: <SiUpwork />,
  },
  {
    title: "Gmail",
    link: "mailto:moeezahmed.saeed@gmail.com",
    icon: <SiGmail />,
  },
  {
    title: "Phone",
    link: "tel:+923113868525",
    icon: <AiOutlinePhone />,
  },
];
export default connections;
