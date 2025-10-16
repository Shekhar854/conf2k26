import React from 'react';

const RegistrationPage = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-blue-600 text-white text-left text-xs leading-4 font-medium uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 bg-blue-600 text-white text-left text-xs leading-4 font-medium uppercase tracking-wider">IEEE Member</th>
              <th className="px-6 py-3 bg-blue-700 text-white text-left text-xs leading-4 font-medium uppercase tracking-wider">Non IEEE Member</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Indian Author (Academia)</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 8500</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 9500</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Indian Author (Researchers/Students)</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 6500</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 7500</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Indian Author (Industry)</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 9000</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 10000</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Members of WIE</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 5500</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">-</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Foreign Author (Academia/Industry)</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">USD 300</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">USD 250</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Foreign Author (Researchers/Students)</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">USD 250</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">USD 200</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Attendee (Professional)</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 3000</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">INR 2000</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">Attendee (Researchers/Students)</td>
              <td className="px-6 py-4 whitespace-no-wrap">INR 2000</td>
              <td className="px-6 py-4 whitespace-no-wrap">INR 1500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li>An author may register for a maximum of two papers, with the registration fee paid separately for each paper.</li>
          <li>Extra page charge (if manuscript length is more than 6 pages) of ₹ 1000/- INR per page Indian author and $ 15 per page International author will be chargeable to the author's during registration process.</li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Bank Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><strong>Account Name:</strong> IIMT College of Engineering</div>
          <div><strong>Account Number:</strong> 013394600000043</div>
          <div><strong>IFSC Code:</strong> YESB0000133</div>
          <div><strong>Bank Name:</strong> Yes Bank</div>
          <div><strong>Branch:</strong> Shop No G1 & G2, Greater Noida Shopping Complex, Zone IV, Surajpur Kasna Road, Kasna, UP - 201310</div>
          <div><strong>MICR Code:</strong> 110532032</div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-100 border border-blue-300 rounded-lg text-center">
        <p className="text-lg text-gray-800">To complete registration, filling the form is <strong>mandatory</strong></p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
          Fill Registration Details
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;