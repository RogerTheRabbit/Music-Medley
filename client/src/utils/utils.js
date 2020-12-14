/**
 * Formats duration in seconds to [minuets]:[seconds]
 *
 * Seconds are always two digits
 *
 * examples:
 *    input -> output
 *      9   -> 0:09
 *      10  -> 0:10
 *      60  -> 1:00
 *      61  -> 1:01
 *      70  -> 1:10
 *
 * @param duration duration to format in seconds
 */
export function formatDuration(duration) {
    return `${(duration / 60).toFixed(0)}:${(duration % 60).toFixed(0).padStart(2, 0)}`;
}

// TODO: Make this do actual formatting instead of just being an alias for formatDuration
export function formatTime(time) {
    return formatDuration(time);
}
