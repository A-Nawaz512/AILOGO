import React from "react";
import { Search, MapPin, Users, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            title: "Select Service",
            description: "Choose from our 6 integrated services",
        },
        {
            icon: MapPin,
            title: "Set Details",
            description: "Enter location and service requirements",
        },
        {
            icon: Users,
            title: "Match & Connect",
            description: "Get matched with nearest provider",
        },
        {
            icon: CheckCircle,
            title: "Track & Complete",
            description: "Real-time tracking and secure completion",
        },
    ];

    return (
        <div className="bg-white py-10 px-4">
            <div className="max-w-5xl mx-auto">
                
                {/* Simple Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">
                        Simple <span style={{ color: "#B78E3B" }}>Process</span>
                    </h2>
                    <p className="text-gray-600">
                        Get any service delivered in 4 easy steps
                    </p>
                </div>

                {/* Clean Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center bg-[#b78e3b10] p-3 rounded-md">
                            {/* Icon with Number */}
                            <div className="relative inline-flex mb-5">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(183, 142, 59, 0.1)" }}>
                                    <step.icon className="w-6 h-6" style={{ color: "#543918" }} />
                                </div>
                                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                                    style={{ backgroundColor: "#B78E3B" }}>
                                    {index + 1}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="font-bold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};