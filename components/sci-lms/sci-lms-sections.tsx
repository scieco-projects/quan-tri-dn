import Image from "next/image"
import { BrainCircuit, MessageSquareText, Sparkles, Target, Video, BarChart3 } from "lucide-react"

const channelImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pOWzB4rkfwtyPYIp94xKi9iMDTEr0f.png"
const introImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asHXBwt59ihwBLBqi7e5HzQw96Qqag.png"
const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2VlZjdmNiIvPjwvc3ZnPg=="

const benefits = [
  "Số hóa và cải thiện hiệu quả quản lý, giảng dạy của cán bộ, giáo viên, nhân viên trong nhà trường",
  "Cập nhật thông tin, tương tác đa chiều giữa nhà trường – phụ huynh – giáo viên theo một luồng thống nhất",
  "Giúp phụ huynh đồng hành cùng quá trình học tập, sinh hoạt và sự phát triển của con",
]

const aiFeatures = [
  { icon: BrainCircuit, title: "Trợ giảng AI 24/7", text: "Trợ lý học tập giải đáp câu hỏi theo nội dung môn học, gợi ý từng bước và chuyển các vấn đề cần hỗ trợ sâu hơn đến giáo viên." },
  { icon: Target, title: "Cá nhân hóa lộ trình", text: "Phân tích kết quả, tốc độ hoàn thành và lỗi thường gặp để đề xuất bài tập vừa sức, giúp mỗi học sinh tiến bộ theo nhịp riêng." },
  { icon: Sparkles, title: "Tạo học liệu nhanh", text: "Giáo viên có thể tạo dàn ý bài giảng, câu hỏi kiểm tra, phiếu học tập và nội dung ôn luyện từ mục tiêu dạy học đã chọn." },
  { icon: BarChart3, title: "Cảnh báo sớm", text: "Tổng hợp dữ liệu học tập từ xa để nhận diện học sinh có dấu hiệu giảm tương tác, chậm tiến độ hoặc cần được kết nối với gia đình." },
]

function LazyImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} fill loading="lazy" placeholder="blur" blurDataURL={blurDataURL} sizes="(max-width: 768px) 100vw, 50vw" className={className} />
}

export function SciLmsIntro() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">Giới thiệu về SCI LMS</p>
          <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">Phần mềm học trực tuyến – SCI LMS cung cấp giải pháp học tập cho các nhu cầu từ xa</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Một nền tảng đồng hành cùng nhà trường trong quá trình chuyển đổi số, kết nối hoạt động quản lý, giảng dạy, học tập và phối hợp với phụ huynh trong một trải nghiệm liền mạch.</p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">SCI LMS giúp nhà trường vận hành chủ động hơn</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>SCI LMS giúp nhà trường quản lý tập trung thông tin về học sinh, giáo viên, lớp học, lịch học, điểm số và nhiều dữ liệu khác của quá trình giảng dạy. Thay vì phân tán thông tin trên nhiều công cụ, nhà trường có thể theo dõi toàn bộ hoạt động trên một nền tảng thống nhất, rõ ràng và dễ sử dụng.</p>
              <p>Trong môi trường học tập từ xa, sự kết nối giữa giáo viên, học sinh và phụ huynh càng trở nên quan trọng. SCI LMS hỗ trợ gửi thông báo, giao nhiệm vụ, cập nhật tiến độ và trao đổi hai chiều, để phụ huynh nắm bắt kịp thời tình hình học tập của con và giáo viên có thêm dữ liệu để điều chỉnh phương pháp giảng dạy.</p>
              <p>Nền tảng được thiết kế để giảm tải công việc thủ công, tăng tính minh bạch trong vận hành và tạo ra trải nghiệm học tập linh hoạt trên cả máy tính lẫn thiết bị di động.</p>
            </div>
            <ul className="mt-8 space-y-5">
              {benefits.map((benefit) => <li key={benefit} className="flex gap-4 text-sm leading-7 text-foreground"><span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal"><span aria-hidden="true">✓</span></span><span>{benefit}</span></li>)}
            </ul>
          </div>
          <div className="relative aspect-[1.15] overflow-hidden rounded-[2rem] bg-muted shadow-xl shadow-coral/10">
            <LazyImage src={introImage} alt="Giáo viên hướng dẫn học sinh trong lớp học" className="object-cover" />
            <div className="absolute -bottom-1 -left-1 h-24 w-2/3 rounded-tr-[2rem] bg-coral/20" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div className="relative order-2 aspect-[1.28] overflow-hidden rounded-[2rem] bg-muted lg:order-1">
            <LazyImage src={channelImage} alt="Thiết bị laptop, máy tính bảng và điện thoại kết nối nền tảng SCI LMS" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-teal">Một hệ sinh thái, nhiều điểm chạm</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Nền tảng tương tác đa kênh</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">SCI LMS kết nối đúng vai trò với đúng công cụ, giúp mỗi nhóm người dùng có một cách tiếp cận thuận tiện mà vẫn chia sẻ cùng một nguồn dữ liệu.</p>
            <div className="mt-8 space-y-6">
              {[
                [Video, "Ứng dụng Web quản trị", "Dành cho nhà trường, ban giám hiệu, giáo viên và nhân viên theo dõi, xử lý công việc tập trung."],
                [MessageSquareText, "Web và Mobile cho đội ngũ", "Giáo viên và nhân viên cập nhật hoạt động, giao tiếp nội bộ và phản hồi nhanh ngay cả khi đang di chuyển."],
                [Sparkles, "Mobile cho phụ huynh học sinh", "Tra cứu lịch học, điểm số, thông báo và đồng hành cùng con trong từng bước học tập."],
              ].map(([Icon, title, text]) => <div key={title as string} className="flex gap-4"><div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><Icon className="size-5" aria-hidden="true" /></div><div><h3 className="font-semibold text-foreground">{title as string}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{text as string}</p></div></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AiTeachingSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">SCI LMS AI Learning Studio</p><h2 className="text-balance text-3xl font-bold md:text-5xl">AI biến lớp học từ xa thành trải nghiệm chủ động</h2></div>
          <p className="max-w-2xl text-base leading-8 text-background/70">AI không thay thế giáo viên. AI giúp giáo viên có thêm thời gian cho tương tác sâu, giúp học sinh được hỗ trợ đúng lúc và giúp nhà trường nhìn thấy những tín hiệu quan trọng trong hành trình học tập.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aiFeatures.map(({ icon: Icon, title, text }, index) => <article key={title} className="rounded-2xl border border-background/15 bg-background/5 p-6 transition hover:-translate-y-1 hover:bg-background/10"><div className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold"><Icon className="size-5" aria-hidden="true" /></div><p className="mt-8 text-xs font-semibold uppercase tracking-widest text-background/45">0{index + 1}</p><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-background/65">{text}</p></article>)}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm text-background/70"><span className="rounded-full border border-background/15 px-4 py-2">Có kiểm soát của giáo viên</span><span className="rounded-full border border-background/15 px-4 py-2">Dữ liệu theo vai trò</span><span className="rounded-full border border-background/15 px-4 py-2">Học tập lấy học sinh làm trung tâm</span></div>
      </div>
    </section>
  )
}
