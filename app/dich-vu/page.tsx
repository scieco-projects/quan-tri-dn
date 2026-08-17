import Link from "next/link"
import { ArrowRight, CalendarClock, CheckCircle2, Cloud, Cpu, Users, Wrench } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

const serviceItems = [
  {
    icon: Cpu,
    title: "Gia công phần mềm",
    description:
      "Dịch vụ thế mạnh của TNT với đội ngũ kỹ sư nhiều năm kinh nghiệm, phục vụ khách hàng tại Mỹ, Nhật và Singapore. Đảm bảo hiểu rõ yêu cầu, thực hiện đúng tiến độ, chi phí hợp lý và chất lượng ổn định.",
  },
  {
    icon: Wrench,
    title: "Xây dựng phần mềm theo yêu cầu",
    description:
      "Tư vấn giải pháp công nghệ riêng cho từng quy trình nghiệp vụ để tối ưu thời gian triển khai, chi phí vận hành và giải quyết đúng bài toán gốc của từng doanh nghiệp.",
  },
  {
    icon: CheckCircle2,
    title: "Thiết kế giao diện và trải nghiệm người dùng - UIUX",
    description:
      "Thiết kế giao diện theo đúng lĩnh vực và ngôn ngữ sản phẩm, tối ưu UX cho khách hàng cuối, hỗ trợ tăng hiệu quả truyền thông, giới thiệu sản phẩm và định vị thương hiệu.",
  },
  {
    icon: Users,
    title: "Cung ứng nhân lực CNTT",
    description:
      "Cung cấp kỹ sư, QA, và chuyên gia phân tích nghiệp vụ có kinh nghiệm để tham gia trực tiếp vào các dự án của khách hàng theo nhu cầu nhân sự.",
  },
  {
    icon: Cloud,
    title: "Tư vấn và cung cấp hạ tầng Cloud - Hosting",
    description:
      "Cung cấp dịch vụ thuê hosting và VPS/Cloud chuyên nghiệp giúp triển khai giải pháp nhanh, an toàn và ổn định trên nền tảng điện toán đám mây.",
  },
]

export default function DichVuPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border bg-muted/40 px-6 pb-20 pt-36 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Dịch vụ</p>
          <h1 className="max-w-4xl text-pretty text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Dịch vụ công nghệ trọn vẹn cho chuyển đổi số doanh nghiệp
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">
            Trí Nghĩa Technology cung cấp giải pháp công nghệ từ con người, sản phẩm đến hạ tầng để giúp doanh nghiệp triển khai nhanh, vận hành ổn định và tối ưu hiệu quả.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {serviceItems.map((service) => (
            <article key={service.title} className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{service.title}</h2>
              <p className="mt-4 leading-8 text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-foreground px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 rounded-3xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Tư vấn nhanh</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Chúng tôi có thể giúp gì cho bạn?</h2>
            <p className="mt-4 leading-8 text-primary-foreground/75">
              Hãy để lại thông tin để đội ngũ Trí Nghĩa liên hệ và đề xuất phương án phù hợp nhất cho nhu cầu của bạn.
            </p>
          </div>
          <Link
            href="/gioi-thieu#lien-he"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Gửi liên hệ
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-6xl items-start gap-3 rounded-3xl border border-border bg-card p-8">
          <CalendarClock className="mt-1 size-6 text-primary" aria-hidden="true" />
          <p className="text-base leading-8 text-muted-foreground">
            Với phương châm: <span className="font-semibold text-foreground">Mang lại giá trị mới cho khách hàng và luôn hài lòng</span>, chúng tôi đồng hành từ tư vấn trước bán hàng, triển khai, đào tạo đến hỗ trợ sau triển khai.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
