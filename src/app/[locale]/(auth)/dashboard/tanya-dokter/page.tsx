/* eslint-disable react/no-array-index-key */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { LuMapPin } from 'react-icons/lu';
import { MdKeyboardArrowRight } from 'react-icons/md';

import {
  LISTDOKTER,
  LISTLAYANAN,
} from '@/contents/dashboard/tanya-dokter/list';

// interface SearchDefault {
//   defaultValue: string | null;
// }

export default function TanyaDokterPage() {
  // const router = useRouter();
  // const [inputValue, setInputValue] = useState(defaultValue);
  // const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;
  //   setInputValue(inputValue);
  // };

  // const handleSearch = () => {
  //   if (inputValue)
  //     return router.push(`/dashboard/cari-dokter/?q=${inputValue}`);
  //   if (!inputValue) return router.push('/dashboard/cari-dokter');
  // };

  // const handleKeyPress = (event: { key: any }) => {
  //   if (event.key === 'Enter') {
  //     return handleSearch();
  //   }
  // };
  return (
    <main className="mt-7 w-full max-w-4xl border p-6">
      <section className="w-full">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <LuMapPin />
            <p className="text-lg font-medium">Jl. Alam Raya...</p>
          </div>
          <input
            type="text"
            id="inputId"
            placeholder="cari dokter"
            className="rounded border p-2"
          />
        </header>
        <div className="flex flex-col py-8">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">Dokter Tersedia</h4>
            <Link
              className=" flex items-center gap-2 text-sm text-[#009BEB]"
              href="/dashboard/tanya-dokter"
            >
              Semua Dokter
              <MdKeyboardArrowRight />
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-8">
            {LISTDOKTER.map((e, index) => (
              <>
                <Link
                  href="/dashboard/tanya-dokter/form"
                  key={index}
                  className="flex gap-3"
                >
                  <div>
                    <Image
                      src={e.image.src}
                      width={e.image.width}
                      height={e.image.height}
                      alt={e.image.alt}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-base font-semibold">{e.name}</h5>
                    <p className=" text-xs">{e.occupation}</p>
                    <p className="mt-3 flex items-center text-xs">
                      <HiOutlineBriefcase />
                      {e.workexperience}
                    </p>
                  </div>
                </Link>
                <hr />
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col py-8">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">Layanan Konsultasi</h4>
            <Link
              className=" flex items-center gap-2 text-sm text-[#009BEB]"
              href="/dashboard/tanya-dokter"
            >
              Semua Layanan
              <MdKeyboardArrowRight />
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-8">
            {LISTLAYANAN.map((e, index) => (
              <Link
                href="/dashboard/tanya-dokter"
                key={index}
                className="flex items-center gap-3 border px-6 py-4"
              >
                <div>
                  <Image
                    src={e.image.src}
                    width={e.image.width}
                    height={e.image.height}
                    alt={e.image.alt}
                  />
                </div>
                <h5 className="text-base">{e.title}</h5>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
