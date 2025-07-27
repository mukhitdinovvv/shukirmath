import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const modules = [
  {
    title: "Математиканың негіздері",
    duration: "4 апта",
    lessons: 24,
    topics: ["Негізгі амалдар", "Бөлшектер мен ондық сандар", "Пайыздар", "Амалдардың реті"]
  },
  {
    title: "Алгебраның негіздері",
    duration: "6 апта", 
    lessons: 36,
    topics: ["Сызықтық теңдеулер", "Квадраттық функциялар", "Көпмүшелер", "Факторлау"]
  },
  {
    title: "Геометрия және тригонометрия",
    duration: "5 апта",
    lessons: 30,
    topics: ["Пішіндер мен бұрыштар", "Пифагор теоремасы", "Тригонометриялық функциялар", "3D геометрия"]
  },
  {
    title: "Статистика және ықтималдық",
    duration: "4 апта",
    lessons: 24,
    topics: ["Деректерді талдау", "Ықтималдық теориясы", "Қалыпты таралу", "Гипотезаларды тексеру"]
  },
  {
    title: "Математикалық талдаудың алдындағы курс",
    duration: "6 апта",
    lessons: 36,
    topics: ["Функциялар", "Логарифмдер", "Тізбектер мен қатарлар", "Шектер"]
  },
  {
    title: "Математикалық талдаудың негіздері",
    duration: "8 апта",
    lessons: 48,
    topics: ["Туындылар", "Интегралдар", "Қолданулар", "Дифференциалдық теңдеулер"]
  }
];

export function CurriculumSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Толық математика оқу бағдарламасы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Негізгі ұғымдардан кешенді математикаға дейінгі құрылымдалған оқу жолы. Әрбір модуль алдыңғысына негізделеді.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{index + 1} модуль</Badge>
                  <Badge>{module.duration}</Badge>
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{module.lessons} сабақ</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <span className="text-2xl">🎓</span>
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Жалпы курс ұзақтығы</div>
              <div className="text-lg">33 апта • 198 сабақ • Сертификат қосылған</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}