import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Docker Berry</span>,
  project: {
    link: 'https://github.com/Jihyeon-Park/Docker-Berry',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  useNextSeoProps() {
    titleTemplate: "%s - Docker Berry Docs";
  },
}

export default config
