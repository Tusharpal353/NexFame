
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-[#0A0A0A] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <h1
      className="text-white font-bold text-6xl m-8"
      style={{
        textShadow: "0 4px 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
      }}
    >
      Our Client Testimonials
    </h1>
  
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
  </div>
  
  );
}

const testimonials = [
  {
    quote: 
      "This platform has been a game-changer for me. Connecting with brands that align with my content style has never been this easy!",
    name: "Prajakta Koli",
    title: "YouTuber & Content Creator",
    location: "Mumbai, India",
  },
  {
    quote: 
      "We partnered with top influencers through this platform, and the results were beyond our expectations. It’s a must-use for brands looking to grow their reach!",
    name: "Ankit Bhati",
    title: "Co-founder, Ola",
    location: "Bengaluru, India",
  },
  {
    quote: 
      "I love how streamlined the process is. I’ve worked with multiple brands through this platform, and every campaign felt meaningful and professional.",
    name: "Bhuvan Bam",
    title: "Comedian & Content Creator",
    location: "Delhi, India",
  },
  {
    quote: 
      "The platform helped us connect with the right people for our campaigns. It’s an amazing tool for scaling your brand presence with trusted influencers.",
    name: "Vineeta Singh",
    title: "CEO, Sugar Cosmetics",
    location: "Mumbai, India",
  },
  {
    quote: 
      "As an emerging influencer, this platform gave me access to brands like never before. It’s been an incredible journey working with such amazing names.",
    name: "Niharika NM",
    title: "Digital Creator & Influencer",
    location: "Bengaluru, India",
  },
  {
    quote: 
      "The platform is extremely intuitive and connects us with influencers that match our campaigns perfectly. It has made influencer marketing incredibly simple for us.",
    name: "Ghazal Alagh",
    title: "Co-founder, Mamaearth",
    location: "Gurugram, India",
  },
  {
    quote: 
      "This platform bridges the gap between creators and brands effortlessly. I’ve had some of my best collaborations through it!",
    name: "CarryMinati (Ajey Nagar)",
    title: "YouTuber & Streamer",
    location: "Faridabad, India",
  },
  {
    quote: 
      "We scaled our campaign reach by 3x using influencers we found on this platform. It’s the perfect solution for startups looking for targeted marketing.",
    name: "Harshil Mathur",
    title: "CEO, Razorpay",
    location: "Bengaluru, India",
  },
  
];
