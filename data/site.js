// All site copy lives here so it's easy to update without touching layout.

export const profile = {
  name: 'Mary Baptista Martinez',
  role: 'Staff Software Engineer at Airbnb',
  tagline:
    'I build iOS apps, with a focus on accessibility, so they work well for everyone who uses them, including people using VoiceOver.',
  description:
    'Mary Baptista Martinez is a Staff iOS engineer at Airbnb focused on accessibility. Projects, open source work, and experience.',
}

export const social = [
  { name: 'X', handle: '@MaryLBMC', href: 'https://x.com/MaryLBMC', icon: 'x' },
  { name: 'LinkedIn', handle: 'in/marybm', href: 'https://www.linkedin.com/in/marybm/', icon: 'linkedin' },
  { name: 'GitHub', handle: 'marybm-dev', href: 'https://github.com/marybm-dev', icon: 'github' },
]

export const about = [
  "I've been building for iOS for about ten years, mostly in Swift, at Airbnb, Yelp, and LinkedIn. A lot of that work is under NDA, so this page covers the parts I can share: side projects, open source, and how I like to work.",
  "Accessibility is my specialty, and good UX goes hand in hand with it. At work I focus on finding the pain points in how we build, fixing them, and making it easy for other engineers to ship accessible features without needing to be experts themselves.",
  "I care about the gap between \"the accessibility tree looks right\" and \"VoiceOver actually lands where it should.\" Lately I've been building tools so that gap gets checked automatically instead of by hand.",
  "I'm also deep into AI agents. At home I run a small fleet of bots on local models, and I'm building pipelines that let agents do real work behind human approval gates and automated checks.",
  "Off the clock I'm a parent to a three-year-old, with a baby on the way, and two dogs. Free time goes to the kids and to building with AI.",
]

// Decorative rotating taglines under the name. The first one is the "real" one.
export const taglines = [
  'Staff iOS Engineer @ Airbnb',
  'accessibility advocate',
  'bot wrangler',
  'parent of (almost) two',
  'forever tinkerer',
]

// Typed out in the About tab's terminal.
export const origin = [
  {
    cmd: 'mavis.exe',
    out: 'Age 8. My dad sat me at an MS-DOS prompt to practice typing with Mavis Beacon, and I fell in love with the idea of becoming a programmer one day.',
  },
  {
    cmd: 'edit index.htm',
    out: 'Age 13. I built my first website.',
  },
  {
    cmd: 'cd \\school\\cs',
    out: 'Much later, I went back and studied computer science at Cal State East Bay.',
  },
  {
    cmd: 'dir \\career',
    out: 'FileMaker databases and Android, then iOS at LinkedIn, Yelp, and Airbnb, with a lot of accessibility along the way.',
  },
  {
    cmd: 'run now.bat',
    out: 'Parent, two dogs, building with AI.',
  },
]

export const toolbox = [
  { group: 'Mobile', items: ['Swift', 'SwiftUI', 'UIKit', 'Metal', 'SpriteKit', 'Android', 'Java'] },
  { group: 'Accessibility', items: ['VoiceOver', 'XCUITest', 'a11y tooling', 'UX'] },
  { group: 'Data', items: ['SQL', 'PostgreSQL', 'FileMaker', 'Realm'] },
  { group: 'AI', items: ['LLM agents', 'Local models', 'MLX', 'Python', 'Claude Code'] },
  { group: 'Web & server', items: ['React', 'Next.js', 'Node', 'Vapor', 'PHP'] },
]

