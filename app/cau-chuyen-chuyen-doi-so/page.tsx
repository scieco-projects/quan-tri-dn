import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

const featuredProjects = [
  "Giải pháp quản lý đào tạo và khảo thí - có ứng dụng AI",
  "Ứng dụng AI trong phân tích và viết hồ sơ dự thầu",
  "Triển khai phần mềm TNM cho doanh nghiệp sản xuất gỗ",
  "Xây dựng Cơ sở dữ liệu và phần mềm quản lý đấu thầu cho công ty Dược",
  "Ứng dụng AI/LLM xây dựng hệ thống phân loại ngành nghề tại Việt Nam",
  "Xây dựng cổng thông tin tuyển dụng",
  "Xây dựng cổng thông tin Đảm bảo chất lượng và xếp hạng Đại học",
  "Triển khai TNM MES - Quản lý sản xuất cho nhà máy kính",
  "Xây dựng cơ sở dữ liệu cho ngành kiểm lâm có ứng dụng trí tuệ nhân tạo (AI)",
  "Xây dựng cổng thông tin cho một hiệp hội về nhân sự tại Việt Nam",
  "Xây dựng cơ sở dữ liệu về nhà máy thủy điện và bản đồ lũ hạ du",
  "Chuyển đổi số cho nhà trường phổ thông liên cấp",
  "Tư vấn giải pháp chuyển đổi số cho tập đoàn Sơn",
  "Dự án website tuyển dụng cho thị trường Nhật Bản",
  "Dự án hóa đơn điện tử cho khách hàng Nhật",
  "Dự án quản lý Bảo dưỡng và sửa chữa thiết bị cho một doanh nghiệp sản xuất hàng phụ trợ",
  "Dự án e-Learning cho khách hàng Mỹ",
]

export default function CauChuyenChuyenDoiSoPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border bg-muted/40 px-6 pb-20 pt-36 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Câu chuyện chuyển đổi số</p>
          <h1 className="max-w-4xl text-pretty text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Câu chuyện chuyển đổi số thành công
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">
            Dự án tiêu biểu thể hiện hành trình cùng doanh nghiệp ứng dụng công nghệ, tối ưu quy trình và tạo giá trị vận hành bền vững.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">DỰ ÁN TIÊU BIỂU</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold leading-7 text-foreground">{project}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Chúng tôi có thể giúp gì cho bạn?</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Hãy để lại lời nhắn để nhận tư vấn</h2>
          <p className="mt-4 text-primary-foreground/80">
            Đội ngũ Trí Nghĩa sẽ liên hệ để tư vấn giải pháp phù hợp cho bài toán chuyển đổi số của bạn.
          </p>
          <Link
            href="/gioi-thieu#lien-he"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Gửi liên hệ
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
