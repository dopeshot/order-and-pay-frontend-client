enum Status {
  ACTIVE = "active",
  DELETED = "deleted",
}

export type Allergen = {
  _id: string;
  title: string;
  icon: string;
};

export type Label = {
  _id: string;
  title: string;
  icon: string;
};

export enum ChoiceType {
  RADIO = "radio",
  CHECKBOX = "checkbox",
}

export type DishPopulated = Dish & { allergens: Allergen[]; labels: Label[] };

export type Dish = {
  _id: string;
  title: string;
  description: string;
  labelIds: Label[];
  allergenIds: Allergen[];
  categoryId: string;
  price: number;
  image: string;
  isAvailable: boolean;
};

export type Choice = {
  id: number;
  title: string;
  type: ChoiceType;
  isDefault?: number;
  options: Option[];
};

export type Option = {
  id: number;
  title: string;
  price: number;
  isChecked: boolean;
  priceDish: number;
};

export type Category = {
  _id: string;
  title: string;
  index: number;
  description: string;
  icon: string;
  image: string;
  choices: Choice[];
  menu: string;
};

export type State = {
  isLoadingDishes: boolean;
  isLoadingMenu: boolean;
  MenuResponseObj: MenuEditorResponse;
  sum: number;
};
export type CategoryAndDishRefs = {
  categories: (Category & { dishes: Dish[] })[];
};

export type Menu = {
  title: string;
  description: string;
  status: Status;
  isActive: boolean;
};

export type MenuResponse = Menu;
export type MenuEditorResponse = MenuResponse & CategoryAndDishRefs;

export const state: State = {
  isLoadingDishes: false,
  isLoadingMenu: false,
  sum: 0,
  MenuResponseObj: {
    title: "",
    description: "",
    status: Status.ACTIVE,
    isActive: true,
    categories: [],
  },
};
