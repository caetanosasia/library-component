export interface Component {
  Name: string;
  Categories: string[];
}

export interface CategoryCount {
  name: string;
  totalCount: number;
  filteredCount: number;
}

export interface LibraryData {
  Components: Component[];
  Categories: string[];
}


export interface CategoryItemProps {
  category: CategoryCount;
  isSelected: boolean;
  onSelect: (category: string) => void;
}

export interface CategoryPanelProps {
  categories: CategoryCount[];
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

