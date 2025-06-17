import { LibraryData } from '../types/libraryTypes';

export function addBigData(categories: number, components: number): void {
  for (let i = 0; i < categories; i++) {
    Library.Categories.push(`Category${i}`);
  }
  for (let i = 0; i < components; i++) {
    Library.Components.push({
      Name: `Comp${i}`,
      Categories: [
        `Category${i % categories}`,
        `Category${(i + 1) % categories}`,
      ],
    });
  }
}

export const Library: LibraryData = {
  Components: [
    { Name: "Free Form Container", Categories: ["Layout"] },
    { Name: "Flex Container", Categories: ["Layout"] },
    { Name: "Bar Chart", Categories: ["Charts"] },
    { Name: "Line Chart", Categories: ["Charts"] },
    { Name: "Button", Categories: ["Controls"] },
    { Name: "Input Field", Categories: ["Controls", "Inputs"] },
    { Name: "Checkbox", Categories: ["Controls", "Inputs"] },
    { Name: "Radio Button", Categories: ["Controls", "Inputs"] },
  ],
  Categories: ["Controls", "Inputs", "Layout", "Custom", "Charts"],
};

addBigData(10, 400);