import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

type NewsItem = {
  title: string
  date: string
  category: string
  excerpt: string
  href?: string
}

const latestNews: NewsItem[] = [
  {
    category: "Tin công nghệ",
    date: "25/11/2025",
    title: "Gemini có mặt trên Android Auto trong vai trò đồng hành thông minh mới trên xe hơi",
    excerpt:
      "Cập nhật xu hướng công nghệ nổi bật giúp doanh nghiệp và người dùng cá nhân khai thác sức mạnh AI ngay trên thiết bị di động trong hành trình di chuyển.",
    href: "/tin-tuc/gemini-android-auto",
  },
  {
    category: "Tin công nghệ",
    date: "03/02/2026",
    title: "Quản lý kho thông minh với công nghệ số hóa quy trình vận hành nội bộ",
    excerpt:
      "Bài viết hướng dẫn cách ứng dụng công nghệ để theo dõi tồn kho, tối ưu luồng xuất nhập và kiểm soát nguồn lực trong bối cảnh doanh nghiệp phát triển nhanh.",
    href: "/tin-tuc/quan-ly-kho-thong-minh",
  },
  {
    category: "Tin hoạt động",
    date: "10/03/2026",
    title: "Chuyển đổi số trường phổ thông liên cấp thông qua nền tảng dữ liệu thống nhất",
    excerpt:
      "Hành trình triển khai giải pháp số hóa quy trình quản trị trường học giúp rút ngắn thời gian xử lý dữ liệu và nâng cao chất lượng vận hành.",
    href: "/tin-tuc/chuyen-doi-so-truong-pho-thong",
  },
  {
    category: "Tin công nghệ",
    date: "07/04/2026",
    title: "Chuyển đổi số cho nhà máy sản xuất cơ khí: Tối ưu hóa vận hành theo thời gian thực",
    excerpt:
      "Phần mềm quản lý sản xuất giúp doanh nghiệp cơ khí theo dõi tiến độ, chi phí và chất lượng theo từng công đoạn, giảm sai sót và nâng hiệu suất.",
    href: "/tin-tuc/chuyen-doi-so-nha-may-san-xuat-co-khi",
  },
]

const sectionTabs = [
  { label: "Tin công nghệ", href: "#tin-cong-nghe", key: "tin-cong-nghe" },
  { label: "Hoạt động nội bộ", href: "#hoat-dong-noi-bo", key: "hoat-dong-noi-bo" },
  { label: "Tin hoạt động", href: "#tin-hoat-dong", key: "tin-hoat-dong" },
]

