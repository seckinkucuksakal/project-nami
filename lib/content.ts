export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  value: string;
  threats: string[];
}

export interface Solution {
  id: string;
  name: string;
  slug: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
}

export interface Customer {
  id: string;
  slug: string;
  company: string;
  industry: string;
  problem: string;
  solution: string;
  results: string;
  metric: string;
  quote: string;
  author: string;
  role: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
}

export const products: Product[] = [
  {
    id: "bot-protect",
    name: "nami Title 1",
    slug: "bot-protect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    value: "Title 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    threats: [
      "Title 3: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 4: Consectetur adipiscing elit. (Will be edited later)",
      "Title 5: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 6: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 7: Enim ad minim veniam. (Will be edited later)",
      "Title 8: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 9: Laboris nisi ut aliquip ex ea. (Will be edited later)",
      "Title 10: Commodo consequat duis aute. (Will be edited later)"
    ]
  },
  {
    id: "account-protect",
    name: "nami Title 11",
    slug: "account-protect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    value: "Title 12: Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    threats: [
      "Title 13: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 14: Consectetur adipiscing elit. (Will be edited later)",
      "Title 15: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 16: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 17: Enim ad minim veniam. (Will be edited later)",
      "Title 18: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 19: Laboris nisi ut aliquip ex ea. (Will be edited later)",
      "Title 20: Commodo consequat duis aute. (Will be edited later)"
    ]
  },
  {
    id: "ddos-protect",
    name: "nami Title 21",
    slug: "ddos-protect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    value: "Title 22: Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    threats: [
      "Title 23: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 24: Consectetur adipiscing elit. (Will be edited later)",
      "Title 25: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 26: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 27: Enim ad minim veniam. (Will be edited later)",
      "Title 28: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 29: Laboris nisi ut aliquip ex ea. (Will be edited later)",
      "Title 30: Commodo consequat duis aute. (Will be edited later)"
    ]
  },
  {
    id: "page-protect",
    name: "nami Title 31",
    slug: "page-protect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    value: "Title 32: Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    threats: [
      "Title 33: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 34: Consectetur adipiscing elit. (Will be edited later)",
      "Title 35: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 36: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 37: Enim ad minim veniam. (Will be edited later)",
      "Title 38: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 39: Laboris nisi ut aliquip ex ea. (Will be edited later)",
      "Title 40: Commodo consequat duis aute. (Will be edited later)"
    ]
  },
  {
    id: "ad-protect",
    name: "nami Title 41",
    slug: "ad-protect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    value: "Title 42: Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    threats: [
      "Title 43: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 44: Consectetur adipiscing elit. (Will be edited later)",
      "Title 45: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 46: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 47: Enim ad minim veniam. (Will be edited later)",
      "Title 48: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 49: Laboris nisi ut aliquip ex ea. (Will be edited later)",
      "Title 50: Commodo consequat duis aute. (Will be edited later)"
    ]
  }
];

export const solutions: Solution[] = [
  {
    id: "scraping-content-theft",
    name: "Title 51",
    slug: "scraping-content-theft",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Will be edited later)",
    benefits: [
      "Title 52: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 53: Consectetur adipiscing elit. (Will be edited later)",
      "Title 54: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 55: Ut labore et dolore magna aliqua. (Will be edited later)"
    ]
  },
  {
    id: "account-takeover",
    name: "Title 56",
    slug: "account-takeover",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Will be edited later)",
    benefits: [
      "Title 57: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 58: Consectetur adipiscing elit. (Will be edited later)",
      "Title 59: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 60: Ut labore et dolore magna aliqua. (Will be edited later)"
    ]
  },
  {
    id: "fake-accounts",
    name: "Title 61",
    slug: "fake-accounts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Will be edited later)",
    benefits: [
      "Title 62: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 63: Consectetur adipiscing elit. (Will be edited later)",
      "Title 64: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 65: Ut labore et dolore magna aliqua. (Will be edited later)"
    ]
  },
  {
    id: "layer7-ddos",
    name: "Title 66",
    slug: "layer7-ddos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Will be edited later)",
    benefits: [
      "Title 67: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 68: Consectetur adipiscing elit. (Will be edited later)",
      "Title 69: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 70: Ut labore et dolore magna aliqua. (Will be edited later)"
    ]
  },
  {
    id: "payment-fraud",
    name: "Title 71",
    slug: "payment-fraud",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Will be edited later)",
    benefits: [
      "Title 72: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 73: Consectetur adipiscing elit. (Will be edited later)",
      "Title 74: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 75: Ut labore et dolore magna aliqua. (Will be edited later)"
    ]
  },
  {
    id: "agentic-commerce",
    name: "Title 76",
    slug: "agentic-commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Will be edited later)",
    benefits: [
      "Title 77: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 78: Consectetur adipiscing elit. (Will be edited later)",
      "Title 79: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 80: Ut labore et dolore magna aliqua. (Will be edited later)"
    ]
  }
];

