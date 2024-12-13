// import { Inter } from 'next/font/google';

 
// export const inter = Inter({ subsets: ['latin'] });

import { Kanit, Inter, Lusitana  } from 'next/font/google';

export const kanit = Kanit({
    subsets: ['thai', 'latin'], // ระบุ subsets ที่ต้องการ
    weight: ['100', '200', '400', '700'],    // ระบุน้ำหนักที่ต้องการใช้
});

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });