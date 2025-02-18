import BookIcon from "@mui/icons-material/Book";
// import ArticleIcon from "@mui/icons-material/Article";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { ReactNode } from "react";

export interface SidebarCategory {
  id: number;
  name: string;
  notebookAmount: number;
  icon: ReactNode;
  isHaveDropdown: boolean;
  notebooks: [
    {
      id: number;
      title: string;
      noteAmount: number;
      notes: [
        {
          id: number;
          title: string;
          content: string;
        }
      ];
      icon: ReactNode;
    }
  ];
}

export const sidebarCategories: SidebarCategory[] = [
  {
    id: 1,
    name: "Notebooks",
    notebookAmount: 5,
    icon: <BookIcon />,
    isHaveDropdown: true,
    notebooks: [
      {
        id: 1,
        title: "notebook1",
        noteAmount: 1,
        notes: [
          {
            id: 1,
            title: "not1",
            content: "notcontent1",
          },
        ],

        icon: <ImportContactsIcon />,
      },
    ],
  },
];
