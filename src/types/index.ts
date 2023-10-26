export interface SearchResult {
  title: string;
  source: any;
  url: string;
  urlToImage: string;
  author: string;
  date: string;
  content: string;
}

export interface SearchState {
  results: SearchResult[];
  loading: boolean;
  error: string | null;
}

export interface SearchBarProps {
  containerClassName?: string;
}

export interface Bookmark {
  title: string;
  author: string;
  source: any;
  url: string;
  urlToImage: string;
  date: string;
  content: string;
}

export interface BookmarksState {
  bookmarks: Bookmark[];
}

export interface Article {
  id: number;
  title: string;
}

export interface ArticlesState {
  data: any[];
  currentPage: number;
  totalPages: number;
}

export interface ArticleProps {
  article: {
    title: string;
    source: any;
    url: string;
    image?: string;
    urlToImage: string;
    author: string;
    date: string;
    content: string;
  };
}

export interface ArticleListProps {
  articles: Array<{
    title: string;
    author: string;
    source: any;
    url: string;
    urlToImage: string;
    date: string;
    content: string;
  }>;
}

export interface FetchArticlesArgs {
  page: number;
}

export interface Category {
  name: string;
}

export interface CategoryFilterProps {
  options?: Category[];
  selectedOption?: Category | null;
  handleOptionChange?: (option: Category) => void;
  filterType?: string;
}

export interface Source {
  id: string;
  name: string;
  url: string;
  apiKey: string;
}

export interface SourceFilterProps {
  options?: Source[];
  selectedOption?: Source | null;
  handleOptionChange?: (option: Source) => void;
  filterType?: string;
}

export interface FiltersState {
  selectedDate: any | null;
  selectedSource: Source | null;
  selectedCategory: Category | null;
}

export interface DateFilterProps {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}
