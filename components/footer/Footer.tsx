import { useI18n } from "@/contexts/I18nContext";
import { Heart } from "lucide-react"
import Link from "next/link";

export const Footer = () => {
    const { t } = useI18n();
    
    return (
        <footer className="mt-12 border-t border-border bg-white">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-medium">
                
                {/* Left: Branding */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Heart size={14} className="text-white" fill="white" />
                    </div>
                    <div>                    
                        <p className="font-bold text-neutral-dark text-base">MSPKenya</p>
                        <p className="text-xs">{t("tagline")}</p>
                    </div>
                </div>

                {/* Right: Legal + Copyright */}
                <div className="flex items-center gap-4 text-xs text-neutral-medium">
                    <Link
                        href="/legal"
                        className="opacity-60 hover:opacity-100 transition"
                    >
                        Legal
                    </Link>

                    <span className="opacity-40">•</span>

                    <p className="opacity-60">
                        © 2026 MSPKenya
                    </p>

                    <a
                        href="https://cytrl.africa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 text-gray-400 hover:text-[#009CDE] transition-colors duration-300 opacity-60"
                        aria-label="Engineered by Cytrl Africa"
                    >
                        <span className="font-mono">{'< />'}</span>
                        <span className="opacity-80">by Cytrl Africa</span>
                    </a>
                </div>

            </div>
        </footer>
    )
}