import type Image from 'next/image';
import { title } from 'process';
// eslint-disable-next-line import/no-extraneous-dependencies
import slugify from 'slugify';

import type { ExtractProps } from '@/types/helper';

type Promotion = {
  image: ExtractProps<typeof Image>;
  title: string;
  desc: string;
};

export const PROMOTION: Promotion[] = [
  {
    image: {
      src: '/assets/images/user/dashboard/promotion-1.png',
      width: 331,
      height: 272,
      alt: 'Promotion',
    },
    title: 'Berat Badan Kamu Naik?',
    desc: 'Yuk cek berat badan ideal kamu secara online',
  },
  {
    image: {
      src: '/assets/images/user/dashboard/promotion-1.png',
      width: 331,
      height: 272,
      alt: 'Promotion',
    },
    title: 'Berat Badan Kamu Naik?',
    desc: 'Yuk cek berat badan ideal kamu secara online',
  },
  {
    image: {
      src: '/assets/images/user/dashboard/promotion-1.png',
      width: 331,
      height: 272,
      alt: 'Promotion',
    },
    title: 'Berat Badan Kamu Naik?',
    desc: 'Yuk cek berat badan ideal kamu secara online',
  },
];

type Features = {
  href: string;
  image: ExtractProps<typeof Image>;
  title: string;
};

export const FEATURES: Features[] = [
  {
    href: '/dashboard',
    image: {
      src: '/assets/images/user/dashboard/features/1.png',
      width: 120,
      height: 120,
      alt: 'Features',
    },
    title: 'Tanya Dokter',
  },
  {
    href: '/dashboard',
    image: {
      src: '/assets/images/user/dashboard/features/2.png',
      width: 120,
      height: 120,
      alt: 'Features',
    },
    title: 'Panggil Dokter',
  },
  {
    href: '/dashboard',
    image: {
      src: '/assets/images/user/dashboard/features/3.png',
      width: 120,
      height: 120,
      alt: 'Features',
    },
    title: 'Tanya Dokter',
  },
  {
    href: '/dashboard',
    image: {
      src: '/assets/images/user/dashboard/features/4.png',
      width: 120,
      height: 120,
      alt: 'Features',
    },
    title: 'Tanya Dokter',
  },
  {
    href: '/dashboard',
    image: {
      src: '/assets/images/user/dashboard/features/5.png',
      width: 120,
      height: 120,
      alt: 'Features',
    },
    title: 'Tanya Dokter',
  },
  {
    href: '/dashboard',
    image: {
      src: '/assets/images/user/dashboard/features/6.png',
      width: 120,
      height: 120,
      alt: 'Features',
    },
    title: 'Tanya Dokter',
  },
  {
    href: '/dashboard',
    image: {
      src: '/assets/images/user/dashboard/features/7.png',
      width: 120,
      height: 120,
      alt: 'Features',
    },
    title: 'Tanya Dokter',
  },
];

type ArticleCategories = {
  title: string;
};

export const ARTICLECATEGORIES: ArticleCategories[] = [
  {
    title: 'Terbaru',
  },
  {
    title: 'Kesehatan Mental',
  },
  {
    title: 'Obat',
  },
];

type Article = {
  id: number;
  category: string;
  title: string;
  slug: string;
  date: string;
  image: ExtractProps<typeof Image>;
};

export const ARTICLE: Article[] = [
  {
    id: 1,
    category: 'Artikel Olahraga',
    title: 'Fakta Orang Jomblo Olahraga Sendiri',
    slug: 'fakta-orang-jomblo-olahraga-sendiri',
    date: '5 Januari 2024',
    image: {
      src: '/assets/images/user/dashboard/article/1.png',
      width: 216,
      height: 216,
      alt: title,
    },
  },
  {
    id: 2,
    category: 'Artikel Olahraga',
    title: 'Fakta Orang HTS Olahraga Sendiri',
    slug: slugify(title, { lower: true }),
    date: '5 Januari 2024',
    image: {
      src: '/assets/images/user/dashboard/article/1.png',
      width: 216,
      height: 216,
      alt: title,
    },
  },
];
