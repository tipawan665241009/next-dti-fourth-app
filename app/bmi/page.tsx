import Image from "next/image";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center font-sans p-4">
      {/* Card container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-800">BMI Calculator</h1>
          <p className="text-gray-500 mt-1">คำนวณดัชนีมวลกาย</p>
        </div>

        {/* BMI Image - using a standard <img> tag with a placeholder URL */}
        <div className="flex justify-center">
          <Image src="/bmi.png" alt="BMI Chart" className="rounded-lg object-cover" width={100} height={100} />
        </div>

        {/* Input Form */}
        <form className="space-y-4">
          {/* Weight Input */}
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>

          {/* Height Input */}
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>

          {/* Action Buttons are disabled and their onClick functions are removed */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors opacity-50"
            >
              คำนวณ BMI
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors opacity-50"
            >
              รีเซ็ท
            </button>
          </div>
        </form>

        {/* Result Display */}
        <div className="text-center pt-4">
          <p className="text-lg font-semibold text-gray-800">
            BMI ที่คำนวณได้: <span className="text-purple-600">0.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
