import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mercedes-coast.jpg";
import paphosImg from "@/assets/dest-paphos.jpg";
import { TransferPage } from "@/components/TransferPage";
import { PriceTable } from "@/components/PriceTable";
import { pricingFromPaphos } from "@/lib/pricing";
import { sharedFAQsRu } from "@/lib/faqs.ru";

export const Route = createFileRoute("/ru/paphos-airport-transfers")({
  head: () => ({
    meta: [
      { title: "Трансферы и такси из аэропорта Пафоса от €25 | Taxi Cyprus 24" },
      { name: "description", content: "Частные трансферы из аэропорта Пафоса (PFO) в Корал-Бей, Пейю, Хлораку, Като-Пафос и по всему Кипру. Фиксированные цены, встреча, 24/7." },
      { property: "og:title", content: "Трансферы из аэропорта Пафоса от €25" },
      { property: "og:description", content: "Премиальное такси из аэропорта Пафоса во все направления Кипра." },
      { property: "og:image", content: paphosImg },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:image", content: paphosImg },
    ],
    links: [{ rel: "canonical", href: "https://taxicyprus24.com/ru/paphos-airport-transfers" }],
  }),
  component: () => (
    <>
      <TransferPage
        eyebrow="Аэропорт Пафоса (PFO)"
        title="Трансферы из аэропорта Пафоса и частное такси"
        subtitle="Частные трансферы по фиксированной цене из международного аэропорта Пафоса в Корал-Бей, Пейю, Хлораку, Като-Пафос и любое направление Кипра."
        heroImage={heroImg}
        galleryImage={paphosImg}
        defaultPickup="Аэропорт Пафоса"
        fromLocation="Аэропорт Пафоса"
        toLocation="Весь Кипр"
        duration="20 мин – 2ч"
        distance="20–250 км"
        intro="Международный аэропорт Пафоса (PFO) — второй по величине аэропорт Кипра и главные ворота для путешественников в Пафос, Корал-Бей, Пейю, Лимассол и западный Кипр. Taxicyprus24 предоставляет надёжные частные трансферы с фиксированными ценами, профессиональными водителями и сервисом 24/7."
        bodyParagraphs={[
          "Пропустите длинные очереди такси, переполненные автобусы и совместные шаттлы. Наш частный сервис — прямая поездка от двери до двери в отели, виллы, курорты и апартаменты в любой точке Кипра.",
          "Ваш водитель встретит вас в зале прилёта с табличкой и проводит в чистый кондиционированный автомобиль. Популярное время в пути: Корал-Бей (около 25 минут), Пейя (около 30 минут), Лимассол (около 50 минут) и Ларнака (около 1ч 45м).",
          "Каждый трансфер включает бесплатные детские кресла, бутилированную воду, отслеживание рейса и бесплатную отмену за 24 часа. Оплачивайте онлайн картой или напрямую водителю в EUR или GBP.",
          "Нужно ли вам такси из аэропорта Пафоса в Корал-Бей, Пейю, Лимассол, Ларнаку или в любое другое направление — Taxicyprus24 гарантирует комфортные частные трансферы по фиксированной цене без скрытых платежей.",
        ]}
        highlights={[
          "Прямо из аэропорта Пафоса",
          "Встреча в зале прилёта",
          "Чистые и люксовые автомобили",
          "Фиксированные цены — без повышений",
          "Ночные прибытия 24/7",
          "Бесплатное отслеживание рейса",
        ]}
        prices={[
          { type: "PFO — Корал-Бей", pax: "До 4 пассажиров", price: "€55" },
          { type: "PFO — Лимассол", pax: "До 4 пассажиров", price: "€80" },
          { type: "PFO — Ларнака", pax: "До 4 пассажиров", price: "€130" },
        ]}
        nearbyAreas={["Корал-Бей", "Пейя", "Хлорака", "Като-Пафос", "Гавань Пафоса", "Гробницы царей", "Героскипу", "Латси", "Полис"]}
        faqs={sharedFAQsRu}
        relatedLinks={[
          { to: "/taxi-to-coral-bay", label: "PFO — Корал-Бей" },
          { to: "/taxi-to-peyia", label: "PFO — Пейя" },
          { to: "/taxi-to-chloraka", label: "PFO — Хлорака" },
          { to: "/taxi-to-limassol", label: "PFO — Лимассол" },
        ]}
      />
      <section className="container-tight pb-16 md:pb-20">
        <PriceTable
          pricing={pricingFromPaphos}
          subtitle="Итог за автомобиль. Выберите автомобиль для вашей группы — та же фиксированная цена."
        />
      </section>
    </>
  ),
});
