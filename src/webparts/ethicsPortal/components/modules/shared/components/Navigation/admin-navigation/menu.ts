import {
  FaAd,
  FaAngrycreative,
  FaChevronDown,
  FaImages,
  FaUserAstronaut,
  FaVideo,
} from "react-icons/fa";

export const adminNavItems = [
  {
    title: "Dashboard",
    icon: FaAd,
    link: "/admin/dashboard",
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
      {
        title: "Images",
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
    ],
  },
  {
    title: "Ethics Policies",
    icon: FaAngrycreative,
    link: "/admin/blog",

    subNav: [
      {
        title: "Conflict of Interest",
        icon: FaVideo,
        link: "/admin/gallery/videos",
      },
      {
        title: "Gifts and Entertainment",
        icon: FaImages,
        link: "/admin/gallery/images",
      },
      {
        title: "Conduct Passport",
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
      {
        title: "Whistle Blowing",
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
      {
        title: "Anti Bribery and Corruption",
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
      {
        title: "Privacy and Data Protection",
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
      {
        title: "Manage",
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
    ],
  },
  {
    title: "Ethics Quiz",
    icon: FaAngrycreative,
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
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
    ],
  },
  {
    title: "Recognition",
    icon: FaAngrycreative,
    link: "/admin/quiz",

    subNav: [
      {
        title: "Ethics Champion",
        icon: FaVideo,
        link: "/admin/gallery/videos",
      },
      {
        title: "Ethics Champion Activities",
        icon: FaImages,
        link: "/admin/gallery/images",
      },

      {
        title: "Manage",
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
    ],
  },
  {
    title: "Training",
    icon: FaAngrycreative,
    link: "/admin/training",

    subNav: [
      {
        title: "Ethics Champion",
        icon: FaVideo,
        link: "/admin/gallery/videos",
      },
      {
        title: "Ethics Champion Activities",
        icon: FaImages,
        link: "/admin/gallery/images",
      },

      {
        title: "Manage",
        icon: FaUserAstronaut,
        link: "/admin/gallery/manage",
      },
    ],
  },
  {
    title: "Policy Breaches",
    icon: FaAngrycreative,
    link: "/admin/training",
  },
  {
    title: "Configure Users",
    icon: FaAngrycreative,
    link: "/admin/users-manage",
    subNav: [
      {
        title: "Create Admin",
        icon: FaAngrycreative,
        link: "/admin/user/create",
      },
      {
        title: "View Admins",
        icon: FaAngrycreative,
        link: "/admin/users-manage",
      },
    ],
  },
  {
    title: "Ethics Articles",
    icon: FaAngrycreative,
    link: "/admin/training",
    subNav: [
      {
        title: "Create Article",
        icon: FaAngrycreative,
        link: "/admin/training",
      },
      {
        title: "Manage Articles",
        icon: FaAngrycreative,
        link: "/admin/training",
      },
    ],
  },
];
