"use client";

import { useContext } from "react";
import { TableContext } from "./shared/tableContext";
import { useRouter } from "next/navigation";

const ClientTable = ({ profileInfo }) => {
  const { data, randomKey } = useContext(TableContext);
  const router = useRouter();

  return (
    <>
      <div className="m-6 ">
        <h2 className={`my-6 text-2xl text-black`}>Client Table</h2>

        {/* table */}

        <div>
          <table className="table table-md border-2 border-gray-200 drop-shadow-md  ">
            {/* head */}
            <thead>
              <tr className={`bg-neutral-content text-base text-black`}>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Employer</th>
                <th>Role</th>
                <th>Joining Date</th>
                <th>DOB</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* JUST NOW */}
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>contact</th>
                <th>Employer</th>
                <th>Role</th>
                <th>Joining</th>
              </tr>
            </thead>
            <tbody className=" shadow-md">
              {/* data showing */}
              {data &&
                data.map((item, index) => {
                  return (
                    <>
                      <tr key={Date.now()}>
                        <button
                          className="bg-blue-400 p-1 rounded-md "
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          Show
                        </button>

                        <th>{index + 1}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.dob}</td>
                        <td>{item.contact}</td>
                        <td>{item.employer}</td>
                        <td>{item.role}</td>
                        <td>{item.joining}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>contact</th>
                <th>Employer</th>
                <th>Role</th>
                <th>Joining</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClientTable;
