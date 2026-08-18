import Image from "next/image"

const channelImage = "/multichannel.png"
const introImage = "/scilms.png"
const workflowImage = "/workflow.png"
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
              <p>SCI LMS là nền tảng quản lý học tập tập trung, giúp nhà trường theo dõi thống nhất thông tin về học sinh, giáo viên, lớp học, lịch học và điểm số thay vì phân tán trên nhiều công cụ khác nhau. Nền tảng đặc biệt hữu ích trong học tập từ xa nhờ khả năng gửi thông báo, giao bài, cập nhật tiến độ và trao đổi hai chiều — giúp phụ huynh nắm tình hình học tập của con kịp thời, đồng thời cung cấp dữ liệu để giáo viên điều chỉnh phương pháp dạy.</p>
              <p>SCI LMS giúp giảm việc thủ công, tăng minh bạch vận hành, và mang lại trải nghiệm linh hoạt trên cả máy tính và di động, liên kết toàn bộ quy trình từ tiếp nhận thông tin đến trao đổi với gia đình thành một dòng chảy thống nhất. Nhờ đó, nhà trường có thể chuẩn hóa cách làm việc mà vẫn giữ được sự gần gũi trong giáo dục: mỗi vai trò — ban giám hiệu, giáo viên, học sinh, phụ huynh — đều có góc nhìn dữ liệu phù hợp với nhu cầu riêng của mình.</p>
            </div>
            <ul className="mt-8 space-y-5">
              {benefits.map((benefit) => <li key={benefit} className="flex gap-4 text-sm leading-7 text-foreground"><span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal"><span aria-hidden="true">✓</span></span><span>{benefit}</span></li>)}
            </ul>
          </div>
          <div className="relative aspect-[1.15] overflow-hidden rounded-[2rem] bg-muted shadow-xl shadow-coral/10">
            <LazyImage src={introImage} alt="Giao diện nền tảng quản lý học tập SCI LMS" className="object-cover" />
            <div className="absolute -bottom-1 -left-1 h-24 w-2/3 rounded-tr-[2rem] bg-coral/20" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div className="relative order-2 aspect-[1.28] overflow-hidden rounded-[2rem] bg-muted lg:order-1">
            <LazyImage src={channelImage} alt="Nền tảng SCI LMS trên nhiều thiết bị: web quản trị, máy tính bảng và điện thoại" className="object-cover" />
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

const featureGroups = [
  {
    title: "Quản trị dữ liệu hệ thống",
    subtitle: "Ứng dụng Web quản trị",
    items: [
      "Quản lý Người dùng",
      "Quản lý Năm học",
      "Quản lý Khối học",
      "Quản lý Lớp học",
      "Quản lý Môn học",
      "Quản lý Thông tin học sinh",
      "Quản lý Thời khoá biểu",
      "Quản lý Điểm số học sinh",
      "Quản lý Tổ/nhóm giáo viên",
      "Quản lý Thông tin giáo viên",
      "QL Câu lạc bộ/Kỹ năng sống",
      "Quản lý Học phí",
      "Quản lý Thông tin tuyến xe",
      "Quản lý Danh sách món ăn",
      "Quản lý Thực đơn tuần",
      "Quản lý Thông tin phản hồi",
      "Quản lý Tin tức, sự kiện",
      "Báo cáo",
    ],
  },
  {
    title: "Ứng dụng di động dành cho Phụ huynh",
    subtitle: "Mobile cho phụ huynh học sinh",
    items: [
      "Theo dõi Điểm danh",
      "Xin nghỉ phép cho học sinh",
      "Theo dõi lịch học hàng ngày",
      "Theo dõi thực đơn hàng ngày",
      "Theo dõi hoạt động các CLB",
      "Theo dõi lịch lớp kỹ năng sống",
      "Theo dõi Y tế & Tâm lý",
      "Thông tin Xe đưa đón",
      "Thông báo Học phí",
      "Tương tác ý kiến cho GVCN & BGH",
      "Nhận xét Hàng ngày",
      "Thông báo, Sự kiện",
    ],
  },
  {
    title: "Ứng dụng di động dành cho Giáo viên",
    subtitle: "Web và Mobile cho đội ngũ",
    items: [
      "Lập kế hoạch Giảng dạy",
      "Cập nhật báo giảng hàng ngày",
      "Cập nhật Sổ ghi đầu bài",
      "Cập nhật Đăng ký lớp học",
      "Quản lý Giáo án",
      "Quản lý các Sổ chuyên môn",
      "Đề xuất Nghỉ phép",
      "Nhận xét cho học sinh",
    ],
  },
]

const advantages = [
  {
    audience: "Đối với nhà trường",
    points: [
      "Nâng cao hiệu quả quản lý, giảm chi phí nhân sự, giảm chi phí tin nhắn SMS",
      "Số hóa toàn bộ công tác quản lý trường học: thông tin học sinh, giáo viên, nhân viên, tuyến xe, tài chính",
      "Thuận tiện tương tác và trao đổi thông tin hai chiều giữa nhà trường – giáo viên – phụ huynh",
      "Quản lý tài chính: học phí, tiền ăn bán trú, tiền đưa đón, CLB kỹ năng,…",
      "Ban giám hiệu nắm bắt công việc mọi lúc mọi nơi, tiết kiệm thời gian báo cáo từ cấp dưới",
      "Cung cấp báo cáo phân tích đa chiều",
    ],
  },
  {
    audience: "Đối với cán bộ, giáo viên",
    points: [
      "Tiết kiệm thời gian quản lý lớp, quản lý học sinh",
      "Quản lý lớp học dễ dàng: Chuyên cần, Điểm, Trao đổi, Y tế, Tâm lý …",
      "Tương tác với phụ huynh nhanh chóng: trao đổi, thông báo, nhắn tin",
      "Tiết kiệm thời gian xử lý công việc",
      "Cung cấp báo cáo phân tích đa chiều",
    ],
  },
  {
    audience: "Đối với phụ huynh",
    points: [
      "Phụ huynh có đầy đủ thông tin về quá trình học tập và rèn luyện của con",
      "Thuận tiện tương tác, trao đổi thông tin với giáo viên và nhà trường",
      "Cập nhật toàn bộ hoạt động học tập, tình trạng sức khỏe, tâm lý của học sinh tại trường",
      "Cập nhật các tin tức, sự kiện từ nhà trường nhanh chóng",
    ],
  },
]

export function SystemFeaturesSection() {
  return (
    <section id="giai-phap" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">Tính năng hệ thống SCI LMS</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">Giải pháp tổng thể cho quản lý nhà trường phổ thông</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">SCI LMS cung cấp bộ tính năng đầy đủ cho từng vai trò — từ quản trị dữ liệu tập trung đến ứng dụng di động dành cho phụ huynh và giáo viên.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featureGroups.map((group) => (
            <div key={group.title} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{group.subtitle}</p>
              <h3 className="mt-3 text-xl font-bold text-foreground">{group.title}</h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-xs text-teal" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="dong-hanh" className="mx-auto mb-12 mt-24 max-w-3xl scroll-mt-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">Ưu điểm nổi bật</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">SCI LMS đồng hành cùng nhà trường &amp; phụ huynh</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {advantages.map((group) => (
            <div key={group.audience} className="flex flex-col rounded-3xl bg-muted p-8">
              <h3 className="text-lg font-bold text-foreground">{group.audience}</h3>
              <div className="mt-3 h-1 w-12 rounded-full bg-coral/60" aria-hidden="true" />
              <ul className="mt-6 space-y-4">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-coral/15 text-xs text-coral" aria-hidden="true">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AiTeachingSection() {
  return (
    <div className="bg-foreground text-background">
      <section className="relative overflow-hidden pt-20 lg:pt-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">SCI LMS AI Learning Studio</p>
            <h2 className="text-balance text-3xl font-bold md:text-5xl">AI đồng hành cùng giáo viên và học sinh trong từng giờ học</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-background/70">AI trong SCI LMS được thiết kế để hỗ trợ những khoảnh khắc quan trọng nhất của lớp học từ xa: giúp thầy cô chuyển hóa tri thức thành nội dung trực quan, đồng thời tạo ra một người bạn học tập luôn sẵn sàng lắng nghe và phản hồi.</p>
          </div>
        </div>
      </section>

      {/* Section 1: AI tạo video bài giảng */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-background/15 bg-background/10 shadow-2xl shadow-black/40">
            <video
              src="/demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              tabIndex={-1}
              aria-label="Video minh họa AI tạo video bài giảng trong SCI LMS"
              className="pointer-events-none h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">01 · AI tạo video bài giảng</p>
            <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Biến nội dung của thầy cô <br/> thành bài học trực quan</h3>
            <p className="mt-5 text-sm leading-7 text-background/70">Giáo viên chỉ cần cung cấp đề cương, slide, giáo án hoặc nội dung bài giảng đã chuẩn bị. SCI LMS AI có thể phân tích cấu trúc kiến thức, đề xuất kịch bản trình bày, chia bài thành các đoạn ngắn và tạo video học tập dễ theo dõi, phù hợp với nhịp độ tiếp thu của học sinh.</p>
            <p className="mt-4 text-sm leading-7 text-background/70">Video có thể kết hợp lời dẫn, hình ảnh minh họa, tiêu đề chương mục và câu hỏi dừng tương tác để kiểm tra mức độ hiểu bài. Thầy cô vẫn là người duyệt nội dung cuối cùng: chỉnh sửa giọng điệu, bổ sung ví dụ thực tế và điều chỉnh mạch bài trước khi xuất bản cho lớp học.</p>
            <p className="mt-4 text-sm leading-7 text-background/70">Nhờ đó, một buổi soạn giảng nhiều giờ có thể rút ngắn đáng kể, trong khi chất lượng và tính nhất quán của học liệu được nâng lên. Học sinh được học lại bất cứ lúc nào, tua đúng đoạn còn vướng và không bị bỏ lại phía sau khi vắng mặt.</p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs text-background/70"><span className="rounded-full border border-background/15 px-3 py-2">Từ giáo án đến video</span><span className="rounded-full border border-background/15 px-3 py-2">Giáo viên kiểm duyệt</span><span className="rounded-full border border-background/15 px-3 py-2">Học mọi lúc</span></div>
          </div>
        </div>
      </section>

      {/* Section 2: AI tương tác trong lúc học */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">02 · AI tương tác trong lúc học</p>
            <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Đặt câu hỏi, nhận gợi ý và học theo <br/> cách chủ động</h3>
            <p className="mt-5 text-sm leading-7 text-background/70">Trong khi xem video hoặc đọc tài liệu, học sinh có thể hỏi AI về khái niệm chưa hiểu, yêu cầu giải thích lại bằng cách đơn giản hơn hoặc xin một ví dụ gần gũi. AI trả lời dựa trên nội dung bài học và khuyến khích học sinh tự suy luận thay vì đưa đáp án ngay lập tức.</p>
            <p className="mt-4 text-sm leading-7 text-background/70">AI cũng có thể đặt câu hỏi kiểm tra nhanh, nhận xét câu trả lời và gợi ý bước tiếp theo, tạo thành một vòng lặp học tập chủ động ngay trong lúc học. Mỗi tương tác được ghi lại trong tiến trình học tập để giáo viên biết học sinh đang vướng ở đâu.</p>
            <p className="mt-4 text-sm leading-7 text-background/70">Từ bức tranh tổng thể đó, giáo viên tiếp tục hỗ trợ bằng sự thấu hiểu của người dạy: giao thêm bài luyện phù hợp, trò chuyện với những em cần quan tâm và điều chỉnh bài giảng cho cả lớp. AI mở rộng khả năng đồng hành, còn quyết định sư phạm vẫn thuộc về thầy cô.</p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs text-background/70"><span className="rounded-full border border-background/15 px-3 py-2">Hỏi đáp theo bài học</span><span className="rounded-full border border-background/15 px-3 py-2">Gợi ý từng bước</span><span className="rounded-full border border-background/15 px-3 py-2">Phản hồi tức thì</span></div>
          </div>
          <div className="relative order-2 aspect-video overflow-hidden rounded-3xl border border-background/15 bg-background/10 shadow-2xl shadow-black/40 lg:order-1">
            <LazyImage src={workflowImage} alt="Sơ đồ luồng tương tác giữa học sinh và AI trong lúc học" className="object-cover" />
          </div>
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-background/55">SCI LMS giữ giáo viên ở vị trí trung tâm: AI hỗ trợ tạo nội dung và mở rộng tương tác, còn mục tiêu, phương pháp và quyết định giáo dục luôn thuộc về nhà trường và thầy cô.</p>
        </div>
        <div className="pb-20 lg:pb-28" aria-hidden="true" />
      </section>
    </div>
  )
}
