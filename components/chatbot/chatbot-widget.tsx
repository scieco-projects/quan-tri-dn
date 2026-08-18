"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Bot, ExternalLink, MessageCircle, Send, X } from "lucide-react"
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ChatRole = "user" | "assistant"

type Message = {
  id: string
  role: ChatRole
  content: string
  createdAt: string
}

type QuickAction = {
  label: string
}

type BotResponse = {
  reply: string
  suggestions: string[]
  conversationId: string
  hasContactCta: boolean
}

const MAX_MESSAGES = 30
const STORAGE_MESSAGES_KEY = "tnt-assistant-messages"
const STORAGE_CONVERSATION_KEY = "tnt-assistant-conversation-id"

const INITIAL_MESSAGE: Message = {
  id: crypto.randomUUID?.() ?? "welcome",
  role: "assistant",
  content:
    "Xin chào! Mình là TNT Assistant, có thể hỗ trợ bạn về dịch vụ, giải pháp phần mềm và liên hệ tư vấn nhanh.",
  createdAt: new Date().toISOString(),
}

const DEFAULT_QUICK_ACTIONS: QuickAction[] = [
  { label: "TNT có những giải pháp gì?" },
  { label: "Làm sao nhận báo giá?" },
  { label: "Tư vấn chuyển đổi số theo ngành" },
  { label: "Tôi muốn liên hệ tư vấn" },
]

function clampMessages(messages: Message[]) {
  return messages.slice(-MAX_MESSAGES)
}

function formatTime(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return ""
  }
  return new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

