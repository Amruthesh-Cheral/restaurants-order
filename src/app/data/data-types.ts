export interface INavData {
  subname?: string;
  name?: string;
  url?: string | any[];
  href?: string;
  icon?: string;
  iconComponent?: any;
  // badge?: INavBadge;
  title?: boolean;
  children?: INavData[];
  variant?: string;
  // attributes?: INavAttributes;
  divider?: boolean;
  class?: string;
  active?: boolean;
  // label?: INavLabel;
  // wrapper?: INavWrapper;
  // linkProps?: INavLinkProps;

  subCat?: SubCategory[];
}
export interface SubCategory {
    subname: string;
    icon: string;
    url?: string; 
  }

