import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Phone,
  Smartphone,
  Mail,
  Globe,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import ISOLogo from "./assets/aboutUs/iso-logo.jpg";
import IAMLogo from "./assets/aboutUs/iam-logo.png";
import ARALogo from "./assets/aboutUs/ara-logo.png";

export const ICONS = {
  Phone,
  Smartphone,
  Mail,
  Globe,
  MapPin,
};

export const navItems = [
  { id: 1, label: "HOME", to: "/" },
  { id: 2, label: "ABOUT US", to: "/about" },
  {
    id: 3,
    label: "OUR SERVICES",
    to: "",
    items: [
      { id: 1, label: "ALLIED SERVICES", to: "/our-services/allied-services" },
      {
        id: 2,
        label: "SPECTRUM OF SERVICES",
        to: "/our-services/spectrum-of-services",
      },
    ],
  },
  { id: 1, label: "TESTIMONIALS", to: "/testimonials" },
  {
    id: 1,
    label: "OUR CLIENTELE",
    to: "",
    items: [
      {
        id: 1,
        label: "EMBASSIES & DIPLOMATIC MISSIONS",
        to: "/our-clientele/embassies-client",
      },
      {
        id: 2,
        label: "CORPORATE & BANKS",
        to: "/our-clientele/corporate-client",
      },
    ],
  },
  { id: 1, label: "OUR NETWORK", to: "/our-network" },
  { id: 1, label: "CUSTOM REGULATIONS", to: "/custom-regulations" },
];

export const highlights = [
  {
    id: 1,
    heading: "Globe Domestic Relocation",
    content: "Packing all your goods in time and with perfection",
  },
  {
    id: 2,
    heading: "International Relocation",
    content: "Over 60+ years of excellence in moving",
  },
  {
    id: 3,
    heading: "Warehouse Housing",
    content:
      "Providing reliable packing services at an extremely affordable price",
  },
  {
    id: 4,
    heading: "Pet Relocation",
    content:
      "We carry out door-to-door, safe, comfortable, and friendly pet relocations",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Amaresh Mehrish",
    role: "NSN Head Contract Management, India",
    avatar:
      "https://i0.wp.com/www.Nokiapoweruser.com/wp-content/uploads/2013/08/Nokia_Siemens_Networks_logo.png",
    feedback:
      "Would like to put on record the excellent service granted by Packways in relocation of my household goods from Dubai. Also appreciate your expediting of customs clearance.",
  },
  {
    id: 2,
    name: "Susan & Kenneth Macartney",
    role: "Deputy High Commissioner, Canadian High Commission",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png",
    feedback:
      "The services of Packways for packing both our sea & air shipments were excellent. The team was careful, thorough, efficient & courteous. Highly recommend.",
  },
  {
    id: 3,
    name: "Anant Raman",
    role: "H.M.E.L",
    avatar: "https://www.hmel.in/assets/images/HMEL-Logo.svg",
    feedback:
      "The job was done very professionally. Packers behaved well & were very courteous. Overall, it was an excellent job.",
  },
  {
    id: 4,
    name: "Ciaron Murphy",
    role: "Nokia Siemens Network",
    avatar:
      "https://i0.wp.com/www.Nokiapoweruser.com/wp-content/uploads/2013/08/Nokia_Siemens_Networks_logo.png",
    feedback:
      "Excellent! The staff was very good & I was impressed they remembered where everything was! Would use again happily.",
  },
  {
    id: 5,
    name: "H.E. Mr. Robert Toscano",
    role: "Italian High Commission",
    avatar:
      "https://i.pinimg.com/736x/0d/48/f9/0d48f91fdcb4e92f219a3c72f87a24eb.jpg",
    feedback: "Excellent! Very competent team & well led.",
  },
  {
    id: 6,
    name: "H.E. Mr. Luis Filipe Castro Mendes",
    role: "Ambassador, Portugal Embassy",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Portugal_%28official%29.svg/500px-Flag_of_Portugal_%28official%29.svg.png",
    feedback: "Good service, fast & efficient. Full satisfaction.",
  },
  {
    id: 7,
    name: "H.E. Mrs Dorcas Ana Kgosietsile",
    role: "Ambassador, Botswana High Commission",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
    feedback: "Excellent. Good job. Keep up the excellent work.",
  },

  {
    id: 8,
    name: "Denis O’Leary",
    role: "Embassy of Ireland",
    avatar: "https://cdn.britannica.com/33/1733-050-04264811/FLAG-Ireland.jpg",
    feedback:
      "Excellent! A great job. I would highly recommend Packways. Great teamwork & experience shown. High class work.",
  },
  {
    id: 9,
    name: "Mr Jay Ihme",
    role: "Canadian High Commission",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png",
    feedback:
      "In 8 years, this was the most complete, safe & professional job of packing I have seen. Excellent!",
  },
  {
    id: 10,
    name: "Mr Ravi Kiran",
    role: "Nokia Siemens Network",
    avatar:
      "https://i0.wp.com/www.Nokiapoweruser.com/wp-content/uploads/2013/08/Nokia_Siemens_Networks_logo.png",
    feedback: "Really good & delighted by their service.",
  },
  {
    id: 11,
    name: "Ms Eva Dubova",
    role: "Czech Embassy",
    avatar: "https://mzv.gov.cz/public/d/1b/a6/2221058_1637067_vlajka.gif",
    feedback:
      "Excellent! The staff was extremely helpful trying to find the best solution to all parties.",
  },
  {
    id: 12,
    name: "Anand Panda",
    role: "Citibank",
    avatar: "https://www.citi.com/CBOL/IA/Angular/assets/citiredesign.svg",
    feedback: "Excellent! Very professional work. Good staff.",
  },
  {
    id: 13,
    name: "Satyabrata Das",
    role: "Hewitt Associates",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hewitt_Associates_logo.svg/250px-Hewitt_Associates_logo.svg.png",
    feedback: "The service rendered was excellent end-to-end.",
  },
  {
    id: 14,
    name: "Gautam Kohli",
    role: "Bharti Airtel",
    avatar: "https://www.airtel.in/assets/images/airtel-logo.png",
    feedback:
      "Excellent! Very cooperative & helpful in nature which made our relocation a very nice experience.",
  },
  {
    id: 15,
    name: "Mr. Sudeep T",
    role: "Nokia",
    avatar:
      "https://toppng.com/uploads/preview/nokia-logo-11609370342ep7xqwpi9i.png",
    feedback: "Excellent work done!",
  },

  {
    id: 16,
    name: "Pavel Vizda",
    role: "Slovak Embassy",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png",
    feedback: "The best team ever! Excellent!",
  },
  {
    id: 17,
    name: "Col. Levi Franklin",
    role: "Kenya High Commission",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
    feedback:
      "Packways staff did a very good job all through. I will recommend the firm to my friends.",
  },
  {
    id: 18,
    name: "Purnima Kashyap",
    role: "World Food Programme",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdd7d9bVO9hTfD6v-IMf7tBG96Cq_gMyOXg&s",
    feedback:
      "All the work was done in good time & the team was well-mannered & polite.",
  },
  {
    id: 19,
    name: "Col. Alejandro Etchevery Boneo",
    role: "Argentina Embassy",
    avatar:
      "https://cdn.britannica.com/69/5869-050-6DD75C6F/Flag-Argentina.jpg",
    feedback:
      "The packing service has been extremely excellent, handled with care & responsibility.",
  },

  {
    id: 20,
    name: "Rishi Mahendroo",
    role: "Citibank",
    avatar: "https://www.citi.com/CBOL/IA/Angular/assets/citiredesign.svg",
    feedback:
      "Excellent! Very helpful team. The supervisor was very good. Thanks.",
  },
  {
    id: 21,
    name: "Anil Kumar Laloraya",
    role: "Max New York Life",
    avatar:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201202/max-new-york-505_021512095856.jpg?size=948:533",
    feedback: "Excellent! Your employees are excellent too.",
  },
  {
    id: 22,
    name: "Vishal Sharma",
    role: "Ogilvy & Mather",
    avatar:
      "https://freeyorkk.b-cdn.net/wp-content/uploads/2017/01/Ogilvy-Mather.jpeg",
    feedback: "Excellent work.",
  },
  {
    id: 23,
    name: "Vishal Bhardwaj",
    role: "Citibank",
    avatar: "https://www.citi.com/CBOL/IA/Angular/assets/citiredesign.svg",
    feedback:
      "Excellent! Very cooperative & helpful. Very good service. Efficient.",
  },
  {
    id: 24,
    name: "Larry G Polgase",
    role: "Hydro Tasmania Consulting Pvt Ltd",
    avatar:
      "https://cdn.prod.website-files.com/64f9d0036cb97160cc26feba/64f9d0036cb97160cc270f8f_Member-logos-350x182-Hydro-Tasmania.png",
    feedback: "Very professional service by all staff. Prompt attention.",
  },
  {
    id: 25,
    name: "Angus Macdonald",
    role: "Oriental Consultants",
    avatar:
      "https://www.oriconsul-india.com/assets/base/img/layout/logos/logo-1.png",
    feedback:
      "A very professional service. Recommend to everyone of my colleagues.",
  },
  {
    id: 26,
    name: "Mark Cerny",
    role: "Pramet Tools India (P) Ltd",
    avatar: "https://cdn-images.himalayas.app/f6mv9qwtu7mdnnuxp3k9xoglucjy",
    feedback:
      "We were pleasantly surprised with amazing service & attitude of this Company & will recommend to other expats. Thank you for professionalism.",
  },

  {
    id: 27,
    name: "Gavin Abbott",
    role: "DMRC Office",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Delhi_Metro_logo.svg",
    feedback: "Excellent service.",
  },
  {
    id: 28,
    name: "Abderrezak Aourir",
    role: "Embassy of Algeria",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/800px-Flag_of_Algeria.svg.png",
    feedback:
      "The team is very professional. Excellent. Keep up the good work.",
  },
  {
    id: 29,
    name: "Sam Peter Sanal",
    role: "Hewitt",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hewitt_Associates_logo.svg/250px-Hewitt_Associates_logo.svg.png",
    feedback: "Excellent! Neat & efficient.",
  },
  {
    id: 30,
    name: "Abhinav Verma",
    role: "Bharti Airtel",
    avatar: "https://www.airtel.in/assets/images/airtel-logo.png",
    feedback: "Very happy with the service. Thanks for your cooperation.",
  },

  {
    id: 31,
    name: "Ms Sangita",
    role: "Nokia India",
    avatar:
      "https://toppng.com/uploads/preview/nokia-logo-11609370342ep7xqwpi9i.png",
    feedback:
      "Excellent job. It was executed very well & the staff was very helpful & courteous.",
  },
];

