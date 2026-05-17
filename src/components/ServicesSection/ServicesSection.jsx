import "./ServicesSection.css";
import stageStar from "../../assets/2x/Asset 13@2x.png";

import {
  BriefcaseBusiness,
  Sparkles,
  Palette,
  Newspaper,
  LayoutTemplate,
} from "lucide-react";

const services = [
  {
    title: "إدارة أعمال",
    desc: "إدارة أعمال النجوم والمشاهير والمؤثرين",
    icon: BriefcaseBusiness,
  },
  {
    title: "السمعة",
    desc: "إدارة السمعة الرقمية",
    icon: Sparkles,
  },
  {
    title: "Media Kit",
    desc: "صناعة إعلامية كاملة وبناء قاعدة بيانات ثرية",
    icon: Palette,
  },
  {
    title: "خدمة الهوية",
    desc: "تطوير الهوية الشخصية وأعمالك التجارية",
    icon: Newspaper,
  },
  {
    title: "تطوير المحتوى",
    desc: "صناعة المحتوى والمنصات الإعلامية",
    icon: LayoutTemplate,
  },
];

export default function ServicesSection() {
  return (
    <section className="fame-services-section" dir="rtl">
      <div className="fame-services-canvas">
        <img
          src={stageStar}
          alt=""
          aria-hidden="true"
          className="fame-services-star"
        />

        <div className="fame-services-light" />

        <h2 className="fame-services-title">
          ماذا
          <br />
          نقدم؟
        </h2>

        <div className="fame-services-cards">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="fame-service-card" key={index}>
                <Icon className="fame-service-icon" strokeWidth={1.25} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}