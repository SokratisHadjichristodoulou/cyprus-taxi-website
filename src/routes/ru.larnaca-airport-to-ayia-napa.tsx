import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsRu } from "@/lib/faqs.ru";

export const Route = createFileRoute("/ru/larnaca-airport-to-ayia-napa")({
  head: () => ({
    meta: [
      { title: "Такси Аэропорт Ларнака — Айя-Напа €55 | Taxi Cyprus 24" },
      { name: "description", content: "Частное такси из аэропорта Ларнаки в Айя-Напу от €55. Фиксированная цена, встреча, бесплатные детские кресла, отслеживание рейса. Бронирование 24/7." },
      { property: "og:title", content: "Такси Аэропорт Ларнака — Айя-Напа от €55" },
      { property: "og:description", content: "Частный трансфер по фиксированной цене из Ларнаки в Айя-Напу." },
      { property: "og:image", content: larnacaImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: larnacaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Аэропорт Ларнака — Айя-Напа"
      title="Такси из аэропорта Ларнаки в Айя-Напу"
      subtitle="Частные трансферы по фиксированной цене из международного аэропорта Ларнаки в Айя-Напу на премиальном Mercedes-Benz. Встреча в зоне прилёта, бесплатные детские кресла, отслеживание рейса."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Аэропорт Ларнаки"
      defaultDropoff="Айя-Напа"
      fromLocation="Аэропорт Ларнаки"
      toLocation="Айя-Напа"
      duration="45 мин"
      distance="55 км"
      intro="Поездка из международного аэропорта Ларнаки (LCA) в Айя-Напу составляет около 55 километров по автомагистрали A3 и занимает примерно 45 минут при обычном трафике. Ларнака — ближайший аэропорт к Айя-Напе, поэтому частное такси — самый быстрый и комфортный способ добраться до отеля."
      bodyParagraphs={[
        "Ваш водитель будет уже ждать в зоне прилёта с табличкой с вашим именем — никаких очередей на стоянке такси или к автобусам. Мы отслеживаем ваш рейс в реальном времени, поэтому даже при задержке трансфер гарантирован по той же фиксированной цене.",
        "Мы обслуживаем все отели, виллы и апартаменты в Айя-Напе, на пляже Нисси, в Кейп Греко, Пернере и окрестностях. Цена одинаковая для 5-звёздочного курорта и для частной виллы.",
      ]}
      highlights={[
        "Фиксированная итоговая цена — без доплат",
        "Встреча в зоне прилёта Ларнаки",
        "Чистые и премиальные автомобили",
        "Бесплатные детские кресла",
        "Отслеживание рейса в реальном времени",
        "Оплата наличными или картой",
      ]}
      prices={[
        { type: "Executive Sedan", pax: "До 4 пассажиров", price: "€55" },
        { type: "Premium Van (6 мест)", pax: "До 6 пассажиров", price: "€70" },
        { type: "Большой Van (12 мест)", pax: "До 12 пассажиров", price: "€95" },
      ]}
      nearbyAreas={["Айя-Напа", "Пляж Нисси", "Протарас", "Пернера", "Кейп Греко", "Паралимни", "Каппарис", "Сотира"]}
      faqs={sharedFAQsRu.slice(0, 6)}
      relatedLinks={[
        { to: "/larnaca-airport-transfers", label: "Все трансферы из Ларнаки" },
        { to: "/larnaca-airport-to-paphos", label: "Ларнака — Пафос" },
        { to: "/cyprus-airport-transfers", label: "Все маршруты по Кипру" },
      ]}
    />
  ),
});