// FOOTER CONSTANTS
// Navigation Links
export const FOOTER_NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

// Contact Details
export const FOOTER_CONTACTS = {
  email: "delhi@packwaysrelocations.com",
  phones: ["+91 11 46678246"], // Landline (Telephone)
  mobiles: ["+91 9811031429", "+91 9810014196", "+91 9810017395"], // Mobile Numbers
  address:
    "B - 275, Okhla Industrial Area, Phase-I New Delhi - 110 020 [INDIA]",
};

// Certification Logos (Images stay imported in Footer.jsx)
export const FOOTER_CERTIFICATIONS = [
  { src: ISOLogo, alt: "ISO" },
  { src: IAMLogo, alt: "IAM" },
  { src: ARALogo, alt: "ARA" },
];

// Network Locations

export const NETWORK_LOCATIONS = [
  {
    city: "NEW DELHI (HEAD OFFICE)",
    company: "PACKWAYS (P) Limited",
    address: "B 275, Okhla Industrial Area, Phase I, New Delhi 110 020 INDIA",
    tel: "(91-11) 46678246, (91-11) 41251934",
    mobile: "+91 9811031429, +91 9810014196",
    email: "delhi@packwaysrelocations.com",
    website: "www.packwaysrelocations.com",
    note: "All Rates Enquiries Should be Directed to Our Corporate Office In New Delhi Irrespective Of Origin/ Destination Of Shipment In India.",
  },
  {
    city: "MUMBAI",
    company: "PACKWAYS (P) Limited",
    address:
      "C 5, Ansa Industrial Estate, Saki Vihar Road, Andheri (East), Mumbai 400072",
    tel: "(91-22) 28473064",
    mobile: "+91 9810048922",
    email: "mumbai@packwaysrelocations.com",
  },
  {
    city: "CHENNAI",
    company: "PACKWAYS INTERNATIONAL (Madras)",
    address: "No. 4, Numbal Road, Vellapan Chavedi, Chennai - 600077",
    tel: "044 26271755",
    mobile: " +91 09790971934",
    email: "chennai@packwaysrelocations.com",
  },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com",
    icon: Linkedin,
    hoverColor: "hover:text-blue-700",
  },
  {
    href: "https://www.twitter.com",
    icon: Twitter,
    hoverColor: "hover:text-blue-600",
  },
  {
    href: "https://www.facebook.com",
    icon: Facebook,
    hoverColor: "hover:text-blue-600",
  },
  {
    href: "https://www.instagram.com",
    icon: Instagram,
    hoverColor: "hover:text-pink-500",
  },
];

export const ContactFormFields = [
  {
    name: "First Name",
    label: "First Name",
    placeholder: "John",
    type: "text",
    component: "input",
    required: true,
    rules: {
      required: "First Name is required",
      minLength: {
        value: 3,
        message: "First Name must be at least 3 characters long",
      },
      maxLength: {
        value: 100,
        message: "First Name must not exceed 100 characters",
      },
    },
  },
  {
    name: "Last Name",
    label: "Last Name",
    placeholder: "Doe",
    type: "text",
    component: "input",
    required: true,
    rules: {
      required: "Last Name is required",
      minLength: {
        value: 3,
        message: "Last Name must be at least 3 characters long",
      },
      maxLength: {
        value: 100,
        message: "Last Name must not exceed 100 characters",
      },
    },
  },
  {
    name: "Company",
    label: "Company (Optional)",
    placeholder: "Company Name",
    type: "text",
    component: "input",
    required: false,
  },
  {
    name: "Address",
    label: "Address",
    placeholder: "Address",
    type: "text",
    component: "input",
    required: false,
  },
  {
    name: "Email",
    label: "Email",
    placeholder: "john.doe@example.com",
    type: "email",
    component: "input",
    required: true,
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },
  },
  {
    name: "Phone",
    label: "Phone",
    placeholder: "+91 12345-67890",
    type: "tel",
    component: "input",
    required: false,
    rules: {
      pattern: {
        value: /^\+?[0-9\s\-().]{7,15}$/,
        message: "Please enter a valid phone number",
      },
    },
  },
  {
    name: "Message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message...",
    required: false,
  },
];

