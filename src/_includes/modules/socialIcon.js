/*
	Current font sets
	
	https://iconify.design/icon-sets/fa/
	https://iconify.design/icon-sets/fa-brands/
	
	phone: fa:phone
	email: fa:envelope
	twitter: fa-brands:twitter
	instagram: fa-brands:instagram
	mastodon: fa-brands:mastodon
	facebook: fa-brands:facebook-f
	website: fa:globe

*/
module.exports = (content, iconSet, icon, link, title) => {
  return `<span class="iconify inline-block" data-icon="${iconSet}:${icon}" title="${title}" alt="${title}">&nbsp;</span>&nbsp;&nbsp;<a href="${link}" title="${title}" alt="${title}" referrerpolicy="no-referrer" rel="me nofollow noreferrer noopener" target="_blank">${content}</a>`;
};