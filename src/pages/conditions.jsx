import React from "react";
import { FileText, Shield, RotateCcw, CheckCircle, HelpCircle, AlertCircle } from "lucide-react";

function Conditions() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Header with Gradient Background */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Background pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: "url('/api/placeholder/1200/800')", backgroundSize: "cover" }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms and Conditions</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto text-blue-100">Important information about your rights and responsibilities</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Terms and Conditions Section */}
        <section className="mb-20 bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <FileText className="h-10 w-10 text-blue-700" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">TERMS AND CONDITIONS</h2>
          
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Your Terms and Conditions section is like a contract between you and your customers. You make information
              and services available to your customers, and your customers must follow your rules.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6 text-blue-800">Common items in a terms and conditions agreement allow you to:</h3>
              
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Withdraw and cancel services, and make financial transactions.</span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Manage customer expectations, such as liability for information errors or website downtime.</span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    Explain your copyright rules, such as attribution, adaptation, commercial or non-commercial use, etc.
                  </span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    Set rules for user behavior, like forbidding unlawful behavior, hate speech, bullying, promotions,
                    spam, etc.
                  </span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Disable user accounts.</span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Write down any other terms or conditions that protect you or your audience.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Return and Refund Policy Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <RotateCcw className="h-10 w-10 text-blue-700" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">RETURN AND REFUND POLICY</h2>
          
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              This is a place to describe your Return and Refund Policy to buyers.
            </p>

            <div className="mt-8">
              <p className="text-gray-800 text-lg font-medium mb-6">A Return and Refund policy usually consists of:</p>
              
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Terms of return (i.e. number of days)</span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">State of return (e.g. unworn)</span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Reason for return (e.g. damaged or wrong product)</span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Process for return (i.e. how to initiate a return, how to contact customer service)</span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Process of refund (i.e. terms of refund, duration, payment details)</span>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Contact details</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 shadow-md">
            <HelpCircle className="h-12 w-12 text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Need Help?</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about our terms and conditions or refund policy, please don't hesitate to contact us.
            </p>
            <a
              href="mailto:support@treasuretechhub.com"
              className="inline-block bg-blue-700 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-800 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} TREASURETECH HUB. All rights reserved.</p>
          <p className="mt-2">These terms were last updated on March 3, 2025.</p>
        </div>
      </footer>
    </div>
  );
}

export default Conditions;