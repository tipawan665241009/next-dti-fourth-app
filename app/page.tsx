import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CalculatorCardProps {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
  bgColor: string;
  titleColor: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ href, imageUrl, title, description, bgColor, titleColor }) => (
  <Link
    href={href}
    className="block group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800"
  >
    <div className={`flex justify-center items-center h-56 ${bgColor} dark:bg-gray-700 transition-colors duration-300`}>
      <Image
        src={imageUrl}
        alt={title}
        className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
        width={100}
        height={100}
      />
    </div>
    <div className="p-6">
      <h2 className={`text-2xl font-bold mb-2 ${titleColor}`}>{title}</h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </Link>
);

const App: React.FC = () => {
  return (
    <>
      <div className="bg-purple-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
              เครื่องมือคำนวณออนไลน์
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">เลือกเครื่องมือคำนวณที่คุณต้องการใช้งาน</p>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CalculatorCard
              href="/bmi"
              imageUrl="/bmi.png"
              title="คำนวณค่า BMI"
              description="คำนวณดัชนีมวลกาย เพื่อประเมินภาวะอ้วนหรือผอม"
              bgColor="bg-purple-100"
              titleColor="text-purple-600 dark:text-purple-400"
            />

            <CalculatorCard
              href="/bmr"
              imageUrl="/bmr.png"
              title="คำนวณค่า BMR"
              description="คำนวณอัตราการเผาผลาญพลังงานของร่างกายในแต่ละวัน"
              bgColor="bg-purple-200"
              titleColor="text-purple-700 dark:text-purple-500"
            />

            <CalculatorCard
              href="/carinstallment"
              imageUrl="/carinstallment.png"
              title="คำนวณค่างวดรถ"
              description="คำนวณค่างวดรถยนต์เบื้องต้นจากราคาและเงินดาวน์"
              bgColor="bg-purple-300"
              titleColor="text-purple-800 dark:text-purple-600"
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
