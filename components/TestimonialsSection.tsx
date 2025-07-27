import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Айнұр Нұрғалиева",
    role: "Орта мектеп оқушысы",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b7ad?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    content: "Мен алгебрадан 2-ге оқып жүргенмен, енді математикалық талдаудан А+ алдым! Сейтхожин ұстаздың оқыту әдісі маған барлығын түсіндірді. Қадамдық түсіндірулер керемет."
  },
  {
    name: "Дәурен Сериков", 
    role: "Колледж студенті",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    content: "Бұл курс менің инженерлік дипломымды сақтап қалды. Мен математикалық талдау мен статистикадан қиналып жүрдім, бірақ интерактивті жаттығулар мен анық түсініктемелер екі пәнді де игеруге көмектесті."
  },
  {
    name: "Әсем Қасымова",
    role: "Ересек оқушы",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", 
    rating: 5,
    content: "10 жылдан кейін мектепке оралатын адам ретінде математикадан қорқып тұрдым. Бұл курс менің сенімімді қалпына келтіріп, мейірбике бағдарламасы үшін қажет дағдыларды берді."
  },
  {
    name: "Марат Төлеуов",
    role: "Ата-ана",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    content: "Қызым математикадан үрейленіп жүрді. Осы курсты аяқтағаннан кейін ол тек бағасын жақсартып қана қоймай, математиканы ұнатады да. Әр теңгесіне тұрарлық!"
  },
  {
    name: "Гүлнар Сәбитова",
    role: "Мұғалім",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    content: "Мен өзім математика мұғалімімін, және осы курсты қиналып жүрген оқушыларыма ұсынамын. Сейтхожин ұстаздың тәсілі керемет - ол күрделі ұғымдарды бәрі үшін қолжетімді етеді."
  },
  {
    name: "Алексей Кумаров",
    role: "Бағдарламашы",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    content: "Машиналық үйрену үшін статистиканы қайталауым керек болды. Бұл курс керемет болды - кешенді бірақ практикалық. Нақты өмірдегі қолданулар барлығын тиісті етті."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Біздің студенттеріміз не дейді
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Математикамен қарым-қатынасын өзгерткен мыңдаған табысты студенттерге қосылыңыз.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center items-center gap-6 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <div className="text-sm">Орташа бағасы 4.9/5</div>
            </div>
            <div className="text-center">
              <div className="text-2xl">👥</div>
              <div className="text-sm">12,000+ бақытты студент</div>
            </div>
            <div className="text-center">
              <div className="text-2xl">🎓</div>
              <div className="text-sm">95% табыс деңгейі</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}