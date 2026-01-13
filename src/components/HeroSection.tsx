import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToQuiz: () => void;
  scrollToCases: () => void;
}

const HeroSection = ({ scrollToQuiz, scrollToCases }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20 pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ИИ-агенты, которые <span className="gradient-text">реально работают</span> в бизнесе
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Проектируем, обучаем, подключаем к вашим системам и доводим до результата
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={scrollToQuiz} size="lg" className="gradient-primary border-0 text-lg font-semibold hover-scale">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Получить аудит
            </Button>
            <Button onClick={scrollToCases} size="lg" variant="outline" className="text-lg font-semibold hover-scale">
              <Icon name="Eye" className="mr-2" size={20} />
              Посмотреть примеры
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { icon: 'Zap', text: 'Быстро внедряем' },
              { icon: 'Target', text: 'Качество контроля' },
              { icon: 'Plug', text: 'Любые интеграции' },
              { icon: 'Shield', text: 'Безопасность' },
              { icon: 'TrendingUp', text: 'Рост конверсии' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 hover-scale">
                <Icon name={item.icon as any} size={24} className="text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
