import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface MainSectionsProps {
  scrollToQuiz: () => void;
}

const MainSections = ({ scrollToQuiz }: MainSectionsProps) => {
  return (
    <>
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Как работает ИИ-агент</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">От запроса клиента до интеграции с вашими системами</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'MessageSquare', title: 'Канал связи', desc: 'Сайт, Telegram, WhatsApp, Instagram, Email' },
              { icon: 'Bot', title: 'ИИ-Агент', desc: 'Обрабатывает запрос, отвечает, квалифицирует' },
              { icon: 'Database', title: 'Ваши системы', desc: 'CRM, таблицы, задачи, уведомления' },
              { icon: 'Users', title: 'Менеджер', desc: 'Получает готовых клиентов и данные' }
            ].map((step, i) => (
              <Card key={i} className="relative hover-scale bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <Icon name={step.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">{step.desc}</CardDescription>
                </CardHeader>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <Icon name="ArrowRight" size={24} className="text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Проблемы бизнеса</h2>
              <div className="space-y-4">
                {[
                  'Менеджеры не успевают отвечать',
                  'Лиды теряются в чатах',
                  'Хаос в CRM и таблицах',
                  'Качество обработки скачет'
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10">
                    <Icon name="X" size={20} className="text-destructive mt-1" />
                    <span className="text-lg">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Решение</h2>
              <div className="space-y-4">
                {[
                  'Агент закрывает 60-80% рутины',
                  'Квалификация и запись автоматом',
                  'Все данные в систему без задержек',
                  'Единые скрипты и контроль качества'
                ].map((solution, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-primary/10">
                    <Icon name="Check" size={20} className="text-primary mt-1" />
                    <span className="text-lg">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Продукты и пакеты</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">Выберите решение под вашу задачу</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Быстрый агент',
                price: 'от 150 000 ₽',
                time: '1-2 недели',
                desc: 'FAQ, консультации, лидогенерация',
                features: ['Ответы на типовые вопросы', 'Сбор контактов', 'Интеграция с 1 каналом', 'База знаний до 50 блоков']
              },
              {
                title: 'Агент-продавец',
                price: 'от 300 000 ₽',
                time: '2-3 недели',
                desc: 'Скрипты продаж, возражения, запись',
                features: ['Квалификация лидов', 'Работа с возражениями', 'Запись на встречи/звонки', 'Интеграция с CRM', 'Скрипты продаж'],
                highlight: true
              },
              {
                title: 'Агент-оператор',
                price: 'от 500 000 ₽',
                time: '3-4 недели',
                desc: 'CRM, статусы, задачи, отчеты',
                features: ['Обновление статусов', 'Создание задач', 'Уведомления клиентам', 'Формирование отчетов', 'Полная автоматизация']
              }
            ].map((product, i) => (
              <Card key={i} className={`hover-scale ${product.highlight ? 'border-primary border-2 relative' : ''}`}>
                {product.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-primary rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-lg">{product.desc}</CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold gradient-text">{product.price}</div>
                    <div className="text-sm text-muted-foreground mt-1">{product.time}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToQuiz} className="w-full gradient-primary border-0 font-semibold">
                    Запросить цену
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Интеграции</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Bitrix24', icon: 'Building2' },
              { name: 'amoCRM', icon: 'LineChart' },
              { name: 'Google Sheets', icon: 'Sheet' },
              { name: 'Telegram', icon: 'Send' },
              { name: 'WhatsApp', icon: 'MessageCircle' },
              { name: 'Instagram', icon: 'Instagram' },
              { name: 'API/Webhooks', icon: 'Webhook' },
              { name: 'Email', icon: 'Mail' }
            ].map((integration, i) => (
              <Card key={i} className="hover-scale text-center bg-card/80 backdrop-blur">
                <CardContent className="pt-6 pb-6">
                  <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-3">
                    <Icon name={integration.icon as any} size={32} className="text-white" />
                  </div>
                  <p className="font-semibold">{integration.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-xl text-muted-foreground mt-8">Подключаем под ваш стек технологий</p>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Кейсы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Медицинская клиника',
                before: 'Администраторы перегружены звонками',
                solution: 'Агент принимает заявки через сайт и Instagram',
                results: ['Ответ за 30 сек', '+45% записей', '70% запросов закрывает сам']
              },
              {
                industry: 'E-commerce маркетплейс',
                before: 'Клиенты теряются в вопросах о статусе',
                solution: 'Агент интегрирован с Битрикс24 и WB API',
                results: ['Автоответ 24/7', '-60% нагрузки на поддержку', '4.8/5 оценка клиентов']
              },
              {
                industry: 'B2B SaaS продукт',
                before: 'Долгая квалификация входящих лидов',
                solution: 'Агент собирает данные и записывает на демо',
                results: ['+80% скорость обработки', '55% конверсия в запись', 'Экономия 20 часов/неделя']
              }
            ].map((caseItem, i) => (
              <Card key={i} className="hover-scale">
                <CardHeader>
                  <div className="text-sm font-semibold text-primary mb-2">{caseItem.industry}</div>
                  <CardTitle className="text-xl mb-4">Было</CardTitle>
                  <p className="text-muted-foreground">{caseItem.before}</p>
                  <CardTitle className="text-xl mt-4 mb-4">Сделали</CardTitle>
                  <p className="text-muted-foreground">{caseItem.solution}</p>
                  <CardTitle className="text-xl mt-4 mb-4 gradient-text">Результат</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {caseItem.results.map((result, j) => (
                      <div key={j} className="flex items-center gap-2 p-3 rounded-lg bg-primary/10">
                        <Icon name="TrendingUp" size={18} className="text-primary" />
                        <span className="font-semibold">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Как работаем</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Интервью + аудит процессов', desc: 'Изучаем ваш бизнес, скрипты, точки контакта с клиентами' },
              { step: '2', title: 'Проектирование сценариев', desc: 'Рисуем схемы диалогов, логику обработки запросов' },
              { step: '3', title: 'База знаний и скрипты', desc: 'Наполняем агента информацией, обучаем на ваших данных' },
              { step: '4', title: 'Интеграции и тесты', desc: 'Подключаем к CRM, мессенджерам, тестируем все сценарии' },
              { step: '5', title: 'Запуск и контроль качества', desc: 'Выпускаем в продакшн, 2-4 недели мониторим и дорабатываем' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 rounded-xl bg-card hover-scale">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Это заменит менеджеров?',
                a: 'Нет, агент берет на себя рутину и первичную обработку. Менеджеры работают только с теплыми готовыми лидами.'
              },
              {
                q: 'Как контролировать ответы агента?',
                a: 'У вас есть дашборд со всеми диалогами, метриками, возможностью вмешаться в разговор и настроить скрипты.'
              },
              {
                q: 'Сколько времени занимает внедрение?',
                a: 'От 1 до 4 недель в зависимости от сложности. Быстрый агент — 1-2 недели, полноценный агент-оператор — до месяца.'
              },
              {
                q: 'Что по безопасности данных?',
                a: 'Все данные шифруются, храним на территории РФ, подписываем NDA. Можем развернуть на вашей инфраструктуре.'
              },
              {
                q: 'Можно ли на вашем хостинге или нашем?',
                a: 'Оба варианта возможны. На нашем хостинге — быстрее и дешевле. На вашем — полный контроль и соответствие внутренним политикам.'
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Получить бесплатный разбор под ваш бизнес</h2>
          <p className="text-xl text-muted-foreground mb-8">Покажем демо, оценим эффект, составим план внедрения</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToQuiz} size="lg" className="gradient-primary border-0 text-lg font-semibold hover-scale">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Заполнить квиз
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold hover-scale" asChild>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold hover-scale" asChild>
              <a href="https://wa.me/79999999999" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">AI Agents</div>
              <p className="text-muted-foreground">Проектирование и внедрение ИИ-агентов для бизнеса</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Telegram: @yourusername</p>
                <p>Email: hello@aiagents.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition">Политика конфиденциальности</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition">Согласие на обработку данных</a>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground">
            © 2024 AI Agents. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainSections;