//SERVICES
//Allied Services

export const alliedServicesData = [
  {
    title: "Inbound Shipment Handling",
    description: `We strive to maintain the same high standards of quality & personalized care 
    to move in your incoming shipment from abroad. Our professional & qualified staffs keep you posted 
    about its impending arrival, provide guidance on customs formalities & handle all import documentation 
    to ensure smooth & prompt customs clearance. After unpacking for random customs examination 
    & repacking after inspection, we deliver your much-awaited treasured possessions intact to 
    your new residence, duly unpack, assemble & set up your goods under your direction & remove 
    all packing debris.`,
  },
  {
    title: "Local Moving",
    description: `We, at PACKWAYS (P) Limited, understand that stress related to move has very 
    little to do with distance travelled & take short distance relocations as seriously. Whether you are 
    moving across the street or around the earth, our professionally trained crew has the practical 
    experience to identify potential hurdles—be it moving street or a congested stairway or difficult 
    hoisting, to ensure a seamless move, laying strict emphasis on quality & attention to detail.`,
  },
  {
    title: "Office Relocation",
    description: `Relocating a business establishment is often a race against time. Trained to 
    move anything from detailed sequential filing system to a complete library, special office furniture 
    to expensive & sensitive office automation equipment, PACKWAYS (P) Limited movers work 
    efficiently at a frenzied pace to meet deadlines. While you take the weekend off, the efficient 
    Packways crew reinstalls your old office in sequence at a new place so that on Monday morning, 
    it’s business as usual!`,
  },
  {
    title: "Vehicle Import/Relocation",
    description: `Our 60 years of experience has given us the edge & expertise not only on 
    removals of household & office goods but also on the import, export & relocation of automobiles. 
    The PACKWAYS (P) Limited complete service offer includes competitive packages to handle 
    the shipment of automobiles/vehicles into & out of the country. We provide assistance in all the 
    accompanying documentation & customs clearance required.`,
  },
  {
    title: "Insurance/Risk Management",
    description: `At PACKWAYS (P) Limited, we do our utmost to provide the greatest care & 
    maximum protection, but overseas movement of goods are exposed to unforeseeable risks associated 
    with sea, air, land transportation, port & terminal activity, natural disaster etc. Comprehensive 
    door-to-door insurance coverage is arranged & tailored to suit individual requirements at most 
    competitive premiums for your move anywhere in the world. We monitor the claims settlement 
    process with the insurance company to ensure expeditious reimbursement – complete follow up 
    for total satisfaction is our goal.`,
  },
  {
    title: "Warehousing",
    description: `Storage at PACKWAYS (P) Limited.’ modern, secure, environmentally controlled 
    warehouse facilities is the answer to all your temporary space problems. Household goods, heavy 
    machinery, industrial equipment or office records for which there is no immediate need can be 
    conveniently stored at our fully insured warehouse indefinitely, offering maximum security 
    for your goods until you need them.`,
  },
];

// Spectrum Services
export const spectrumServicesData = [
  {
    title: "Pre-Move Planning",
    description: `An experienced relocation consultant will visit your home for initial assessment of your belongings.
    Depending on your destination, volume & nature of goods, we offer a free cost analysis with flexible
    solutions in response to your specific needs keeping your time & budgetary parameters in mind. You are
    also briefed how the entire move will be handled in terms of operations, logistics & material management.`,
  },
  {
    title: "Superior Packing",
    description: `Quality of packing provided at origin is the key to a successful move & this is where our skilled,
    well-supervised, uniformed crew excels. In addition to our excellent workmanship, we use the finest
    quality packing materials conforming to international standards. Delicate possessions, high value items,
    objects d’art are treated with utmost care & are individually packed into customized wooden crates or
    cases to ensure special protection.`,
  },
  {
    title: "Worldwide Shipping",
    description: `After completion of packing & proper inventorization, your goods are loaded into the container type best
    suited to your move requirements. This could mean packing into wooden lift vans, customized sea or air
    cases or directly into 20ft or 40 ft ship container. We attend to all the details & logistics of your
    overseas move including export documentation & customs formalities. As your international expert, we
    remain strictly focused on the intricacies of international transportation & use only the most reliable &
    cost effective shipping or freight Companies to forward your goods to their destination hence, your move
    whether by air, sea or land is guaranteed to be punctual & eventless.`,
  },
  {
    title: "Global Destination Services",
    description: `With an international network of highly qualified destination partners who are basically an extension of
    our own services, we arrange necessary customs formalities at the arrival port / airport & coordinate
    timely delivery of your goods to your new home where your valued possessions will be carefully unpacked,
    inspected against the inventory drawn up at origin, positioned in appropriate rooms & debris removed the
    same day. Our trusted destination partners assists you in inspecting your possessions as they are
    delivered at your new home, noting any damage or missing items. We take full responsibility for your
    consignment from pack-up through transit to arrival.`,
  },
];

export const indiaMapPoints = [
  {
    id: 1,
    name: "Mumbai, Maharashtra",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: 2,
    name: "Delhi (NCT)",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: 3,
    name: "Bengaluru, Karnataka",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: 4,
    name: "Chennai, Tamil Nadu",
    lat: 13.0827,
    lng: 80.2707,
  },
  {
    id: 5,
    name: "Hyderabad, Telangana",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: 6,
    name: "Ahmedabad, Gujarat",
    lat: 23.0225,
    lng: 72.5714,
  },
  {
    id: 7,
    name: "Surat, Gujarat",
    lat: 21.1702,
    lng: 72.8311,
  },
  {
    id: 8,
    name: "Pune, Maharashtra",
    lat: 18.5204,
    lng: 73.8567,
  },
  {
    id: 9,
    name: "Kolkata, West Bengal",
    lat: 22.5726,
    lng: 88.3639,
  },
  {
    id: 10,
    name: "Coimbatore, Tamil Nadu",
    lat: 11.0168,
    lng: 76.9558,
  },
  {
    id: 11,
    name: "Nagpur, Maharashtra",
    lat: 21.1458,
    lng: 79.0882,
  },
  {
    id: 12,
    name: "Vadodara, Gujarat",
    lat: 22.3072,
    lng: 73.1812,
  },
  {
    id: 13,
    name: "Kanpur, Uttar Pradesh",
    lat: 26.4499,
    lng: 80.3319,
  },
  {
    id: 14,
    name: "Ludhiana, Punjab",
    lat: 30.901,
    lng: 75.8573,
  },
  {
    id: 15,
    name: "Jamshedpur, Jharkhand",
    lat: 22.8046,
    lng: 86.2029,
  },
  {
    id: 16,
    name: "Noida, Uttar Pradesh",
    lat: 28.5355,
    lng: 77.391,
  },
  {
    id: 17,
    name: "Gurugram, Haryana",
    lat: 28.4595,
    lng: 77.0266,
  },
];

