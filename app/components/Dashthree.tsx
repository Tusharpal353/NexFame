import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";
import samayraina from "@/app/[lib]/images/samay raina.jpg"
import raftar from "@/app/[lib]/images/raftar.jpg"
import rebel from "@/app/[lib]/images/rebel id.jpg"
import king from "@/app/[lib]/images/king.jpg"
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src:"https://drive.google.com/file/d/12qZ1sAOq0pbWNil0KLO1VIJpZZW7DE4H/view?usp=sharing",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
       src:"https://images.unsplash.com/photo-1734004902532-be79323e70cd?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
       src:"https://images.unsplash.com/photo-1734377957372-db8a4d696182?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
       src:"https://images.unsplash.com/photo-1735034191685-c7b04a6fcb4f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
       src:"https://plus.unsplash.com/premium_photo-1736780995479-bc82c2bffa2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials}  />;
}
