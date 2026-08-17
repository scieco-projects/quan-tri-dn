"use client"

import { motion } from "framer-motion"
import { Building2, Mail, MapPin, Phone, ReceiptText } from "lucide-react"

const enterpriseSolutions = [
  "Phần mềm Quản lý nhân sự - TNM HRM",
  "Phần mềm Quản trị Khách hàng - TNM CRM",
  "Phần mềm Quản lý Bán hàng - TNM SO",
  "Phần mềm Quản lý Mua hàng - TNM PO",
  "Phần mềm Quản lý Kho - TNM WMS",
  "Phần mềm Quản lý Sản xuất - TNM MES",
  "Phần mềm Quản lý Tài chính - TNM FIN",
  "Phần mềm Quản lý Dự án - TNM PM",
]

const specializedSolutions = [
  "Phần mềm Quản lý trường học - TN EDU",
  "SẢN PHẨM QUẢN TRỊ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP",
  "Phần mềm Quản lý Bảo dưỡng, sửa chữa thiết bị",
  "Phần mềm Quản lý bán & bảo dưỡng, sửa chữa Ôtô - TNM AUTO",
  "Phần mềm Quản lý đào tạo - TNMS",
  "Phần mềm Quản lý thành viên bán hàng theo chuỗi",
  "Phần mềm Quản lý bán lẻ điện, nước sạch - CYBER TNM",
  "Phần mềm Quản lý kiểm định chất lượng đại học",
  "Phần mềm Quản lý tour du lịch - TNM TOUR",
]

const services = [
  "Gia công phần mềm",
  "Xây dựng phần mềm theo yêu cầu",
  "Thiết kế giao diện và trải nghiệm người dùng - UIUX",
  "Cung ứng nhân lực CNTT",
  "Tư vấn và cung cấp hạ tầng Cloud - Hosting",
]

const contactItems = [
  { icon: MapPin, text: "Tầng 4, tòa nhà LeBuilding, số 342 Mỹ Đình, phường Từ Liêm, thành phố Hà Nội." },
  { icon: Building2, text: "Số 22 ngõ 247, Định Công Thượng, Phường Định Công, Thành phố Hà Nội." },
  { icon: Phone, text: "0889 889 788" },
  { icon: Mail, text: "info@tringhiatech.vn" },
  { icon: ReceiptText, text: "Mã số thuế: 0107717720" },
]

function LinkList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="list-disc space-y-2 pl-5 text-[15px] leading-6 text-primary">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="transition-colors hover:text-accent">{item}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-secondary py-12 text-foreground md:py-16">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12">
        <div className="space-y-8">
          <LinkList title="GIẢI PHÁP QUẢN TRỊ DOANH NGHIỆP TOÀN DIỆN TNM" items={enterpriseSolutions} />
          <LinkList title="GIẢI PHÁP CHUYỂN ĐỔI SỐ CHO CÁC NGÀNH NGHỀ ĐẶC THÙ" items={specializedSolutions} />
          <LinkList title="DỊCH VỤ" items={services} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="self-start rounded-[28px] bg-card p-8 shadow-sm md:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex items-center gap-1 text-4xl font-black italic tracking-tighter">
              <span className="text-primary">T</span><span className="text-accent">N</span>
            </div>
            <span className="text-xs font-semibold uppercase leading-tight text-muted-foreground">Software solutions provider</span>
          </div>
          <h3 className="mb-5 text-base font-bold">PHẦN MỀM QUẢN TRỊ DOANH NGHIỆP</h3>
          <p className="mb-7 text-[15px] leading-6 text-foreground">
            Công ty TNHH Công nghệ, Thương mại và Dịch vụ Trí Nghĩa (TNT) - Chuyên cung cấp giải pháp số hóa, chuyển đổi số giúp doanh nghiệp nâng cao hiệu quả và tiết kiệm chi phí.
          </p>
          <div className="space-y-4">
            {contactItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4 text-[15px] leading-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="container mx-auto mt-10 border-t border-border px-6 pt-6 text-sm text-muted-foreground lg:px-12">
        © {new Date().getFullYear()} Trí Nghĩa Technology. All rights reserved.
      </div>
    </footer>
  )
}
