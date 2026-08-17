"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Shield, LineChart, Layers, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Quản trị dữ liệu hệ thống",
    description: "Quản lý tập trung người dùng, năm học, khối lớp, môn học, học sinh và giáo viên trên một nền tảng thống nhất.",
    color: "teal",
    stat: "Toàn diện",
    statLabel: "dữ liệu nhà trường"
  },
  {
    icon: Shield,
    title: "Kết nối nhà trường – phụ huynh",
    description: "Cập nhật thông tin, thông báo và tương tác đa chiều nhanh chóng giữa ban giám hiệu, giáo viên và phụ huynh.",
    color: "coral",
    stat: "3 bên",
    statLabel: "cùng đồng hành"
  },
  {
    icon: LineChart,
    title: "Quản lý học tập",
    description: "Theo dõi thời khóa biểu, điểm số, điểm danh, nhận xét hằng ngày và quá trình rèn luyện của học sinh.",
    color: "gold",
    stat: "360°",
    statLabel: "góc nhìn học sinh"
  },
  {
    icon: Layers,
    title: "Ứng dụng đa nền tảng",
    description: "Web quản trị cho nhà trường và ứng dụng Mobile thuận tiện cho giáo viên, nhân viên, phụ huynh.",
    color: "teal",
    stat: "Web + App",
    statLabel: "truy cập linh hoạt"
  },
  {
    icon: Globe,
    title: "Tài chính và dịch vụ học sinh",
    description: "Quản lý học phí, tiền ăn bán trú, tuyến xe, thực đơn, câu lạc bộ và các dịch vụ hỗ trợ học sinh.",
    color: "coral",
    stat: "Minh bạch",
    statLabel: "vận hành hiệu quả"
  },
  {
    icon: Lock,
    title: "Báo cáo và điều hành",
    description: "Ban giám hiệu nắm bắt công việc mọi lúc mọi nơi với báo cáo phân tích đa chiều và thông tin tức thời.",
    color: "gold",
    stat: "24/7",
    statLabel: "nắm bắt thông tin"
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
      className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-${feature.color}/30 transition-all duration-300 hover:shadow-xl ${colors.glow}`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
        <feature.icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

      {/* Stat */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border`}>
        <span className={`text-sm font-bold ${colors.text}`}>{feature.stat}</span>
        <span className="text-xs text-muted-foreground">{feature.statLabel}</span>
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
Tính năng hệ thống TN EDU
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Giải pháp tổng thể cho{" "}
            <span className="text-teal">nhà trường phổ thông</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Từ quản trị dữ liệu, học tập, tài chính đến tương tác phụ huynh, TN EDU giúp nhà trường vận hành hiệu quả trên một nền tảng duy nhất.
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