export const customers: Customer[] = [
  {
    id: "1",
    slug: "global-ecommerce-leader",
    company: "Title 81",
    industry: "Title 82",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    metric: "Title 83",
    quote: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    author: "Title 84",
    role: "Title 85"
  },
  {
    id: "2",
    slug: "fintech-platform",
    company: "Title 86",
    industry: "Title 87",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    metric: "Title 88",
    quote: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    author: "Title 89",
    role: "Title 90"
  },
  {
    id: "3",
    slug: "media-streaming-service",
    company: "Title 91",
    industry: "Title 92",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    metric: "Title 93",
    quote: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    author: "Title 94",
    role: "Title 95"
  },
  {
    id: "4",
    slug: "travel-booking-platform",
    company: "Title 96",
    industry: "Title 97",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    metric: "Title 98",
    quote: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    author: "Title 99",
    role: "Title 100"
  },
  {
    id: "5",
    slug: "online-marketplace",
    company: "Title 101",
    industry: "Title 102",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    metric: "Title 103",
    quote: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    author: "Title 104",
    role: "Title 105"
  },
  {
    id: "6",
    slug: "gaming-platform",
    company: "Title 106",
    industry: "Title 107",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    metric: "Title 108",
    quote: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    author: "Title 109",
    role: "Title 110"
  },
  {
    id: "7",
    slug: "saas-platform",
    company: "Title 111",
    industry: "Title 112",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    metric: "Title 113",
    quote: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    author: "Title 114",
    role: "Title 115"
  },
  {
    id: "8",
    slug: "retail-brand",
    company: "Title 116",
    industry: "Title 117",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    solution: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    metric: "Title 118",
    quote: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    author: "Title 119",
    role: "Title 120"
  }
];

export const resources: Resource[] = [
  {
    id: "1",
    slug: "state-of-bot-traffic-2024",
    title: "Title 121",
    category: "Title 122",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    date: "2024-01-15",
    readTime: "8 min read",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. (Will be edited later)"
  },
  {
    id: "2",
    slug: "account-takeover-prevention-guide",
    title: "Title 123",
    category: "Title 124",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    date: "2024-02-01",
    readTime: "12 min read",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. (Will be edited later)"
  },
  {
    id: "3",
    slug: "layer7-ddos-mitigation",
    title: "Title 125",
    category: "Title 126",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    date: "2024-02-10",
    readTime: "10 min read",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. (Will be edited later)"
  },
  {
    id: "4",
    slug: "ad-fraud-report-2024",
    title: "Title 127",
    category: "Title 128",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    date: "2024-02-20",
    readTime: "15 min read",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. (Will be edited later)"
  },
  {
    id: "5",
    slug: "webinar-ai-agents-commerce",
    title: "Title 129",
    category: "Title 130",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    date: "2024-03-01",
    readTime: "45 min watch",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. (Will be edited later)"
  },
  {
    id: "6",
    slug: "product-update-q1-2024",
    title: "Title 131",
    category: "Title 132",
    description: "nami Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    date: "2024-03-15",
    readTime: "5 min read",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. (Will be edited later)"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "essentials",
    name: "Title 133",
    price: "Title 134",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    features: [
      "Title 135: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 136: Consectetur adipiscing elit. (Will be edited later)",
      "Title 137: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 138: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 139: Enim ad minim veniam. (Will be edited later)",
      "Title 140: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 141: Laboris nisi ut aliquip ex ea. (Will be edited later)"
    ],
    cta: "Title 142"
  },
  {
    id: "advanced",
    name: "Title 143",
    price: "Title 144",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    features: [
      "Title 145: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 146: Consectetur adipiscing elit. (Will be edited later)",
      "Title 147: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 148: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 149: Enim ad minim veniam. (Will be edited later)",
      "Title 150: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 151: Laboris nisi ut aliquip ex ea. (Will be edited later)"
    ],
    cta: "Title 152"
  },
  {
    id: "premium",
    name: "Title 153",
    price: "Title 154",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    features: [
      "Title 155: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 156: Consectetur adipiscing elit. (Will be edited later)",
      "Title 157: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 158: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 159: Enim ad minim veniam. (Will be edited later)",
      "Title 160: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 161: Laboris nisi ut aliquip ex ea. (Will be edited later)"
    ],
    cta: "Title 162"
  },
  {
    id: "enterprise",
    name: "Title 163",
    price: "Title 164",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)",
    features: [
      "Title 165: Lorem ipsum dolor sit amet. (Will be edited later)",
      "Title 166: Consectetur adipiscing elit. (Will be edited later)",
      "Title 167: Sed do eiusmod tempor incididunt. (Will be edited later)",
      "Title 168: Ut labore et dolore magna aliqua. (Will be edited later)",
      "Title 169: Enim ad minim veniam. (Will be edited later)",
      "Title 170: Quis nostrud exercitation ullamco. (Will be edited later)",
      "Title 171: Laboris nisi ut aliquip ex ea. (Will be edited later)"
    ],
    cta: "Title 172"
  }
];

export const integrations = [
  { name: "Title 173", category: "CDN", icon: "☁️" },
  { name: "Title 174", category: "CDN", icon: "☁️" },
  { name: "Title 175", category: "CDN", icon: "⚡" },
  { name: "Title 176", category: "WAAP", icon: "🛡️" },
  { name: "Title 177", category: "WAAP", icon: "🛡️" },
  { name: "Title 178", category: "WAAP", icon: "🛡️" },
  { name: "Title 179", category: "Edge", icon: "⚡" },
  { name: "Title 180", category: "Edge", icon: "⚡" },
  { name: "Title 181", category: "Edge", icon: "⚡" },
  { name: "Title 182", category: "API Gateway", icon: "🚪" },
  { name: "Title 183", category: "API Gateway", icon: "🚪" },
  { name: "Title 184", category: "API Gateway", icon: "🚪" }
];

export const useCases = [
  "Title 185",
  "Title 186",
  "Title 187",
  "Title 188",
  "Title 189",
  "Title 190",
  "Title 191",
  "Title 192"
];
