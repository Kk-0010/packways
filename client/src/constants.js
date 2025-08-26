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
  { id: 1, label: "OUR CLIENTELE", to: "/investor" },
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
    company: "Packways Ace Relocations (Intl. Division of Packways Pvt. Ltd.)",
    address: "B 275, Okhla Industrial Area, Phase I, New Delhi 110 020 INDIA",
    tel: "(91-11) 46678246, (91-11) 26812702",
    mobile: "+91 9810048922",
    email: "delhi@packwaysrelocations.com",
    website: "www.packwaysrelocations.com",
    note: "All Rates Enquiries Should be Directed to Our Corporate Office In New Delhi Irrespective Of Origin/ Destination Of Shipment In India.",
  },
  {
    city: "MUMBAI",
    company: "Packways Pvt. Ltd.",
    address:
      "C 5, Ansa Industrial Estate, Saki Vihar Road, Andheri (East), Mumbai 400072",
    tel: "(91-22) 28473064",
    mobile: "+91 9619343155",
    email: "mumbai@packwaysrelocations.com",
  },
  {
    city: "CHENNAI",
    company: "Packways International (Madras)",
    address: "No. 4, Numbal Road, Vellapan Chavedi, Chennai - 600077",
    tel: "044 - 26271755",
    mobile: "09790971934 - 09790971935",
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
    description: `We, at Packways Private Ltd, understand that stress related to move has very 
    little to do with distance travelled & take short distance relocations as seriously. Whether you are 
    moving across the street or around the earth, our professionally trained crew has the practical 
    experience to identify potential hurdles—be it moving street or a congested stairway or difficult 
    hoisting, to ensure a seamless move, laying strict emphasis on quality & attention to detail.`,
  },
  {
    title: "Office Relocation",
    description: `Relocating a business establishment is often a race against time. Trained to 
    move anything from detailed sequential filing system to a complete library, special office furniture 
    to expensive & sensitive office automation equipment, Packways Ace Relocations movers work 
    efficiently at a frenzied pace to meet deadlines. While you take the weekend off, the efficient 
    Packways crew reinstalls your old office in sequence at a new place so that on Monday morning, 
    it’s business as usual!`,
  },
  {
    title: "Vehicle Import/Relocation",
    description: `Our 60 years of experience has given us the edge & expertise not only on 
    removals of household & office goods but also on the import, export & relocation of automobiles. 
    The Packways Ace Relocations complete service offer includes competitive packages to handle 
    the shipment of automobiles/vehicles into & out of the country. We provide assistance in all the 
    accompanying documentation & customs clearance required.`,
  },
  {
    title: "Insurance/Risk Management",
    description: `At Packways Ace Relocations, we do our utmost to provide the greatest care & 
    maximum protection, but overseas movement of goods are exposed to unforeseeable risks associated 
    with sea, air, land transportation, port & terminal activity, natural disaster etc. Comprehensive 
    door-to-door insurance coverage is arranged & tailored to suit individual requirements at most 
    competitive premiums for your move anywhere in the world. We monitor the claims settlement 
    process with the insurance company to ensure expeditious reimbursement – complete follow up 
    for total satisfaction is our goal.`,
  },
  {
    title: "Warehousing",
    description: `Storage at Packways Private Ltd.’ modern, secure, environmentally controlled 
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
