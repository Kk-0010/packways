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
    label: "SPECTRUM OF SERVICES",
    to: "",
    items: [{ id: 1, label: "ALLIED SERVICES", to: "allied-services" }],
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
