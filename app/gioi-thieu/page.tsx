import { Award, Lightbulb, ShieldCheck, Users } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

const developmentDirections = [
  {
    icon: Lightbulb,
    title: "Công nghệ 4.0",
    text: "Nắm bắt các công nghệ mới như trí tuệ nhân tạo, blockchain, điện toán đám mây và IoT để tư vấn những giải pháp phù hợp, giúp tăng năng suất và khả năng cạnh tranh.",
  },
  {
    icon: ShieldCheck,
    title: "Chất lượng sản phẩm và dịch vụ",
    text: "Không ngừng cải tiến quy trình kiểm soát chất lượng, bảo đảm giải pháp an toàn, bảo mật, dễ sử dụng và đáp ứng tốt yêu cầu nghiệp vụ.",
  },
  {
    icon: Award,
    title: "Đổi mới sáng tạo",
    text: "Nghiên cứu công nghệ mới, thiết kế trải nghiệm thân thiện và tạo ra những tính năng hữu ích, tối ưu cho các vấn đề thực tế của khách hàng.",
  },
]

const teamStats = [
  ["50+", "Lập trình viên Developer"],
  ["10+", "Nhân viên kiểm thử chất lượng"],
  ["5+", "Chuyên viên phân tích nghiệp vụ"],
  ["3+", "Chứng chỉ quản lý dự án quốc tế"],
  ["2+", "Chuyên viên UI/UX"],
]

export default function GioiThieuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border bg-muted/40 px-6 pb-20 pt-36 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Về Trí Nghĩa Technology</p>
          <h1 className="max-w-4xl text-pretty text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Đồng hành cùng doanh nghiệp trong hành trình số hóa
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">
            Công ty TNHH Công nghệ, Thương mại và Dịch vụ Trí Nghĩa (TNT) được thành lập năm 2017 bởi các kỹ sư CNTT có trên 15 năm kinh nghiệm trong lĩnh vực xây dựng phần mềm.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Users className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Giới thiệu về Trí Nghĩa</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>TNT tập trung cung cấp các giải pháp số hóa, chuyển đổi số giúp doanh nghiệp và tổ chức nâng cao năng lực quản trị, cải thiện hiệu quả sản xuất và tiết kiệm chi phí vận hành.</p>
            <p>Thế mạnh của TNT là đội ngũ kỹ sư CNTT có kinh nghiệm và chuyên môn cao, luôn lắng nghe để thấu hiểu vấn đề của khách hàng và tư vấn giải pháp công nghệ phù hợp nhất.</p>
            <p>Nền tảng quản trị doanh nghiệp toàn diện TNM giúp rút ngắn thời gian triển khai và tiết kiệm nhiều chi phí. Bên cạnh đó, TNT cung cấp dịch vụ gia công phần mềm, xây dựng phần mềm theo yêu cầu và các giải pháp công nghệ cạnh tranh.</p>
            <p>Các giải pháp của TNT hiện đã có mặt tại khắp Việt Nam cũng như tại Mỹ, Anh và Nhật Bản.</p>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-20 text-background lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Định hướng phát triển</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">Kiến tạo giải pháp công nghệ bền vững</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {developmentDirections.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-background/15 bg-background/5 p-7">
                <Icon className="h-7 w-7 text-primary-foreground" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-background/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Tầm nhìn</p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Xây dựng và phát triển TNT trở thành công ty công nghệ hàng đầu về tư vấn và cung cấp các giải pháp chuyển đổi số cho các tổ chức, doanh nghiệp tại Việt Nam và trên thế giới.</p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Sứ mệnh</p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Đồng hành cùng các tổ chức, doanh nghiệp thực hiện số hóa và chuyển đổi số thành công, nâng cao năng lực quản lý và cạnh tranh.</p>
            <p className="mt-6 font-bold tracking-wide text-foreground">ĐƠN GIẢN · HIỆU QUẢ · CHUYÊN NGHIỆP · UY TÍN</p>
          </article>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Môi trường làm việc</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">Con người là tài sản lớn nhất</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">TNT luôn chăm lo đời sống vật chất và tinh thần cho nhân viên, xây dựng môi trường chuyên nghiệp, văn minh để mỗi thành viên được thoải mái sáng tạo và cống hiến hết mình.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {teamStats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-bold text-primary">{value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
