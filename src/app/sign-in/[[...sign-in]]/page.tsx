import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen relative">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
        <SignIn />
      </div>
    </div>
  );
}
