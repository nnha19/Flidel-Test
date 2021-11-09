import Head from "next/head";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <div className="h-screen bg-green-500 flex items-center">
      <div className="w-maxwidth bg-white rounded  mx-auto">
        <h1 className="px-8 py-4 font-medium border-b-2 border-green-400">
          Create New Campign
        </h1>
        <Form />
      </div>
    </div>
  );
}
