import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const ConferenceGuidelines = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-red-800">Conference Guidelines</h2>
        <h1 className="text-6xl font-bold text-orange-600 text-orange-600">Author's Guidelines</h1>
      </div>
      <p className="text-center mb-8 text-gray-800 dark:text-gray-900">
        Authors are invited to submit original, high-quality, and previously unpublished research articles. Submissions must not be under review by any other publication or conference. All manuscripts should be submitted electronically via Microsoft CMT in strict adherence to the IEEE standard two-column conference template, which can be accessed through the provided link. Each manuscript is limited to a maximum of six (6) pages, including figures, tables, and references. Additional pages may be accommodated with a nominal fee.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-orange-600 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Paper Formatting Guidelines</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Paper Size: US Letter (8.5" x 11").</li>
            <li>Paper Length: Maximum of 6 pages, including figures, tables, and references. Two additional pages are permitted with a charge of ₹1000 per page (Indian authors) or $50 per page (International authors).</li>
            <li>Formatting: Double-column layout, single-spaced, using 10pt Times New Roman font.</li>
            <li>Margins: Top: 1" (25 mm) on the title page; 0.75" (19 mm) elsewhere. Left, Right, and Bottom margins: 0.75" (19 mm).</li>
            <li>File Format: PDF, with a maximum size of 5MB. All fonts must be embedded.</li>
            <li>No page numbering should be included in the manuscript.</li>
            <li>Use the IEEE MS Word template provided via the link above for proper formatting.</li>
          </ul>
          <button className="mt-4 bg-white text-red-500 font-bold py-2 px-4 rounded-lg flex items-center">
            <Download className="mr-2" /> Download Template
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-gray-800">
          <h3 className="text-2xl font-bold mb-4">General Instructions</h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>Papers violating formatting guidelines may be rejected.</li>
            <li>Submissions must be original, unpublished work not under review elsewhere.</li>
            <li>Simultaneous submissions to other conferences or journals are prohibited.</li>
            <li>All manuscripts must be written in English and prepared as a PDF document.</li>
            <li>Papers should strictly adhere to the IEEE two-column format with 10pt font size.</li>
            <li>The page limit is six (6) pages. An additional two pages are allowed with extra charges as specified.</li>
            <li>All figures, tables, and references must fit within the page limit.</li>
            <li>Papers will be reviewed based on originality, significance, technical quality, and clarity.</li>
            <li>The decision to accept or reject a paper rests with the Technical Program Committee.</li>
            <li>Accepted papers must address reviewers' comments and meet final submission requirements.</li>
            <li>The Conference Chair reserves the right to exclude papers not presented or meeting guidelines from the proceedings.</li>
            <li>All submissions should be made via Microsoft CMT.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-between mb-4 text-gray-800">
        <div>
          <h4 className="font-bold">IEEE Similarity and Plagiarism Policies</h4>
          <p>Guidelines for Maintaining Academic Integrity</p>
        </div>
        <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
          Redirect to Link <ArrowRight className="ml-2" />
        </button>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-between mb-8 text-gray-800">
        <div>
          <h4 className="font-bold">IEEE E-Copyright Process Document</h4>
          <p>Final Submission with IEEE Xplore®-Compatible PDFs</p>
        </div>
        <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
          Redirect to Link <ArrowRight className="ml-2" />
        </button>
      </div>

      <div className="bg-orange-600 text-white p-6 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li>Papers of acceptable quality presented at the conference will be submitted to IEEE Xplore for potential inclusion.</li>
          <li>Accepted papers must be presented by at least one author. Authors must complete paid registration to upload the final IEEE-compliant version of their paper.</li>
          <li>Failure to register or present the paper will result in removal from the conference program and proceedings.</li>
          <li>No refunds will be provided for cancellations, but substitutions are allowed before the event.</li>
        </ul>
      </div>
    </div>
  );
};

export default ConferenceGuidelines;