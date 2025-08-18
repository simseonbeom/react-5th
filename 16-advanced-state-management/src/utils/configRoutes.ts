import type { AppRoute } from "@/@types/global";
import type { RouteObject } from "react-router";





export function configRoutes(navigation:AppRoute[]):RouteObject[]{
  return navigation.map()
}

























