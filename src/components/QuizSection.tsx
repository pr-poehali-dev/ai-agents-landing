import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';

const QuizSection = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizData, setQuizData] = useState({
    purpose: '',
    channels: '',
    crm: '',
    volume: '',
    name: '',
    contact: ''
  });

  const handleQuizSubmit = () => {
    if (!quizData.name || !quizData.contact) {
      toast.error('Заполните контактные данные');
      return;
    }
    toast.success('Спасибо! Вышлем концепт и оценку в течение 24 часов');
    setQuizStep(0);
    setQuizData({ purpose: '', channels: '', crm: '', volume: '', name: '', contact: '' });
  };

  return (
    <section id="quiz" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Получить концепт и оценку</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">Ответьте на 4 вопроса — вышлем разбор под ваш бизнес</p>
        <Card className="bg-card/80 backdrop-blur">
          <CardContent className="pt-6">
            {quizStep === 0 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Где нужен агент?</Label>
                <RadioGroup value={quizData.purpose} onValueChange={(v) => setQuizData({ ...quizData, purpose: v })}>
                  {['Продажи', 'Поддержка клиентов', 'Операции и автоматизация'].map(opt => (
                    <div key={opt} className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value={opt} id={opt} />
                      <Label htmlFor={opt} className="cursor-pointer flex-1">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <Button onClick={() => quizData.purpose && setQuizStep(1)} disabled={!quizData.purpose} className="w-full gradient-primary border-0 font-semibold mt-6">
                  Далее
                </Button>
              </div>
            )}
            {quizStep === 1 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Какие каналы?</Label>
                <RadioGroup value={quizData.channels} onValueChange={(v) => setQuizData({ ...quizData, channels: v })}>
                  {['Сайт', 'Мессенджеры (Telegram, WhatsApp)', 'Instagram', 'Несколько каналов'].map(opt => (
                    <div key={opt} className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value={opt} id={opt} />
                      <Label htmlFor={opt} className="cursor-pointer flex-1">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex gap-4 mt-6">
                  <Button onClick={() => setQuizStep(0)} variant="outline" className="flex-1">Назад</Button>
                  <Button onClick={() => quizData.channels && setQuizStep(2)} disabled={!quizData.channels} className="flex-1 gradient-primary border-0 font-semibold">
                    Далее
                  </Button>
                </div>
              </div>
            )}
            {quizStep === 2 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">CRM есть?</Label>
                <RadioGroup value={quizData.crm} onValueChange={(v) => setQuizData({ ...quizData, crm: v })}>
                  {['Bitrix24', 'amoCRM', 'Google Sheets', 'Нет системы'].map(opt => (
                    <div key={opt} className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value={opt} id={opt} />
                      <Label htmlFor={opt} className="cursor-pointer flex-1">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex gap-4 mt-6">
                  <Button onClick={() => setQuizStep(1)} variant="outline" className="flex-1">Назад</Button>
                  <Button onClick={() => quizData.crm && setQuizStep(3)} disabled={!quizData.crm} className="flex-1 gradient-primary border-0 font-semibold">
                    Далее
                  </Button>
                </div>
              </div>
            )}
            {quizStep === 3 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Сколько заявок в месяц?</Label>
                <RadioGroup value={quizData.volume} onValueChange={(v) => setQuizData({ ...quizData, volume: v })}>
                  {['До 100', '100-500', '500-1000', 'Более 1000'].map(opt => (
                    <div key={opt} className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value={opt} id={opt} />
                      <Label htmlFor={opt} className="cursor-pointer flex-1">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex gap-4 mt-6">
                  <Button onClick={() => setQuizStep(2)} variant="outline" className="flex-1">Назад</Button>
                  <Button onClick={() => quizData.volume && setQuizStep(4)} disabled={!quizData.volume} className="flex-1 gradient-primary border-0 font-semibold">
                    Далее
                  </Button>
                </div>
              </div>
            )}
            {quizStep === 4 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Ваши контакты</Label>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name" 
                      value={quizData.name} 
                      onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                      placeholder="Как к вам обращаться?"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Telegram или телефон</Label>
                    <Input 
                      id="contact" 
                      value={quizData.contact} 
                      onChange={(e) => setQuizData({ ...quizData, contact: e.target.value })}
                      placeholder="@username или +7..."
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button onClick={() => setQuizStep(3)} variant="outline" className="flex-1">Назад</Button>
                  <Button onClick={handleQuizSubmit} className="flex-1 gradient-primary border-0 font-semibold">
                    Получить концепт
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;