function createMessageId() {
  return typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [conversationId, setConversationId] = useState("")
  const [isReady, setIsReady] = useState(false)
  const [input, setInput] = useState("")
  const [error, setError] = useState("")
  const [quickActions, setQuickActions] = useState<QuickAction[]>(DEFAULT_QUICK_ACTIONS)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setIsReady(true)

    const savedMessages = localStorage.getItem(STORAGE_MESSAGES_KEY)
    const savedConversation = localStorage.getItem(STORAGE_CONVERSATION_KEY)

    if (savedConversation) {
      setConversationId(savedConversation)
    }

    if (!savedMessages) {
      return
    }

    try {
      const parsed = JSON.parse(savedMessages) as Message[] | null
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return
      }

      const normalized = parsed
        .filter((item): item is Message => {
          return (
            typeof item === "object" &&
            item !== null &&
            (item.role === "user" || item.role === "assistant") &&
            typeof item.content === "string" &&
            typeof item.createdAt === "string" &&
            typeof item.id === "string"
          )
        })
        .slice(-MAX_MESSAGES)

      if (normalized.length > 0) {
        setMessages(normalized)
      }
    } catch {
      localStorage.removeItem(STORAGE_MESSAGES_KEY)
    }
  }, [])

  useEffect(() => {
    if (!isReady) {
      return
    }

    localStorage.setItem(STORAGE_MESSAGES_KEY, JSON.stringify(messages))
    if (conversationId) {
      localStorage.setItem(STORAGE_CONVERSATION_KEY, conversationId)
    }
  }, [messages, conversationId, isReady])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  async function postMessage(content: string) {
    const payload = {
      message: content,
      conversationId,
      context: "tnt-website",
    }

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const result = (await response.json().catch(() => ({}))) as Partial<BotResponse> & { error?: string }

    if (!response.ok) {
      throw new Error(result.error || "Không kết nối được chatbot.")
    }

    return {
      reply: result.reply || "Mình chưa nhận được phản hồi. Bạn thử gửi lại nhé.",
      suggestions: Array.isArray(result.suggestions) ? result.suggestions : DEFAULT_QUICK_ACTIONS.map((item) => item.label),
      conversationId: typeof result.conversationId === "string" ? result.conversationId : "",
      hasContactCta: Boolean(result.hasContactCta),
    }
  }

  function appendMessage(next: Message) {
    setMessages((prev) => clampMessages([...prev, next]))
  }

  async function send(content: string) {
    const trimmed = content.trim()
    if (!trimmed || isSending) {
      return
    }

    const outgoing: Message = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
      createdAt: new Date().toISOString(),
    }

    setIsSending(true)
    setError("")
    setInput("")
    setIsTyping(true)
    appendMessage(outgoing)

    try {
      const botReply = await postMessage(trimmed)

      const incoming: Message = {
        id: createMessageId(),
        role: "assistant",
        content: botReply.reply,
        createdAt: new Date().toISOString(),
      }

      if (botReply.conversationId) {
        setConversationId(botReply.conversationId)
      }

      if (botReply.hasContactCta) {
        setQuickActions([{ label: "Liên hệ tư vấn ngay" }, ...DEFAULT_QUICK_ACTIONS.filter((item) => item.label !== "TNT có những giải pháp gì?")])
      }

      if (botReply.suggestions?.length > 0) {
        setQuickActions(botReply.suggestions.map((item) => ({ label: item })).slice(0, 4))
      } else {
        setQuickActions(DEFAULT_QUICK_ACTIONS)
      }

      appendMessage(incoming)
    } catch (errorMessage) {
      const text =
        errorMessage instanceof Error
          ? errorMessage.message
          : "Không gửi được tin nhắn. Bạn thử lại một lần nữa."
      setError(text)
      appendMessage({
        id: createMessageId(),
        role: "assistant",
        content: text,
        createdAt: new Date().toISOString(),
      })
    } finally {
      setIsSending(false)
      setIsTyping(false)
      inputRef.current?.focus()
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!input.trim()) return
    void send(input)
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      void send(input)
    }
  }

  function handleQuickAction(label: string) {
    if (label.toLowerCase().includes("liên hệ")) {
      handleContactJump()
      return
    }
    void send(label)
  }

  function handleContactJump() {
    const section = document.getElementById("lien-he")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
      return
    }

    window.location.href = "/lien-he"
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="sidebar-toggle"
            type="button"
            initial={{ x: 16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 16, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 md:right-0 md:top-1/2 md:bottom-auto md:h-20 md:w-11 md:-translate-y-1/2 md:rounded-l-full md:rounded-r-none"
            aria-label="Mở TNT Assistant"
            aria-expanded={isOpen}
            aria-controls="tnt-assistant-panel"
          >
            <MessageCircle size={22} />
            <span className="hidden pl-2 rotate-90 text-xs font-semibold tracking-wide md:block">Chat</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="panel"
            id="tnt-assistant-panel"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 bottom-0 z-50 flex h-[82vh] w-full flex-col rounded-t-3xl border border-border bg-card shadow-2xl md:inset-x-auto md:right-0 md:top-20 md:h-[calc(100vh-5rem)] md:w-96 md:rounded-none md:rounded-l-3xl"
          >
            <div className="flex items-start justify-between border-b border-border p-4">
              <div className="flex min-w-0 items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Bot size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold">TNT Assistant</p>
                  <p className="text-xs text-muted-foreground">Đang trực tuyến</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Đóng TNT Assistant"
              >
                <X size={18} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
              <div aria-live="polite" className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mx-0 flex flex-col ${
                      message.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-6 shadow-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <span className="mt-1 text-[11px] text-muted-foreground">
                      {formatTime(message.createdAt)}
                    </span>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-end gap-1">
                    <span className="inline-flex h-8 items-center rounded-2xl bg-muted px-3 py-2 text-xs text-muted-foreground">
                      Đang trả lời...
                    </span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="space-y-3 border-t border-border px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {quickActions.slice(0, 4).map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => handleQuickAction(action.label)}
                    disabled={isSending}
                    className="rounded-full border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {action.label}
                  </button>
                  ))}
              </div>

              {error ? (
                <p className="rounded-md bg-destructive/10 px-3 py-2 text-xs text-destructive">{error}</p>
              ) : null}

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Nhập tin nhắn..."
                  maxLength={500}
                />
                <Button type="submit" size="icon" disabled={isSending || !input.trim()} aria-label="Gửi tin">
                  <Send size={16} />
                </Button>
              </form>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full text-xs"
                  onClick={handleContactJump}
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  <span className="ml-2">Mở form liên hệ</span>
                </Button>
              </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
