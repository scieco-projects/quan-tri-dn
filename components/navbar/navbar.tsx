"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "TRANG CHỦ", href: "#top" },
  { label: "GIỚI THIỆU", href: "#gioi-thieu" },
  { label: "TÍNH NĂNG", href: "#tinh-nang" },
  { label: "FRAMEWORK", href: "#framework" },
  { label: "GIẢI PHÁP", href: "#giai-phap" },
  { label: "ĐỒNG HÀNH", href: "#dong-hanh" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          "fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="hidden lg:flex w-12 shrink-0 items-center">
              <Image src="/logo.svg" alt="TNM Software solutions provider" width={100} height={48} className="h-auto w-12 object-contain" priority />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 items-center justify-left gap-10 px-8">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  <a href={link.href} className="flex items-center whitespace-nowrap text-sm font-semibold text-foreground hover:text-primary transition-colors">{link.label}</a>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
            <Link href="/chat">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  Nhắn tin
                </Button>
              </Link>
              <Link href="/lien-he">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  Liên hệ
                </Button>
              </Link>
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
                <Button variant="outline" className="w-full justify-center bg-transparent">
                  Nhắn tin
                </Button>
                <Link href="/lien-he" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                  <Button className="w-full justify-center bg-foreground text-background">
                    Liên hệ
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
