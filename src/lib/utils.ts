export function daysSince(date: string) { return Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / 86400000)); }
export function relative(date: string) { const d=daysSince(date); return d===0?'today':d===1?'yesterday':`${d} days ago`; }
export function domainFromUrl(value: string) { try { return new URL(value.startsWith('http') ? value : `https://${value}`).hostname.replace('www.',''); } catch { return ''; } }
