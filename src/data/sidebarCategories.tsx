import BookIcon from "@mui/icons-material/Book";
import ArticleIcon from "@mui/icons-material/Article";
import { ReactNode } from "react";

interface SidebarCategory {
  id: number;
  name: string;
  amount: number;
  icon: ReactNode;
}

export const sidebarCategories: SidebarCategory[] = [
  {
    id: 1,
    name: "All Notes",
    amount: 10,
    icon: <ArticleIcon />,
  },
  {
    id: 2,
    name: "Notebooks",
    amount: 5,
    icon: <BookIcon />,
  },
];
