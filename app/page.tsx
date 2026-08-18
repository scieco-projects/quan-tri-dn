import Image from "next/image"
import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  GraduationCap,
  Layers3,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

const referenceImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W5t9GYDPdoXZkKPa87rTDC3NUjEHcj.png"
const platformImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3EGsCRk7oaGc2eSUCppluv9N8Ta3Gh.png"

const solutions = [
  { icon: Network, title: "Quản trị dữ liệu hệ thống", text: "Quản lý tập trung người dùng, năm học, khối lớp, môn học, học sinh và giáo viên trên một nền tảng thống nhất.", label: "Toàn diện", detail: "dữ liệu nhà trường", tone: "teal" },
  { icon: ShieldCheck, title: "Kết nối nhà trường – phụ huynh", text: "Cập nhật thông tin, thông báo và tương tác đa chiều nhanh chóng giữa ban giám hiệu, giáo viên và phụ huynh.", label: "3 bên", detail: "cùng đồng hành", tone: "coral" },
  { icon: ChartNoAxesCombined, title: "Quản lý học tập", text: "Theo dõi thời khóa biểu, điểm số, điểm danh, nhận xét hàng ngày và quá trình rèn luyện của học sinh.", label: "360°", detail: "góc nhìn học sinh", tone: "gold" },
  { icon: Layers3, title: "Ứng dụng đa nền tảng", text: "Web quản trị cho nhà trường và ứng dụng Mobile thuận tiện cho giáo viên, nhân viên, phụ huynh.", label: "Web + App", detail: "truy cập linh hoạt", tone: "teal" },
  { icon: MessageCircle, title: "Tài chính và dịch vụ học sinh", text: "Quản lý học phí, tiền ăn bán trú, tuyến xe, thực đơn, câu lạc bộ và các dịch vụ hỗ trợ học sinh.", label: "Minh bạch", detail: "vận hành hiệu quả", tone: "coral" },
  { icon: ChartNoAxesCombined, title: "Báo cáo và điều hành", text: "Ban giám hiệu nắm bắt công việc mọi lúc mọi nơi với báo cáo phân tích đa chiều và thông tin tức thời.", label: "24/7", detail: "nắm bắt thông tin", tone: "gold" },
]

const aiFeatures = [
  { icon: Bot, title: "Trợ giảng AI 24/7", text: "Giải đáp câu hỏi theo nội dung bài học, gợi ý cách làm và hỗ trợ học sinh ôn tập ngoài giờ mà không thay thế vai trò của giáo viên." },
  { icon: BrainCircuit, title: "Cá nhân hóa lộ trình", text: "Phân tích kết quả, tốc độ và điểm còn yếu để đề xuất bài tập phù hợp cho từng học sinh, từng nhóm năng lực." },
  { icon: Sparkles, title: "Soạn bài nhanh hơn", text: "Hỗ trợ giáo viên tạo giáo án, câu hỏi trắc nghiệm, rubric chấm điểm và nội dung tương tác từ mục tiêu bài học." },
  { icon: ChartNoAxesCombined, title: "Phân tích & cảnh báo sớm", text: "Tổng hợp mức độ tham gia học trực tuyến, phát hiện dấu hiệu sa sút và gửi tín hiệu để nhà trường kịp thời đồng hành." },
]

const introPoints = [
  "Số hóa và cải thiện hiệu quả quản lý, giảng dạy của cán bộ, giáo viên, nhân viên trong nhà trường",
  "Cập nhật thông tin, tương tác đa chiều giữa nhà trường – phụ huynh – giáo viên",
  "Giúp phụ huynh đồng hành cùng quá trình học tập, sinh hoạt của con",
]

