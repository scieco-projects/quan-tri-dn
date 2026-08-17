 "use client"

import { FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const heroBackground = "https://tringhiatech.vn/public/uploads/files/%E1%BA%A3nh%20b%C3%ACa%20trang%20t%C4%A9nh/Background.png"
const contactImage = "https://tringhiatech.vn/public/frontend/images/img-contact.png"
const ctaBackground = "https://tringhiatech.vn/public/frontend/img/icon_serrvice/Li%C3%AAn%20h%E1%BB%87.png"

type ContactFormState = {
  name: string
  email: string
  phone: string
  message: string
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const data: ContactFormState = {
    name: String(formData.get("your_name") || "").trim(),
    email: String(formData.get("your_email") || "").trim(),
    phone: String(formData.get("your_phone") || "").trim(),
    message: String(formData.get("your_messages") || "").trim(),
  }

  if (!data.name || !data.email || !data.phone || !data.message) {
    alert("Vui lòng điền đầy đủ các trường bắt buộc.")
    return
  }

  alert("Cảm ơn bạn! Chúng tôi đã nhận được thông tin.")
  event.currentTarget.reset()
}

export default function LienHePage() {
  return (
    <main className="relative min-h-screen bg-background font-sans">
      <Navbar />

      <section
        className="mt-16 border-b border-border"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/35 px-6 py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-pretty text-4xl font-bold uppercase tracking-[0.16em] text-background md:text-6xl">
              Liên hệ
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Liên hệ</p>
            <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">Liên hệ</h2>
            <p className="leading-8 text-muted-foreground">
              Mọi thắc mắc và yêu cầu hỗ trợ từ Trí Nghĩa, vui lòng để lại thông tin tại đây. Chúng tôi sẽ xem xét và gửi phản hồi sớm nhất.
            </p>
            <img
              src={contactImage}
              alt="Liên hệ"
              className="w-full rounded-3xl border border-border bg-card"
            />
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-sm">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="full_name" className="text-sm font-semibold">
                  Họ và tên
                </Label>
                <Input id="full_name" name="your_name" placeholder="Họ và tên" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="your_email" className="text-sm font-semibold">
                  Địa chỉ email
                </Label>
                <Input id="your_email" name="your_email" type="email" placeholder="Địa chỉ email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold">
                  Số điện thoại
                </Label>
                <Input id="phone" name="your_phone" type="tel" placeholder="Số điện thoại" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="your_message" className="text-sm font-semibold">
                  Lời nhắn của bạn
                </Label>
                <Textarea id="your_message" name="your_messages" placeholder="Lời nhắn của bạn" rows={8} required />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Gửi liên hệ
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section
        className="relative px-6 py-20 lg:px-12 lg:py-28"
        style={{
          backgroundImage: `url(${ctaBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto grid max-w-6xl gap-8 rounded-3xl bg-black/35 p-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:p-10">
          <div>
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Chúng tôi có thể giúp gì cho bạn? <span className="font-light">Hãy để lại lời nhắn!</span>
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Input name="your_name" placeholder="Họ và tên" required />
              <Input name="your_email" type="email" placeholder="Địa chỉ email" required />
              <Input name="your_phone" type="tel" placeholder="Số điện thoại" required />
              <Textarea name="your_messages" rows={5} placeholder="Lời nhắn của bạn" required />
              <div className="flex items-center gap-3">
                <Button type="submit" variant="secondary">
                  Gửi liên hệ
                </Button>
                <div className="hidden items-center gap-2 text-xs text-primary-foreground/70 sm:flex">
                  <ArrowRight className="size-4" aria-hidden="true" />
                  Hỗ trợ trong 24 giờ làm việc
                </div>
              </div>
            </form>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl bg-background/85 p-6 text-center">
              <p className="text-4xl font-black text-primary">15+</p>
              <p className="mt-2 text-sm font-semibold text-foreground">năm kinh nghiệm</p>
            </article>
            <article className="rounded-3xl bg-background/85 p-6 text-center">
              <p className="text-4xl font-black text-primary">100+</p>
              <p className="mt-2 text-sm font-semibold text-foreground">đối tác lớn</p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
