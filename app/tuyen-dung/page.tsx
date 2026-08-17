import Link from "next/link"
import { ArrowRight, Building2, BriefcaseBusiness, CircleDollarSign, UserRound, CalendarClock } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

type JobItem = {
  title: string
  location: string
  employmentType: string
  salary: string
  quantity: string
  deadline: string
  detailHref: string
}

const jobItems: JobItem[] = [
  {
    title: "Chuyên viên kinh doanh phần mềm",
    location: "342 Mỹ Đình, Từ Liêm, Hà Nội",
    employmentType: "Full - time",
    salary: "upto 30 triệu",
    quantity: "02",
    deadline: "30/11/2025",
    detailHref: "https://tringhiatech.vn/vi/tuyen-dung/chuyen-vien-kinh-doanh-phan-mem-c48",
  },
  {
    title: "Manual Tester",
    location: "Hà Nội",
    employmentType: "Full - time",
    salary: "12-20 triệu/tháng",
    quantity: "01",
    deadline: "30/04/2025",
    detailHref: "https://tringhiatech.vn/vi/tuyen-dung/manual-tester-c47",
  },
  {
    title: "Lập trình viên PHP",
    location: "Hà Nội",
    employmentType: "Full - time",
    salary: "Upto $1000/tháng",
    quantity: "01",
    deadline: "31/10/2024",
    detailHref: "https://tringhiatech.vn/vi/tuyen-dung/lap-trinh-vien-php-c46",
  },
  {
    title: "Tuyển Senior Tester",
    location: "Hà Nội",
    employmentType: "Full - time",
    salary: "Từ 15 - 20 triệu / tháng",
    quantity: "03",
    deadline: "26/07/2024",
    detailHref: "https://tringhiatech.vn/vi/tuyen-dung/tuyen-senior-tester-c45",
  },
  {
    title: "Tuyển nhân viên kinh doanh",
    location: "Hà Nội",
    employmentType: "Full - time",
    salary: "Thỏa thuận",
    quantity: "02",
    deadline: "20/04/2024",
    detailHref: "https://tringhiatech.vn/vi/tuyen-dung/tuyen-nhan-vien-kinh-doanh-c44",
  },
]

function JobCard({ job }: { job: JobItem }) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold leading-tight text-foreground">{job.title}</h3>
      <div className="grid gap-3 text-sm leading-6 text-muted-foreground">
        <p className="inline-flex items-center gap-2">
          <Building2 className="size-4" aria-hidden="true" />
          {job.location}
        </p>
        <p className="inline-flex items-center gap-2">
          <BriefcaseBusiness className="size-4" aria-hidden="true" />
          {job.employmentType}
        </p>
        <p className="inline-flex items-center gap-2">
          <CircleDollarSign className="size-4" aria-hidden="true" />
          {job.salary}
        </p>
        <p className="inline-flex items-center gap-2">
          <UserRound className="size-4" aria-hidden="true" />
          {job.quantity}
        </p>
        <p className="inline-flex items-center gap-2">
          <CalendarClock className="size-4" aria-hidden="true" />
          Hạn nộp hồ sơ: {job.deadline}
        </p>
      </div>

      <Link
        href={job.detailHref}
        target="_blank"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
      >
        Xem chi tiết
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  )
}

export default function TuyenDungPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border bg-muted/40 px-6 pb-20 pt-36 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Tuyển dụng</p>
          <h1 className="max-w-4xl text-pretty text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Tuyển dụng
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.18em] text-foreground md:text-3xl">
            Vị trí tuyển dụng
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {jobItems.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm">
            <button className="rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground">1</button>
            <button className="rounded-full border border-transparent px-3 py-2 text-muted-foreground hover:text-foreground">2</button>
            <button className="rounded-full border border-transparent px-3 py-2 text-muted-foreground hover:text-foreground">3</button>
            <button className="rounded-full border border-transparent px-3 py-2 text-muted-foreground hover:text-foreground">{">"}</button>
            <button className="rounded-full border border-transparent px-3 py-2 text-muted-foreground hover:text-foreground">Last ▸</button>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 rounded-3xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
              Chúng tôi có thể giúp gì cho bạn?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Hãy để lại lời nhắn!</h2>
            <p className="mt-4 text-primary-foreground/80">
              Nếu bạn quan tâm cơ hội nghề nghiệp hoặc vị trí tuyển dụng phù hợp, hãy để lại thông tin để đội ngũ Nhân sự liên hệ.
            </p>
          </div>
          <Link
            href="/gioi-thieu#lien-he"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
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
