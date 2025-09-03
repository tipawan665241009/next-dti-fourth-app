import React, { useState } from "react";
import Image from "next/image";

const App: React.FC = () => {
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<string | null>(null);
  const [bmr, setBmr] = useState<number | null>(null);
  const [bmi, setBmi] = useState<number | null>(null); // เพิ่ม State สำหรับ BMI

  const calculateBMR = () => {
    if (weight && height && age && gender) {
      let calculatedBMR = 0;
      const w = Number(weight);
      const h = Number(height);
      const a = Number(age);

      if (gender === 'male') {
        calculatedBMR = 66 + (13.7 * w) + (5 * h) - (6.8 * a);
      } else if (gender === 'female') {
        calculatedBMR = 665 + (9.6 * w) + (1.8 * h) - (4.7 * a);
      }
      setBmr(calculatedBMR);
    } else {
      setBmr(null);
    }
  };

  const calculateBMI = () => {
    if (weight && height) {
      const w = Number(weight);
      const hInMeters = Number(height) / 100; // แปลงส่วนสูงจากซม. เป็นเมตร
      const calculatedBMI = w / (hInMeters * hInMeters);
      setBmi(calculatedBMI);
    } else {
      setBmi(null);
    }
  };

  // รวมฟังก์ชันการคำนวณเข้าด้วยกัน
  const handleCalculate = () => {
    calculateBMR();
    calculateBMI();
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender(null);
    setBmr(null);
    setBmi(null); // รีเซ็ตค่า BMI ด้วย
  };

  const isFormValid = weight !== '' && height !== '' && age !== '' && gender !== null;

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center font-sans p-4">
      {/* Card container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-800">BMR & BMI Calculator</h1> {/* เปลี่ยนชื่อหัวข้อ */}
          <p className="text-gray-500 mt-1">คำนวณอัตราการเผาผลาญพลังงานพื้นฐานและดัชนีมวลกาย</p> {/* แก้ไขคำอธิบาย */}
        </div>
        <div className="flex justify-center">
          <Image src="/bmr.png" alt="BMR Chart" className="rounded-lg object-cover" width={100} height={100} />
        </div>

        {/* Input Form */}
        <form className="space-y-4">
          {/* Weight Input */}
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              น้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>

          {/* Height Input */}
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              ส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>

          {/* Age Input */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              อายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>

          {/* Gender Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">เพศ</label>
            <div className="mt-2 flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                  className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">ชาย</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                  className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">หญิง</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              onClick={handleCalculate} // เรียกใช้ฟังก์ชันที่รวมการคำนวณทั้ง BMR และ BMI
              className={`w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isFormValid}
            >
              คำนวณ BMR & BMI
            </button>
            <button
              type="button"
              onClick={resetForm}
              className={`w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors ${!isFormValid && bmr === null && bmi === null ? 'opacity-50 cursor-not-allowed' : ''}`} // แก้ไขเงื่อนไข disabled
              disabled={!isFormValid && bmr === null && bmi === null}
            >
              รีเซ็ท
            </button>
          </div>
        </form>

        {/* Result Display */}
        <div className="text-center pt-4 space-y-2"> {/* เพิ่ม space-y-2 สำหรับระยะห่าง */}
          <p className="text-lg font-semibold text-gray-800">
            BMR ที่คำนวณได้: <span className="text-purple-600">{bmr !== null ? bmr.toFixed(2) : '0.00'}</span> kcal/วัน
          </p>
          {/* เพิ่มส่วนแสดงผล BMI */}
          <p className="text-lg font-semibold text-gray-800">
            BMI ที่คำนวณได้: <span className="text-purple-600">{bmi !== null ? bmi.toFixed(2) : '0.00'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;