import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import larnacaImg from "@/assets/dest-larnaca.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsRu } from "@/lib/faqs.ru";

export const Route = createFileRoute("/ru/larnaca-airport-to-protaras")({
  head: () => ({
    meta: [
      { title: "Такси Аэропорт Ларнака — Протарас €60 | Taxi Cyprus 24" },
      { name: "description", content: "Частное такси из аэропорта Ларнаки в Протарас от €60. Фиксированная цена, встреча, бесплатные детские кресла, отслеживание рейса. Бронирование 24/7." },
      { property: "og:title", content: "Такси Аэропорт Ларнака — Протарас от €60" },
      { property: "og:description", content: "Частный трансфер по фиксированной цене из Ларнаки в Протарас." },
      { property: "og:image", content: larnacaImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: larnacaImg },
    ],
  }),
  component: () => (
    <TransferPage
      eyebrow="Аэропорт Ларнака — Протарас"
      title="Такси из аэропорта Ларнаки в Протарас"
      subtitle="Частные трансферы по фиксированной цене из международного аэропорта Ларнаки в Протарас на премиальном Mercedes-Benz. Встреча в зоне прилёта, бесплатные детские кресла, отслеживание рейса."
      heroImage={heroImg}
      galleryImage={larnacaImg}
      defaultPickup="Аэропорт Ларнаки"
      defaultDropoff="Протарас"
      fromLocation="Аэропорт Ларнаки"
      toLocation="Протарас"
      duration="50 мин"
      distance="65 км"
      intro="Поездка из международного аэропорта Ларнаки (LCA) в Протарас составляет около 65 километров по автомагистрали A3 и занимает примерно 50 минут при обычном трафике. Ларнака — ближайший аэропорт к Протарасу и Пернере, поэтому частный трансфер — самый быстрый и комфортный способ добраться до отеля."
      bodyParagraphs={[
        "Ваш водитель встретит вас в зале прилёта с именной табличкой и поможет с багажом до машины. Мы отслеживаем рейс в реальном времени, поэтому любые задержки не влияют на фиксированную цену.",
        "Мы обслуживаем весь Протарас, Пернеру, Каппарис, Fig Tree Bay и побережье Фамагусты. Та же фиксированная цена действует и для отеля на берегу, и для частной виллы, и для семейных апартаментов.",
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
        { type: "Executive Sedan", pax: "До 4 пассажиров", price: "€60" },
        { type: "Premium Van (6 мест)", pax: "До 6 пассажиров", price: "€80" },
        { type: "Большой Van (12 мест)", pax: "До 12 пассажиров", price: "€110" },
      ]}
      nearbyAreas={["Протарас", "Пернера", "Fig Tree Bay", "Каппарис", "Айя-Напа", "Кейп Греко", "Паралимни", "Сотира"]}
      faqs={sharedFAQsRu.slice(0, 6)}
      relatedLinks={[
        { to: "/larnaca-airport-to-ayia-napa", label: "Ларнака — Айя-Напа" },
        { to: "/larnaca-airport-transfers", label: "Все трансферы из Ларнаки" },
        { to: "/cyprus-airport-transfers", label: "Все маршруты по Кипру" },
      ]}
    />
  ),
});
