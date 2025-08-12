import type { RouteObject } from "react-router";



export type NavItem = {
  label: string;
  path: string;
}

export type RouteWithHandle = RouteObject & {
  handle?:{
    label?: string;
    showInNav?: boolean;
  },
  children?:RouteWithHandle[]
}










