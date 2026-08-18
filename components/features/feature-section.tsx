"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const imageBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2VlZjdmNiIvPjwvc3ZnPg=="

const features = [
  {
    image: "database.png",
    title: "Quản trị dữ liệu hệ thống",
    description:
      "Quản lý tập trung toàn bộ người dùng, năm học, khối lớp, môn học, hồ sơ học sinh và giáo viên trên một nền tảng thống nhất. Dữ liệu được chuẩn hóa, phân quyền chặt chẽ theo vai trò và đồng bộ tức thời, giúp nhà trường loại bỏ thao tác trùng lặp và luôn có một nguồn thông tin chính xác duy nhất.",
    color: "teal",
    stat: "Toàn diện",
    statLabel: "dữ liệu nhà trường",
  },
  {
    image: "school.png",
    title: "Kết nối nhà trường – phụ huynh",
    description:
      "Cập nhật thông tin, thông báo và tương tác đa chiều nhanh chóng giữa ban giám hiệu, giáo viên và phụ huynh. Mọi thông báo về học tập, sức khỏe và hoạt động của học sinh được gửi đến đúng người, đúng lúc, giúp phụ huynh đồng hành sát sao và nhà trường xây dựng mối liên kết tin cậy với gia đình.",
    color: "coral",
    stat: "3 bên",
    statLabel: "cùng đồng hành",
  },
  {
    image: "study.png",
    title: "Quản lý học tập",
    description:
      "Theo dõi thời khóa biểu, điểm số, điểm danh, nhận xét hằng ngày và toàn bộ quá trình rèn luyện của học sinh. Hệ thống tổng hợp dữ liệu thành biểu đồ trực quan theo tuần, tháng và học kỳ, giúp giáo viên đánh giá tiến bộ kịp thời và học sinh nhìn rõ điểm mạnh, điểm cần cải thiện của mình.",
    color: "gold",
    stat: "360°",
    statLabel: "góc nhìn học sinh",
  },
  {
    image: "multichannel.png",
    title: "Ứng dụng đa nền tảng",
    description:
      "Web quản trị đầy đủ tính năng cho nhà trường và ứng dụng Mobile gọn nhẹ cho giáo viên, nhân viên và phụ huynh. Dữ liệu được đồng bộ theo thời gian thực trên mọi thiết bị, cho phép mỗi vai trò truy cập đúng phần thông tin cần thiết ở bất cứ đâu, ngay cả khi đang di chuyển.",
    color: "teal",
    stat: "Web + App",
    statLabel: "truy cập linh hoạt",
  },
  {
    image: "finance.png",
    title: "Tài chính và dịch vụ học sinh",
    description:
      "Quản lý học phí, tiền ăn bán trú, tuyến xe đưa đón, thực đơn, câu lạc bộ và các dịch vụ hỗ trợ học sinh trên cùng một hệ thống. Các khoản thu được lập phiếu, đối soát và thống kê minh bạch, giúp bộ phận tài chính giảm sai sót thủ công và phụ huynh dễ dàng theo dõi từng khoản đóng góp.",
    color: "coral",
    stat: "Minh bạch",
    statLabel: "vận hành hiệu quả",
  },
  {
    image: "report.png",
    title: "Báo cáo và điều hành",
    description:
      "Ban giám hiệu nắm bắt công việc mọi lúc mọi nơi với hệ thống báo cáo phân tích đa chiều và thông tin cập nhật tức thời. Các chỉ số về học tập, chuyên cần, tài chính và vận hành được tổng hợp thành bảng điều khiển trực quan, hỗ trợ lãnh đạo ra quyết định nhanh chóng dựa trên dữ liệu thực tế.",
    color: "gold",
    stat: "24/7",
    statLabel: "nắm bắt thông tin",
  },
]

const colorClasses = {
  teal: {
    bg: "bg-teal/10",
    text: "text-teal",
    border: "border-teal/20",
    glow: "shadow-teal/5"
  },
  coral: {
    bg: "bg-coral/10",
    text: "text-coral",
    border: "border-coral/20",
    glow: "shadow-coral/5"
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold/20",
    glow: "shadow-gold/5"
  },
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const colors = colorClasses[feature.color as keyof typeof colorClasses]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border hover:border-${feature.color}/30 transition-all duration-300 hover:shadow-xl ${colors.glow}`}
    >
      {/* Image banner */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL={imageBlurDataURL}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

        {/* Stat */}
        <div className={`inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border`}>
          <span className={`text-sm font-bold ${colors.text}`}>{feature.stat}</span>
          <span className="text-xs text-muted-foreground">{feature.statLabel}</span>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10 blur-xl`} />
    </motion.div>
  )
}

export function FeatureSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Angled divider top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background transform -skew-y-2 origin-top-left -translate-y-12" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
Tính năng hệ thống SCI LMS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Giải pháp tổng thể cho{" "}
            <span className="text-teal">nhà trường phổ thông</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Từ quản trị dữ liệu, học tập, tài chính đến tương tác phụ huynh, SCI LMS giúp nhà trường vận hành hiệu quả trên một nền tảng duy nhất.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Angled divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform skew-y-2 origin-bottom-right translate-y-12" />
    </section>
  )
}
