import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg">Математика Про</h3>
            <p className="text-sm text-muted-foreground">
              Инновациялық онлайн оқыту тәжірибелері арқылы математика білімін өзгертеміз.
            </p>
            <div className="flex gap-4">
              <span className="text-2xl cursor-pointer hover:opacity-70">📘</span>
              <span className="text-2xl cursor-pointer hover:opacity-70">🐦</span>
              <span className="text-2xl cursor-pointer hover:opacity-70">📸</span>
              <span className="text-2xl cursor-pointer hover:opacity-70">💼</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4>Курстар</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-foreground cursor-pointer">Математиканың негіздері</div>
              <div className="hover:text-foreground cursor-pointer">Алгебра</div>
              <div className="hover:text-foreground cursor-pointer">Геометрия</div>
              <div className="hover:text-foreground cursor-pointer">Статистика</div>
              <div className="hover:text-foreground cursor-pointer">Математикалық талдау</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4>Ресурстар</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-foreground cursor-pointer">Оқу нұсқаулықтары</div>
              <div className="hover:text-foreground cursor-pointer">Практикалық тесттер</div>
              <div className="hover:text-foreground cursor-pointer">Математика калькуляторы</div>
              <div className="hover:text-foreground cursor-pointer">Формулалар анықтамалығы</div>
              <div className="hover:text-foreground cursor-pointer">Студенттер қауымдастығы</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4>Қолдау</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-foreground cursor-pointer">Көмек орталығы</div>
              <div className="hover:text-foreground cursor-pointer">Бізбен байланысыңыз</div>
              <div className="hover:text-foreground cursor-pointer">Техникалық қолдау</div>
              <div className="hover:text-foreground cursor-pointer">Қайтару саясаты</div>
              <div className="hover:text-foreground cursor-pointer">Құпиялылық саясаты</div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Математика Про. Барлық құқықтар қорғалған.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer">Қызмет шарттары</span>
            <span className="hover:text-foreground cursor-pointer">Құпиялылық саясаты</span>
            <span className="hover:text-foreground cursor-pointer">Cookie саясаты</span>
          </div>
        </div>
      </div>
    </footer>
  );
}