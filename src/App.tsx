import "./App.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Avatar from "@/components/Avatar";
import Box from "./components/Box";
import { Tv } from "lucide-react";
import { useState } from "react";
import Button from "@/components/Button";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<number>(-1);
  const [showData, setShowData] = useState<any[]>([]);
  const [taxPercent, setTaxPercent] = useState<number>(0.13);
  const [discountPercent, setDiscountPercent] = useState<number>(-1);
  return (
    <header className="min-w-screen min-h-screen text-text dark:text-text-dark dark:bg-bg-dark inset-0 flex w-full flex items-center justify-center bg-bg bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <Avatar
        imageUrl="https://picsum.photos/200/300"
        className="absolute top-4 right-4 w-12 h-12"
      />
      <ThemeSwitcher className="absolute bottom-4 right-4 p-2 bg-bg" />
      <div className="w-full flex gap-4 px-4">
        <LeftBody
          data={
            selectedUser != -1
              ? testItems.filter((item) => {
                  return item.paidBy.includes(selectedUser);
                })
              : testItems
          }
          selectedUser={selectedUser !== -1}
          taxPercent={taxPercent}
          discountPercent={discountPercent}
        />
        <div className="w-1/2 h-full">
          <Button onClick={() => setSelectedUser(-1)}>All</Button>
          {testUsers.map((user) => {
            return (
              <div
                className={`bg-red-500 cursor-pointer border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 p-5 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none`}
                key={user.name}
                // onClick={() => {setSelectedUser(data.id); alert("setSelectedUser: " + data.id);}}
                onClick={() => setSelectedUser(user.id)}
              >
                {/* <img */}
                {/*   className="h-8 w-8 sm:h-10 sm:w-10" */}
                {/*   src={data.icon.src} */}
                {/*   alt={data.title} */}
                {/* /> */}
                <p className="mt-3 text-lg font-heading sm:text-xl">
                  {user.name}
                </p>
                {/* <p className="mt-1 text-sm font-base sm:text-base">{user.}</p> */}
              </div>
            );
          })}
        </div>
        {/*   {selectedCategory ? <LeftBody /> : <div className="w-1/2 "></div>} */}
        {/*   <TestBody setSelectedCategory={setSelectedCategory} /> */}
      </div>
    </header>
  );
}

const testUsers = [
  { id: 1, name: "Stephen" },
  { id: 2, name: "Marcus" },
  { id: 3, name: "Dubin" },
];

const testItems = [
  { id: 1, name: "Bonito Tsukemen", price: "570", userIds: [1], paidBy: [1] },
  { id: 2, name: "Gyokai Tsukemen", price: "580", userIds: [2], paidBy: [2] },
  { id: 3, name: "Super Chashume", price: "620", userIds: [3], paidBy: [3] },
  {
    id: 4,
    name: "Aji Tamago",
    price: "80",
    userIds: [1],
    paidBy: [1],
    additionTo: 1,
  },
  {
    id: 5,
    name: "Karaage",
    price: "220",
    userIds: [1, 2, 3],
    paidBy: [1, 2, 3],
  },
  { id: 6, name: "Gyoza", price: "250", userIds: [1, 2, 3], paidBy: [1, 2] },
];

// function LeftBody() {
//   return (
//     <Box className="w-1/2 h-full flex flex-col">
//       <div>Header</div>
//       <div className="flex flex-col gap-2 w-full">
//         {testItems.map(item => {
//           return <div><div className="flex justify-between w-full ">
//             <div>
//             {item.name}
//             </div>
//             <div>
//             {item.userIds}
//             </div>
//
//           </div>
//           <div className="h-[1px] bg-text"> </div>
//             </div>
//         })}
//       </div>
//     </Box>
//   );
// }
//

