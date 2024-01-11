import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineMessage } from 'react-icons/md';

export default function TerkirimPage() {
  return (
    <main className="grid h-screen w-full place-items-center">
      <div className="flex flex-col">
        <div>
          <Image
            src="/assets/images/user/dashboard/terkirim-hero.png"
            width={572}
            height={411}
            alt="Checklist"
          />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-5xl font-bold">Keluhan Telah Terkirim</h1>
          <p className=" max-w-2xl text-base">
            Silahkan menunggu dokter menghubungi anda untuk tindakan lebih
            lanjut, atau kamu bisa menguhubungi dokter kamu sekarang
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-6">
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 border border-[#009BEB] p-4 text-[#009BEB]"
          >
            <MdOutlineMessage className="text-2xl" /> Chat Sekarang
          </Link>
          <Link
            href="/dashboard"
            className="flex justify-center bg-[#009BEB] p-4 text-white"
          >
            Selesai
          </Link>
        </div>
      </div>
    </main>
  );
}
