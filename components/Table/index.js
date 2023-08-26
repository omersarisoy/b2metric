import React from "react";

const tableTitle = [
  {id:1, name: "User Details"},
  {id:2, name: "Customer name"},
  {id:3, name: "Register Date"},
  {id:4, name: "Segment"}
]
function Table({currentPosts}) {
  return (
    <div className="flex w-full bg-white overflow-x-auto flex-col border border-gray-initial rounded-lg">
      <h1 className="p-8 text-xl font-bold text-black">All User</h1>
      <div className="overflow-x-auto -mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b border-gray-initial">
                <tr>
                  {tableTitle.map(item => (
                    <th
                      key={item.id}
                      scope="col"
                      className="px-6 py-3 text-xs text-gray-scale font-bold "
                    >
                    {item.name}
                  </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((item) => (
                  <tr className="border-b  border-gray-initial transition duration-300 ease hover:bg-extralightBlue">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <div className="flex items-center gap-5">
                        <img
                          alt="avatar"
                          width={44}
                          src={item.image}
                          loading="lazy"
                        />
                        <p className="text-dark text-sm font-semibold">{`${item.firstName} ${item.lastName}`}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div>
                        <p className="text-dark text-sm font-semibold">{`${item.firstName} ${item.lastName}`}</p>
                        <p className="text-gray-dayLight text-xs ">
                          {item.birthDate}
                        </p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <p className="text-dark text-sm font-semibold">
                        {item.birthDate}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="bg-green py-3 px-1 rounded-[100px] ">
                        <p className=" text-white text-xs text-center">NEW</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
