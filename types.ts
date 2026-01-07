
export interface RecipeDetails {
  ingredients: string[];
  preparation: { title: string; step: string }[];
  usage: { title: string; content: string }[];
  tips: string[];
  variants: string[];
  warnings: string[];
  benefits?: string[];
}

export interface ProtocolDay {
  day: number;
  title: string;
  focus: string;
  tricks: string[];
}

export interface GuideBlock {
  type: 'text' | 'list' | 'tip' | 'warning' | 'subtitle' | 'recipe_card' | 'accordion_list' | 'video_session';
  content?: string;
  items?: string[];
  items_with_content?: { title: string; content: string }[];
  title?: string;
  emoji?: string;
  duration?: string;
  frequency?: string;
  videoUrl?: string;
}

export interface GuideSection {
  title: string;
  blocks: GuideBlock[];
}

export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  isLocked: boolean;
  description?: string;
  lessons?: number;
  duration?: string;
  recipeDetails?: RecipeDetails;
  protocolDetails?: ProtocolDay[];
  trackerDetails?: boolean;
  guideDetails?: GuideSection[];
}

export type Tab = 'home' | 'profile';

export type ViewState = 'login' | 'main';

export interface User {
  name: string;
  email: string;
  avatar: string;
}
