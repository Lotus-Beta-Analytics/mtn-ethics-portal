import { Settings } from "@material-ui/icons";
import {
  FaAd,
  FaAngrycreative,
  FaBook,
  FaChevronDown,
  FaDochub,
  FaImages,
  FaTextWidth,
  FaUserAstronaut,
  FaVideo,
} from "react-icons/fa";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";

export const adminNavItems = [
  {
    title: "Dashboard",
    icon: FaAd,
    link: "/admin/dashboard",
  },
  {
    title: "Manage Polices",
    icon: FaAd,
    link: "/admin/manage-policy",
  },
  {
    title: "Gallery",
    icon: FaImages,
    link: "/admin/gallery",
    subNav: [
      {
        title: "Videos",
        icon: FaVideo,
        link: "/admin/gallery/videos",
      },
      {
        title: "Images",
        icon: FaImages,
        link: "/admin/gallery/images",
      },
    ],
  },
  {
    title: "Ethics Policies",
    icon: FaAngrycreative,
    link: "/admin/policies",
    subNav: [
      {
        title: "Create Policy",
        icon: FaVideo,
        link: "/admin/create-policy",
      },
    ],
  },
  {
    title: "Ethics Quiz",
    icon: Settings,
    link: "/admin/manage-quiz",

    subNav: [
      {
        title: "Create Quiz",
        icon: FaVideo,
        link: "/admin/create-quiz",
      },
      {
        title: "Reports",
        icon: FaImages,
        link: "/admin/manage-quiz",
      },

      {
        title: "Manage",
        icon: Settings,
        link: "",
      },
    ],
  },
  {
    title: "Recognition",
    icon: FaAngrycreative,
    link: "/admin/recognition/create",

    subNav: [
      {
        title: "Manage",
        icon: Settings,
        link: "/admin/recognition/manage",
      },
      {
        title: "Ethics Champion Activities",
        icon: FaImages,
        link: "/admin/recognition/activities/add",
      },
    ],
  },
  {
    title: "Training",
    icon: FaAngrycreative,
    link: "/admin/training",
  },
  {
    title: "Policy Breaches",
    icon: FaAngrycreative,
    link: "/admin/policy/breaches",

    subNav: [
      {
        title: "Ethics Defaulters",
        icon: FaDochub,
        link: "/admin/ethicsdefaulters",
      },
      {
        title: "Manage Defaulters",
        icon: FaDochub,
        link: "/admin/ethics/managedefaulters",
      },
    ],
  },
  {
    title: "Configure Users",
    icon: FaAngrycreative,
    link: "/admin/user/create",
    subNav: [
      {
        title: "Create Admin",
        icon: FaAngrycreative,
        link: "/admin/user/create",
      },
    ],
  },
  {
    title: "Scrolling Text",
    icon: FaTextWidth,
    link: "/admin/scrolling-text",
  },
  {
    title: "Carousel",
    icon: FaTextWidth,
    link: "/admin/carousel",
  },
  {
    title: "Ethics Articles",
    icon: FaDochub,
    link: "/admin/create-post",
    subNav: [
      {
        title: "Manage Articles",
        icon: Settings,
        link: "/admin/manage-posts",
      },
    ],
  },
];
