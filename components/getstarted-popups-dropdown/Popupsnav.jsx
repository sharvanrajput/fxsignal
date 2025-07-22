import React from 'react'
import React from 'react';
import { Monitor, TrendingUp, Handshake, User } from 'lucide-react';
const Popupsnav = () => {
    const roles = [
        {
            icon: Monitor,
            title: "Join as an",
            subtitle: "Author"
        },
        {
            icon: TrendingUp,
            title: "Join as a Signal",
            subtitle: "Manager"
        },
        {
            icon: Handshake,
            title: "Join as a",
            subtitle: "Partner"
        },
        {
            icon: User,
            title: "Join as a",
            subtitle: "User"
        }
    ];
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roles.map((role, index) => {
                        const IconComponent = role.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-yellow-400 hover:shadow-md transition-all duration-300 cursor-pointer group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-heading-c1 to-heading-c2 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                                    <IconComponent className="w-8 h-8 text-light-yellow" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-700 font-medium text-sm">
                                        {role.title}
                                    </p>
                                    <p className="text-gray-900 font-semibold text-lg">
                                        {role.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popupsnav
