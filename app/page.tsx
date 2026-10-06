import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center max-w-full h-screen">
      <Link href="/partner/register" className="font-extrabold from-stone-600 text-2xl p-3 rounded-2xl bg-gray-600">Repairer Sign-up</Link>
    </div>
  )
}