export const worldMapPoints = [
  // North America
  { id: 1, name: "California (USA)", lat: 36.77, lng: -119.42 },
  { id: 2, name: "Texas (USA)", lat: 31.05, lng: -97.56 },
  { id: 3, name: "New York (USA)", lat: 42.91, lng: -75.53 },
  {
    id: 4,
    name: "Toronto (Canada)",
    lat: 43.65,
    lng: -79.38,
  },
  { id: 5, name: "Ontario (Canada)", lat: 50.0, lng: -85.0 },
  { id: 6, name: "Quebec (Canada)", lat: 52.94, lng: -73.55 },
  { id: 7, name: "Mexico City (Mexico)", lat: 19.43, lng: -99.13 },
  // South America
  { id: 8, name: "São Paulo (Brazil)", lat: -23.55, lng: -46.63 },
  { id: 9, name: "Rio de Janeiro (Brazil)", lat: -22.91, lng: -43.17 },
  { id: 10, name: "Buenos Aires (Argentina)", lat: -34.61, lng: -58.38 },
  { id: 11, name: "Lima (Peru)", lat: -12.05, lng: -77.04 },
  { id: 12, name: "Bogotá (Colombia)", lat: 4.71, lng: -74.07 },
  // Europe
  { id: 13, name: "Bavaria (Germany)", lat: 48.79, lng: 11.49 },
  { id: 14, name: "Catalonia (Spain)", lat: 41.39, lng: 2.17 },
  { id: 15, name: "Lombardy (Italy)", lat: 45.47, lng: 9.19 },
  { id: 16, name: "Moscow Oblast (Russia)", lat: 55.75, lng: 37.62 },
  { id: 17, name: "London (UK)", lat: 51.5, lng: -0.2 },
  { id: 18, name: "Paris (France)", lat: 48.85, lng: 2.35 },
  // Asia
  {
    id: 19,
    name: "Delhi (India)",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: 20,
    name: "Dhaka (Bangladesh)",
    lat: 13.43,
    lng: 100.6,
  },
  {
    id: 21,
    name: "Singapore (Malaysia)",
    lat: 1.35,
    lng: 103.82,
  },
  { id: 22, name: "Beijing Municipality (China)", lat: 39.9, lng: 116.4 },
  { id: 23, name: "Shanghai (China)", lat: 31.23, lng: 121.47 },
  { id: 24, name: "Tokyo (Japan)", lat: 35.68, lng: 139.76 },
  { id: 25, name: "Seoul (South Korea)", lat: 37.57, lng: 126.98 },
  { id: 26, name: "Bangkok (Thailand)", lat: 13.75, lng: 100.5 },
  // Africa
  { id: 27, name: "Cape Town (South Africa)", lat: -33.93, lng: 18.42 },
  { id: 28, name: "Cairo (Egypt)", lat: 30.04, lng: 31.24 },
  { id: 29, name: "Lagos (Nigeria)", lat: 6.52, lng: 3.37 },
  { id: 30, name: "Casablanca (Morocco)", lat: 33.57, lng: -7.59 },
  // Oceania
  { id: 31, name: "Victoria (Australia)", lat: -37.47, lng: 144.78 },
  { id: 32, name: "Queensland (Australia)", lat: -20.92, lng: 142.7 },
  { id: 33, name: "Auckland (New Zealand)", lat: -36.85, lng: 174.76 },
];

