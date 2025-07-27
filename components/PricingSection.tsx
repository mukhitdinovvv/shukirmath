import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const plans = [
  {
    name: "Негізгі курс",
    price: "48,500 ₸",
    originalPrice: "98,500 ₸",
    description: "Математика саясахатын бастайтын жаңадан келгендерге тамаша",
    features: [
      "Математиканың негіздері модулі",
      "24 бейне сабақ",
      "Практикалық жаттығулар",
      "Негізгі қолдау",
      "30 күндік қатынау",
      "Аяқтау сертификаты"
    ],
    highlighted: false
  },
  {
    name: "Толық курс",
    price: "98,500 ₸",
    originalPrice: "198,500 ₸", 
    description: "Кешенді оқыту үшін ең танымал таңдау",
    features: [
      "Барлық 6 модуль қосылған",
      "198+ бейне сабақ",
      "Интерактивті жаттығулар мен тест сұрақтары",
      "Басымды қолдау",
      "Өмір бойы қатынау",
      "Аяқтау сертификаты",
      "Бонус: Математика шпаргалкалары",
      "Бонус: Есептерді шешу нұсқаулығы"
    ],
    highlighted: true
  },
  {
    name: "Премиум курс",
    price: "148,500 ₸",
    originalPrice: "298,500 ₸",
    description: "Жекелендірілген бағыт-бағдар алғысы келетін ауызжаулар студенттер үшін",
    features: [
      "Толық курстағы барлық нәрсе",
      "Жеке дәстүрлеу сеанстары (4 сағат)",
      "Жекелендірілген оқу жоспары",
      "Дәстүршіге тікелей қол жеткізу",
      "Үй тапсырмаларына көмек және кері байланыс",
      "Емтихандарға дайындық материалдары",
      "STEM саласында мансаптық кеңес",
      "Жабық қауымдастыққа қол жеткізу"
    ],
    highlighted: false
  }
];

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Сіздің оқу жолыңызды таңдаңыз
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Сіздің бюджетіңіз бен оқу мақсаттарыңызға сай икемді баға опциялары. Барлық жоспарларға біздің 30 күндік ақшаны қайтару кепілдігі кіреді.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 p-3 bg-red-50 rounded-lg">
            <span className="text-red-500">🔥</span>
            <span className="text-red-700">Шектеулі уақыт: барлық жоспарлардан 50% жеңілдік! Ұсыныс жақында аяқталады.</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.highlighted ? 'border-blue-500 shadow-xl scale-105' : ''}`}>
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  Ең танымал
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                
                <div className="space-y-2 pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl">{plan.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Бір реттік төлем</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                  size="lg"
                >
                  Қазір бастау
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  💳 30 күндік ақшаны қайтару кепілдігі
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            🔒 Қауіпсіз төлем • 💎 Лезде қол жеткізу • 📱 Мобильге ыңғайлы
          </p>
          <p className="text-sm text-muted-foreground">
            Таңдауда көмек керек пе? <Button variant="link" className="p-0 h-auto">Біздің командаға хабарласыңыз</Button> жекелендірілген ұсыныстар алу үшін.
          </p>
        </div>
      </div>
    </section>
  );
}