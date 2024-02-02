import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/**
 * Formats a timestamp to a relative time string (e.g., "2 hours ago").
 *
 * @param {string} timestamp - The timestamp to format.
 * @returns {string} The relative time string.
 */
export function timeAgo(timestamp) {
  const fromNow = dayjs(timestamp).fromNow();
  const regexForAnA = /\b(an|a)\b/;

  return fromNow.replace(regexForAnA, '1');
}
