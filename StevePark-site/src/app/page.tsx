import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Calendar, Users, TrendingUp, Star } from "lucide-react";
export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Unlock Your Financial Potential with CreditWise.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Building responsible credit and securing smart funding solutions
                for your dreams.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-md text-lg hover:bg-gray-800 transition-colors flex items-center cursor-pointer">
                Start Your Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional team discussion"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems and Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Financial Challenges? We Have the Solutions.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Common Pain Points */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Common Pain Points
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Low Credit Score Hindering Loans
                    </h4>
                    <p className="text-gray-600">
                      Struggling with poor credit scores that prevent you from
                      accessing the credit you need for major purchases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      High Interest Rates
                    </h4>
                    <p className="text-gray-600">
                      Paying exorbitant interest on existing debt, robbing you
                      of financial growth and freedom.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Lack of Funding for Business
                    </h4>
                    <p className="text-gray-600">
                      Entrepreneurs dreams stalled due to lack of business
                      capital or unfavorable lending terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Powerful Solutions */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Our Powerful Solutions
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Expert Credit Repair Strategies
                    </h4>
                    <p className="text-gray-600">
                      Our skilled team will analyze your credit report and work
                      strategically to improve your credit score.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Access to Smart Funding
                    </h4>
                    <p className="text-gray-600">
                      Connect with resources for business funding solutions,
                      personal loans and real estate investment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Personalized Financial Guidance
                    </h4>
                    <p className="text-gray-600">
                      Receive one-on-one financial coaching tailored to your
                      specific goals and circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900">
              Hear From Our Satisfied Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Small Business Owner",
                img: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                quote: `CreditWise transformed my business. Their credit repair strategies helped me secure a vital loan, and now my company is thriving!`,
              },
              {
                name: "David R.",
                role: "First-Time Homebuyer",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
                quote: `I never thought owning a home was possible. CreditWise boosted my score and got me the lowest mortgage rates.`,
              },
              {
                name: "Maria L.",
                role: "Real Estate Investor",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
                quote: `The personalized guidance and expert strategies made the complex feel simple — results were fast and real.`,
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="
            relative bg-white rounded-[20px]
            border border-slate-200 shadow-[0_8px_24px_rgba(16,24,40,.06)]
            px-8 py-10 text-center
          "
              >
                {/* Avatar */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="
              w-20 h-20 rounded-full mx-auto mb-6 object-cover
              ring-1 ring-slate-200 shadow-sm
            "
                />

                {/* Quote */}
                <blockquote className="text-slate-700 italic font-serif text-lg leading-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Name + role */}
                <figcaption className="mt-5">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Simple 3-Step Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-10 h-10 bg-green-900/50 border border-green-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold">
                1
              </div>
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Book a Free Consultation
              </h3>
              <p className="text-gray-600">
                Schedule a complimentary call with our expert team to discuss
                your financial goals and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 bg-green-900/50 border border-green-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold">
                2
              </div>
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sign Agreement & Plan
              </h3>
              <p className="text-gray-600">
                Review your customized financial strategy and sign our agreement
                to begin your transformation journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 bg-green-900/50 border border-green-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold">
                3
              </div>
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Achieve Financial Growth
              </h3>
              <p className="text-gray-600">
                Watch as we implement your personalized plan and begin seeing
                positive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score Growth Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Achieve Your Financial Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Credit Score Growth
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    Boost your credit score by 150+ within months
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    Achieve prime lending rates with favorable terms
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    Grow your dreams with the lowest possible interest rates
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    Access capital for your business and real estate expansion
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    Achieve true financial freedom regardless of where you start
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <img
                src="https://plus.unsplash.com/premium_photo-1733317228408-b4ca132b2772?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional team discussion"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey: From Adversity to Financial Mastery
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1523504754200-45cd634649d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Founder portrait"
                className="rounded-lg shadow-xl w-full h-96 object-cover grayscale"
              />
            </div>

            <div>
              <p className="text-gray-600 mb-6">
                CreditWise was born from personal struggle. As a founder, my
                journey was marked by setbacks, bad financial decisions, failed
                business ventures, and moments that tested my resolve in
                countless ways.
              </p>

              <p className="text-gray-600 mb-6">
                Through years of searching paths, setbacks, and learning of
                credit laws and financial strategies, CreditWise emerged from
                real-world experience of someone that has struggled, learned,
                and achieved financial freedom and wants others to experience
                these benefits.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black mb-6">
                <p className="text-gray-800 italic font-medium">
                  "I never wished hard decisions take longer to make than
                  financial decisions. They deserve to have control over their
                  money and by extension their destiny."
                </p>
              </div>

              <p className="text-gray-600">
                Today, we help thousands secure the financial freedom life
                deserves. Whether it's boosting credit scores, accessing
                capital, or achieving investment objectives, our goal is to help
                unlock the same financial rewards that enabled us to navigate
                this challenging journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden">
        {/* base diagonal gradient (top-left → bottom-right) */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0B1F2E_0%,#0E3A3A_45%,#0D5E3F_100%)]" />

        {/* subtle radial glow from the upper-left to mimic the design */}
        <div className="absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(120%_120%_at_15%_10%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_55%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Ready to Transform Your Financial Future?
          </h4>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Book a free, no-obligation consultation with our experts today and
            take the first step towards financial mastery.
          </p>
          <button className="bg-white text-slate-900 px-6 md:px-8 py-3 rounded-md text-sm md:text-lg font-semibold hover:bg-slate-100 transition-colors cursor-pointer">
            Book Your Free Consultation Now
          </button>
        </div>
      </section>
    </>
  );
}
