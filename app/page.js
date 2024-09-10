"use client"
import Todo from "@/Components/Todo";
import { useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  return <>

    <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto ">
      <input type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full" />
      <textarea name="description" placeholder="Enter Description" className="px-3 py-2 border-2 w-full" ></textarea>
      <button type="submit" className="bg-orange-600 py-3 px-11 text-white rounded-lg">Add Todo</button>
    </form>

    <div class="relative overflow-x-auto mt-24 w-[60%] mx-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Id
            </th>
            <th scope="col" class="px-6 py-3">
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          
          <Todo/>
          <Todo/>
          <Todo/>
   
        </tbody>
      </table>
    </div>





  </>;
}
