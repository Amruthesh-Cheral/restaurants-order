export interface INavData {
  subname?: string;
  name?: string;
  url?: string | any[];
  href?: string;
  icon?: string;
  iconComponent?: any;
  title?: boolean;
  children?: INavData[];
  variant?: string;
  divider?: boolean;
  class?: string;
  active?: boolean;
  subCat?: SubCategory[];
}
export interface SubCategory {
  subname: string;
  icon: string;
  url?: string;
  ssubCat?: ssubCategory[];
}
export interface ssubCategory {
  subname: string;
  icon: string;
  url?: string;
}