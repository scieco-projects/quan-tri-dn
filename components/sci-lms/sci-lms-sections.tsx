import Image from "next/image"

const channelImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pOWzB4rkfwtyPYIp94xKi9iMDTEr0f.png"
const introImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asHXBwt59ihwBLBqi7e5HzQw96Qqag.png"
const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2VlZjdmNiIvPjwvc3ZnPg=="

const benefits = [
  "Số hóa và cải thiện hiệu quả quản lý, giảng dạy của cán bộ, giáo viên, nhân viên trong nhà trường",
  "Cập nhật thông tin, tương tác đa chiều giữa nhà trường – phụ huynh – giáo viên theo một luồng thống nhất",
  "Giúp phụ huynh đồng hành cùng quá trình học tập, sinh hoạt và sự phát triển của con",
]

function LazyImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} fill loading="lazy" placeholder="blur" blurDataURL={blurDataURL} sizes="(max-width: 768px) 100vw, 50vw" className={className} />
}

export function SciLmsIntro() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-5 text-base font-semibold uppercase tracking-[0.22em] text-teal">Xin trân trọng giới thiệu</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">SCI LMS</h1>
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">SCI LMS AI Learning Studio</p>
          <h2 className="text-balance text-3xl font-bold md:text-5xl">AI đồng hành cùng giáo viên và học sinh trong từng giờ học</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-background/70">AI trong SCI LMS được thiết kế để hỗ trợ những khoảnh khắc quan trọng nhất của lớp học từ xa: giúp thầy cô chuyển hóa tri thức thành nội dung trực quan, đồng thời tạo ra một người bạn học tập luôn sẵn sàng lắng nghe và phản hồi.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-background/15 bg-background/5 transition hover:-translate-y-1 hover:bg-background/10">
            <div className="relative aspect-[16/9] bg-background/10"><LazyImage src="/images/ai-lesson-video.png" alt="AI chuyển nội dung bài giảng thành video học tập" className="object-cover" /></div>
            <div className="p-7 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">01 · AI tạo video bài giảng</p>
              <h3 className="mt-3 text-2xl font-semibold">Biến nội dung của thầy cô thành bài học trực quan</h3>
              <p className="mt-4 text-sm leading-7 text-background/70">Giáo viên chỉ cần cung cấp đề cương, slide, giáo án hoặc nội dung bài giảng đã chuẩn bị. SCI LMS AI có thể phân tích cấu trúc kiến thức, đề xuất kịch bản trình bày, chia bài thành các đoạn ngắn và tạo video học tập dễ theo dõi.</p>
              <p className="mt-3 text-sm leading-7 text-background/70">Video có thể kết hợp lời dẫn, hình ảnh minh họa, tiêu đề chương mục và câu hỏi dừng tương tác. Thầy cô vẫn là người duyệt nội dung cuối cùng, chỉnh sửa giọng điệu và bổ sung ví dụ thực tế trước khi xuất bản cho lớp học.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-background/70"><span className="rounded-full border border-background/15 px-3 py-2">Từ giáo án đến video</span><span className="rounded-full border border-background/15 px-3 py-2">Giáo viên kiểm duyệt</span><span className="rounded-full border border-background/15 px-3 py-2">Học mọi lúc</span></div>
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-background/15 bg-background/5 transition hover:-translate-y-1 hover:bg-background/10">
            <div className="relative aspect-[16/9] bg-background/10"><LazyImage src="/images/ai-live-tutor.png" alt="AI tương tác với học sinh trong lúc học trực tuyến" className="object-cover" /></div>
            <div className="p-7 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">02 · AI tương tác trong lúc học</p>
              <h3 className="mt-3 text-2xl font-semibold">Đặt câu hỏi, nhận gợi ý và học theo cách chủ động</h3>
              <p className="mt-4 text-sm leading-7 text-background/70">Trong khi xem video hoặc đọc tài liệu, học sinh có thể hỏi AI về khái niệm chưa hiểu, yêu cầu giải thích lại bằng cách đơn giản hơn hoặc xin một ví dụ gần gũi. AI trả lời dựa trên nội dung bài học và khuyến khích học sinh tự suy luận thay vì đưa đáp án ngay lập tức.</p>
              <p className="mt-3 text-sm leading-7 text-background/70">AI cũng có thể đặt câu hỏi kiểm tra nhanh, nhận xét câu trả lời và gợi ý bước tiếp theo. Lịch sử tương tác được lưu trong tiến trình học tập để giáo viên biết học sinh đang vướng ở đâu và tiếp tục hỗ trợ bằng sự thấu hiểu của người dạy.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-background/70"><span className="rounded-full border border-background/15 px-3 py-2">Hỏi đáp theo bài học</span><span className="rounded-full border border-background/15 px-3 py-2">Gợi ý từng bước</span><span className="rounded-full border border-background/15 px-3 py-2">Phản hồi tức thì</span></div>
            </div>
          </article>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-background/55">SCI LMS giữ giáo viên ở vị trí trung tâm: AI hỗ trợ tạo nội dung và mở rộng tương tác, còn mục tiêu, phương pháp và quyết định giáo dục luôn thuộc về nhà trường và thầy cô.</p>
      </div>
    </section>
  )
}
