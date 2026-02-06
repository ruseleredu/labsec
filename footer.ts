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
//const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} LabSEC, Inc. Built with Docusaurus at ${utc3Time} UTC-3.`;
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} LabSEC, Inc. Built with <a href="https://docusaurus.io/" style="color: #ffffff; font-weight: bold;" target="_blank" rel="noopener noreferrer">Docusaurus</a> at ${utc3Time} UTC-3.`;

import { ThemeConfig } from '@docusaurus/preset-classic';

const footer: ThemeConfig['footer'] = {
  style: "dark",
  links: [
    {
      title: "Docs",
      items: [
        {
          label: "Tutorial",
          to: "/docs/intro",
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
  //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  copyright: COPYRIGHT_STRING,
};

export default footer;