export const projects = [
  {
    title: 'Vibe Flow',
    icon: '/images/projects/vibeflow-icon.png',
    screenshots: [
      { src: '/images/projects/vibeflow-2.jpg', alt: 'Mirrored plasma visual in pink, blue, and green' },
      { src: '/images/projects/vibeflow-3.jpg', alt: 'Kaleidoscope mode with a bright green star at the center' },
      { src: '/images/projects/vibeflow-4.jpg', alt: 'Kaleidoscope mode with purple and blue concentric rings' },
      { src: '/images/projects/vibeflow-5.jpg', alt: 'Glowing green and blue light ribbons on black' },
      { src: '/images/projects/vibeflow-6.jpg', alt: 'Dense four-way symmetric pattern in violet and blue' },
    ],
    kind: 'iOS app · App Store',
    summary:
      'A full-screen music visualizer. Play music from anywhere and Vibe Flow listens through the mic, turning it into real-time procedural visuals. AirPlay it to an Apple TV and it becomes the room\'s light show.',
    details: [
      'Metal fragment shaders for every visual mode, including plasma, nebula, kaleidoscope, and a mode that blends two others',
      'AVAudioEngine and Accelerate (vDSP) FFT for bass, mid, and high bands plus beat detection, all processed on the device',
      'StoreKit 2 one-time upgrade, video export, and no third-party dependencies',
    ],
    tech: ['Swift', 'Metal', 'SwiftUI', 'AVAudioEngine', 'Accelerate', 'StoreKit 2'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/vibe-flow-music-visualizer/id6762640810' },
      { label: 'Support', href: 'https://marybm-dev.github.io/vibeflow-support/' },
    ],
  },
  {
    title: 'VOFocus',
    icon: '/images/projects/vofocus-icon.png',
    banner: {
      src: '/images/projects/vofocus-banner.jpg',
      alt: 'VOFocus: real VoiceOver focus order, verified by agents and CI. Shows a list of three items with focus on item 2 and a speech bubble.',
    },
    kind: 'Open source · in progress',
    summary:
      'Automated checks of real VoiceOver focus order. Most a11y tooling walks the accessibility tree, which can\'t tell you where VoiceOver lands when a sheet, error, or banner appears. VOFocus drives VoiceOver itself, so an agent or CI job can verify it.',
    details: [
      'Built on XCUIVoiceOverService (Xcode 27 / iOS 27)',
      'A WebDriverAgent-style runner that drives any installed app over HTTP, with no test code in the app',
      'Follows focus the app moves itself, like .screenChanged, .layoutChanged, and @AccessibilityFocusState',
      'Next up: a CLI, YAML scenarios, and an MCP server for agents',
    ],
    tech: ['Swift', 'XCUITest', 'VoiceOver', 'CI'],
    links: [],
  },
  {
    title: 'Puka Shreds!',
    icon: '/images/projects/puka-icon.jpg',
    galleryLabel: 'Puka Shreds! screenshots',
    screenshots: [
      { src: '/images/projects/puka-level1.jpg', w: 400, h: 869, alt: 'Level 1, Home Sweet Home: Puka leaps mid-swipe through a delivery box in the front hallway' },
      { src: '/images/projects/puka-level2.jpg', w: 400, h: 869, alt: 'Level 2, Moving Day Mayhem: Puka shreds a box among the moving-day clutter' },
      { src: '/images/projects/puka-level3.jpg', w: 400, h: 869, alt: 'Level 3, Birthday Paw-ty: Puka jumps past the birthday cake to swipe a box' },
      { src: '/images/projects/puka-level4.jpg', w: 400, h: 869, alt: 'Level 4, Neighborhood Walk: Puka swipes a box on the sidewalk past the mailboxes' },
      { src: '/images/projects/puka-level5.jpg', w: 400, h: 869, alt: 'Level 5, Holiday Havoc: Puka leaps at a box in front of the Christmas tree' },
      { src: '/images/projects/puka-level6.jpg', w: 400, h: 869, alt: 'Level 6, Pet Store Pandemonium: Puka shreds a box in the pet store, with treats flying' },
      { src: '/images/projects/puka-level7.jpg', w: 400, h: 869, alt: 'Level 7, Post Office Chaos: Puka leaps above the mail counter as boxes fly' },
      { src: '/images/projects/puka-level8.jpg', w: 400, h: 869, alt: 'Level 8, Warehouse Wipeout: Puka shreds a box high in the warehouse for bonus points' },
      { src: '/images/projects/puka-level9.jpg', w: 400, h: 869, alt: 'Level 9, Food Truck Fiesta: Puka mid-swipe over the food trucks at sunset' },
      { src: '/images/projects/puka-level10.jpg', w: 400, h: 869, alt: 'Level 10, Puka\'s Dream: Puka leaps through a box among the floating bones' },
    ],
    kind: 'iOS game · in development',
    summary:
      'A swipe-to-shred arcade game starring Puka, my Boston Terrier, who never met a cardboard box that survived the encounter. Ten themed levels, built with SpriteKit and SwiftUI.',
    details: [],
    tech: ['Swift', 'SpriteKit', 'SwiftUI'],
    links: [],
  },
]

