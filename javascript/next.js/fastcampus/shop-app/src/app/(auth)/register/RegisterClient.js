"use client";
import React, { useState } from "react";
import AutoSignInCheckbox from "@/components/autoSignInCheckbox/AutoSignInCheckbox";
import Button from "@/components/button/Button";
import Divider from "@/components/divider/Divider";
import Input from "@/components/input/Input";
import Loader from "@/components/loader/Loader";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../login/Auth.module.scss";
import LogoPath from "@/assets/colorful.svg";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const RegisterClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      return toast.error("password is not same");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
        toast.success("Register Successed");
        router.push("/login");
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" width={247} />
          </h1>
          <form className={styles.form} onSubmit={registerUser}>
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              className={styles.control}
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />

            <div className={styles.buttonGroup}>
              <Button type="submit" width="100%">
                회원가입
              </Button>
              <Divider />
              <Button width="100%" secondary>
                <Link href={"/login"}>로그인</Link>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterClient;
