"use client";
import Table from "@/components/Table";
import Pagination from "@/utils/Pagination";
import { useEffect, useState } from "react";

function Users() {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  useEffect(() => {
    const fetchTableData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data) {
        setTableData(data.users);
      }
    };
    fetchTableData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white w-full h-full px-7">
      <Table currentPosts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={tableData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Users;
