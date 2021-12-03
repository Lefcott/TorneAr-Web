import { createUser } from "queries/user";

export default function Home() {
  return (
    <>
      <form onSubmit={() => createUser()} />
    </>
  );
}
