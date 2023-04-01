import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Table from "../components/table";
import Form from "../components/form";
import { useState } from "react";
export default function Home() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    return setVisible(!visible);
  };
  return (
    <section>
      <Head>
        <title>CRUD Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5 px-14">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handleVisible}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        {/* collapsable form */}
        {visible ? <Form /> : <></>}

        <div className="container mx-auto">
          {/* table */}
          <Table />
        </div>
      </main>
    </section>
  );
}
