import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: "📚",
    title: "Толық оқу бағдарламасы",
    description: "Қарапайым арифметикадан кешенді математикалық талдауға дейін, барлық маңызды математика тақырыптарын жүйелі түрде қамтиды."
  },
  {
    icon: "🎯",
    title: "Интерактивті оқыту",
    description: "Тұжырымдамаларды нығайту үшін практикалық жаттығулар, сынақтар және нақты өмірдегі есептерді шешу."
  },
  {
    icon: "👨‍🏫",
    title: "Сарапшы дәстүр",
    description: "15+ жылдық педагогикалық тәжірибесі бар математика ғылымдарының докторларынан үйреніңіз."
  },
  {
    icon: "📱",
    title: "Кез келген жерде үйреніңіз",
    description: "Кез келген құрылғыда, кез келген уақытта курс материалдарына қатынау. Бос емес кестелерге тамаша."
  },
  {
    icon: "🏆",
    title: "Дәлелденген нәтижелер",
    description: "Студенттердің 95%-ы курсты бастағаннан кейін 30 күннің ішінде математикадан бағаларын жақсартады."
  },
  {
    icon: "🔄",
    title: "Өмір бойы жаңартулар",
    description: "Қосымша ақысыз жаңа мазмұн мен жаңартылған материалдарға өмір бойы қатынау алыңыз."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Неге біздің математика курсын таңдау керек?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Математикада табысқа жету үшін қажет барлық нәрсе, дәлелденген оқыту әдістері мен заманауи технологиялармен қолдау көрсетіледі.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}