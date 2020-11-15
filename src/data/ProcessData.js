import React from "react"
import { FaSmileBeam, FaPaperPlane } from "react-icons/fa"
import { AiFillCheckCircle } from "react-icons/ai"
import { RiVipCrown2Fill } from "react-icons/ri"

export const ProcessData = [
    {
        icon: (
        <FaPaperPlane
            css={`
            color: #cc9999;
            `}
        />
        ),
        title: "Planning",
        desc: "Booking should be stress-free. Research takes precious time, and planning a vacation can become overwhelming. That’s where a trusted advisor comes in. Whether you’re looking to check the Great Wall of China off your bucket list or stroll the cobblestone streets of Saint Germain, I will work with you on a service-based approach toward a completely personalized getaway.",
    },
    {
        icon: (
        <FaSmileBeam
            css={`
            color: #cc9999;
            `}
        />
        ),
        title: "Personalized Itinerary",
        desc: "I want to get to know you in a way that allows me to match you to the perfect destination. Once you paint the picture and we discuss all the possibilities, only then do you begin paying for the service. Services start at $100 per trip. We will work together to turn that idle wanderlust into a fully crafted itinerary while collaborating with top travel partners around the globe like hoteliers, tour operators and luxury cruise lines.",
    },
    {
        icon: (
        <AiFillCheckCircle
            css={`
            color: #cc9999;
            `}
        />
        ),
        title: "Full Support",
        desc: "You will review a final proposal of travel plans, from bookings and logistics to recommendations in the area. From there, you’ll provide feedback and after all your boxes are checked, the reservations can begin! Once confirmed, I provide all the necessary travel documents covering your unforgettable escape, so you can sit back and enjoy the anticipation that comes along with a fully booked vacation.",
    },
    {
        icon: (
        <RiVipCrown2Fill
            css={`
            color: #cc9999;
            `}
        />
        ),
        title: "VIP treatment",
        desc: "Before departure, during travel and as you settle back home, I will serve as your advocate every step of the way. This means connecting with the suppliers on the ground to make sure your stay is extra special and VIP while adding value wherever possible and helping you navigate any unforeseen challenges.",
    },
    ]
