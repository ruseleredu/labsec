import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// https://docusaurus.io/docs/markdown-features/math-equations
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23", // Use 24-hour format
});
const utc3Time = formatter.format(new Date());
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} LabSEC, Inc. Built with Docusaurus at ${utc3Time} UTC-3.`;


const config: Config = {
  title: 'LabSEC',
  tagline: 'Laboratório de Sistemas Embarcados e Computação.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ruseleredu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/labsec/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ruseleredu', // Usually your GitHub org/user name.
  projectName: 'labsec', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onDuplicateRoutes: 'warn', // or 'throw'
  onBrokenLinks: "throw",

  markdown: {
    mermaid: true, // Diagrams can be rendered using Mermaid in a code block.
    hooks: {
      onBrokenMarkdownLinks: "warn", // or 'throw'
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Include the KaTeX CSS for math rendering
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-WcoG4HRXMzYzfCgiyfrySxx90XSl2rxY5mnVY5TwtWE6KLrArNKn0T/mOgNL0Mmi",
      crossorigin: "anonymous",
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://ruseleredu.github.io/labsec/edit/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://ruseleredu.github.io/labsec/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LabSEC',
      logo: {
        alt: 'LabSEC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: "/pdf/CT2026.pdf", label: "Calendário", position: "right", target: '_blank' },
        {
          href: 'https://github.com/ruseleredu/labsec',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: "Sistemas",
          items: [
            {
              label: "Consulta Diários",
              href: "https://sistemas2.utfpr.edu.br/url/1141",
            },
            {
              label: "Permanências",
              href: "https://sistemas2.utfpr.edu.br/url/1026",
            },
            {
              label: "Planejamento Aulas",
              href: "https://sistemas2.utfpr.edu.br/url/1890",
            },
            {
              label: "Lançamentos",
              href: "https://sistemas2.utfpr.edu.br/url/1514",
            },
            {
              label: "Mapa de Professor",
              href: "https://sistemas2.utfpr.edu.br/url/1022",
            },
            {
              label: "Mapa de Sala",
              href: "https://sistemas2.utfpr.edu.br/url/1934",
            },
          ],
        },
        {
          title: "UTFPR",
          items: [
            {
              label: "Moodle",
              href: "https://moodle.utfpr.edu.br/",
            },
            {
              label: "Webmail",
              href: "https://webmail.utfpr.edu.br/",
            },
            {
              label: "Sistemas",
              href: "https://sistemas2.utfpr.edu.br/",
            },
            {
              label: "SEI",
              href: "https://sei.utfpr.edu.br/",
            },
            {
              label: "Chat",
              href: "https://chat.utfpr.edu.br/",
            },
            {
              label: "Ajuda",
              href: "https://ajuda.utfpr.edu.br/",
            },
            {
              label: "Calendário",
              href: "https://www.utfpr.edu.br/alunos/calendario",
            },
            {
              label: "TCC",
              href: "https://nupet.daelt.ct.utfpr.edu.br/tcc/engenharia/index.html",
            },
          ],
        },
        {
          title: "Doku Sites",
          items: [
            {
              label: "Main Site",
              href: "https://adrianoruseler.github.io/site/",
            },
            {
              label: "SD Docs",
              href: "https://ruseleredu.github.io/sd-docs/",
            },
            {
              label: "STM32 Docs",
              href: "https://ruseleredu.github.io/stm32doc/",
            },
            {
              label: "LabSEC",
              href: "https://ruseleredu.github.io/labsec/",
            },
            {
              label: "Moodle Docs",
              href: "https://adrianoruseler.github.io/moodle-docs/",
            },
            {
              label: "My Docs",
              href: "https://adrianoruseler.github.io/my-docs/",
            },
          ],
        },
      ],
      copyright: COPYRIGHT_STRING,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
