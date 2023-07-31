"use client";
import UserProfile from "@/components/userProfile/userProfile";
import React, { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import db from "@/components/shared/firebaseConfig";

const Page = ({ params }) => {
  // const [profileInfo, setProfileInfo] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (params) {
      getUserInfo(params.id);
      // console.log(params.id);
    }
  }, [params]);

  useEffect(() => {
    getUserDetails();
    console.log(users);
  }, []);
  const getUserInfo = async (contact) => {
    const docRef = doc(db, "dummy", contact);
    const docSnap = await getDoc(docRef);
    console.log(docRef.id);
    // console.log(contact);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      // setProfileInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getUserDetails = async () => {
    const q = query(collection(db, "dummy"), where("contact", "==", contact));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUsers((prev) => [...prev, doc.data()]);
    });

    return (
      <div>
        <UserProfile />
      </div>
    );
  };
};
export default Page;
