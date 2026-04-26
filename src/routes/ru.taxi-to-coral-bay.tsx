import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import coralBayImg from "@/assets/dest-coral-bay.jpg";
import { TransferPage } from "@/components/TransferPage";
import { sharedFAQsRu } from "@/lib/faqs.ru";

export const Route = createFileRoute("/ru/taxi-to-coral-bay")({
  head: () => ({
    meta: [
      { title: "Такси в Корал-Бей от €65 — Трансферы из аэропортов | Taxi Cyprus 24" },
      { name: "description", content: "Частное такси в Корал-Бей из аэропорта Пафоса (€65) и Ларнаки (€170). Фиксированная цена, встреча, бесплатные детские кресла, 24/7." },
      { property: "og:title", content: "Такси в Корал-Бей от €65" },
      { property: "og:description", content: "Частное такси по фиксированной цене в Корал-Бей, Кипр." },
      { property: "og:image", content: coralBayImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: coralBayImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/ru/taxi-to-coral-bay" }],
  }),
  component: () => (
    <TransferPage
      eyebrow="Аэропорт — Корал-Бей"
      title="Частное такси в Корал-Бей"
      subtitle="Трансферы из аэропортов по фиксированной цене в Корал-Бей из аэропортов Пафоса и Ларнаки. Частный люксовый автомобиль, встреча, бесплатные детские кресла."
      heroImage={heroImg}
      galleryImage={coralBayImg}
      defaultDropoff="Корал-Бей"
      fromLocation="Пафос / Ларнака"
      toLocation="Корал-Бей"
      duration="25 мин / 1ч 40м"
      distance="25 км / 150 км"
      intro="Корал-Бей — один из самых популярных пляжных курортов Кипра, известный бирюзовой водой, песчаными пляжами, люксовыми виллами и семейными отелями. Taxicyprus24 предоставляет надёжные частные трансферы в Корал-Бей из аэропортов Пафоса и Ларнаки с фиксированными ценами, профессиональными водителями и сервисом 24/7."
      bodyParagraphs={[
        "Избегайте длинных очередей такси и совместных шаттлов. Наш частный сервис — прямая поездка от двери до двери в ваш отель, виллу, апартаменты или курорт в любой точке района Корал-Бей.",
        "Из аэропорта Пафоса до Корал-Бей около 25 минут по живописной прибрежной дороге. Из аэропорта Ларнаки поездка обычно занимает около 1 часа 40 минут по автомагистрали A6.",
        "Мы возим во все отели Корал-Бей: Coral Beach Hotel & Resort, Mayfair Hotel, Corallia Beach Hotel, Coral Star Apartments и частные виллы по всему Корал-Бей, Пейе и Пафосу.",
        "Каждый трансфер включает фиксированные цены без скрытых платежей, встречу в аэропорту, отслеживание рейса, бесплатные детские кресла, комфортные кондиционированные автомобили и оплату картой, банковским переводом или наличными в EUR или GBP.",
        "Нужно ли вам такси из аэропорта Пафоса в Корал-Бей или частный трансфер из Ларнаки — Taxicyprus24 гарантирует безопасную, комфортную и безстрессовую поездку по всему Кипру.",
      ]}
      highlights={["Прямо в ваш отель в Корал-Бей", "Чистые и люксовые автомобили", "Гарантия фиксированной цены", "Бесплатные детские кресла", "Ночные прибытия 24/7", "Встреча"]}
      prices={[
        { type: "Аэропорт Пафоса — Корал-Бей (Седан)", pax: "До 4 пассажиров", price: "€65" },
        { type: "Аэропорт Пафоса — Корал-Бей (Минивэн)", pax: "До 6 пассажиров", price: "€85" },
        { type: "Аэропорт Ларнаки — Корал-Бей (Седан)", pax: "До 4 пассажиров", price: "€170" },
        { type: "Аэропорт Ларнаки — Корал-Бей (Минивэн)", pax: "До 6 пассажиров", price: "€200" },
      ]}
      nearbyAreas={["Coral Beach Hotel", "Mayfair Coral Bay", "Corallia Beach", "Полуостров Акамас", "Морские пещеры", "Пейя"]}
      faqs={sharedFAQsRu.slice(0, 6)}
      relatedLinks={[
        { to: "/taxi-to-peyia", label: "Такси в Пейю" },
        { to: "/taxi-to-chloraka", label: "Такси в Хлораку" },
        { to: "/paphos-airport-transfers", label: "Трансферы из аэропорта Пафоса" },
      ]}
    />
  ),
});
