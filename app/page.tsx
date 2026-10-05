import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
        <h1 className="text-2xl font-bold">Hello, Welcome to Auren!</h1>
        <div className="flex gap-4">
          <Link href="/login" className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            User Login
          </Link>
          <Link href="/user-register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            User Registration
          </Link>
        </div>

        <div className="flex gap-4 ">
          <Link href="/partner/login" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl">
            Partner Login
          </Link>
          <Link href="/partner/register" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-2xl">
            Partner Registration
          </Link>
        </div>
      </div>
    </>
  );
}
