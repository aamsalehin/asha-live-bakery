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
    address: "শিবগঞ্জ, সিলেট",
    phone: "01700-000000",

    // ⭐ Shibganj Google Review Widget ID
    reviewWidget: "elfsight-app-3cd8590a-ea09-4d80-ac61-b31919346387",
  },

  {
    name: "শেখঘাট শাখা",
    img: "/images/branches/sheikhghat.jpg",
    address: "শেখঘাট, সিলেট",
    phone: "01700-000001",

    // Add your widget ID later
    reviewWidget: "",
  },

  {
    name: "মদিনা মার্কেট শাখা",
    img: "/images/branches/madina.jpg",
    address: "মদিনা মার্কেট, সিলেট",
    phone: "01700-000002",

    reviewWidget: "",
  },

  {
    name: "মাবেরখানা শাখা",
    img: "/images/branches/maberkhana.jpg",
    address: "মাবেরখানা, সিলেট",
    phone: "01700-000003",

    reviewWidget: "",
  },

  {
    name: "কুসুমবাগ শাখা",
    img: "/images/branches/kusumbag.jpg",
    address: "কুসুমবাগ, সিলেট",
    phone: "01700-000004",

    reviewWidget: "",
  },
];
