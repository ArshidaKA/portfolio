
import { Monitor, Palette, Workflow } from "lucide-react"

const Button = ({ children, variant, className }) => (
  <button className={`px-4 py-2 rounded-full transition-all duration-300 ${className}`}>{children}</button>
)

export default function Page3() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Web development is more than just coding—it's about creating seamless, user-friendly, and dynamic digital experiences. With a passion for clean design and efficient functionality, I specialize in building responsive websites and robust applications that bring ideas to life. From front-end aesthetics to back-end logic, I focus on delivering high-performance solutions that enhance user engagement and drive innovation. Staying updated with the latest technologies, I am committed to crafting web solutions that not only meet industry standards but also exceed expectations.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet.Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Web hosting",
      description:
        "Lorem ipsum dolor sit amet.Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.",
    },
  ]

  return (
    <section className="py-16 px-4" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-[#38393a] text-[#f5d061] mb-4">MY SERVICES</div>
          <h2 className="text-3xl font-bold">My Provided Features</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Decorative dots */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#f5d061]" />
              ))}
            </div>
          </div>

          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                index === 1 ? "bg-[#f5d061] text-[#38393a]" : "bg-[#38393a] shadow-lg hover:shadow-xl"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  index === 1 ? "bg-[#38393a] text-[#f5d061]" : "bg-[#38393a] text-[#f5d061]"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`mb-6 ${index === 1 ? "text-[#38393a]" : "text-gray-600"}`}>{service.description}</p>
              <Button
                variant={index === 1 ? "secondary" : "default"}
                className={`group ${
                  index === 1
                    ? "bg-[#38393a] text-[#f5d061] hover:bg-gray-300"
                    : "bg-[#f5d061] text-[#38393a] hover:bg-yellow-200"
                }`}
              >
                READ MORE
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
