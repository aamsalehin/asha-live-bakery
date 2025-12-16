export interface BranchInfo {
  name: string;
  img: string;
  address: string;
  phone: string;
  reviewWidget?: string; // optional Google Review widget ID
}

export const BRANCHES: BranchInfo[] = [
  {
    name: "শিবগঞ্জ শাখা",
    img: "/images/branches/shibganj.jpg",
    address: "মসজিদ মার্কেট, শিবগঞ্জ, সিলেট",
    phone: "+8801740372692",

    // ⭐ Shibganj Google Review Widget ID
    reviewWidget: "elfsight-app-3cd8590a-ea09-4d80-ac61-b31919346387",
  },

  {
    name: "শেখঘাট শাখা",
    img: "/images/branches/sheikhghat.jpg",
    address: "জিতু মিয়ার পয়েন্ট, শেখঘাট, সিলেট",
    phone: "+8801740372692",

    // Add your widget ID later
    reviewWidget: "",
  },

  {
    name: "মদিনা মার্কেট শাখা",
    img: "/images/branches/madina.jpg",
    address: "মদিনা মার্কেট, সিলেট",
    phone: "+8801740372692",

    reviewWidget: "",
  },

  {
    name: "আম্বরখানা শাখা",
    img: "/images/branches/maberkhana.jpg",
    address: "ঘুর্নি আবাসিক এলাকার সামনে,আম্বরখানা, সিলেট",
    phone: "+8801740372692",

    reviewWidget: "",
  },

  {
    name: "কুসুমবাগ শাখা",
    img: "/images/branches/kusumbag.jpg",
    address: "কুসুমবাগ পয়েন্ট, মৌলভীবাজার",
    phone: "+8801740372692",

    reviewWidget: "",
  },
];
