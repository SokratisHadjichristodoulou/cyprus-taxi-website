import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsRu } from "@/lib/faqs.ru";

export const Route = createFileRoute("/ru/larnaca-airport-to-paphos")({
  head: () => ({
    meta: [
      { title: "Такси из аэропорта Ларнаки в Пафос — Фиксированная цена €140 | Taxi Cyprus 24" },
      { name: "description", content: "Частное такси из аэропорта Ларнаки в Пафос от €140. Фиксированная цена, встреча, бесплатные детские кресла, отслеживание рейса. Бронирование 24/7." },
      { property: "og:title", content: "Такси из аэропорта Ларнаки в Пафос от €140" },
      { property: "og:description", content: "Частный трансфер по фиксированной цене из Ларнаки в Пафос со встречей." },
      { property: "og:image", content: paphosImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "keywords", content: "такси Ларнака Пафос, такси из аэропорта Ларнаки в Пафос, трансфер Ларнака Пафос цена, LCA в Пафос, трансфер аэропорт Ларнаки Пафос, частное такси Ларнака Пафос" },
      { name: "twitter:image", content: paphosImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/ru/larnaca-airport-to-paphos" }],
  }),
  component: () => (
    <TransferPage
      eyebrow="Аэропорт Ларнаки — Пафос"
      title="Такси из аэропорта Ларнаки в Пафос"
      subtitle="Частные трансферы по фиксированной цене из международного аэропорта Ларнаки в Пафос на люксовом автомобиле. Встреча в зале прилёта, бесплатные детские кресла, отслеживание рейса."
      heroImage={heroImg}
      galleryImage={paphosImg}
      defaultPickup="Аэропорт Ларнаки"
      defaultDropoff="Пафос"
      fromLocation="Аэропорт Ларнаки"
      toLocation="Пафос"
      duration="1ч 30м"
      distance="140 км"
      intro="Маршрут из международного аэропорта Ларнаки (LCA) в Пафос — это около 140 километров по автомагистралям A5 и A6, время в пути — около 1 часа 30 минут при обычном трафике. Наши профессиональные водители знают каждый маршрут и доставят вас в отель, виллу или курорт в Пафосе быстро, комфортно и безопасно — в чистом, люксовом автомобиле."
      bodyParagraphs={[
        "Прилетаете ли вы поздно ночью или рано утром — водитель уже будет ждать в зале прилёта с табличкой. Мы отслеживаем ваш рейс в реальном времени по номеру рейса, поэтому даже многочасовая задержка не повлияет на ваш трансфер.",
        "Мы покрываем все отели и курорты Пафоса: Корал-Бей, Пейю, Хлораку, Като-Пафос, район Гробниц царей, гавань Пафоса, Героскипу и Старый город. Цена одинакова, останавливаетесь ли вы в 5-звёздочном курорте или на частной вилле.",
      ]}
      highlights={[
        "Фиксированная итоговая цена — без доплат",
        "Встреча в зале прилёта Ларнаки",
        "Чистые и люксовые автомобили",
        "Бесплатные детские кресла",
        "Отслеживание рейса",
        "Принимаем наличные и карты",
      ]}
      prices={[
        { type: "Executive Sedan", pax: "До 4 пассажиров", price: "€140" },
        { type: "Premium Van (6 мест)", pax: "До 6 пассажиров", price: "€180" },
        { type: "Большой Van (12 мест)", pax: "До 12 пассажиров", price: "€240" },
      ]}
      nearbyAreas={["Корал-Бей", "Пейя", "Хлорака", "Като-Пафос", "Гробницы царей", "Героскипу", "Гавань Пафоса", "Латси", "Полис"]}
      faqs={sharedFAQsRu.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-coral-bay", label: "Ларнака — Корал-Бей" },
        { to: "/taxi-to-peyia", label: "Ларнака — Пейя" },
        { to: "/taxi-to-limassol", label: "Ларнака — Лимассол" },
        { to: "/paphos-airport-transfers", label: "Трансферы из аэропорта Пафоса" },
      ]}
    />
  ),
});
