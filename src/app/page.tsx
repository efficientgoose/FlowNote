import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      Click{" "}
      <Link href="/documents/123">
        {" "}
        <span className="text-blue-500 underline">&nbsp;here&nbsp;</span>
      </Link>{" "}
      to go to the document id
    </div>
  );
};

export default Home;
