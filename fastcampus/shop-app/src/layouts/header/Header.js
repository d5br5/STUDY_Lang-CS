"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

import InnerHeader from "../innerHeader/InnerHeader";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const [u1] = user.email.split("@");
          const uName = u1[0].toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
        // save user info at redux store
      } else {
        setDisplayName("");
        // reset user info at redux store
      }
    });
  }, []);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("successfully logged out");
        router.push("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const returnNullPathList = ["/login", "/register", "/reset"];
  if (returnNullPathList.includes(pathname)) {
    return null;
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          {!isLoggedIn ? (
            <li className={styles.item}>
              <Link href={"/login"}>로그인</Link>
            </li>
          ) : (
            <>
              <li className={styles.item}>
                <Link href={"/admin/dashboard"}>관리자</Link>
              </li>

              <li className={styles.item}>
                <Link href={"/order-history"}>주문 목록</Link>
              </li>
              <li className={styles.item}>
                <Link href={"/"} onClick={logoutUser}>
                  로그아웃
                </Link>
              </li>

              <li className={styles.item}>
                <Link href={"/"}>제휴 마케팅</Link>
              </li>

              <li className={styles.item}>
                <Link href={"/"}>쿠팡 플레이</Link>
              </li>

              <li className={styles.item}>
                <Link href={"/"}>고객센터</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {!pathname.startsWith("/admin") && <InnerHeader />}
    </header>
  );
};

export default Header;
