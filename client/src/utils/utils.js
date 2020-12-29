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

// TODO: Do better formatting - I just did this real quick because it's wayyy to late at night and I needa go to bed
/**
 * 
 * @param time Date object to format 
 */
export function formatTime(time) {
    return `${time.getHours()}:${time.getMinutes()}`;
}
