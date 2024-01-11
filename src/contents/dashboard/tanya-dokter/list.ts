import type Image from 'next/image';

import type { ExtractProps } from '@/types/helper';

type ListDokter = {
  image: ExtractProps<typeof Image>;
  name: string;
  occupation: string;
  workexperience: string;
};

export const LISTDOKTER: ListDokter[] = [
  {
    image: {
      src: '/assets/images/user/dashboard/tanya-dokter/1.png',
      width: 76,
      height: 76,
      alt: 'Dokter',
    },
    name: 'dr. Sadam Ali Rafsanjani, Sp. PD',
    occupation: 'Spesialis Penyakit Dalam',
    workexperience: '12 Tahun',
  },
  {
    image: {
      src: '/assets/images/user/dashboard/tanya-dokter/1.png',
      width: 76,
      height: 76,
      alt: 'Dokter',
    },
    name: 'dr. Sadam Ali Rafsanjani, Sp. PD',
    occupation: 'Spesialis Penyakit Dalam',
    workexperience: '12 Tahun',
  },
  {
    image: {
      src: '/assets/images/user/dashboard/tanya-dokter/1.png',
      width: 76,
      height: 76,
      alt: 'Dokter',
    },
    name: 'dr. Sadam Ali Rafsanjani, Sp. PD',
    occupation: 'Spesialis Penyakit Dalam',
    workexperience: '12 Tahun',
  },
];

type ListLayanan = {
  href: string;
  image: ExtractProps<typeof Image>;
  title: string;
};

export const LISTLAYANAN: ListLayanan[] = [
  {
    href: '/dashboard/tanya-dokter',
    image: {
      src: '/assets/images/user/dashboard/layanan/1.png',
      width: 40,
      height: 40,
      alt: 'Layanan',
    },
    title: 'Konsultasi Sakit Bagian Dalam',
  },
  {
    href: '/dashboard/tanya-dokter',
    image: {
      src: '/assets/images/user/dashboard/layanan/2.png',
      width: 40,
      height: 40,
      alt: 'Layanan',
    },
    title: 'Konsultasi Sakit Bagian Luar',
  },
  {
    href: '/dashboard/tanya-dokter',
    image: {
      src: '/assets/images/user/dashboard/layanan/3.png',
      width: 40,
      height: 40,
      alt: 'Layanan',
    },
    title: 'Konsultasi Kesehatan Mental',
  },
];
