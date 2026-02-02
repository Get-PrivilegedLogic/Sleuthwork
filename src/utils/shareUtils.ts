import { formatDateString } from './dateUtils';

/**
 * Formats puzzle results for sharing
 */
export const formatShareText = (
    dateString: string,
    timeElapsed: number,
    streak: number
): string => {
    const formattedDate = formatDateString(dateString);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = String(timeElapsed % 60).padStart(2, '0');

    return `🔍 Murdle Daily Case Cracked!\n` +
        `📅 ${formattedDate}\n` +
        `⏱️ Time: ${minutes}:${seconds}\n` +
        `🔥 Streak: ${streak} days\n\n` +
        `Solve yours at: ${window.location.origin}/daily`;
};

/**
 * Copies text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }

        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
    } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
    }
};
