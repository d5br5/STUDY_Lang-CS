import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UsernameInfo() {
  const router = useRouter();
  const { username, info, uid } = router.query;
  const [name, setName] = useState("?");

  useEffect(() => {
    if (uid) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((res) => setName(res.name));
    }
  }, [uid]);
  return (
    <div>
      <h1>
        {username}'s {info}
      </h1>
      <h1>name : {name}</h1>
    </div>
  );
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