// Corporate Client Data Array - Add as many as needed
export const corporateClients = [
  {
    id: 1,
    name: "ABN AMRO Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/ABN_AMRO_logo.svg/375px-ABN_AMRO_logo.svg.png",
  },
  {
    id: 2,
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png",
  },
  {
    id: 3,
    name: "ACMA",
    logo: "https://www.acma.in/assets/images/acma_primary_logo.png",
  },
  {
    id: 4,
    name: "Hewitt Associates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hewitt_Associates_logo.svg/1200px-Hewitt_Associates_logo.svg.png",
  },
  {
    id: 5,
    name: "Air France",
    logo: "https://res.cloudinary.com/wego/f_auto,fl_lossy,w_1000,q_auto/v1480072078/flights/airlines_square/AF",
  },
  {
    id: 6,
    name: "Alight HR Services",
    logo: "https://images.squarespace-cdn.com/content/v1/5b12f450ec4eb7f53e3862f2/279d004d-abaf-4e86-8518-9b306ae2d900/Signature+Revised+1024px.png",
  },
  {
    id: 7,
    name: "Amazon",
    logo: "https://static.startuptalky.com/2021/07/Amazon-Logo-StartupTalky.jpg",
  },
  {
    id: 8,
    name: "American Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/330px-American_Express_logo_%282018%29.svg.png",
  },
  {
    id: 9,
    name: "ANZ Grindlays Bank",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/ANZ-Logo-2001-2009.png",
  },
  {
    id: 10,
    name: "Aon Consulting",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Aon_Corporation_logo.svg/640px-Aon_Corporation_logo.svg.png",
  },
  {
    id: 11,
    name: "Apple Inc.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 12,
    name: "Asian Paints Ltd.",
    logo: "https://ejhqezy8bku.exactdn.com/wp-content/uploads/2022/11/Asian-Paints.png?strip=all&lossy=1&ssl=1",
  },
  {
    id: 13,
    name: "Aurther Anderson",
    logo: "https://www.verdict.co.uk/wp-content/uploads/2017/03/shutterstock_181601729.jpg",
  },
  {
    id: 14,
    name: "Axis Bank",
    logo: "https://m.economictimes.com/thumb/msid-74774477,width-1200,height-900,resizemode-4,imgsize-119770/axis-bank-agencies.jpg",
  },
  {
    id: 15,
    name: "Bajaj Capital",
    logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/155310d0db0a4f15a514cdcc23192cdd",
  },
  {
    id: 16,
    name: "Ballapur Industries",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/BILT_new_logo.svg/300px-BILT_new_logo.svg.png",
  },
  {
    id: 17,
    name: " ",
    logo: "https://mma.prnewswire.com/media/1612970/3991146/Bank_of_America_Corporation_Logo.jpg?p=facebook",
  },
  {
    id: 18,
    name: "Bank of India",
    logo: "https://images.indianexpress.com/2023/07/boi.jpg?w=414",
  },
  {
    id: 19,
    name: "Banque Nationale de Paris",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Banque-nationale-de-paris-104898.jpg/375px-Banque-nationale-de-paris-104898.jpg",
  },
  {
    id: 20,
    name: "Bayer India",
    logo: "https://www.bayer.in/themes/custom/bayer_cpa/logo.svg",
  },
  {
    id: 21,
    name: "BBC World",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bbcw_logo_square.png",
  },
  {
    id: 22,
    name: "Bharati Airtel",
    logo: "https://www.airtel.in/assets/images/airtel-logo.png",
  },
  {
    id: 23,
    name: "Bharati Cellular Ltd.",
    logo: "https://www.gsma.com/get-involved/gsma-membership/wp-content/uploads/2014/06/Bharti-hexacom-logo.png",
  },
  {
    id: 24,
    name: "Bharti Walmart Ltd.",
    logo: "https://d3fwccq2bzlel7.cloudfront.net/Pictures/280xAny/3/1/8/28318_2_1200338_s.jpg",
  },
  {
    id: 25,
    name: "Birla 3M",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/3M_wordmark.svg/640px-3M_wordmark.svg.png",
  },
  {
    id: 26,
    name: "Birla Home Finance",
    logo: "https://content.jdmagicbox.com/comp/pune/v1/020pxx20.xx20.200323090030.b2v1/catalogue/hinduja-leyland-finance-ltd-wakdewadi-khadki-finance-companies-vs03y02exl.jpg",
  },
  {
    id: 27,
    name: "Blue Star",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Blue_Star_%28company%29.svg/500px-Blue_Star_%28company%29.svg.png",
  },
  {
    id: 28,
    name: "Boots Co. India",
    logo: "https://www.bootsindia.com/wp-content/uploads/2022/09/logo-bootsindia.png",
  },
  {
    id: 29,
    name: "Bosch India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/375px-Bosch-logo.svg.png",
  },
  {
    id: 30,
    name: "BPL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/BPL_Logo.svg/1200px-BPL_Logo.svg.png",
  },
  {
    id: 31,
    name: "Britannia Industries",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Britannia_Industries_logo.svg/1200px-Britannia_Industries_logo.svg.png",
  },
  {
    id: 32,
    name: "British Airways",
    logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/4/42/British_Airways_Logo.svg/2560px-British_Airways_Logo.svg.png",
  },
  {
    id: 33,
    name: "Brooke Bond Lipton",
    logo: "https://m.media-amazon.com/images/I/61AuJgzUMlL._UF350,350_QL80_.jpg",
  },
  {
    id: 34,
    name: "Bush Boake Allen Ltd.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GrskI9_8LSXFsb-gnXJnOZR5pjtSCGgcX4uu9-abqxrV86n0vblYHsRHCtFtyYX-bp8&usqp=CAU",
  },
  {
    id: 35,
    name: "Business Standard",
    logo: "https://play-lh.googleusercontent.com/FNbjFdOnFCekprU5BdO3_UzfPh7njQv9awei8QE9TkSmt34OHo5EEEengLjmWCqqDGQ=w600-h300-pc0xffffff-pd",
  },
  {
    id: 36,
    name: "Cadbury's India",
    logo: "https://cadburygifting.in/static/9796621a040273d7765d1dcbe6fc8efd/9dd86/logo.webp",
  },
  {
    id: 37,
    name: "Cadence Design System",
    logo: "https://www.cadence.com/content/dam/cadence-www/global/en_US/images/site-images/icons/navigation-icons/cadence-logo-black.png",
  },
  {
    id: 38,
    name: "Canon India",
    logo: "https://in.canon/assets/brand/logo-300-002e45a4aec98fd92899838da9d5560f.png",
  },
  {
    id: 39,
    name: "Care India",
    logo: "https://assets.odishabytes.com/wp-content/uploads/2024/02/CARE-e1709116049420.jpeg",
  },
  {
    id: 40,
    name: "CEDPA-C3",
    logo: "https://www.c3india.org/assets/c3india/images/logo.png",
  },
  {
    id: 41,
    name: "CEEMAN",
    logo: "https://www.ceeman.org/images/default-source/logo/ceeman_logo9362975350D9.png?sfvrsn=2",
  },
  {
    id: 42,
    name: "Citi Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Citi_logo_March_2023.svg/1200px-Citi_logo_March_2023.svg.png",
  },
  {
    id: 43,
    name: "Coca-Cola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/330px-Coca-Cola_logo.svg.png",
  },
  {
    id: 44,
    name: "Godrej & Boyce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/GnB-logo.svg/500px-GnB-logo.svg.png",
  },
  {
    id: 45,
    name: "Colliers Jardine",
    logo: "https://www.colliers.com/-/media/images/colliers/unitedstates/national/footer/logofooter.ashx?bid=19443a8c23424c689d86c4d1320eac0f",
  },
  {
    id: 46,
    name: "Dabur India",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Dabur_Logo.svg/1200px-Dabur_Logo.svg.png",
  },
  {
    id: 47,
    name: " Delhi Metro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Delhi_Metro_logo.svg/330px-Delhi_Metro_logo.svg.png",
  },
  {
    id: 48,
    name: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/500px-Logo_of_Deloitte.svg.png",
  },
  {
    id: 49,
    name: "Deutsche Bank",
    logo: "https://cdn.mos.cms.futurecdn.net/MWK8SDoTyK8MKRCPHnrmvB-1200-80.jpg",
  },
  {
    id: 50,
    name: "East India Hotels",
    logo: "https://s3-symbol-logo.tradingview.com/eih--600.png",
  },
  {
    id: 51,
    name: "Edelman",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Edelman_PR_firm_logo.gif",
  },
  {
    id: 52,
    name: "Eli Lilly & Company",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/500px-Eli_Lilly_and_Company.svg.png",
  },
  {
    id: 53,
    name: "Ericsson India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHNwABCHZ7L-MqsTT71mahmXPUX5Q1C_9aw&s",
  },
  {
    id: 54,
    name: "Escorts Limited",
    logo: "https://inductusgroup.com/wp-content/uploads/2020/09/Escorts-Limited.jpg",
  },
  {
    id: 55,
    name: "Field Fresh Foods",
    logo: "https://www.fieldfresh.com/wp-content/uploads/2020/01/field-fresh-foods-logo.png",
  },
  {
    id: 56,
    name: "FLS Aerospace",
    logo: "https://images.all-free-download.com/images/graphiclarge/fls_aerospace_64979.jpg",
  },
  {
    id: 57,
    name: "Fortis Healthcare",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Fortis_Healthcare_logo.svg/330px-Fortis_Healthcare_logo.svg.png",
  },
  {
    id: 58,
    name: "G E Capital",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/GE_Capital.svg/375px-GE_Capital.svg.png",
  },
  {
    id: 59,
    name: "G E Wordwide",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/330px-General_Electric_logo.svg.png",
  },
  {
    id: 60,
    name: "G E Plastics",
    logo: "https://pneumat.com/wp-content/uploads/2020/08/GE-Plastics.jpg",
  },
  {
    id: 61,
    name: "Gillette India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Gillette.svg/330px-Gillette.svg.png",
  },
  {
    id: 62,
    name: "GlaxoSmithKline",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/GSK_logo_2022.svg/375px-GSK_logo_2022.svg.png",
  },
  {
    id: 63,
    name: "Google India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
  },
  {
    id: 64,
    name: "Hewlett Packard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/HP_logo_2025.svg",
  },
  {
    id: 65,
    name: "Hans India",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/The_Hans_India_Logo.jpg/500px-The_Hans_India_Logo.jpg",
  },
  {
    id: 66,
    name: "HDFC Bank",
    logo: "https://play-lh.googleusercontent.com/POGVZhNvSh05yA01H2VTlElv0Mw6r4R7hj9w7DaOvJVgiGoi0Fcawi02yITkyMT1zwqO=w240-h480-rw",
  },
  {
    id: 67,
    name: "HDFC Securities",
    logo: "https://unlistedzone.com/storage/company-logo/18/hdfc_securities_limited_unlisted_shares-logo-1705405732.png",
  },
  {
    id: 68,
    name: "Heinz India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Heinz_logo.svg/1200px-Heinz_logo.svg.png",
  },
  {
    id: 69,
    name: "Hindalco Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Hindalco_Logo.svg/1024px-Hindalco_Logo.svg.png",
  },
  {
    id: 70,
    name: "Hindustan Unilever",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Hindustan_Unilever_Logo.svg/500px-Hindustan_Unilever_Logo.svg.png",
  },
  {
    id: 71,
    name: "Hindustan Lever Ltd.",
    logo: "https://www.nicepng.com/png/detail/328-3286082_hindustan-lever-limited-logo-png-transparent-hindustan-lever.png",
  },
  {
    id: 72,
    name: "HSBC Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1024px-HSBC_logo_%282018%29.svg.png",
  },
  {
    id: 73,
    name: "Hughes Telecom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Hughes_Communications_logo.svg/500px-Hughes_Communications_logo.svg.png",
  },
  {
    id: 74,
    name: "Hutch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hutch_Logo.svg/1200px-Hutch_Logo.svg.png",
  },
  {
    id: 75,
    name: "Hyundai Motor",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/500px-Hyundai_Motor_Company_logo.svg.png",
  },
  {
    id: 76,
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/500px-IBM_logo.svg.png",
  },
  {
    id: 77,
    name: "ICEA",
    logo: "https://icrier.org/wp-content/uploads/2022/10/India-Cellular-and-Electronics-Association-ICEA.png",
  },
  {
    id: 78,
    name: "IDFC First Bank",
    logo: "https://assets.thehansindia.com/h-upload/2023/06/27/1361099-idfc-first-bank.jpg",
  },
  {
    id: 79,
    name: "ILFS",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Infrastructure_Leasing_%26_Financial_Services.svg/500px-Infrastructure_Leasing_%26_Financial_Services.svg.png",
  },
  {
    id: 80,
    name: "Indian Hotel Co. Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Indian_Hotels_Company_Limited_logo.svg/1200px-Indian_Hotels_Company_Limited_logo.svg.png",
  },
  {
    id: 81,
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/330px-Infosys_logo.svg.png",
  },
  {
    id: 82,
    name: "Infrastructure Development Finance Co. Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/InfrastructureDevelopmentFinanceCompanyLogo.jpg",
  },
  {
    id: 83,
    name: "Intel",
    logo: "https://www.thoughtco.com/thmb/xA0zo7FUyCKKiuR39yl56V2y5so=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/intel-logo-56a6fa195f9b58b7d0e5ce3a.png",
  },
  {
    id: 84,
    name: "IOTA Furniture",
    logo: "https://cdn.prod.website-files.com/5f2b10811a13a8d3ea18bd0f/6593a8267fcf1ee5ab6f9d9a_IOTA%20Logo%20-%20IOTA%20Web.png",
  },
  {
    id: 85,
    name: "ISS Facility Services",
    logo: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-72094,resizemode-75,msid-90029232/news/company/corporate-trends/iss-facility-services-india-aims-to-double-revenue-to-rs-2500-cr-by-2025-to-hire-25000-in-2-yrs.jpg",
  },
  {
    id: 86,
    name: "ITC Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ITC_Hotels_logo.svg/375px-ITC_Hotels_logo.svg.png",
  },
  {
    id: 87,
    name: "Jindal",
    logo: "https://newsroompost.com/wp-content/uploads/2022/08/Jindal.jpg",
  },
  {
    id: 88,
    name: "JW Thompson",
    logo: "https://www.agencyloft.com/wp-content/uploads/2017/01/j-walter-thompson-jwt-logo-vertical-white.png",
  },
  {
    id: 89,
    name: "K2 India",
    logo: "https://k2india.com/wp-content/uploads/2021/03/black-Logo-K2india.png",
  },
  {
    id: 90,
    name: "Kalyan Jewellers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kalyan_Jewellers_logo.svg/500px-Kalyan_Jewellers_logo.svg.png",
  },
  {
    id: 91,
    name: "Kapoor Architects",
    logo: "https://kapoorandassociates.in/wp-content/uploads/2019/05/KAPOOR-LOGO-GREEN-SHADOW-1.png",
  },
  {
    id: 92,
    name: "KIA Motors",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/KIA_logo3.svg/500px-KIA_logo3.svg.png",
  },
  {
    id: 93,
    name: "Kotak Mahindra Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Kotak_Mahindra_Group_logo.svg/500px-Kotak_Mahindra_Group_logo.svg.png",
  },
  {
    id: 94,
    name: "Krupp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Krupp_Logo.svg/330px-Krupp_Logo.svg.png",
  },
  {
    id: 95,
    name: "Larsen & Toubro",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Larsen%26Toubro_logo.svg/160px-Larsen%26Toubro_logo.svg.png",
  },
  {
    id: 96,
    name: "LG Soft",
    logo: "https://www.lgsoftindia.com/images/logo-new.png",
  },
  {
    id: 97,
    name: "Mather & Platt",
    logo: "https://www.matherandplatt.com/img/logo.png",
  },
  {
    id: 98,
    name: "Max Healthcare",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Max_Healthcare.svg/375px-Max_Healthcare.svg.png",
  },
  {
    id: 99,
    name: "Mearsk Ltd.",
    logo: "https://content3.jdmagicbox.com/v2/comp/mumbai/r1/022pxx22.xx22.171220194031.g8r1/catalogue/tp-mearsk-engineering-and-india-private-limited-mumbai-8lvou.jpg",
  },
  {
    id: 100,
    name: "Mentor Graphics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mentor_Graphics_logo.svg/500px-Mentor_Graphics_logo.svg.png",
  },
  {
    id: 101,
    name: "Microsoft India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/330px-Microsoft_logo_%282012%29.svg.png",
  },
  {
    id: 102,
    name: "Motherson Sumi",
    logo: "https://i.pinimg.com/736x/55/a0/4f/55a04f4881ac814911963c690a5e4b61.jpg",
  },
  {
    id: 103,
    name: "Nestle India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmFVdtWnsj2W_pkJMxXj3wzXGQZ9mwwrKlQ&s",
  },
  {
    id: 104,
    name: "Nokia",
    logo: "https://www.nokia.com/sites/default/files/2023-02/nokia-refreshed-logo-2_1.png?height=377&width=720",
  },
  {
    id: 105,
    name: "Oberoi Maidens",
    logo: "https://www.oberoihotels.com/-/media/oberoi-hotel/WebLogo_300724/TOND.png",
  },
  {
    id: 106,
    name: "Panacea Biotec",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Panacea_Biotec_Logo.svg/375px-Panacea_Biotec_Logo.svg.png",
  },
  {
    id: 107,
    name: "Patni",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Patni_Logo.svg/300px-Patni_Logo.svg.png",
  },
  {
    id: 108,
    name: "Pepsico",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/PepsiCologo.svg/500px-PepsiCologo.svg.png",
  },
  {
    id: 109,
    name: "Philips India",
    logo: "https://www.philips.com/c-dam/corporate/en_AA/about/about-us/homepage/global-homepage-thumbnail.jpg",
  },
  {
    id: 110,
    name: "Modern Decor",
    logo: "https://moderndecorindia.com/wp-content/uploads/2024/02/350x100-LOGO.png",
  },
  {
    id: 111,
    name: "Ranbaxy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Ranbaxy_Logo.svg/500px-Ranbaxy_Logo.svg.png",
  },
  {
    id: 112,
    name: "Reliance Industries",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Reliance_Industries.svg/330px-Reliance_Industries.svg.png",
  },
  {
    id: 113,
    name: "Samsung",
    logo: "https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$",
  },
  {
    id: 114,
    name: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/330px-SAP_2011_logo.svg.png",
  },
  {
    id: 115,
    name: "SBI Card Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/SBI_Card_logo.svg/500px-SBI_Card_logo.svg.png",
  },
  {
    id: 116,
    name: "Standard Chartered Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Standard_Chartered_%282021%29.svg/330px-Standard_Chartered_%282021%29.svg.png",
  },
  {
    id: 117,
    name: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Siemens_AG_logo.svg/500px-Siemens_AG_logo.svg.png",
  },
  {
    id: 118,
    name: "Sita Nanda Group",
    logo: "https://sitananda.com/wp-content/uploads/2023/09/SITA-NANDA-LOGO-02-850x410.jpg",
  },
  {
    id: 119,
    name: "Sony Corporation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/330px-Sony_logo.svg.png",
  },
  {
    id: 120,
    name: "SRF Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/SRF_Limited.png/500px-SRF_Limited.png",
  },
  {
    id: 121,
    name: "State Bank of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/State_Bank_of_India.svg/330px-State_Bank_of_India.svg.png",
  },
  {
    id: 122,
    name: "Style Expert Décor",
    logo: "https://cdn.ddecor.com/static/version1755878914/frontend/Ddecor/nextgen/en_US/images/logo.svg",
  },
  {
    id: 123,
    name: "Suzlon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Suzlon_Energy_logo.svg/500px-Suzlon_Energy_logo.svg.png",
  },
  {
    id: 124,
    name: "Tata AIG Insurance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/TATA_AIG_logo.png",
  },
  {
    id: 125,
    name: "Thyssen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Thyssen_Logo.svg/500px-Thyssen_Logo.svg.png",
  },
  {
    id: 126,
    name: "Verizon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Verizon_2024.svg/500px-Verizon_2024.svg.png",
  },
  {
    id: 127,
    name: "Vodafone",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Vodafone_2017_logo.svg/500px-Vodafone_2017_logo.svg.png",
  },
  {
    id: 128,
    name: "Voltas Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Voltas_logo.svg/500px-Voltas_logo.svg.png",
  },
  {
    id: 129,
    name: "Whirlpool India",
    logo: "https://corporate.whirlpoolindia.com/wp-content/uploads/2023/07/WhirlpoolBRAND-notR-2017Logo_2C_B.png",
  },
  {
    id: 130,
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png",
  },
  {
    id: 131,
    name: " ",
    logo: "https://www.yamaha-motor-india.com/theme/v4/images/yamaha_logo-black.webp?v=5",
  },
  {
    id: 132,
    name: "Yes Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Yes_Bank_logo.svg/500px-Yes_Bank_logo.svg.png",
  },
  {
    id: 133,
    name: "Young Bhumwoo India Pvt. Ltd.",
    logo: "https://www.evergreentechnologies.co.in/uploads/category-images/2024080613004352810_ybi.png",
  },
];

