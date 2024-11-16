import "./App.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Avatar from "@/components/Avatar";
import Box from "./components/Box";
import { Tv } from "lucide-react";

function App() {
  return (
    <header className="min-w-screen min-h-screen text-text dark:text-text-dark dark:bg-bg-dark inset-0 flex w-full flex items-center justify-center bg-bg bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <Avatar
        imageUrl="https://picsum.photos/200/300"
        className="absolute top-4 right-4 w-12 h-12"
      />
      <ThemeSwitcher className="absolute bottom-4 right-4 p-2 bg-bg" />
      <TestBody />
    </header>
  );
}

function TestBody() {
  return (
    <div className="justify-around flex w-full gap-4 px-4">
      <Box className="w-1/2 flex">
        <Box>Top</Box>
      </Box>
      <div
        id="grid-container"
        className=" text-text dark:text-text grid w-full grid-cols-2 gap-10 md:grid-cols-3 xl:w-1/2 xl:pb-16 w450:grid-cols-1 w450:gap-7"
      >
        {ExpenseTypes.map((data) => {
          return (
            <a
              className={`${data.color} border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 p-5 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none`}
              key={data.title}
              target="_blank"
              href={data.link}
            >
              <img
                className="h-8 w-8 sm:h-10 sm:w-10"
                src={data.icon.src}
                alt={data.title}
              />
              <p className="mt-3 text-lg font-heading sm:text-xl">
                {data.title}
              </p>
              <p className="mt-1 text-sm font-base sm:text-base">{data.text}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

type Link = {
  title: string;
  icon: any;
  link: string;
  text?: string;
  color: string;
};

const ExpenseTypes: Link[] = [
  {
    title: "Add",
    icon: Tv,
    link: "https://twitter.com/johndoe",
    text: "johndoe",
    color: "bg-green-100",
  },
  {
    title: "Add New Income",
    icon: Tv,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-green-500",
  },
  {
    title: "Edit Expenses",
    icon: Tv,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-bg",
  },
  {
    title: "Add",
    icon: Tv,
    link: "https://twitter.com/johndoe",
    text: "johndoe",
    color: "bg-red-300",
  },
  {
    title: "Add New Income",
    icon: Tv,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-violet-500",
  },
  {
    title: "Edit Expenses",
    icon: Tv,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-purple-500",
  },
  {
    title: "Add",
    icon: Tv,
    link: "https://twitter.com/johndoe",
    text: "johndoe",
    color: "bg-yellow-500",
  },
  {
    title: "Add New Income",
    icon: Tv,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-orange-500",
  },
  {
    title: "Edit Expenses",
    icon: Tv,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-slate-500",
  },
];

export default App;
