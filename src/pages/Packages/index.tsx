import React from "react";

const packages = [
    {
        title: "Basic",
        weekly_price: "19",
        monthly_price: "39",
        yearly_price: "199",
        monthlyVisitors: "3,000 monthly visitors",
        features: [
            "✅ Limited Reports",
            "✅ Unlimited Internet Speed",
            "✅ 24/7 Support",
            "❌ Notification on end of month",
            "❌ No emails notifications",
        ],
        description: "Perfect for individuals or small teams just starting out. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        title: "Basic",
        weekly_price: "19",
        monthly_price: "39",
        yearly_price: "199",
        monthlyVisitors: "3,000 monthly visitors",
        features: [
            "✅ Limited Reports",
            "✅ Unlimited Internet Speed",
            "✅ 24/7 Support",
            "❌ Notification on end of month",
            "❌ No emails notifications",
        ],
        description: "Perfect for individuals or small teams just starting out. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        title: "Basic",
        weekly_price: "19",
        monthly_price: "39",
        yearly_price: "199",
        monthlyVisitors: "3,000 monthly visitors",
        features: [
            "✅ Limited Reports",
            "✅ Unlimited Internet Speed",
            "✅ 24/7 Support",
            "❌ Notification on end of month",
            "❌ No emails notifications",
        ],
        description: "Perfect for individuals or small teams just starting out. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        title: "Basic",
        weekly_price: "19",
        monthly_price: "39",
        yearly_price: "199",
        monthlyVisitors: "3,000 monthly visitors",
        features: [
            "✅ Limited Reports",
            "✅ Unlimited Internet Speed",
            "✅ 24/7 Support",
            "❌ Notification on end of month",
            "❌ No emails notifications",
        ],
        description: "Perfect for individuals or small teams just starting out. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const Packages = () => {
    return (
        <div className="bg-red-700 pt-20">
            <div className="text-center text-white mb-16">
                <h1 className="text-5xl font-bold mb-8">Our Packages</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Choose the perfect plan that fits your needs. Whether you're just
                    starting or need high-end services, we have the right plan for you.
                </p>
            </div>

            <div className="grid bg-neutral-900 text-white grid-cols-1 sm:grid-cols-2 px-4 sm:px-6 lg:px-8">
                {packages.map((pkg, index) => (
                    <div
                        key={pkg.title}
                        className={`bg-neutral-900 ${index % 2 === 0 ? 'border-b-1 sm:border-r-1 sm:border-b-0' : ''}  border-slate-500 p-6 pt-10`}
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-semibold mb-2 text-slate-400">{pkg.title}</h2>
                            <div className="w-full items-center justify-center flex">
                                <p className="text-lg font-bold mr-6">
                                    ${pkg.weekly_price} / Weekly

                                </p>
                                <p className="text-lg font-bold mr-6">
                                    ${pkg.monthly_price} / Monthly
                                </p>
                                <p className="text-lg font-bold">
                                    ${pkg.yearly_price} / Yearly
                                </p>
                            </div>
                            <p className="text-sm text-gray-300">{pkg.monthlyVisitors}</p>

                        </div>

                        <div className="text-center mb-6">
                            <p className="text-sm text-gray-300">{pkg.description}</p>
                        </div>

                        <div className="mb-6">
                            {pkg.features.map((feature, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <span className="mr-2">•</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <button
                                className={`py-3 px-18 rounded-sm text-sm font-semibold border-2 border-red-600 hover:bg-red-600 cursor-pointer transition-colors duration-300`}
                            >
                                Try it now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;