// Emassies Data - Client Data Array - Add as many as needed
export const embassiesClients = [
  {
    id: 1,
    name: "Algerian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/800px-Flag_of_Algeria.svg.png",
  },

  {
    id: 2,
    name: "Argentine Embassy",
    logo: "https://cdn.britannica.com/69/5869-050-6DD75C6F/Flag-Argentina.jpg",
  },
  {
    id: 3,
    name: "Australian High Commission",
    logo: "https://www.dfat.gov.au/themes/custom/dfat/assets/img/dfat-website-link-shares-default-image.png",
  },

  {
    id: 4,
    name: "Azerbaijan",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9GaUzVYzjghnOW-lLCTsBncKIHAOPy7Ajw&s",
  },
  {
    id: 5,
    name: "Bangladesh High Commission",
    logo: "https://file.mofa.gov.bd/uploads/central//607/27d/808/60727d8083dac131062836.png",
  },
  {
    id: 6,
    name: "Belgium Embassy",
    logo: "https://belgium.pl/site/assets/files/1069/logo_belgian_fps_foreign_affairs_-_even_years_-_embassy_of_belgium_-_original.png",
  },
  {
    id: 7,
    name: "Benin Embassy",
    logo: "https://embassynvisa.com/wp-content/uploads/2019/11/benin-consulates-and-embassy-700x500.jpg",
  },
  {
    id: 8,
    name: "Bhutan Embassy",
    logo: "https://embassynvisa.com/wp-content/uploads/2019/11/bhutan-embassy-and-consulates.jpg",
  },
  {
    id: 9,
    name: "Bosnia & Herzegovina",
    logo: "https://img.freepik.com/premium-vector/bosnia-herzegovina-waved-flag-vector-illustration-background_97173-609.jpg",
  },
  {
    id: 10,
    name: "Botswana High Commission",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ouE79K8UaeIytynxuCzMHJC64l1dV8erZg&s",
  },
  {
    id: 11,
    name: "Embassy of Brazil",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
  },
  {
    id: 12,
    name: "British High Commission",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/British_Ambassador_Flag.svg/1200px-British_Ambassador_Flag.svg.png?20170414094208",
  },
  {
    id: 13,
    name: "Embassy of Brunei",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
  },
  {
    id: 14,
    name: "Bulgarian Embassy",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGwZ5adUc8FAIZK2QK08TQbMu9L9TK2tOSA&s",
  },
  {
    id: 15,
    name: "Canadian High Commission",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png",
  },
  {
    id: 16,
    name: "Chile Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1024px-Flag_of_Chile.svg.png",
  },
  {
    id: 17,
    name: "Colombian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/500px-Flag_of_Colombia.svg.png",
  },
  {
    id: 18,
    name: "Embassy of Congo",
    logo: "https://www.ambacongo-us.org/sites/default/files/inline-images/flag1.jpg",
  },
  {
    id: 19,
    name: "Croatian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/500px-Flag_of_Croatia.svg.png",
  },
  {
    id: 20,
    name: "Cyprus Embassy",
    logo: "https://cdn.britannica.com/83/7883-050-0E5BCA30/Flag-Cyprus.jpg",
  },
  {
    id: 21,
    name: "Czech Embassy",
    logo: "https://www.vizatt.in/admin/Embassy_Images/Flag-Czech-Republic.jpeg",
  },
  {
    id: 22,
    name: "Ecuadorian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/960px-Flag_of_Ecuador.svg.png",
  },
  {
    id: 23,
    name: "Ethiopian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1200px-Flag_of_Ethiopia.svg.png",
  },
  {
    id: 24,
    name: "Egyptian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/500px-Flag_of_Egypt.svg.png",
  },
  {
    id: 25,
    name: "Finland Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/500px-Flag_of_Finland.svg.png",
  },

  {
    id: 26,
    name: "French Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/330px-Flag_of_France.svg.png",
  },
  {
    id: 27,
    name: "German Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flag_of_Germany_%28RGB%29.svg/500px-Flag_of_Germany_%28RGB%29.svg.png",
  },
  {
    id: 28,
    name: "Embassy of Ghana",
    logo: "https://cdn.britannica.com/54/5054-050-8EC06097/Flag-Ghana.jpg",
  },
  {
    id: 29,
    name: "Greek Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/500px-Flag_of_Greece.svg.png",
  },
  {
    id: 30,
    name: "Embassy of Guyana",
    logo: "https://cdn.britannica.com/06/1106-050-B039CA21/Flag-Guyana.jpg",
  },
  {
    id: 31,
    name: "Embassy of Hungary",
    logo: "https://www.godigit.com/content/dam/godigit/directportal/en/Embassy-Hungary-logo.png",
  },
  {
    id: 32,
    name: "Indonesian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/500px-Flag_of_Indonesia.svg.png",
  },
  {
    id: 33,
    name: "Embassy of Iraq",
    logo: "https://img.freepik.com/premium-photo/iraq-national-fabric-flag-textile-background-iraqi-state-official-sign_113767-2555.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 34,
    name: "Ireland Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  },
  {
    id: 35,
    name: "Israeli Embassy",
    logo: "https://new.embassies.gov.il/sites/default/files/styles/front_view_image/public/media_upload/israel_flag.jpg?itok=APlE9aO8",
  },
  {
    id: 36,
    name: "Italian Embassy",
    logo: "https://i0.wp.com/mfa.gov.bz/wp-content/uploads/2023/06/italy.png?fit=640%2C448&ssl=1",
  },
  {
    id: 37,
    name: "Embassy of Jordan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/500px-Flag_of_Jordan.svg.png",
  },
  {
    id: 38,
    name: "Embassy of Kenya",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png",
  },
  {
    id: 39,
    name: "North Korean Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/500px-Flag_of_North_Korea.svg.png",
  },
  {
    id: 40,
    name: "South Korean Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png",
  },
  {
    id: 41,
    name: "Kuwait Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
  },
  {
    id: 42,
    name: "Lebanese Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
  },
  {
    id: 43,
    name: "Embassy of Malawi",
    logo: "https://cdn.britannica.com/21/4221-050-1830E77A/Flag-Malawi.jpg",
  },
  {
    id: 44,
    name: "Malaysian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/500px-Flag_of_Malaysia.svg.png",
  },
  {
    id: 45,
    name: "Embassy of Maldives",
    logo: "https://cdn.britannica.com/80/2280-050-322910B4/Flag-Maldives.jpg",
  },
  {
    id: 46,
    name: "Embassy of Malta",
    logo: "https://cdn.britannica.com/86/2286-050-C9E3A660/Flag-Malta.jpg",
  },
  {
    id: 47,
    name: "Mauritius Embassy",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVmXfPmo9-Q3GgV6jt6QtVd0Sjne8PYET4g&s",
  },
  {
    id: 48,
    name: "Mexican Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/500px-Flag_of_Mexico.svg.png",
  },
  {
    id: 49,
    name: "Moroccan Embassy",
    logo: "https://www.sarkaritel.com/wp-content/uploads/2025/08/morocco-flag.jpg",
  },
  {
    id: 50,
    name: "Mozambique Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/500px-Flag_of_Mozambique.svg.png",
  },
  {
    id: 51,
    name: "Embassy of Namibia",
    logo: "https://cdn.britannica.com/25/4225-050-8FDF3956/Flag-Namibia.jpg",
  },
  {
    id: 52,
    name: "Netherlands Embassy",
    logo: "https://india-s-travel.com/images/svg/nl.svg",
  },
  {
    id: 53,
    name: "Nigerian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/500px-Flag_of_Nigeria.svg.png",
  },
  {
    id: 54,
    name: "Embassy of Norway",
    logo: "https://www.sarkaritel.com/wp-content/uploads/2025/08/norway-flag.jpg",
  },
  {
    id: 55,
    name: "Embassy of Oman",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/500px-Flag_of_Oman.svg.png",
  },
  {
    id: 56,
    name: "Embassy of Pakistan",
    logo: "https://pakembkazakhstan.org/wp-content/uploads/2023/03/flag.jpg",
  },
  {
    id: 57,
    name: "Embassy of Panama",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/500px-Flag_of_Panama.svg.png",
  },
  {
    id: 58,
    name: "Embassy of Peru",
    logo: "https://embassyflag.com/Asset/peruf.jpg",
  },
  {
    id: 59,
    name: "Philippines Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/500px-Flag_of_the_Philippines.svg.png",
  },
  {
    id: 60,
    name: "Embassy of Poland",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/330px-Flag_of_Poland.svg.png",
  },
  {
    id: 61,
    name: "Embassy of Portugal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Portugal_%28official%29.svg/1200px-Flag_of_Portugal_%28official%29.svg.png",
  },
  {
    id: 62,
    name: "Embassy of Qatar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/960px-Flag_of_Qatar.svg.png",
  },
  {
    id: 63,
    name: "Romanian Embassy",
    logo: "https://cdn.britannica.com/13/6213-050-374AB4AF/Flag-Romania.jpg",
  },
  {
    id: 64,
    name: "Saudi Arabian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png",
  },
  {
    id: 65,
    name: "Embassy of Senegal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/500px-Flag_of_Senegal.svg.png",
  },
  {
    id: 66,
    name: "Serbian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/500px-Flag_of_Serbia.svg.png",
  },
  {
    id: 67,
    name: "Singapore Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/500px-Flag_of_Singapore.svg.png",
  },
  {
    id: 68,
    name: "Slovak Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/500px-Flag_of_Slovakia.svg.png",
  },
  {
    id: 69,
    name: "Slovenian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/500px-Flag_of_Slovenia.svg.png",
  },
  {
    id: 70,
    name: "South African Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/500px-Flag_of_South_Africa.svg.png",
  },
  {
    id: 71,
    name: "Embassy of Spain",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/330px-Bandera_de_Espa%C3%B1a.svg.png",
  },
  {
    id: 72,
    name: "Sri Lankan Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/500px-Flag_of_Sri_Lanka.svg.png",
  },
  {
    id: 73,
    name: "Embassy of Sudan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/500px-Flag_of_Sudan.svg.png",
  },
  {
    id: 74,
    name: "Swedish Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/500px-Flag_of_Sweden.svg.png",
  },
  {
    id: 75,
    name: "Swiss Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/330px-Flag_of_Switzerland_%28Pantone%29.svg.png",
  },
  {
    id: 76,
    name: "Tanzanian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/500px-Flag_of_Tanzania.svg.png",
  },
  {
    id: 77,
    name: "Thai Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/500px-Flag_of_Thailand.svg.png",
  },
  {
    id: 78,
    name: "Trinidad and Tobago Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/500px-Flag_of_Trinidad_and_Tobago.svg.png",
  },
  {
    id: 79,
    name: "Tunisian Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/500px-Flag_of_Tunisia.svg.png",
  },
  {
    id: 80,
    name: "Turkish Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/500px-Flag_of_Turkey.svg.png",
  },
  {
    id: 81,
    name: "Embassy of the United States",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/500px-Flag_of_the_United_States_%28Web_Colors%29.svg.png",
  },
  {
    id: 82,
    name: "Embassy of the UAE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_United_Arab_Emirates.svg/594px-Emblem_of_the_United_Arab_Emirates.svg.png",
  },
  {
    id: 83,
    name: "Embassy of Uganda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1200px-Flag_of_Uganda.svg.png",
  },
  {
    id: 84,
    name: "Embassy of Uruguay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Coat_of_arms_of_Uruguay.svg",
  },
  {
    id: 85,
    name: "Vietnam Embassy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/500px-Flag_of_Vietnam.svg.png",
  },
  {
    id: 86,
    name: "Embassy of Yemen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1024px-Flag_of_Yemen.svg.png",
  },
  {
    id: 87,
    name: "Embassy of Zimbabwe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/500px-Flag_of_Zimbabwe.svg.png",
  },
  {
    id: 88,
    name: "Embassy of Zambia",
    logo: "https://cdn.britannica.com/31/4231-050-B24F289A/Flag-Zambia.jpg",
  },
];
