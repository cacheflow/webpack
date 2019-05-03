"use strict";
/**
 * Returns a formatted loader error either separated by an "and" or commas.
 * @param {array|string} data
 * @returns {array|string}
 */

const formatLoaderError = data => {
	if (!data.length) return [];
	if (typeof data === "string") {
		return `${data}.`;
	}
	if (Array.isArray(data)) {
		const len = data.length;
		const joinWhere = len => (len === 1 ? "." : " and ");
		if (len === 1 || len === 2) {
			return data.join(`${joinWhere(len)}`);
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
