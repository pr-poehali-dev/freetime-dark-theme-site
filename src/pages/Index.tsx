import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [nickname, setNickname] = useState("");
  const [tokenCount, setTokenCount] = useState(1);
  const [balanceAmount, setBalanceAmount] = useState(5);

  const privilegesData = [
    {
      id: 1,
      name: "Барон",
      emoji: "🛡️",
      priceForever: 0,
      priceMonth: 0,
      color: "text-gray-400",
      description: "⚕ Префикс в чате и табе: [Барон] ВашНик",
      commands: [
        "› /kit Барон ⇨ Получить набор Барона",
        "› /salary ⇨ Получить зарплату",
        "› /crawl ⇨ Сменить позу: красться"
      ],
      other: [
        "Доступно Точек домов: 2",
        "Регионов (Гриф): 2 по 40,000 блоков",
        "Регионов (Анка): 3 блоков",
        "Слотов на Аукционе: 6",
        "Задержка телепорта: 7 сек"
      ]
    },
    {
      id: 2,
      name: "Страж",
      emoji: "⚔️",
      priceForever: 0,
      priceMonth: 0,
      color: "text-gray-300",
      description: "⚕ Префикс в чате и табе: [Страж] ВашНик",
      commands: [
        "› /kit Страж ⇨ Получить набор Стража",
        "› /suicide ⇨ Покончить жизнь самоубийством",
        "› /dchat ⇨ Воспользоваться Донат-Чатом"
      ],
      other: [
        "Доступно Точек домов: 2",
        "Регионов (Гриф): 2 по 45,000 блоков",
        "Регионов (Анка): 3 блоков",
        "Слотов на Аукционе: 7",
        "Задержка телепорта: 6 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 3,
      name: "Герой",
      emoji: "🏆",
      priceForever: 0,
      priceMonth: 0,
      color: "text-gray-200",
      description: "⚕ Префикс в чате и табе: [Герой] ВашНик",
      commands: [
        "› /kit Герой ⇨ Получить набор Героя",
        "› /top ⇨ Телепортация вверх",
        "› /hat ⇨ Надеть блок на голову"
      ],
      other: [
        "Доступно Точек домов: 2",
        "Регионов (Гриф): 2 по 50,000 блоков",
        "Регионов (Анка): 4 блоков",
        "Слотов на Аукционе: 8",
        "Задержка телепорта: 6 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 4,
      name: "Аспид",
      emoji: "🐍",
      priceForever: 0,
      priceMonth: 0,
      color: "text-gray-100",
      description: "⚕ Префикс в чате и табе: [Аспид] ВашНик",
      commands: [
        "› /kit Аспид ⇨ Получить набор Аспида",
        "› /clear ⇨ Очистить инвентарь",
        "› /feed ⇨ Восстановить голод",
        "› /heal ⇨ Восстановить здоровье",
        "› /me ⇨ Написать в чат Реакции"
      ],
      other: [
        "Доступно Точек домов: 2",
        "Регионов (Гриф): 2 по 60,000 блоков",
        "Регионов (Анка): 4 блоков",
        "Слотов на Аукционе: 9",
        "Задержка телепорта: 6 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 5,
      name: "Сквид",
      emoji: "🦑",
      priceForever: 9,
      priceMonth: 4,
      color: "text-blue-400",
      description: "⚕ Префикс в чате и табе: [Сквид] ВашНик",
      commands: [
        "› /kit Сквид ⇨ Получить набор Сквида",
        "› /back ⇨ Вернуться на место смерти",
        "› /ec ⇨ Открыть Эндер Сундук",
        "› /wbench ⇨ Открыть портативный Верстак",
        "› /ad ⇨ Написать в чат Рекламы",
        "› /buy ⇨ Написать в чат Покупки",
        "› /sell ⇨ Написать в чат Продажи",
        "› /name ⇨ Изменить название предмета"
      ],
      other: [
        "Доступно Точек домов: 3",
        "Регионов (Гриф): 3 по 75,000 блоков",
        "Регионов (Анка): 5 блоков",
        "Слотов на Аукционе: 10",
        "Задержка телепорта: 5 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 6,
      name: "Глава",
      emoji: "👑",
      priceForever: 17,
      priceMonth: 7,
      color: "text-cyan-400",
      description: "⚕ Префикс в чате и табе: [Глава] ВашНик",
      commands: [
        "› /kit Глава ⇨ Получить набор Главы",
        "› /salary ⇨ Получить зарплату",
        "› /bc ⇨ Написать в чат Объявления",
        "› /ext ⇨ Потушить себя командой",
        "› /am toggle ⇨ Отключить Авто-сообщения",
        "› /msgtoggle ⇨ Отключить Личные сообщения",
        "› /paytoggle ⇨ Отключить получение платежей",
        "› /tptoggle ⇨ Отключить телепортации",
        "› /feed Ник ⇨ Покормить игрока",
        "› /heal Ник ⇨ Вылечить игрока",
        "› /exp ⇨ Получить бесплатный опыт"
      ],
      other: [
        "Доступно Точек домов: 3",
        "Регионов (Гриф): 4 по 100,000 блоков",
        "Регионов (Анка): 6 блоков",
        "Слотов на Аукционе: 11",
        "Задержка телепорта: 4 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 7,
      name: "Элита",
      emoji: "💎",
      priceForever: 49,
      priceMonth: 25,
      color: "text-purple-400",
      description: "⚕ Префикс в чате и табе: [Элита] ВашНик",
      commands: [
        "› /kit Элита ⇨ Получить набор Элиты",
        "› /time ⇨ Установить время",
        "› /weather ⇨ Установить погоду",
        "› /loom ⇨ Открыть Ткацкий станок",
        "› /carttable ⇨ Открыть Стол картографа",
        "› /msgtoggle ⇨ Отключить Личные сообщения",
        "› /beezooka ⇨ Выстрельнуть пчелой",
        "› /kittycannon ⇨ Выстрелить котом",
        "› /firework ⇨ Настроить феерверк",
        "› /name ⇨ Изменить назв. предмета цветным"
      ],
      other: [
        "Доступно Точек домов: 3",
        "Регионов (Гриф): 5 по 150,000 блоков",
        "Регионов (Анка): 7 блоков",
        "Слотов на Аукционе: 12",
        "Задержка телепорта: 4 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 8,
      name: "Титан",
      emoji: "⚡",
      priceForever: 79,
      priceMonth: 55,
      color: "text-indigo-400",
      description: "⚕ Префикс в чате и табе: [Титан] ВашНик",
      commands: [
        "› /kit Титан ⇨ Получить набор Титана",
        "› /jump ⇨ Телепортация на блок взгляда",
        "› /afk ⇨ Установить режим 'Афк'",
        "› /setwarp ⇨ Установить точку варпа",
        "› /delwarp ⇨ Удалить точку варпа",
        "› /repair ⇨ Починить вещь в руке"
      ],
      other: [
        "Не кикает за Афк",
        "Доступно Точек домов: 4",
        "Регионов (Гриф): 6 по 200,000 блоков",
        "Регионов (Анка): 8 блоков",
        "Слотов на Аукционе: 13",
        "Задержка телепорта: 3 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 9,
      name: "Принц",
      emoji: "🤴",
      priceForever: 129,
      priceMonth: 75,
      color: "text-pink-400",
      description: "⚕ Префикс в чате и табе: [Принц] ВашНик",
      commands: [
        "› /kit Принц ⇨ Получить набор Принца",
        "› /smithtable ⇨ Открыть стол Кузнеца",
        "› /stonecutter ⇨ Открыть Камнерез",
        "› /grindstone ⇨ Открыть Точило"
      ],
      other: [
        "Доступно Точек домов: 5",
        "Регионов (Гриф): 7 по 250,000 блоков",
        "Регионов (Анка): 9 блоков",
        "Слотов на Аукционе: 14",
        "Задержка телепорта: 3 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 10,
      name: "Князь",
      emoji: "🏅",
      priceForever: 249,
      priceMonth: 125,
      color: "text-yellow-400",
      description: "⚕ Префикс в чате и табе: [Князь] ВашНик",
      commands: [
        "› /kit Князь ⇨ Получить набор Князя",
        "› /fly ⇨ Включить режим полёта",
        "› /amute ⇨ Выдать МУТ игроку",
        "› /enchant ⇨ Зачаровать предмет в руке",
        "› /anvil ⇨ Открыть портативную Наковальню",
        "› /speed ⇨ Установить скорость передвижения",
        "› /salary ⇨ Получить зарплату",
        "› /exp ⇨ Получить бесплатный опыт"
      ],
      other: [
        "Доступно Точек домов: 7",
        "Регионов (Гриф): 10 по 350,000 блоков",
        "Регионов (Анка): 10 блоков",
        "Слотов на Аукционе: 15",
        "Задержка телепорта: 2 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 11,
      name: "Герцог",
      emoji: "🎖️",
      priceForever: 499,
      priceMonth: 245,
      color: "text-orange-400",
      description: "⚕ Префикс в чате и табе: [Герцог] ВашНик",
      commands: [
        "› /kit Герцог ⇨ Получить набор Герцога"
      ],
      other: [
        "Доступно Точек домов: 10",
        "Регионов (Гриф): 15 по 500,000 блоков",
        "Слотов на Аукционе: 20",
        "Задержка телепорта: 1 сек",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 12,
      name: "Спонсор",
      emoji: "💰",
      priceForever: 850,
      priceMonth: 494,
      color: "text-red-400",
      description: "⚕ Префикс в чате и табе: [Спонсор] ВашНик",
      commands: [
        "› /kit Спонсор ⇨ Получить набор Спонсора",
        "› /salary ⇨ Получить зарплату",
        "› /exp ⇨ Получить бесплатный опыт"
      ],
      other: [
        "Вход на заполненный сервер",
        "Нет задержки телепортации",
        "Доступно Точек домов: 15",
        "Регионов (Анка): 20 блоков",
        "Слотов на Аукционе: 20",
        "✔ Возможности привилегии ниже"
      ]
    },
    {
      id: 13,
      name: "Мажор",
      emoji: "🌟",
      priceForever: 1250,
      priceMonth: 675,
      color: "text-amber-400",
      description: "⚕ Префикс в чате и табе: [Мажор] ВашНик",
      commands: [
        "› /kit Мажор ⇨ Получить набор Мажора"
      ],
      other: [
        "Максимальные привилегии",
        "Эксклюзивный доступ ко всем функциям",
        "Все возможности нижестоящих привилегий"
      ]
    }
  ];

  const customPrivilege = {
    name: "Стажер",
    emoji: "🛡️",
    price: 0,
    color: "text-green-400",
    description: "⚕ Кастомная привилегия модератора",
    commands: [
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
      reviews.push({ name: reviewNames[i % reviewNames.length] + i, rating: 3, text: "Хороший сервер, есть над чем работать 🎮" });
    }
    for (let i = 0; i < fourStars; i++) {
      reviews.push({ name: reviewNames[(i + threeStars) % reviewNames.length] + (i + threeStars), rating: 4, text: "Отличный сервер! Рекомендую ⭐" });
    }
    for (let i = 0; i < fiveStars; i++) {
      reviews.push({ name: reviewNames[(i + threeStars + fourStars) % reviewNames.length] + (i + threeStars + fourStars), rating: 5, text: "Лучший Minecraft сервер! Играю каждый день! 🔥" });
    }
    
    return reviews.sort(() => Math.random() - 0.5);
  };

  const reviews = generateReviews();

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center gap-4 border-b-4 border-primary/20">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/4d683d36-3a46-4219-8531-87c597a8913e.jpg" 
            alt="FreeTime Logo" 
            className="w-12 h-12 rounded-sm object-cover shadow-lg animate-glow"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-primary drop-shadow-lg">🎮 FreeTime 🎮</h1>
        </div>
        <nav className="hidden lg:flex gap-6">
          <a href="#privileges" className="text-foreground/80 hover:text-primary transition-colors font-medium">Привилегии ⚔️</a>
          <a href="#reviews" className="text-foreground/80 hover:text-primary transition-colors font-medium">Отзывы ⭐</a>
          <a href="#rules" className="text-foreground/80 hover:text-primary transition-colors font-medium">Правила 📜</a>
          <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors font-medium">Контакты 📞</a>
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
              ⚡ FreeTime ⚡
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Лучший Minecraft сервер с уникальными привилегиями и активным сообществом 🎯
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <Card className="bg-card border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">IP адрес 🌐</p>
                <p className="text-lg font-bold text-foreground">RoomTime-gomc.me</p>
              </Card>
              <Card className="bg-card border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">Discord 💬</p>
                <Button variant="link" className="text-lg font-bold p-0" asChild>
                  <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                    Присоединиться
                  </a>
                </Button>
              </Card>
              <Card className="bg-card border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">Версия 📦</p>
                <p className="text-lg font-bold text-foreground">1.16+</p>
              </Card>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6" asChild>
              <a href="https://t.me/FreeTimeRazdathi_bot" target="_blank" rel="noopener noreferrer">
                <Icon name="Bot" size={20} className="mr-2" />
                🎁 Бот с пасхалками 🎁
              </a>
            </Button>
          </div>
        </section>

        <section id="privileges" className="container mx-auto px-4 py-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">⚔️ Привилегии ⚔️</h3>
          
          <div className="mb-12 max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-500/50 p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center">
                  <span className="text-2xl">{customPrivilege.emoji}</span>
                </div>
                <h4 className="text-xl font-bold text-green-400">{customPrivilege.name}</h4>
                <span className="ml-auto text-xl font-bold text-green-400">Особая 🌟</span>
              </div>
              <p className="text-sm mb-3 text-foreground/90">{customPrivilege.description}</p>
              <ul className="space-y-2 mb-4">
                {customPrivilege.commands.map((cmd, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Icon name="CheckCircle2" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{cmd}</span>
                  </li>
                ))}
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Купить 💰
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card">
                  <DialogHeader>
                    <DialogTitle>Покупка: Стажер</DialogTitle>
                    <DialogDescription>Кастомная привилегия</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nickname-intern">Ваш игровой ник</Label>
                      <Input id="nickname-intern" placeholder="Steve" className="bg-muted border-border" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {privilegesData.map((priv) => (
              <Card 
                key={priv.id}
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{priv.emoji}</span>
                      <h4 className={`text-xl font-bold ${priv.color}`}>{priv.name}</h4>
                    </div>
                    <Icon name="Crown" size={24} className={priv.color} />
                  </div>
                  
                  <Tabs defaultValue="forever" className="mb-4">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="forever">Навсегда 🏆</TabsTrigger>
                      <TabsTrigger value="month">Месяц 📅</TabsTrigger>
                    </TabsList>
                    <TabsContent value="forever" className="mt-4">
                      <p className="text-3xl font-bold">
                        {priv.priceForever === 0 ? (
                          <span className="text-secondary">Бесплатно ✨</span>
                        ) : (
                          <>
                            <span className={priv.color}>{priv.priceForever}</span>
                            <span className="text-sm text-muted-foreground"> руб</span>
                          </>
                        )}
                      </p>
                    </TabsContent>
                    <TabsContent value="month" className="mt-4">
                      <p className="text-3xl font-bold">
                        {priv.priceMonth === 0 ? (
                          <span className="text-secondary">Бесплатно ✨</span>
                        ) : (
                          <>
                            <span className={priv.color}>{priv.priceMonth}</span>
                            <span className="text-sm text-muted-foreground"> руб/мес</span>
                          </>
                        )}
                      </p>
                    </TabsContent>
                  </Tabs>

                  <Accordion type="single" collapsible className="mb-4">
                    <AccordionItem value="details">
                      <AccordionTrigger className="text-sm">Подробности 📋</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 text-sm">
                          <p className="font-semibold text-foreground">{priv.description}</p>
                          <div>
                            <p className="font-semibold mb-1 text-foreground">Команды:</p>
                            <ul className="space-y-1">
                              {priv.commands.map((cmd, idx) => (
                                <li key={idx} className="text-muted-foreground">{cmd}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-1 text-foreground">Прочее:</p>
                            <ul className="space-y-1">
                              {priv.other.map((item, idx) => (
                                <li key={idx} className="text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {(priv.priceForever > 0 || priv.priceMonth > 0) && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Купить 💰
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-card max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{priv.emoji} Покупка: {priv.name}</DialogTitle>
                          <DialogDescription>
                            Навсегда: {priv.priceForever} руб | Месяц: {priv.priceMonth} руб
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor={`nickname-${priv.id}`}>Ваш игровой ник</Label>
                            <Input 
                              id={`nickname-${priv.id}`}
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
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-sm flex items-center justify-center">
                  <Icon name="Package" size={24} className="text-amber-400" />
                </div>
                <h4 className="text-xl font-bold">📦 Токен Кейс</h4>
              </div>
              <p className="text-2xl font-bold mb-4">
                <span className="text-amber-400">10</span>
                <span className="text-sm text-muted-foreground"> руб/шт</span>
              </p>
              <div className="mb-4">
                <Label htmlFor="tokenCount">Количество кейсов (1-50) 🎁</Label>
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
                    Купить кейсы 💰
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
                      <Input id="nickname-tokens" placeholder="Steve" className="bg-muted border-border" />
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
                <h4 className="text-xl font-bold">🪙 Токены</h4>
              </div>
              <p className="text-2xl font-bold mb-4">
                <span className="text-yellow-400">1</span>
                <span className="text-sm text-muted-foreground"> руб = 2000 токенов</span>
              </p>
              <div className="mb-4">
                <Label htmlFor="tokensAmount">Количество токенов (2000 - 10,000,000) ⭐</Label>
                <Input 
                  id="tokensAmount" 
                  type="number" 
                  min="2000" 
                  max="10000000"
                  step="2000"
                  defaultValue="2000"
                  className="bg-muted border-border"
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    Купить токены 💰
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card">
                  <DialogHeader>
                    <DialogTitle>Покупка: Токены</DialogTitle>
                    <DialogDescription>1 руб = 2000 токенов (до 10 млн)</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nickname-tokens-buy">Ваш игровой ник</Label>
                      <Input id="nickname-tokens-buy" placeholder="Steve" className="bg-muted border-border" />
                    </div>
                    <div>
                      <Label htmlFor="tokens-amount">Количество токенов</Label>
                      <Input 
                        id="tokens-amount" 
                        type="number" 
                        min="2000" 
                        max="10000000"
                        step="2000"
                        defaultValue="2000"
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
                <div className="w-12 h-12 bg-green-600/20 rounded-sm flex items-center justify-center">
                  <Icon name="Wallet" size={24} className="text-green-400" />
                </div>
                <h4 className="text-xl font-bold">💵 Биржа баланс</h4>
              </div>
              <p className="text-2xl font-bold mb-4">
                <span className="text-green-400">От 5</span>
                <span className="text-sm text-muted-foreground"> руб</span>
              </p>
              <div className="mb-4">
                <Label htmlFor="balanceAmount">Сумма баланса (5 - 10,000,000) 💸</Label>
                <Input 
                  id="balanceAmount" 
                  type="number" 
                  min="5" 
                  max="10000000"
                  value={balanceAmount}
                  onChange={(e) => setBalanceAmount(Math.min(10000000, Math.max(5, parseInt(e.target.value) || 5)))}
                  className="bg-muted border-border"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Итого: {balanceAmount} руб
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Купить баланс 💰
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card">
                  <DialogHeader>
                    <DialogTitle>Покупка: Биржа баланс</DialogTitle>
                    <DialogDescription>
                      Сумма: {balanceAmount} руб
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nickname-balance">Ваш игровой ник</Label>
                      <Input id="nickname-balance" placeholder="Steve" className="bg-muted border-border" />
                    </div>
                    <div>
                      <Label htmlFor="balance-amount-input">Сумма (5 - 10,000,000 руб)</Label>
                      <Input 
                        id="balance-amount-input" 
                        type="number" 
                        min="5" 
                        max="10000000"
                        defaultValue={balanceAmount}
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
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">🌟 Спонсоры сервера 🌟</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor, idx) => (
              <Card key={idx} className="bg-card border-border p-8 text-center hover:scale-105 transition-transform">
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
          <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center">⭐ Отзывы игроков ⭐</h3>
          <p className="text-center text-muted-foreground mb-12">Более 45 отзывов от наших игроков 🎮</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.slice(0, 12).map((review, idx) => (
              <Card key={idx} className="bg-card border-border p-6 hover:scale-105 transition-transform">
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

        <section id="rules" className="container mx-auto px-4 py-16 bg-muted/30">
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">📜 Правила сервера 📜</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="main-rules" className="bg-card border-border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-bold">1️⃣ Основные правила</AccordionTrigger>
                <AccordionContent className="space-y-2 text-muted-foreground">
                  <p>1.1 Незнание правил не освобождает вас от ответственности;</p>
                  <p>1.2 Начав играть на наших серверах, Вы автоматически подтверждаете своё согласие с данным сводом правил;</p>
                  <p>1.3 Администратор вправе наказать игрока по причине, не указанной в настоящих правилах;</p>
                  <p>1.4 Администрация не несет ответственности за временную или постоянную невозможность игры на сервере конкретным лицом или группой лиц;</p>
                  <p>1.5 Администрация не несет ответственности за потерю игровых ценностей в следствии нарушения работоспособности сервера или его плагинов;</p>
                  <p>1.6 Администрация не гарантирует работоспособность сервера, а также сохранность информации на нем и продолжение работы над ним;</p>
                  <p>1.7 Администрация сервера не гарантирует надёжную работу в предоставлении услуг и сервисов, а также не несёт ответственность за ущерб, который может быть причинён пользователям вследствие сбоев в линиях связи, ошибочного использования предоставляемых услуг, дефектов программного обеспечения или других действий, которые могут привести к возникновению нежелательных ситуаций;</p>
                  <p>1.8 Игроки обязаны соблюдать все правила;</p>
                  <p>1.9 Администрация ведет логи всех действий игроков на сервере и всех сообщений чата;</p>
                  <p>1.10 Администрация имеет право корректировать данный свод правил без уведомления игрока;</p>
                  <p>1.11 Оскорбление, провоцирование администрации запрещено.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="chat-rules" className="bg-card border-border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-bold">2️⃣ Правила чата</AccordionTrigger>
                <AccordionContent className="space-y-2 text-muted-foreground">
                  <p>2.1 Запрещен Капс/Спам/Флуд в любом из чатов;</p>
                  <p>2.2 Запрещены унижения, оскорбления игроков;</p>
                  <p>2.3 Запрещена нецензурная лексика (маты, скрытые маты);</p>
                  <p>2.4 Запрещено рекламировать/упоминать посторонние ресурсы, которые не связаны с проектом или его ресурсами;</p>
                  <p>2.5 Чатами для рекламы/покупки/продажи разрешено пользоваться только в их тематичных целях;</p>
                  <p>2.6 Запрещено упоминать/оскорблять родных и близких игроков;</p>
                  <p>2.7 Запрещается розжиг межнациональной розни, подстрекательство на конфликт этой темы, расизм;</p>
                  <p>2.8 Запрещено как-либо обходить блокировку чата;</p>
                  <p>2.9 Запрещено вызывать игроков на проверку читов;</p>
                  <p>2.10 Запрещено отправлять свои контактные данные(дискорд, вк и т.д) в чатах (исключение: личные сообщения);</p>
                  <p>2.11 Запрещено продавать ресурсы или услуги ВНЕ серверного чата, например через дискорд;</p>
                  <p>2.12 Самопризнание в нарушении правил проекта является поводом для бана.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account-rules" className="bg-card border-border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-bold">3️⃣ Аккаунт</AccordionTrigger>
                <AccordionContent className="space-y-2 text-muted-foreground">
                  <p className="font-semibold text-foreground">3.1 Ник не должен содержать:</p>
                  <p>3.1.1 Мата, скрытого мата, унижений, оскорблений;</p>
                  <p>3.1.2 Схожесть с названием других проектов/чит клиентов;</p>
                  <p>3.1.3 Схожесть с Администраторами, Ютуберами проекта;</p>
                  <p>3.1.4 Схожесть с никами пользователей из ЧС Проекта;</p>
                  <p>3.2 Запрещается предоставлять свой аккаунт другим людям;</p>
                  <p>3.3 Ответственность несет владелец аккаунта, независимо от того, кто совершал действия под данным аккаунтом;</p>
                  <p>3.4 Запрещена продажа/передача аккаунтов, продажа привилегий;</p>
                  <p>3.5 Донат невозможно перенести на другой аккаунт.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="game-rules" className="bg-card border-border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-bold">4️⃣ Игровые правила</AccordionTrigger>
                <AccordionContent className="space-y-2 text-muted-foreground">
                  <p>4.1 Запрещено мошенничество, обман администрации;</p>
                  <p>4.2 Запрещено продавать/покупать у игроков игровые ценности за реальную валюту;</p>
                  <p className="font-semibold text-foreground">4.3 Запрещено пользоваться всем, что упрощает процесс игры, а именно:</p>
                  <p>4.3.1 Сторонними программами, читами, кликерами, автоматизациями (Кроме разрешенных пунктом 4.13);</p>
                  <p>4.3.2 Модами, запрещенными пунктом 4.12;</p>
                  <p>4.4 Запрещено как-либо помогать, укрывать нарушителя или способствовать в его неправомерных действиях;</p>
                  <p>4.5 Запрещено играть на проекте, если Ваши аккаунты были неоднократно блокированы пунктом 4.3 и его подпунктам;</p>
                  <p>4.6 Запрещено вызывание неполадок в работе сервера или попытки обрушить сервер, путем специально вызванных лагов или подобного;</p>
                  <p>4.6.1 Запрещена постройка и запуск механизмов, приводящих к одновременной активации большого количества поршней;</p>
                  <p>4.7 Запрещено выдавать себя за Администрацию, устанавливать ники похожие на Администрацию или их префиксы;</p>
                  <p>4.8 Запрещено использование/скрытие багов/недоработок сервера;</p>
                  <p>4.9 Запрещено играть/взаимодействовать и помогать на режиме с игроками в количестве больше, чем разрешено на режиме;</p>
                  <p>4.10 Запрещено строительство половых органов, нацистских символик, лавакастов;</p>
                  <p>4.11 Запрещено подстрекать третьих лиц на нарушение правил;</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="check-rules" className="bg-card border-border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-bold">5️⃣ Правила проверки ПО</AccordionTrigger>
                <AccordionContent className="space-y-2 text-muted-foreground">
                  <p>5.1 Вы обязаны выполнять требования Проверяющего</p>
                  <p className="italic">Важно! Вы должны понимать, что проверка проводится исключительно в целях поиска читов, запрещённых модификаций, программ и другого запрещённого ПО</p>
                  <p>5.2 Данный свод правил не окончателен и может изменяться в зависимости от требований Проверяющего;</p>
                  <p>5.3 Следите за чатом во время проверки, если Вы не увидели/проигнорировали сообщение от Проверяющего, это не будет расцениваться поводом для разблокировки аккаунта;</p>
                  <p>5.4 В случае если у Вас возникли непредвиденные обстоятельства, необходимо обязательно сообщить об этом Проверяющему;</p>
                  <p>5.5 Запрещается препятствовать проведению проверки: долго открывать папки, задавать неуместные вопросы, оскорблять/унижать Проверяющего, игнорировать его требования и так далее;</p>
                  <p>5.6 Во время проверки запрещается удалять какие-либо файлы с Вашего ПК, в том числе очищать корзину;</p>
                  <p>5.7 Во время проверки запрещается выходить из Minecraft;</p>
                  <p>5.8 Запрещается снимать ход проверки, исключение: личное разрешение Проверяющего;</p>
                  <p>5.9 Проверяющий имеет право попросить Вас установить программы для эффективного и быстрого проведения проверки.</p>
                  <p className="font-semibold text-foreground mt-4">СПИСОК ПРОГРАММ:</p>
                  <p>• Ocean - Автоматическая проверка ПК</p>
                  <p>• AnyDesk - Удалённый рабочий стол</p>
                  <p>• Everything - Мгновенный поиск файлов</p>
                  <p>• JournalTrace - Отслеживание действий с файлами</p>
                  <p>• Process Hacker 2 - Анализ процессов</p>
                  <p>И другие утилиты для проверки...</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment-rules" className="bg-card border-border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-bold">9️⃣ Платные услуги</AccordionTrigger>
                <AccordionContent className="space-y-2 text-muted-foreground">
                  <p>9.1 Попытки махинаций оплатами, или ввод Администрации в заблуждение наказываются баном без возврата средств;</p>
                  <p>9.2 Предоставьте чек оплаты, если хотите написать Администрации о пропаже, непоявлении доната после покупки;</p>
                  <p>9.3 Администрация не обязана предоставлять доказательства нарушений донатера у которого сняли привилегию за нарушение правил.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contacts" className="container mx-auto px-4 py-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">📞 Контакты и информация 📞</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-card border-border p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                💬 Поддержка
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
                👥 Команда сервера
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
                  <p className="text-muted-foreground">Юра (AI ассистент) 🤖</p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                <a href="https://t.me/FreeTimeSRV" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Присоединиться к каналу 🚀
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-12 border-t-4 border-primary/20 mt-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/4d683d36-3a46-4219-8531-87c597a8913e.jpg" 
              alt="FreeTime Logo" 
              className="w-10 h-10 rounded-sm object-cover"
            />
            <h4 className="text-2xl font-bold text-primary">🎮 FreeTime 🎮</h4>
          </div>
          <p className="text-muted-foreground mb-4">Лучший Minecraft сервер с уникальными возможностями ⚔️</p>
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
            <Button variant="outline" size="sm" asChild>
              <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Discord
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2024 FreeTime Server. Все права защищены. ✨</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
