// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'PHP Mistrz',
	tagline: 'Najlepsze kompendium wiedzy o PHP',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://phpmistrz.marekgacekdev.pl',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	// organizationName: 'facebook', // Usually your GitHub org/user name.
	// projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'pl',
		locales: ['pl'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
		
	],plugins: [
		
		[
		  '@docusaurus/plugin-content-docs',
		  {
			id: 'sources',
			path: 'sources',
			routeBasePath: 'sources',
			sidebarPath: require.resolve('./sidebarsSources.js'),
			// ... other options
		  },
		 
		],
	
	],
	
	

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',

			navbar: {
				title: 'PHP Mistrz',
				logo: {
					alt: 'Logo marekgacekdev',
					src: 'img/logo.webp',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'phpSidebar',
						position: 'left',
						label: 'PHP',
					},
					// { to: '/blog', label: 'Źródła', position: 'left' },
					{
						to: '/sources/php', // To highlight the navbar item, you must link to a document, not a top-level directory
						position: 'left',
						label: 'Źródła',
						activeBaseRegex: `/sources/`,
					},
					
					{ to: '/youtube', label: 'YouTube', position: 'left' },
					
					{
						href: 'https://github.com/marekgacek45/phpMistrz',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'PHP Mistrz',
						items: [
							{
								label: 'Basic',
								to: '/docs/intro',
							},
							{
								label: 'Źródła',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Social Media',
						items: [
							{
								label: 'YouTube',
								href: 'https://www.youtube.com/@marekgacekdev',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/marekgacek45',
							},
							{
								label: 'Facebook',
								href: 'https://facebook.com/marekgacekdev',
							},
							{
								label: 'Linkedin',
								href: 'https://pl.linkedin.com/in/marek-gacek',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
							},
						],
					},
				],
				copyright: `© ${new Date().getFullYear()} PHP Mistrz, marekgacekdev.pl`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
}

export default config
