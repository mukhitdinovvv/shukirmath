import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              🔥 Шектеулі уақыт - 50% жеңілдік
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl tracking-tight">
                Математиканы
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> сенімділікпен</span> игеріңіз
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Қарапайым алгебрадан кешенді математикалық талдауға дейін. Біздің толық онлайн курспен математикалық дағдыларын жетілдірген мыңдаған студенттерге қосылыңыз.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Бүгін үйренуді бастаңыз
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Тегін алдын ала көруді қараңыз
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-sm text-muted-foreground">12,000+ студенттен 4.9/5</span>
              </div>
              <div className="text-sm text-muted-foreground">
                💎 Өмір бойы қатынау қосылған
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"
                alt="Математика үйренетін студент"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}