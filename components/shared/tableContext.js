"use client";
import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";
import { v4 as uuidv4 } from "uuid";

export const TableContext = createContext();
export const TableContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Get all documents in a collection
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setData((prev) => [...prev, doc.data()]);
      // console.log(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  // let uId = uuidv4();
  // console.log(uId);
  // random key generator
  let randomKey = Math.round(Math.random() * 100);
  // console.log(randomKey);
  // sorting

  return (
    <TableContext.Provider value={{ data, randomKey }}>
      {children}
    </TableContext.Provider>
  );
};
