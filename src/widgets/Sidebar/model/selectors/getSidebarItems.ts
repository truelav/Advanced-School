import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../types/sidebar";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: "Главная",
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: "О сайте",
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData?.id,
        Icon: ProfileIcon,
        text: "Профиль",
      },
      {
        path: RoutePath.articles,
        Icon: ProfileIcon,
        text: "Articles",
      }
    );
  }

  return sidebarItemsList;
});
