import Link from 'next/link';

export default function Index() {
  return (
    <main className="grid h-screen w-full py-28">
      <section className="w-full">
        <h1 className=" text-center text-4xl font-bold lg:text-6xl">
          Selamat datang
        </h1>
        <div className="flex gap-4">
          <Link
            href="/sign-in"
            className="flex grow items-center justify-center gap-2 border border-[#009BEB] p-4 text-[#009BEB]"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="flex grow justify-center bg-[#009BEB] p-4 text-white"
          >
            Daftar
          </Link>
        </div>
      </section>
    </main>
  );
}
