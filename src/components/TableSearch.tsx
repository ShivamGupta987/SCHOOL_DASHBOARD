"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TableSearch = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    params.set("search", searchValue.trim());

    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2"
    >
      <Image src="/search.png" alt="Search" width={14} height={14} />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
      <button type="submit" className="px-3 py-1 bg-gray-700 text-white rounded-full">
        Search
      </button>
    </form>
  );
};

export default TableSearch;