const newsByCategory: Record<string, NewsItem[]> = {
  "tin-cong-nghe": [
    {
      category: "Tin công nghệ",
      date: "25/11/2025",
      title: "Gemini có mặt trên Android Auto trong vai trò đồng hành thông minh mới trên xe hơi",
      excerpt: "Cập nhật xu hướng công nghệ AI trong môi trường di chuyển và trải nghiệm người dùng.",
      href: "/tin-tuc/gemini-android-auto",
    },
    {
      category: "Tin công nghệ",
      date: "05/04/2026",
      title: "Doanh nghiệp SME's thương mại tăng tốc vận hành nhờ chuyển đổi số",
      excerpt:
        "Phân tích các bài học triển khai nhanh và quản trị dữ liệu cho doanh nghiệp vừa và nhỏ trong thời điểm thị trường cạnh tranh cao.",
      href: "/tin-tuc/sme-commerce-software",
    },
    {
      category: "Tin công nghệ",
      date: "07/04/2026",
      title: "Chuyển đổi số cho nhà máy SX cơ khí – Giảm chi phí, tăng chất lượng",
      excerpt: "Giải pháp số hóa dây chuyền sản xuất gắn với tối ưu hóa công đoạn lập kế hoạch và theo dõi thiết bị theo thời gian thực.",
      href: "/tin-tuc/chuyen-doi-so-nha-may-sx-co-khi",
    },
    {
      category: "Tin công nghệ",
      date: "03/02/2026",
      title: "Quản lý kho thông minh: Tăng tốc kiểm soát vật tư, nhân công và tiến độ",
      excerpt: "Hệ thống số giúp doanh nghiệp trực quan hóa chỉ số vận hành, phát hiện lệch lạc kịp thời và tối ưu chi phí.",
      href: "/tin-tuc/quan-ly-kho-thong-minh",
    },
  ],
  "hoat-dong-noi-bo": [
    {
      category: "Hoạt động nội bộ",
      date: "06/10/2025",
      title: "Trung Thu 2025 – Mùa Đoàn Viên Ấm Áp Tại TNT",
      excerpt: "Những khoảnh khắc đáng nhớ trong dịp lễ đoàn viên và các hoạt động gắn kết tập thể tại Trí Nghĩa.",
      href: "/tin-tuc/trung-thu-2025-doan-vien-tam-am-ap-tai-tnt",
    },
    {
      category: "Hoạt động nội bộ",
      date: "25/08/2025",
      title: "THÔNG BÁO LỊCH NGHỈ LỄ QUỐC KHÁNH",
      excerpt:
        "Cập nhật thời gian nghỉ lễ, phối hợp công việc và hướng dẫn điều phối nhân sự nội bộ trong dịp Quốc Khánh 2/9.",
      href: "/tin-tuc/thong-bao-lich-nghi-le-quoc-khanh-0209",
    },
    {
      category: "Hoạt động nội bộ",
      date: "07/03/2025",
      title: "Chúc mừng Ngày Quốc tế Phụ nữ 08/03",
      excerpt:
        "Những lời chúc và hoạt động tri ân dành cho toàn thể cán bộ nhân viên đang cùng phát triển Trí Nghĩa mỗi ngày.",
      href: "/tin-tuc/chuc-mung-ngay-quoc-te-phu-nu",
    },
    {
      category: "Hoạt động nội bộ",
      date: "03/02/2025",
      title: "KHAI XUÂN PHƠI PHỚI – SINH NHẬT RẠNG NGỜI",
      excerpt: "Không khí đầu năm và chương trình chia sẻ, kết nối cùng nhau trong không gian làm việc sáng tạo của TNT.",
      href: "/tin-tuc/khai-xuan-phoi-phoi-sinh-nhat-rang-ngoi",
    },
  ],
  "tin-hoat-dong": [
    {
      category: "Tin hoạt động",
      date: "17/10/2024",
      title: "CHÀO MỪNG NGÀY PHỤ NỮ VIỆT NAM 20/10",
      excerpt: "Chuỗi hoạt động tri ân, tặng hoa, và những trải nghiệm dành cho hội viên nội bộ trong ngày lễ đặc biệt này.",
      href: "/tin-tuc/chao-mung-ngay-phu-nu-viet-nam-2010",
    },
    {
      category: "Tin hoạt động",
      date: "15/01/2025",
      title: "Hành Trình “TỔNG KẾT 2024” – Những Khoảnh Khắc Đáng Nhớ",
      excerpt: "Tổng kết một năm hoạt động với các mốc quan trọng và bài học chuyển đổi số từ nhiều dự án tiêu biểu.",
      href: "/tin-tuc/tong-ket-2024-khoanh-khac-dang-nho",
    },
  ],
}

function SectionHeading({ title, actionHref }: { title: string; actionHref: string }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 className="text-2xl font-bold uppercase tracking-[0.18em] text-foreground md:text-3xl">{title}</h2>
      <Link
        href={actionHref}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
      >
        Xem tất cả
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  )
}

function NewsListItem({ post }: { post: NewsItem }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{post.category}</p>
      <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarDays className="size-4" aria-hidden="true" />
        {post.date}
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-foreground">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
      {post.href ? (
        <Link href={post.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
          Đọc thêm
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  )
}

export default function TinTucPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border bg-muted/40 px-6 pb-16 pt-36 lg:px-12 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Tin tức</p>
          <h1 className="max-w-4xl text-pretty text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Tin tức công nghệ & hoạt động của Trí Nghĩa
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">
            Tổng hợp bài viết mới, hoạt động nội bộ và các tin chuyển đổi số nổi bật từ cộng đồng doanh nghiệp cùng hành trình của TNT.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {sectionTabs.map((tab) => (
              <Link
                key={tab.key}
                href={tab.href}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="bai-viet-moi" className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Bài Viết Mới</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-[1.35fr_1fr]">
            <article className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{latestNews[0].category}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="size-4" aria-hidden="true" />
                {latestNews[0].date}
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-foreground md:text-3xl">{latestNews[0].title}</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">{latestNews[0].excerpt}</p>
              <Link href={latestNews[0].href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                Đọc thêm
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>

            <div className="grid gap-4">
              {latestNews.slice(1, 4).map((post) => (
                <NewsListItem key={post.title} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tin-cong-nghe" className="bg-muted/40 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Tin công nghệ" actionHref="/tin-tuc/#tin-cong-nghe" />
          <div className="grid gap-4 md:grid-cols-2">
            {newsByCategory["tin-cong-nghe"].map((post) => (
              <NewsListItem key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section id="hoat-dong-noi-bo" className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Hoạt động nội bộ" actionHref="/tin-tuc/#hoat-dong-noi-bo" />
          <div className="grid gap-4 md:grid-cols-2">
            {newsByCategory["hoat-dong-noi-bo"].map((post) => (
              <NewsListItem key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section id="tin-hoat-dong" className="bg-muted/40 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Tin hoạt động" actionHref="/tin-tuc/#tin-hoat-dong" />
          <div className="grid gap-4 md:grid-cols-2">
            {newsByCategory["tin-hoat-dong"].map((post) => (
              <NewsListItem key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
