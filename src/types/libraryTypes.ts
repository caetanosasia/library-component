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

export interface VirtualizedListProps<T> {
  items: T[];
  itemHeight: number;
  renderItem: (item: T) => React.ReactNode;
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
}

export interface ComponentPanelProps {
  selectedCategory: string | null;
  components: Component[];
}