export const ai = {
  intro:
    'A personal fleet of AI agents that runs entirely on local models (LM Studio + MLX on a Mac Studio). Each bot has its own persona, tools, and schedule, and I talk to all of them over Telegram.',
  bots: [
    {
      name: 'Syd',
      role: 'System admin & fleet supervisor',
      summary:
        'Keeps the other bots healthy: monitors Docker and the model server, auto-restarts and sends digests, turns ideas and bugs I text it into project backlogs, and hands coding work off to Claude Code.',
    },
    {
      name: 'FunBot',
      role: 'Bitcoin trading bot',
      summary:
        'Trades BTC/USD on Kraken. Deterministic rules make every trade, sized with the Kelly criterion. The LLM layer only watches and investigates, never places orders. Separate dev and live clones, plus a read-only sandboxed assistant over live state.',
    },
    {
      name: 'Finn',
      role: 'Finance bot',
      summary:
        'Household financial analyst. Reads statement exports, flags trends and anomalies, and frames everything around long-term goals.',
    },
    {
      name: 'Maia',
      role: 'Email bot',
      summary:
        'Inbox librarian. Triages and labels new mail, flags anything time-sensitive, and files older messages on a 30-day review rhythm.',
    },
    {
      name: 'Holi',
      role: 'Research & content bot',
      summary:
        'Research and content assistant for a holistic life-coaching practice. Finds trends and outlines content across wellness, psychology, and science topics.',
    },
  ],
  more: [
    {
      title: 'jarvis-build',
      summary:
        'A verification-first agent pipeline. It turns Markdown idea notes into plans that need human approval, then runs approved work in a sandbox with separate writer, reviewer, and deployer roles, real output checks, bounded retries, and budget caps. It works with any provider and defaults to a fully offline deterministic mode.',
      tech: ['Python', 'LLM agents', 'LM Studio', 'OpenAI-compatible APIs'],
    },
  ],
  tech: ['Python', 'Hermes', 'LM Studio', 'MLX', 'Qwen', 'Docker', 'Telegram', 'cron'],
}

export const earlierWork = [
  {
    title: 'HiveMine',
    icon: '/images/projects/hivemine-icon.jpg',
    summary: 'Redmine client for iOS for managing projects, issues, and budgets. Uses Keychain and 1Password for credentials. Shipped at Beezwax.',
    year: '2016',
    link: { label: 'App Store', href: 'https://apps.apple.com/us/app/hivemine/id1014114910' },
  },
  {
    title: 'Dress Relief',
    icon: '/images/projects/dressrelief-icon.png',
    summary: 'A "smart closet" iOS app that generates outfits from your own wardrobe. Built with Realm and UIKit, with custom transitions and animations.',
    year: '2017',
    link: { label: 'GitHub', href: 'https://github.com/marybm-dev/DressRelief' },
  },
  {
    title: 'SwiftFM & DroidFM',
    icon: '/images/projects/droidfm-icon.png',
    summary: 'Native iOS and Android apps that read and write FileMaker data, a proof of concept for taking FileMaker solutions mobile.',
    year: '2016',
    link: { label: 'GitHub', href: 'https://github.com/marybm-dev/SwiftFM-DroidFM' },
  },
  {
    title: 'Portfolio CMS',
    summary: 'My previous site: a server-side Swift CMS built on Vapor, Leaf, and PostgreSQL, running behind Nginx on Ubuntu.',
    year: '2017',
    link: { label: 'GitHub', href: 'https://github.com/marybm-dev/portfolio-v2' },
  },
]

export const openSource = [
  {
    repo: 'airbnb/HorizonCalendar',
    title: 'Accessibility test mode (fixes crashes)',
    year: '2025',
    href: 'https://github.com/airbnb/HorizonCalendar/pull/340',
  },
  {
    repo: 'airbnb/epoxy-ios',
    title: 'Safe-area leading/trailing layout support for landscape',
    year: '2024',
    href: 'https://github.com/airbnb/epoxy-ios/pull/174',
  },
  {
    repo: 'linkedin/Hakawai',
    title: 'Optional delegate hook for the mentions text view',
    year: '2018',
    href: 'https://github.com/linkedin/Hakawai/pull/59',
  },
]

// TODO(Mary): confirm titles/order — Yelp & LinkedIn titles came from a third-party profile.
export const experience = [
  { company: 'Airbnb', title: 'Staff Software Engineer, iOS', note: 'Accessibility' },
  { company: 'Yelp', title: 'Staff Software Engineer, iOS', note: 'Previously Senior' },
  { company: 'LinkedIn', title: 'Senior Software Engineer, iOS' },
  { company: 'Beezwax Datatools', title: 'Software Engineer', note: 'Shipped HiveMine; native mobile apps backed by FileMaker' },
]

export const writing = [
  {
    title: 'Building Native Mobile Apps with FileMaker Data',
    where: 'Beezwax blog',
    year: '2016',
    href: 'https://blog.beezwax.net/building-native-mobile-apps-with-filemaker-data/',
  },
]

export const education = [
  { school: 'Cal State East Bay', detail: 'B.S. Computer Science, minor in Mathematics. Honors, Dean\'s List' },
  { school: 'CodePath', detail: 'iOS Engineering' },
]
