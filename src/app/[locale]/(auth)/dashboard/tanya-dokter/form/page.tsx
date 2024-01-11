/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';

import classes from './page.module.css';

export default function FormKonsultasiPage() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-4xl pb-12">
        <header className={`${classes.card}`}>
          <h1 className="text-4xl font-semibold">Formulir Keluhan</h1>
          <p className="text-base">
            Isi pertanyaan formulir dibawah ini sesuai dengan apa yang kamu
            rasakan supaya mendapatkan <br /> diagnosis yang tepat
          </p>
        </header>
        <form action="" className="flex flex-col gap-4">
          <div className={`${classes.card} flex flex-col gap-3`}>
            <h5>Apakah kamu merasakan mual saat ini?</h5>
            <div className="flex items-center gap-2">
              <input type="radio" name="mual" id="mual" />
              <label htmlFor="mual">Iya</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="mual" id="mual" />
              <label htmlFor="mual">Tidak</label>
            </div>
          </div>
          <div className={`${classes.card} flex flex-col gap-3`}>
            <h5>Apakah kamu merasa pusing?</h5>
            <div className="flex items-center gap-2">
              <input type="radio" name="pusing" id="pusing" />
              <label htmlFor="pusing">Iya</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="pusing" id="pusing" />
              <label htmlFor="pusing">Tidak</label>
            </div>
          </div>
          <div className={`${classes.card} flex flex-col gap-3`}>
            <h5>Sudah berapa lama kamu sakit?</h5>
            <div className="flex items-center gap-2">
              <input type="radio" name="waktuSakit" id="waktuSakit" />
              <label htmlFor="waktuSakit">kurang dari 1 hari</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="waktuSakit" id="waktuSakit" />
              <label htmlFor="waktuSakit">kurang dari satu minggu</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="waktuSakit" id="waktuSakit" />
              <label htmlFor="waktuSakit">sudah satu bulan</label>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="waktuSakit">Lainnya: </label>
              <input
                type="text"
                name="waktuSakit"
                id="waktuSakit"
                className=" w-full border-b"
              />
            </div>
          </div>
          <div className={`${classes.card} flex flex-col gap-3`}>
            <h5>Apa yang kamu rasakan?</h5>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="demam" id="demam" />
              <label htmlFor="demam">Demam</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="batuk" id="batuk" />
              <label htmlFor="batuk">Batuk</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="lemas" id="lemas" />
              <label htmlFor="lemas">Lemas</label>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="waktuSakit">Lainnya: </label>
              <input
                type="text"
                name="waktuSakit"
                id="waktuSakit"
                className=" w-full border-b"
              />
            </div>
          </div>
          <div className={`${classes.card} flex flex-col gap-3`}>
            <h5>Apa yang kamu rasakan?</h5>
            <div className="flex flex-col">
              <textarea
                name="deskripsi"
                id="deskripsi"
                className="border"
                cols={30}
                rows={10}
              />
            </div>
          </div>

          <Link
            href="/dashboard/tanya-dokter/terkirim"
            className="flex w-full justify-center rounded bg-[#00A9FF] py-2 text-white"
          >
            Kirim Keluhan
          </Link>
        </form>
      </section>
    </main>
  );
}
