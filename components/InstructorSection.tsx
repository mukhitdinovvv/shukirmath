import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InstructorSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Сіздің дәстүршіңізбен танысыңыз
            </h2>
            <p className="text-xl text-muted-foreground">
              Дәлелденген педагогикалық озат дәстүрі бар әлемдік деңгейдегі математиктен үйреніңіз
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Ұстаз Мұхтар Сейтхожин - Математика дәстүршісі"
                className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-2">Ұстаз Мұхтар Сейтхожин</h3>
                <p className="text-muted-foreground text-lg">Математика ғылымдарының докторы • ҚазҰУ түлегі</p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">15+ жыл педагогикалық тәжірибе</Badge>
                  <Badge variant="secondary">50,000+ оқыған студент</Badge>
                  <Badge variant="secondary">Математика ғылымдарының докторы</Badge>
                </div>

                <p className="text-muted-foreground">
                  Ұстаз Сейтхожин өз мансабын барлық деңгейдегі студенттер үшін математиканы қолжетімді және қызықты ету үшін арнады. 
                  Оның инновациялық оқыту әдістері мыңдаған студенттерге математикалық үрейді жеңуге және академиялық табысқа жетуге көмектесті.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500">🎓</span>
                    <span>ҚазҰУ-дан таза математика ғылымдарының докторы</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">🏆</span>
                    <span>Озат педагогикалық қызмет үшін сыйлық иегері</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-500">📚</span>
                    <span>"Жеңілдетілген математика" оқулықтар сериясының авторы</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500">⭐</span>
                    <span>Барлық курстардан студенттердің орташа бағасы 4.9/5</span>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-muted-foreground">
                "Математика - бұл формулаларды жаттау емес, бұл үлгілерді түсіну және логикалық ойлауды дамыту. 
                Менің мақсатым - әрбір студентке математикалық пайымдаудың сұлулығы мен күшін ашуға көмектесу."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}