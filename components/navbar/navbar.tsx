"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "TRANG CHỦ", href: "/" },
  { label: "GIỚI THIỆU", href: "/gioi-thieu" },
  { label: "SẢN PHẨM", href: "#san-pham", hasDropdown: true },
  { label: "DỊCH VỤ", href: "/dich-vu" },
  { label: "CÂU CHUYỆN CHUYỂN ĐỔI SỐ", href: "/cau-chuyen-chuyen-doi-so" },
  { label: "TIN TỨC", href: "/tin-tuc" },
  { label: "TUYỂN DỤNG", href: "/tuyen-dung" },
]

const productGroups = [
  {
    title: "GIẢI PHÁP QUẢN TRỊ DOANH NGHIỆP TOÀN DIỆN TNM",
    items: [
      "Phần mềm Quản lý nhân sự - TNM HRM",
      "Phần mềm Quản trị Khách hàng - TNM CRM",
      "Phần mềm Quản lý Bán hàng - TNM SO",
      "Phần mềm Quản lý Mua hàng - TNM PO",
      "Phần mềm Quản lý Kho - TNM WMS",
      "Phần mềm Quản lý Sản xuất - TNM MES",
      "Phần mềm Quản lý Tài chính - TNM FIN",
      "Phần mềm Quản lý Dự án - TNM PM",
    ],
  },
  {
    title: "GIẢI PHÁP CHUYỂN ĐỔI SỐ CHO CÁC NGÀNH NGHỀ ĐẶC THÙ",
    items: [
      "Phần mềm Quản lý trường học - TN EDU",
      "Phần mềm Quản lý Bảo dưỡng, sửa chữa thiết bị",
      "Phần mềm Quản lý bán & bảo dưỡng, sửa chữa Oto - TNM AUTO",
      "Phần mềm Quản lý đào tạo - TN LMS",
      "Phần mềm Quản lý thành viên bán hàng theo chuỗi",
      "Phần mềm Quản lý bán lẻ điện, nước sạch - CYBER TNM",
      "Phần mềm Quản lý kiểm định chất lượng đại học",
      "Phần mềm Quản lý tour du lịch - TNM TOUR",
    ],
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="hidden lg:flex w-32 shrink-0 items-center">
              <Image src="/tnm-logo.png" alt="TNM Software solutions provider" width={145} height={70} className="h-auto w-32 object-contain" priority />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 items-center justify-between gap-5 px-8">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}<ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <a href={link.href} className="flex items-center whitespace-nowrap text-sm font-semibold text-foreground hover:text-primary transition-colors">{link.label}</a>
                  )}

                  {link.hasDropdown && isProductsOpen && (
                    <div className="fixed left-1/2 top-20 z-50 w-[min(1190px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-t-3xl bg-background shadow-2xl ring-1 ring-border">
                      {productGroups.map((group) => (
                        <section key={group.title} className="border-b border-border last:border-0">
                          <h3 className="bg-muted px-5 py-3 text-base font-bold text-foreground">{group.title}</h3>
                          <div className="grid grid-cols-2 gap-x-10 gap-y-4 px-5 py-4">
                            {group.items.map((item) => <a key={item} href="#san-pham" className="text-sm text-foreground hover:text-primary">{item}</a>)}
                          </div>
                        </section>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {/* <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Đăng nhập
              </Button> */}
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                Liên hệ
              </Button>
            </div>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground py-3 border-b border-border"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-4 mt-8">
                {/* <Button variant="outline" className="w-full justify-center bg-transparent">
                  Đăng nhập
                </Button> */}
                <Button className="w-full justify-center bg-foreground text-background">
                  Liên hệ
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
