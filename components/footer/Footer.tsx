import { t } from "@/contexts/i18n"
import { useI18n } from "@/contexts/I18nContext";
import { Heart } from "lucide-react"

export const Footer = () => {
    const { t } = useI18n();
    
    return (
        <footer className="mt-12 border-t border-border bg-white">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-medium">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Heart size={14} className="text-white" fill="white" />
                </div>
                <div>
                <p className="font-bold text-neutral-dark text-base">MSPKenya</p>
                <p className="text-xs">{t("tagline")}</p>
                </div>
            </div>
            <p className="text-xs opacity-60">© 2026 MSPKenya · Built with care for Kenyan families</p>
            </div>
        </footer>
    )
}