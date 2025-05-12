export interface INavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: React.ReactNode;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: INavItem[];
}

export interface INavGroup {
  title: string;
  items: INavItem[];
}
