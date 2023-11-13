import {HeartOutlined,TrophyFilled, BulbFilled, SafetyCertificateFilled  } from '@ant-design/icons';
import category1 from "../../assets/varnish.png"
export const nav: { text: string; path: string }[] = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "about",
      path: "/about",
    },
    {
      text: "services",
      path: "/services",
    },
    {
      text: "blog",
      path: "/blog",
    },
    {
      text: "feedback",
      path: "/feedback",
    },
    {
      text: "contact",
      path: "/contact",
    },
    {
      text: "login",
      path: "/login",
    },
  
  ];
  
  export const featured: { cover: any; name: string; total: string }[] = [
    {
      cover: category1,
      name: "Family House",
      total: "122 Property",
    },
    {
      cover: category1,
      name: "House & Villa",
      total: "155 Property",
    },
    {
      cover: category1,
      name: "Apartment",
      total: "300 Property",
    },
    {
      cover: category1,
      name: "Office & Studio",
      total: "80 Property",
    },
    {
      cover: category1,
      name: "Villa & Condo",
      total: "80 Property",
    },
  ];
  
  export const list: {
    id: number;
    cover: string;
    name: string;
    location: string;
    category: string;
    price: string;
    type: string;
  }[] = [
    {
      id: 1,
      cover: "https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png",
      name: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      category: "For Rent",
      price: "$3,700",
      type: "Apartment",
    },
    {
      id: 2,
      cover: "https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png",
      name: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      category: "For Sale",
      price: "$9,750",
      type: "Condos",
    },
    {
      id: 3,
      cover: "https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png",
      name: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      category: "For Rent",
      price: "$5,860",
      type: "Offices",
    },
    {
      id: 4,
      cover: "https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png",
      name: "Herringbone Realty",
      location: "5621 Liverpool, London",
      category: "For Sale",
      price: "$7,540",
      type: "Homes & Villas",
    },
    {
      id: 5,
      cover: "https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png",
      name: "Brick Lane Realty",
      location: "210 Montreal Road, Canada",
      category: "For Rent",
      price: "$4,850",
      type: "Commercial",
    },
    {
      id: 6,
      cover: "https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png",
      name: "Banyon Tree Realty",
      location: "210 Zirak Road, Canada",
      category: "For Sale",
      price: "$2,742",
      type: "Apartment",
    },
  ];
  


  interface Award {
    icon:  React.FC;
    num: string;
    name: string;
  }
  
  export const awards: Award[] = [
    {
      icon: TrophyFilled ,
      num: "32 M",
      name: "Blue Burmin Award",
    },
    {
      icon: SafetyCertificateFilled,
      num: "43 M",
      name: "Mimo X11 Award",
    },
    {
      icon: BulbFilled ,
      num: "51 M",
      name: "Australian UGC Award",
    },
    {
      icon: HeartOutlined,
      num: "42 M",
      name: "IITCA Green Award",
    },
  ];
  export const location: {
    id: number;
    name: string;
    Villas: string;
    Apartments: string;
    Offices: string;
    cover: string;
  }[] = [
    {
      id: 1,
      name: "New Orleans, Louisiana",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-1.png",
    },
    {
      id: 2,
      name: "Jerrsy, United State",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-2.png",
    },
    {
      id: 3,
      name: "Liverpool, London",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-3.png",
    },
    {
      id: 4,
      name: "NewYork, United States",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-4.png",
    },
    {
      id: 5,
      name: "Montreal, Canada",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-5.png",
    },
    {
      id: 6,
      name: "California, USA",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-6.png",
    },
  ];
  
  export const team: {
    list: string;
    cover: string;
    address: string;
    name: string;
    comment:string;
  
  }[] = [
    {
      list: "50",
      cover: "https://funny-daffodil-350bc9.netlify.app/images/customer/team-1.jpg",
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hendrerit, quam sit amet cursus egestas, justo odio vulputate felis, at tempus est erat nec ante."
     
    },
    {
      list: "70",
      cover: "https://funny-daffodil-350bc9.netlify.app/images/customer/team-1.jpg",
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hendrerit, quam sit amet cursus egestas, justo odio vulputate felis, at tempus est erat nec ante."
    },
    {
      list: "80",
      cover: "https://funny-daffodil-350bc9.netlify.app/images/customer/team-1.jpg",
      address: "Denever, USA",
      name: "Anna K. Young",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hendrerit, quam sit amet cursus egestas, justo odio vulputate felis, at tempus est erat nec ante."
   
    },
    {
      list: "51",
      cover: "https://funny-daffodil-350bc9.netlify.app/images/customer/team-1.jpg",
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hendrerit, quam sit amet cursus egestas, justo odio vulputate felis, at tempus est erat nec ante."
     
    },
    {
      list: "72",
      cover: "",
      address: "2272 Muradpur",
      name: "Mikat Syed",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hendrerit, quam sit amet cursus egestas, justo odio vulputate felis, at tempus est erat nec ante."
     
    },
    {
      list: "74",
      cover: "",
      address: "2272 Muradpur",
      name: "Hoque",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hendrerit, quam sit amet cursus egestas, justo odio vulputate felis, at tempus est erat nec ante."
     
    },
    {
      list: "76",
      cover: "",
      address: "2272 Muradpur",
      name: "Syed",
      comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hendrerit, quam sit amet cursus egestas, justo odio vulputate felis, at tempus est erat nec ante."
     
    }
  ];
  
  export const price: {
    plan?: string;
    best?: string;
    price: string;
    ptext: string;
    list: { icon: string; text: string; change?: string }[];
  }[] = [
    {
      plan: "Basic",
      price: "29",
      ptext: "per user, per month",
      list: [
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "120GB CDN Bandwidth",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "5GB Cloud Storage",
        },
        { change: "color", icon: "<i class='fa-solid fa-x'></i>", text: "Personal Help Support" },
        { change: "color", icon: "<i class='fa-solid fa-x'></i>", text: "Enterprise SLA" },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "49",
      ptext: "per user, per month",
      list: [
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "150GB CDN Bandwidth",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "10GB Cloud Storage",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: "<i class='fa-solid fa-x'></i>",
          text: "Enterprise SLA",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "79",
      ptext: "2 user, per month",
      list: [
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "100% Uptime Guarantee",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "200GB CDN Bandwidth",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "20GB Cloud Storage",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "Personal Help Support",
        },
        {
          icon: "<i class='fa-solid fa-check'></i>",
          text: "Enterprise SLA",
        },
      ],
    },
  ];
  
  export const footer: { title: string; text: { list: string }[] }[] = [
    {
      title: "LAYOUTS",
      text: [
        { list: "Home Page" },
        { list: "About Page" },
        { list: "Service Page" },
        { list: "Property Page" },
        { list: "Contact Page" },
        { list: "Single Blog" },
      ],
    },
    {
      title: "ALL SECTIONS",
      text: [
        { list: "Headers" },
        { list: "Features" },
        { list: "Attractive" },
        { list: "Testimonials" },
        { list: "Videos" },
        { list: "Footers" },
      ],
    },
    {
      title: "COMPANY",
      text: [
        { list: "About" },
        { list: "Blog" },
        { list: "Pricing" },
        { list: "Affiliate" },
        { list: "Login" },
        { list: "Changelog" },
      ],
    },
  ];
  