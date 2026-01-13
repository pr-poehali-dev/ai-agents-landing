import { Button } from '@/components/ui/button';

interface HeaderProps {
  scrollToQuiz: () => void;
}

const Header = ({ scrollToQuiz }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">AI Agents</div>
        <nav className="hidden md:flex gap-8">
          <a href="#process" className="text-muted-foreground hover:text-foreground transition">Процесс</a>
          <a href="#cases" className="text-muted-foreground hover:text-foreground transition">Кейсы</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition">FAQ</a>
        </nav>
        <Button onClick={scrollToQuiz} className="gradient-primary border-0 font-semibold">
          Получить аудит
        </Button>
      </div>
    </header>
  );
};

export default Header;
