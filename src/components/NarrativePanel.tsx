import { motion } from 'framer-motion';
import type { NarrativeSegment } from '../types/chapterTypes';

interface NarrativePanelProps {
    narrative: NarrativeSegment;
    chapterThemeColor?: string; // Tailwind color name, e.g. 'teal', 'amber'
}

const SPEAKER_AVATARS: Record<string, string> = {
    'Rook Pemberton': '🕵️',
};

export default function NarrativePanel({
    narrative,
    chapterThemeColor = 'teal',
}: NarrativePanelProps) {
    const hasSpeaker = !!narrative.speakerName;
    const avatar = narrative.speakerName ? SPEAKER_AVATARS[narrative.speakerName] ?? '💬' : null;

    // Map theme color names to tailwind class groups
    const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
        teal: {
            border: 'border-teal-500/40',
            bg: 'from-teal-900/30 to-teal-800/20',
            text: 'text-teal-100',
            badge: 'bg-teal-700/50 text-teal-200',
        },
        amber: {
            border: 'border-amber-500/40',
            bg: 'from-amber-900/30 to-amber-800/20',
            text: 'text-amber-100',
            badge: 'bg-amber-700/50 text-amber-200',
        },
        slate: {
            border: 'border-slate-500/40',
            bg: 'from-slate-800/30 to-slate-700/20',
            text: 'text-slate-100',
            badge: 'bg-slate-700/50 text-slate-200',
        },
        red: {
            border: 'border-red-500/40',
            bg: 'from-red-900/30 to-red-800/20',
            text: 'text-red-100',
            badge: 'bg-red-700/50 text-red-200',
        },
        indigo: {
            border: 'border-indigo-500/40',
            bg: 'from-indigo-900/30 to-indigo-800/20',
            text: 'text-indigo-100',
            badge: 'bg-indigo-700/50 text-indigo-200',
        },
    };

    const colors = colorMap[chapterThemeColor] ?? colorMap['teal'];

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-5 my-6 shadow-lg`}
        >
            {hasSpeaker && (
                <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{avatar}</div>
                    <div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${colors.badge} px-2 py-0.5 rounded-full`}>
                            {narrative.speakerName}
                        </span>
                    </div>
                </div>
            )}

            <p className={`italic leading-relaxed text-base ${colors.text}`}>
                "{narrative.text}"
            </p>
        </motion.div>
    );
}
