const DASH_LENGTH = 1509;
const MINS_IN_SESSION = 15;

export const setDashFromSec = (s = 0) => dashStyles(degToDashoffset(secondsToDeg(s)));
export const setDashFromMin = (m = 0) => dashStyles(degToDashoffset(minutesToDeg(m)));

const secondsToDeg = (s = 0) => 360 * (s / 60);
const minutesToDeg = (s = 0) => 360 * (s / MINS_IN_SESSION);

const degToDashoffset = deg => DASH_LENGTH - (DASH_LENGTH * (deg / 360));

const dashStyles = strokeDashoffset => ({
	strokeDashoffset,
	strokeDasharray: DASH_LENGTH
});