export default function GioiThieuPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <Navbar />

      <section className="border-b border-border bg-muted/35 px-6 pb-16 pt-32 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Giới thiệu về SCI LMS</p>
          <h1 className="max-w-4xl text-pretty text-4xl font-bold tracking-tight text-foreground md:text-6xl">Nền tảng học tập và quản trị nhà trường toàn diện</h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">Phần mềm học trực tuyến – SCI LMS cung cấp giải pháp học tập cho các nhu cầu từ xa</p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SCI LMS đồng hành cùng nhà trường</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">Giới thiệu về SCI LMS</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground">
              <p>SCI LMS là nền tảng học trực tuyến được xây dựng để kết nối toàn bộ hệ sinh thái giáo dục trên một không gian số thống nhất. Nhà trường có thể tổ chức lớp học, giao bài, quản lý tiến độ và điều hành hoạt động học tập dù học sinh đang ở bất kỳ đâu.</p>
              <p>Với giao diện thân thiện cho ban giám hiệu, giáo viên, nhân viên, học sinh và phụ huynh, SCI LMS giúp thông tin được cập nhật kịp thời, các hoạt động phối hợp trở nên minh bạch và trải nghiệm học tập được cá nhân hóa hơn.</p>
            </div>
            <div className="mt-8 space-y-5">
              {introPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Check className="size-5" aria-hidden="true" /></span>
                  <p className="text-sm leading-7 text-foreground/85">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl pr-3 pb-3">
            <div className="absolute inset-5 rounded-[2rem] bg-accent/25" aria-hidden="true" />
            <Image src={referenceImage} alt="Giáo viên hướng dẫn học sinh trong lớp học" width={1180} height={720} className="relative aspect-[1.35] w-full rounded-[2rem] object-cover shadow-lg" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy5zM0Lm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWRlZmYxIi8+PC9zdmc+" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>

      <section className="bg-muted/35 px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Image src={platformImage} alt="Hệ sinh thái ứng dụng web và mobile của SCI LMS" width={1308} height={720} className="aspect-[1.55] w-full rounded-[2rem] object-cover shadow-sm" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy5zM0Lm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWRlZmYxIi8+PC9zdmc+" loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Nền tảng tương tác đa kênh</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Một nền tảng, nhiều vai trò, cùng một mục tiêu</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">SCI LMS kết nối trải nghiệm quản trị trên web với ứng dụng di động tiện lợi. Mỗi người dùng có một không gian phù hợp để làm việc, học tập và phối hợp hiệu quả.</p>
            <div className="mt-8 space-y-4">
              {["Ứng dụng Web quản trị dành cho Nhà trường, Quản lý, Giáo viên, Nhân viên", "Ứng dụng Web và Mobile dành cho Giáo viên, Nhân viên", "Ứng dụng Mobile dành cho Phụ huynh học sinh"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-foreground/85"><UsersRound className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Giải pháp tổng thể cho nhà trường phổ thông</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">Quản trị liền mạch từ lớp học đến điều hành</h2><p className="mt-5 text-base leading-8 text-muted-foreground">Các phân hệ được thiết kế để dữ liệu được kết nối, quy trình được đơn giản hóa và mọi quyết định dựa trên thông tin rõ ràng.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ icon: Icon, title, text, label, detail, tone }) => (
              <article key={title} className={`group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${tone === "teal" ? "hover:border-primary/40" : tone === "coral" ? "hover:border-chart-1/60" : "hover:border-chart-3/70"}`}>
                <div className={`flex size-12 items-center justify-center rounded-xl ${tone === "teal" ? "bg-primary/10 text-primary" : tone === "coral" ? "bg-chart-1/15 text-chart-1" : "bg-chart-3/15 text-chart-3"}`}><Icon className="size-6" aria-hidden="true" /></div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs"><strong className={tone === "teal" ? "text-primary" : tone === "coral" ? "text-chart-1" : "text-chart-3"}>{label}</strong><span className="text-muted-foreground">{detail}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-16 text-background lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">AI trong giảng dạy từ xa</p><h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">Trợ lực thông minh cho mỗi giờ học</h2></div><p className="max-w-md text-sm leading-7 text-background/70">Đề xuất thiết kế: một “AI learning studio” nền tối, dùng các thẻ chức năng sáng rõ để tạo cảm giác tập trung, tin cậy và hiện đại.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-background/15 bg-background/5 p-6"><div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary-foreground"><Icon className="size-5" aria-hidden="true" /></div><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-background/70">{text}</p></article>)}
          </div>
          <div className="mt-10 flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/10 p-5 text-sm leading-7 text-background/80"><GraduationCap className="size-6 shrink-0 text-primary-foreground" aria-hidden="true" /><span>AI hỗ trợ giáo viên và nhà trường ra quyết định tốt hơn, đồng thời luôn đặt quyền riêng tư, sự an toàn và vai trò chủ động của con người làm trung tâm.</span></div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