function LeftBody({
  data,
  selectedUser,
  taxPercent,
  discountPercent,
}: {
  data: any[];
  selectedUser: bool;
  taxPercent: number;
  discountPercent: number;
}) {
  console.log("Leftbody initialized with:");
  console.log(data);
  console.log(selectedUser);
  console.log("Discount percent: " + discountPercent);
  console.log("Tax percent: " + taxPercent);
  console.log("--------------------");

  const tax = 0;

  return (
    <Box className="w-1/2 h-full flex flex-col">
      <div>Header</div>
      <div className="flex flex-col gap-2 w-full">
        {data.map((item) => {
          return (
            <div>
              <div className="h-[1px] bg-text"> </div>
              <div className="flex justify-between w-full ">
                <div>{item.name}</div>
                <div>
                  {selectedUser
                    ? RoundToDecimal(Number(item.price) / item.paidBy.length)
                    : Number(item.price)}
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col"></div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="w-full h-[1px] bg-black"></div>
        {taxPercent !== -1 && (
          <div className="flex w-full justify-between">
            <div className="">Tax:</div>

            {taxPercent}
            {selectedUser && (
              <div className="font-black">
                {RoundToDecimal(
                  data.reduce(
                    (t, { price, paidBy }) =>
                      (t += Number(price) / paidBy.length) * taxPercent,
                    0,
                  ),
                )}
              </div>
            )}
            {!selectedUser && (
              <div className="font-black">
                {RoundToDecimal(
                  data.reduce(
                    (t, { price }) => (t += Number(price) * taxPercent),
                    0,
                  ),
                )}
              </div>
            )}
          </div>
        )}
        {discountPercent !== -1 && (
          <div className="flex w-full justify-between">
            <div className="">Discount:</div>
            {discountPercent}
            {selectedUser && (
              <div className="font-black">
                {RoundToDecimal(
                  data.reduce(
                    (t, { price, paidBy }) =>
                      (t += Number(price) / paidBy.length) * discountPercent,
                    0,
                  ),
                )}
              </div>
            )}
            {!selectedUser && (
              <div className="font-black">
                {RoundToDecimal(
                  data.reduce(
                    (t, { price }) => (t += Number(price) * discountPercent),
                    0,
                  ),
                )}
              </div>
            )}
          </div>
        )}

        <div className="flex w-full justify-between">
          <div className="font-black">Total:</div>
          {selectedUser && (
            <div className="font-black">
              {RoundToDecimal(
                data.reduce(
                  (t, { price, paidBy }) =>
                    (t += Number(price) / paidBy.length),
                  // ((t += (Number(price) / paidBy.length) * taxPercent), 0),
                  0,
                ),
              )}
            </div>
          )}
          {!selectedUser && (
            <div className="font-black">
              {RoundToDecimal(
                data.reduce((t, { price }) => (t += Number(price)), 0),
              )}
            </div>
          )}
        </div>
      </div>
    </Box>
  );
}

// <div className="justify-around flex w-full h-full gap-4 px-4">
function RoundToDecimal(value: number, decimalPlaces = 2): string {
  return Number(
    Math.round(parseFloat(value + "e" + decimalPlaces)) + "e-" + decimalPlaces,
  ).toFixed(decimalPlaces);
}

function TestBody({
  setSelectedCategory,
}: {
  setSelectedCategory: (str: string) => void;
}) {
  return (
    <div
      id="grid-container"
      className="text-text dark:text-text grid w-full grid-cols-2 gap-10 md:grid-cols-3 xl:w-1/2 xl:pb-16 w450:grid-cols-1 w450:gap-7"
    >
      {ExpenseTypes.map((data) => {
        return (
          <div
            className={`${data.color} cursor-pointer border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 p-5 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none`}
            key={data.title}
            onClick={() => setSelectedCategory(data.title)}
          >
            <img
              className="h-8 w-8 sm:h-10 sm:w-10"
              src={data.icon.src}
              alt={data.title}
            />
            <p className="mt-3 text-lg font-heading sm:text-xl">{data.title}</p>
            <p className="mt-1 text-sm font-base sm:text-base">{data.text}</p>
          </div>
        );
      })}
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
    icon: <Tv />,
    link: "https://twitter.com/johndoe",
    text: "johndoe",
    color: "bg-green-100",
  },
  {
    title: "Add New Income",
    icon: <Tv />,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-green-500",
  },
  {
    title: "Edit Expenses",
    icon: <Tv />,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-bg",
  },
  {
    title: "Add",
    icon: <Tv />,
    link: "https://twitter.com/johndoe",
    text: "johndoe",
    color: "bg-red-300",
  },
  {
    title: "Add New Income",
    icon: <Tv />,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-violet-500",
  },
  {
    title: "Edit Expenses",
    icon: <Tv />,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-purple-500",
  },
  {
    title: "Add",
    icon: <Tv />,
    link: "https://twitter.com/johndoe",
    text: "johndoe",
    color: "bg-yellow-500",
  },
  {
    title: "Add New Income",
    icon: <Tv />,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-orange-500",
  },
  {
    title: "Edit Expenses",
    icon: <Tv />,
    link: "https://www.youtube.com/@johndoe",
    text: "@johndoe",
    color: "bg-slate-500",
  },
];

export default App;
