import Image from "next/image"
import { BrainCircuit, Sparkles, Target, BarChart3 } from "lucide-react"

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
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-5 text-base font-semibold uppercase tracking-[0.22em] text-teal">SCI LMS / GIỚI THIỆU</p>
          <h1 className="text-balance text-5xl font-bold leading-[1.08] text-foreground md:text-7xl lg:text-8xl">Giới thiệu về SCI LMS</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">Phần mềm học trực tuyến – SCI LMS cung cấp giải pháp học tập cho các nhu cầu từ xa</p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">SCI LMS giúp nhà trường vận hành chủ động hơn</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>SCI LMS giúp nhà trường quản lý tập trung thông tin về học sinh, giáo viên, lớp học, lịch học, điểm số và nhiều dữ liệu khác của quá trình giảng dạy. Thay vì phân tán thông tin trên nhiều công cụ, nhà trường có thể theo dõi toàn bộ hoạt động trên một nền tảng thống nhất, rõ ràng và dễ sử dụng.</p>
              <p>Trong môi trường học tập từ xa, sự kết nối giữa giáo viên, học sinh và phụ huynh càng trở nên quan trọng. SCI LMS hỗ trợ gửi thông báo, giao nhiệm vụ, cập nhật tiến độ và trao đổi hai chiều, để phụ huynh nắm bắt kịp thời tình hình học tập của con và giáo viên có thêm dữ liệu để điều chỉnh phương pháp giảng dạy.</p>
              <p>Nền tảng được thiết kế để giảm tải công việc thủ công, tăng tính minh bạch trong vận hành và tạo ra trải nghiệm học tập linh hoạt trên cả máy tính lẫn thiết bị di động. Mỗi quy trình từ tiếp nhận thông tin, tổ chức lớp học, giao bài, theo dõi kết quả đến trao đổi với gia đình đều được liên kết thành một dòng chảy rõ ràng.</p>
              <p>Với SCI LMS, nhà trường có thể từng bước chuẩn hóa cách làm việc mà không làm mất đi sự gần gũi trong giáo dục. Dữ liệu được trình bày theo đúng vai trò của từng người dùng, giúp ban giám hiệu có góc nhìn tổng thể, giáo viên tập trung vào chuyên môn, học sinh học tập chủ động và phụ huynh đồng hành thuận tiện hơn.</p>
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
                ["/images/channel-admin.png", "Ứng dụng Web quản trị", "Dành cho nhà trường, ban giám hiệu, giáo viên và nhân viên theo dõi, xử lý công việc tập trung."],
                ["/images/channel-staff.png", "Web và Mobile cho đội ngũ", "Giáo viên và nhân viên cập nhật hoạt động, giao tiếp nội bộ và phản hồi nhanh ngay cả khi đang di chuyển."],
                ["/images/channel-parent.png", "Mobile cho phụ huynh học sinh", "Tra cứu lịch học, điểm số, thông báo và đồng hành cùng con trong từng bước học tập."],
              ].map(([image, title, text]) => <div key={title} className="flex gap-4"><div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-muted"><LazyImage src={image} alt={title} className="object-cover" /></div><div><h3 className="font-semibold text-foreground">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}
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
