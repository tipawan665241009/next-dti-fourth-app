import Image from "next/image";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center font-sans p-4">
      {/* Card container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-800">Car Installment Calculator</h1>
          <p className="text-gray-500 mt-1">คำนวณค่างวดรถยนต์</p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/carinstallment.png"
            alt="carinstallment Chart"
            className="rounded-lg object-cover"
            width={100}
            height={100}
          />
        </div>
        {/* Input Form */}
        <form className="space-y-4">
          {/* Car Price Input */}
          <div>
            <label htmlFor="carPrice" className="block text-sm font-medium text-gray-700">
              ราคารถยนต์ (บาท)
            </label>
            <input
              type="number"
              id="carPrice"
              name="carPrice"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>

          {/* Interest Rate Input */}
          <div>
            <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>

          {/* Down Payment Percentage */}
          <div>
            <label className="block text-sm font-medium text-gray-700">เงินดาวน์ (%)</label>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {[15, 20, 25, 30, 35].map((percent) => (
                <label key={percent} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="downPaymentPercentage"
                    value={percent}
                    className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{percent}%</span>
                </label>
              ))}
            </div>
          </div>

          {/* Loan Term Months */}
          <div>
            <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              id="loanTerm"
              name="loanTerm"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            >
              {[12, 24, 36, 48, 60, 72].map((month) => (
                <option key={month} value={month}>
                  {month} เดือน
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons are disabled and their onClick functions are removed */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors cursor-not-allowed opacity-50"
              disabled
            >
              คำนวณ
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors cursor-not-allowed opacity-50"
              disabled
            >
              รีเซ็ท
            </button>
          </div>
        </form>

        {/* Result Display */}
        <div className="text-center pt-4">
          <p className="text-lg font-semibold text-gray-800">
            ค่างวดต่อเดือน: <span className="text-purple-600">0.00</span> บาท
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
