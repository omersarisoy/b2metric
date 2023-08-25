import React from "react";

function Table({currentPosts}) {
  return (
    <div className="flex flex-col border border-gray-initial rounded-lg">
      <h1 className="p-8 text-xl font-bold text-black">All User</h1>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b border-gray-initial">
                <tr>
                  <th
                    scope="col"
                    className="px-10 py-3 text-xs text-gray-scale font-bold "
                  >
                    User Details
                  </th>
                  <th
                    scope="col"
                    className="px-10 py-3 text-xs text-gray-scale font-bold "
                  >
                    Customer name
                  </th>
                  <th
                    scope="col"
                    className="px-10 py-3 text-xs text-gray-scale font-bold "
                  >
                    Register Date
                  </th>
                  <th
                    scope="col"
                    className="px-10 py-3 text-xs text-gray-scale font-bold "
                  >
                    Segment
                  </th>
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
