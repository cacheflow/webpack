"use strict";
/**
 * Returns a formatted loader error either as a string or separated by an "and" or commas.
 * @param {array|string} data
 * @returns {array|string}
 */

const formatLoaderError = data => {
	if (!data.length) return [];
	if (typeof data === "string") {
		return `${data}`;
	}
	if (Array.isArray(data)) {
		const len = data.length;
		if (len === 1) {
			return `${data[0] || ""}`;
		}
		if (len === 2) {
			return data.join(" and ");
		}
		return `${data
			.map((d, i) => {
				return i !== data.length - 1 ? `${d}` : `and ${d}`;
			})
			.join(", ")}.`;
	}
	return "";
};

module.exports = formatLoaderError;
