import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-50 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex items-center justify-between gap-x-8">
          <div className="flex items-center space-x-24">
            <div>
              <h3 className="text-xl font-bold">CreditWise</h3>
            </div>
            <div>
              <h3 className="font-semibold">Services</h3>
            </div>
          </div>

          <div>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-slate-900 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-slate-900 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-slate-900 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-slate-900 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
