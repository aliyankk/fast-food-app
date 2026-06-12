export interface MenuItem {
  id: string;
  name: string;
  urduName: string;
  category: MenuItemCategory;
  description: string;
  price: number;
  imageUrl: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isCustomizable?: boolean;
  tags?: string[];
}

export type MenuItemCategory =
  | 'BURGER'
  | 'BROAST'
  | 'FRIES'
  | 'SANDWICHES'
  | 'BBQ'
  | 'DEALS'
  | 'ROLL'
  | 'BEVERAGES'
  | 'SIDES';

export interface CategoryInfo {
  id: MenuItemCategory;
  title: string;
  urduTitle: string;
  description: string;
  accentColor: string;
  bannerImage: string;
}
