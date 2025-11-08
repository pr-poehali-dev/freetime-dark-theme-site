import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [nickname, setNickname] = useState("");
  const [tokenCount, setTokenCount] = useState(1);

  const privileges = [
    { id: 1, name: "Барон", price: 0, color: "text-gray-400", features: ["Базовые возможности"] },
    { id: 2, name: "Страж", price: 0, color: "text-gray-300", features: ["Базовые возможности"] },
    { id: 3, name: "Герой", price: 0, color: "text-gray-200", features: ["Базовые возможности"] },
    { id: 4, name: "Аспид", price: 0, color: "text-gray-100", features: ["Базовые возможности"] },
    { id: 5, name: "Сквид", price: 9, color: "text-blue-400", features: ["Расширенные возможности", "Доступ к эксклюзивному контенту"] },
    { id: 6, name: "Глава", price: 17, color: "text-cyan-400", features: ["Премиум возможности", "Приоритетная поддержка"] },
    { id: 7, name: "Элита", price: 49, color: "text-purple-400", features: ["VIP статус", "Уникальные привилегии"] },
    { id: 8, name: "Титан", price: 79, color: "text-indigo-400", features: ["Элитные возможности", "Эксклюзивные награды"] },
    { id: 9, name: "Принц", price: 129, color: "text-pink-400", features: ["Королевские привилегии", "Особый статус"] },
    { id: 10, name: "Князь", price: 249, color: "text-yellow-400", features: ["Княжеские привилегии", "Максимальные бонусы"] },
    { id: 11, name: "Герцог", price: 499, color: "text-orange-400", features: ["Герцогские привилегии", "Все возможности"] },
    { id: 12, name: "Спонсор", price: 850, color: "text-red-400", features: ["Спонсорские привилегии", "Уникальные возможности"] },
    { id: 13, name: "Мажор", price: 1250, color: "text-amber-400", features: ["Максимальные привилегии", "Эксклюзивный доступ"] },
  ];

  const customPrivilege = {
    name: "Стажер",
    price: 0,
    color: "text-green-400",
    features: [
      "Кастомная привилегия модератора",
      "Вызвать игрока на проверку: /revise start (ник) Discord - AnyDesk 5",
      "Забанить игрока: /tempban (строго по правилам)",
      "Замутить игрока: /tempmute (строго по правилам)"
    ]
  };

  const sponsors = [
    { name: "Lololoshka", rating: 5 },
    { name: "FixPlay", rating: 5 },
    { name: "Смотрящий", rating: 5 }
  ];

  const generateReviews = () => {
    const reviewNames = ["Игрок123", "Steve", "Alex", "Herobrine", "Notch", "Dream", "TommyInnit", "Technoblade", "Wilbur", "GeorgeNotFound", 
                         "Sapnap", "BadBoyHalo", "Skeppy", "A6d", "Fundy", "Tubbo", "Ranboo", "Philza", "Niki", "Eret",
                         "CaptainSparklez", "DanTDM", "PopularMMOs", "SSundee", "PrestonPlayz", "UnspeakableGaming", "MrBeast",
                         "CrankGameplays", "Markiplier", "Jacksepticeye", "PewDiePie", "Ninja", "Tfue", "Myth", "Pokimane",
                         "Valkyrae", "Sykkuno", "Corpse", "Ludwig", "xQc", "Shroud", "Summit1g", "TimTheTatman", "DrLupo"];
    
    const reviews = [];
    const total = 45;
    
    const threeStars = Math.floor(total * 0.25);
    const fourStars = Math.floor(total * 0.35);
    const fiveStars = total - threeStars - fourStars;
    
    for (let i = 0; i < threeStars; i++) {
      reviews.push({ name: reviewNames[i % reviewNames.length] + i, rating: 3, text: "Хороший сервер, есть над чем работать" });
    }
    for (let i = 0; i < fourStars; i++) {
      reviews.push({ name: reviewNames[(i + threeStars) % reviewNames.length] + (i + threeStars), rating: 4, text: "Отличный сервер! Рекомендую" });
    }
    for (let i = 0; i < fiveStars; i++) {
      reviews.push({ name: reviewNames[(i + threeStars + fourStars) % reviewNames.length] + (i + threeStars + fourStars), rating: 5, text: "Лучший Minecraft сервер! Играю каждый день!" });
    }
    
    return reviews.sort(() => Math.random() - 0.5);
  };

  const reviews = generateReviews();

  const handlePurchase = (product: any) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center gap-4 border-b-4 border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center shadow-lg">
            <Icon name="Box" size={28} className="text-primary-foreground" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary drop-shadow-lg">FreeTime</h1>
        </div>
        <nav className="hidden lg:flex gap-6">
          <a href="#privileges" className="text-foreground/80 hover:text-primary transition-colors font-medium">Привилегии</a>
          <a href="#reviews" className="text-foreground/80 hover:text-primary transition-colors font-medium">Отзывы</a>
          <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors font-medium">Контакты</a>
        </nav>
        <div className="flex gap-2">
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
            <a href="https://t.me/FreeTimeSRV" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={18} className="mr-2" />
              Telegram
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-6xl font-black mb-6 text-primary drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] leading-tight">
              FreeTime Server
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Лучший Minecraft сервер с уникальными привилегиями и активным сообществом
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <Card className="bg-card border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">IP адрес</p>
                <p className="text-lg font-bold text-foreground">Скоро</p>
              </Card>
              <Card className="bg-card border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">Discord</p>
                <p className="text-lg font-bold text-foreground">Скоро</p>
              </Card>
              <Card className="bg-card border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">Версия</p>
                <p className="text-lg font-bold text-foreground">1.16+</p>
              </Card>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6" asChild>
              <a href="https://t.me/FreeTimeRazdathi_bot" target="_blank" rel="noopener noreferrer">
                <Icon name="Bot" size={20} className="mr-2" />
                Бот с пасхалками
              </a>
            </Button>
          </div>
        </section>

        <section id="privileges" className="container mx-auto px-4 py-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">Привилегии</h3>
          
          <div className="mb-12 max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-500/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-secondary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-green-400">Стажер</h4>
                <span className="ml-auto text-xl font-bold text-green-400">Особая</span>
              </div>
              <ul className="space-y-2 mb-4">
                {customPrivilege.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Icon name="CheckCircle2" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic">* Кастомная привилегия модератора</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {privileges.map((privilege) => (
              <Card 
                key={privilege.id}
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-xl font-bold ${privilege.color}`}>{privilege.name}</h4>
                    <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center">
                      <Icon name="Crown" size={20} className={privilege.color} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold mb-4">
                    {privilege.price === 0 ? (
                      <span className="text-secondary">Бесплатно</span>
                    ) : (
                      <>
                        <span className={privilege.color}>{privilege.price}</span>
                        <span className="text-sm text-muted-foreground"> руб</span>
                      </>
                    )}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {privilege.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {privilege.price > 0 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          onClick={() => handlePurchase(privilege)}
                        >
                          Купить
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-card">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Покупка: {privilege.name}</DialogTitle>
                          <DialogDescription>
                            Цена: {privilege.price} руб
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="nickname">Ваш игровой ник</Label>
                            <Input 
                              id="nickname" 
                              placeholder="Steve" 
                              value={nickname}
                              onChange={(e) => setNickname(e.target.value)}
                              className="bg-muted border-border"
                            />
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Способы оплаты:</p>
                            <div className="space-y-2 text-sm">
                              <p className="flex items-center gap-2">
                                <Icon name="Phone" size={16} className="text-primary" />
                                <span>По номеру: <span className="font-mono text-primary">+7 950 012 9298</span></span>
                              </p>
                              <p className="flex items-center gap-2">
                                <Icon name="Send" size={16} className="text-secondary" />
                                <span>Telegram Stars: <a href="https://t.me/FreeTimeOfical" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">@FreeTimeOfical</a></span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <p className="text-xs text-muted-foreground text-center w-full">
                            После оплаты свяжитесь с нами для активации привилегии
                          </p>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-sm flex items-center justify-center">
                  <Icon name="Package" size={24} className="text-amber-400" />
                </div>
                <h4 className="text-xl font-bold">Токен Кейс</h4>
              </div>
              <p className="text-2xl font-bold mb-4">
                <span className="text-amber-400">10</span>
                <span className="text-sm text-muted-foreground"> руб/шт</span>
              </p>
              <div className="mb-4">
                <Label htmlFor="tokenCount">Количество кейсов (1-50)</Label>
                <Input 
                  id="tokenCount" 
                  type="number" 
                  min="1" 
                  max="50" 
                  value={tokenCount}
                  onChange={(e) => setTokenCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="bg-muted border-border"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Итого: {tokenCount * 10} руб
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Купить кейсы
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card">
                  <DialogHeader>
                    <DialogTitle>Покупка: Токен Кейсы</DialogTitle>
                    <DialogDescription>
                      Количество: {tokenCount} шт | Цена: {tokenCount * 10} руб
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nickname-tokens">Ваш игровой ник</Label>
                      <Input 
                        id="nickname-tokens" 
                        placeholder="Steve" 
                        className="bg-muted border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Способы оплаты:</p>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                          <Icon name="Phone" size={16} className="text-primary" />
                          <span>По номеру: <span className="font-mono text-primary">+7 950 012 9298</span></span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Icon name="Send" size={16} className="text-secondary" />
                          <span>Telegram Stars: <a href="https://t.me/FreeTimeOfical" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">@FreeTimeOfical</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-sm flex items-center justify-center">
                  <Icon name="Coins" size={24} className="text-yellow-400" />
                </div>
                <h4 className="text-xl font-bold">2000 Токенов</h4>
              </div>
              <p className="text-2xl font-bold mb-4">
                <span className="text-yellow-400">1</span>
                <span className="text-sm text-muted-foreground"> руб</span>
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Получите 2000 внутриигровых токенов
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    Купить токены
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card">
                  <DialogHeader>
                    <DialogTitle>Покупка: 2000 Токенов</DialogTitle>
                    <DialogDescription>Цена: 1 руб</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nickname-2000">Ваш игровой ник</Label>
                      <Input 
                        id="nickname-2000" 
                        placeholder="Steve" 
                        className="bg-muted border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Способы оплаты:</p>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                          <Icon name="Phone" size={16} className="text-primary" />
                          <span>По номеру: <span className="font-mono text-primary">+7 950 012 9298</span></span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Icon name="Send" size={16} className="text-secondary" />
                          <span>Telegram Stars: <a href="https://t.me/FreeTimeOfical" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">@FreeTimeOfical</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">Спонсоры сервера</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor, idx) => (
              <Card key={idx} className="bg-card border-border p-8 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={40} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{sponsor.name}</h4>
                <div className="flex justify-center gap-1">
                  {[...Array(sponsor.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="reviews" className="container mx-auto px-4 py-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center">Отзывы игроков</h3>
          <p className="text-center text-muted-foreground mb-12">Более 45 отзывов от наших игроков</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.slice(0, 12).map((review, idx) => (
              <Card key={idx} className="bg-card border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="contacts" className="container mx-auto px-4 py-16 bg-muted/30">
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">Контакты и информация</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-card border-border p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                Поддержка
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Send" size={18} className="text-secondary" />
                  Telegram: <a href="https://t.me/FreeTimeOfical" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">@FreeTimeOfical</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-blue-400" />
                  VK: <a href="https://vk.com/minercasoft" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">vk.com/minercasoft</a>
                </p>
              </div>
            </Card>

            <Card className="bg-card border-border p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Users" size={24} className="text-primary" />
                Команда сервера
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Создатели:</p>
                  <p className="text-muted-foreground">minercasoft, umQKokiq, Lololoshka</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Кодеры (создание, скачивание, покупка плагинов):</p>
                  <p className="text-muted-foreground">minercasoft, umQKoKiq</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Кодер сайта:</p>
                  <p className="text-muted-foreground">Юра (AI ассистент)</p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                <a href="https://t.me/FreeTimeSRV" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Присоединиться к каналу
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-12 border-t-4 border-primary/20 mt-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <Icon name="Box" size={24} className="text-primary-foreground" />
            </div>
            <h4 className="text-2xl font-bold text-primary">FreeTime</h4>
          </div>
          <p className="text-muted-foreground mb-4">Лучший Minecraft сервер с уникальными возможностями</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <a href="https://t.me/FreeTimeSRV" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://t.me/FreeTimeRazdathi_bot" target="_blank" rel="noopener noreferrer">
                <Icon name="Bot" size={16} className="mr-2" />
                Бот
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2024 FreeTime Server. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
