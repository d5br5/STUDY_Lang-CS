"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

import InnerHeader from "../innerHeader/InnerHeader";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutUser = () => {};

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
      {/* {pathname.startsWith("/admin") ? null : <InnerHeader />} */}
    </header>
  );
};

export default Header;
