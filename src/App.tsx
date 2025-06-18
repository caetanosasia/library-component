import React, { useState, useMemo, useCallback } from 'react';
import { Library } from './data/libraryData';
import { LibraryData } from './types/libraryTypes';
import CategoryPanel from './components/CategoryPanel/CategoryPanel';
import ComponentPanel from './components/ComponentPanel/ComponentPanel';
import SearchInput from './components/SearchInput/SearchInput';


const LibraryComponent: React.FC<{ initialData: LibraryData }> = ({ initialData }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { filteredComponents, categoriesWithCounts } = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    const filtered = searchTerm
      ? initialData.Components.filter(comp =>
          comp.Name.toLowerCase().includes(lowerSearchTerm)
        )
      : initialData.Components;

    const categoryTotalCounts = new Map<string, number>();
    const categoryFilteredCounts = new Map<string, number>();

    initialData.Categories.forEach(cat => {
      categoryTotalCounts.set(cat, 0);
      categoryFilteredCounts.set(cat, 0);
    });

    initialData.Components.forEach(comp => {
      comp.Categories.forEach(cat => {
        categoryTotalCounts.set(cat, (categoryTotalCounts.get(cat) || 0) + 1);
      });
    });

    filtered.forEach(comp => {
      comp.Categories.forEach(cat => {
        categoryFilteredCounts.set(cat, (categoryFilteredCounts.get(cat) || 0) + 1);
      });
    });

    const visibleCategories = searchTerm
      ? initialData.Categories.filter(cat => (categoryFilteredCounts.get(cat) || 0) > 0)
      : initialData.Categories;

    return {
      filteredComponents: filtered,
      categoriesWithCounts: visibleCategories.map(cat => ({
        name: cat,
        totalCount: categoryTotalCounts.get(cat) || 0,
        filteredCount: categoryFilteredCounts.get(cat) || 0
      }))
    };
  }, [initialData, searchTerm]);

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setSelectedCategory(prev =>
      categoriesWithCounts.some(c => c.name === prev) ? prev : null
    );
  }, [categoriesWithCounts]);

  const categoryComponents = useMemo(() => {
    if (!selectedCategory) return [];
    return filteredComponents.filter(comp =>
      comp.Categories.includes(selectedCategory)
    );
  }, [filteredComponents, selectedCategory]);

  return (
    <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif', boxSizing: 'border-box', height: '100vh' }}>
      <h1>Library</h1>
      <SearchInput 
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
        />
      <div style={{ display: 'flex' }}>
        <CategoryPanel
          categories={categoriesWithCounts}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          />
        <ComponentPanel
          selectedCategory={selectedCategory}
          components={categoryComponents}
          />
      </div>
    </div>
  );
};

export default function App() {
  return <LibraryComponent initialData={Library} />;
}
