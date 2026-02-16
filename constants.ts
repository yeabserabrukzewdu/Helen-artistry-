
import { PortfolioItem } from './types';

export const IMAGES = {
  hero: {
    background: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1920",
    portrait: "a (109).jpg",
  },
  about: {
    mainImage: "/about.webp",
  },
};

/**
 * SIMPLIFIED IMAGE LOADING SYSTEM
 * To add your 128 images, simply paste the URLs into the corresponding category arrays below.
 * The system will automatically generate the portfolio objects with titles and descriptions.
 */
const CATEGORIZED_URLS = {
  scars: [
    "a (11).jpg",
    "a (12).jpg",
    "a (13).jpg",
    "a (14).jpg",
    "a (22).jpg",
    "a (23).jpg",
    "a (27).jpg",
    "a (33).jpg",
    "a (36).jpg",
    "a (37).jpg",
    "a (39).jpg",
    "a (46).jpg",
    "a (47).jpg",
    "a (52).jpg",
    "a (58).jpg",
    "a (59).jpg",
    "a (63).jpg",
    "a (65).jpg",
    "a (67).jpg",
    "a (68).jpg",
    "a (69).jpg",
    "a (70).jpg",
    "a (72).jpg",
    "a (73).jpg",
    "a (76).jpg",
     "a (119).jpg",
    "a (123).jpg",
     "a (127).jpg",
    // Add more URLs here...
  ],
  makeup: [
    "a (118).jpg",
    "a (121).jpg",
    "a (125).jpg",
    "a (5).jpg",
    "landing.jpg",
    "a (111).jpg",
    "a (110).jpg",
    "a (105).jpg",
    "a (104).jpg",
    "a (88).jpg",
    "a (82).jpg",
    "a (80).jpg",
    "a (55).jpg",
    "a (53).jpg",
    "a (38).jpg",
    "a (32).jpg",
    "a (24).jpg",
    "a (6).jpg",
    "a (7).jpg",
    "a (3).jpg",
    // Add more URLs here...
  ],
  costume: [
    "a (109).jpg",
    "a (107).jpg",
    "a (100).jpg",
    "a (98).jpg",
    "a (103).jpg",
    "a (1).jpg",
    "a (4).jpg",
    "a (2).jpg",
    "a (9).jpg",
    "a (10).jpg",
    "a (18).jpg",
    "a (25).jpg",
    "a (26).jpg",
    "a (29).jpg",
    "a (35).jpg",
    "a (40).jpg",
    "a (41).jpg",
    "a (42).jpg",
    "a (43).jpg",
    "a (44).jpg",
    "a (64).jpg",
    "a (71).jpg",
    "a (78).jpg",
    "a (81).jpg",
    "a (84).jpg",
    // Add more URLs here...
  ],
  jewelry: [
    "a (108).jpg",
    "a (104).jpg",
    "a (97).jpg",
    "a (89).jpg",
    "a (90).jpg",
    "a (74).jpg",
    "a (62).jpg",
    "a (50).jpg",
    "a (45).jpg",
    "a (44).jpg",
    "a (35).jpg",
    "a (29).jpg",
    "a (21).jpg",
    "a (10).jpg",
    "a (4).jpg",
   
     // Add more URLs here...
  ],
   all: [
     // This can be a combination of all the above or additional images that don't fit into
    // Add more URLs here...
  ]
};

const CATEGORY_LABELS = {
  scars: 'Body Scars',
  makeup: 'Makeup',
  costume: 'Costume',
  jewelry: 'Jewelry'
} as const;

// Automatically generate the full PortfolioItem array
export const PORTFOLIO_DATA: PortfolioItem[] = Object.entries(CATEGORIZED_URLS).flatMap(([key, urls]) => 
  urls.map((url, index) => ({
    id: `${key}-${index}`,
    title: `${CATEGORY_LABELS[key as keyof typeof CATEGORY_LABELS]} Design ${index + 1}`,
    category: CATEGORY_LABELS[key as keyof typeof CATEGORY_LABELS],
    imageUrl: url,
    description: `High-end professional ${CATEGORY_LABELS[key as keyof typeof CATEGORY_LABELS].toLowerCase()} artistry for cinematic productions and global editorial campaigns.`
  }))
);

export const TRANSLATIONS = {
  en: {
    nav: {
      about: "About",
      work: "Works",
      services: "Services",
      contact: "Contact",
      book: "Book"
    },
    hero: {
      location: "Addis Ababa • London • New York",
      headingStart: "The Art of",
      headingAccent: "Metamorphosis",
      headingEnd: "for Screen & Stage.",
      subheading: "Helen Artistry: High-end character design for visionary directors and global artists. Specializing in the intersection of traditional Habesha heritage and cinematic SFX."
    },
    about: {
      tag: "The Visionary",
      heading: "Versatile Artist &",
      accent: "Costume Designer.",
      bio: "As a dedicated prosthetic makeup artist, Helen brings characters to life through innovative designs and transformative techniques. Her expertise extends to costume design, where she creates visually stunning and thematically cohesive ensembles that enhance storytelling.",
      quote: "My mission is ensuring every detail aligns with the artistic vision, from subtle enhancements to dramatic transformations that captivate audiences.",
      skills: [
        { title: "Prosthetic Makeup", text: "Mastering the art of creating realistic effects, from subtle enhancements to dramatic transformations that captivate audiences." },
        { title: "Makeup Artistry", text: "Skilled in various styles, including theatrical, film, and special effects makeup, tailored to each unique project." },
        { title: "Costume Design", text: "Crafting intricate costumes that reflect character depth and narrative, ensuring every detail aligns with the artistic vision." },
        { title: "Props & Jewelry Designer", text: "Creating scene-balancing and cohesive props for the set and a matching jewelry aesthetic." }
      ]
    },
    work: {
      heading: "The Portfolio",
      subheading: "A multi-disciplinary journey through film and fashion. Transforming stories through texture, shape, and cultural heritage.",
      categories: {
        all: "All",
        scars: "Body Scars",
        makeup: "Makeup",
        costume: "Costume",
        jewelry: "Jewelry"
      }
    },
    services: {
      heading: "Production Services",
      subheading: "Specialized departments for film, television, and high-fashion editorial.",
      data: [
        { title: "Body Scars & SFX", desc: "Anatomically accurate scarification, burns, and prosthetic application for character-driven narratives." },
        { title: "Cinematic Makeup", desc: "HD-compatible beauty and character makeup designed to withstand rigorous lighting and long shooting hours." },
        { title: "Custom Costuming", desc: "Original costume design and fabrication blending traditional Ethiopian motifs with cinematic requirements." },
        { title: "Jewelry Styling", desc: "Artisanal jewelry curation and bespoke styling for royalty, warriors, and high-fashion characters." }
      ]
    },
    contact: {
      heading: "Start Your",
      accent: "Next Production.",
      sub: "Currently accepting bookings for feature films, music visuals, and editorial campaigns globally.",
      form: {
        name: "Name",
        email: "Email",
        focus: "Inquiry Focus",
        details: "Production Details",
        submit: "Submit Inquiry"
      }
    }
  },
  am: {
    nav: {
      about: "ስለ እኛ",
      work: "ስራዎች",
      services: "አገልግሎቶች",
      contact: "እውቂያ",
      book: "ይያዙ"
    },
    hero: {
      location: "አዲስ አበባ • ለንደን • ኒው ዮርክ",
      headingStart: "የሄለን የባህሪ",
      headingAccent: "ጥበብን",
      headingEnd: "ለፊልም ስራ",
      subheading: "በሜካፕ እና አልባሳት ዲዛይን ላይ የተካነች፣ ገጸ-ባህሪያትን በአዳዲስ ንድፎች እና በለውጥ ቴክኒኮች ወደ ህይወት የሚያመጣ ቀናተኛ እና ሁለገብ አርቲስት።"
    },
    about: {
      tag: "ራዕይ ያለው",
      heading: "ሁለገብ አርቲስት እና",
      accent: "የአልባሳት ዲዛይነር።",
      bio: "እንደ ታታሪ የፕሮስቴት ሜካፕ አርቲስት፣ ሄለን ገጸ-ባህሪያትን በአዳዲስ ንድፎች እና የለውጥ ቴክኒኮች ወደ ህይወት አመጣለሁ። የእኔ ብቃት ወደ አልባሳት ዲዛይን ይዘልቃል፣ እዚያም ተረቱን የሚያሻሽሉ በሚያምር ሁኔታ የሚገርሙ እና ጭብጥ ያላቸው ስብስቦችን እፈጥራለሁ።",
      quote: "ተልዕኮዬ እያንዳንዱ ዝርዝር ነገር ከኪነ-ጥበብ እይታ ጋር መጣጣሙን ማረጋገጥ ነው፣ ከጥቃቅን ማሻሻያዎች ጀምሮ ተመልካቾችን የሚማርኩ አስገራሚ ለውጦች።",
      skills: [
        { title: "የፕሮስቴት ሜካፕ", text: "ተጨባጭ ተፅእኖዎችን የመፍጠር ጥበብን ማዳበር።" },
        { title: "የሜካፕ ጥበብ", text: "ለእያንዳንዱ ልዩ ፕሮጀክት የተበጁ የተለያዩ ስልቶችን በመስራት የተካነ።" },
        { title: "የአልባሳት ዲዛይን", text: "የገጸ-ባህሪያትን ጥልቀት የሚያንፀባርቁ ውስብስብ አልባሳትን መፍጠር።" },
        { title: "የቁሳቁስ እና የጌጣጌጥ ዲዛይነር", text: "ለእያንዳንዱ የቀረበ ውበት ተስማሚ የሆኑ የጌጣጌጥ ውበቶችን መፍጠር።" }
      ]
    },
    work: {
      heading: "ስራዎች",
      subheading: "አራት የተለያዩ ዘርፎች፣ አንድ ወጥ እይታ። ታሪኮችን በቅርጽ፣ በይዘት እና በባህላዊ ቅርሶች መለወጥ።",
      categories: {
        all: "ሁሉም",
        scars: "የሰውነት ጠባሳዎች",
        makeup: "ሜካፕ",
        costume: "አልባሳት",
        jewelry: "ጌጣጌጥ"
      }
    },
    services: {
      heading: "የምርት አገልግሎቶች",
      subheading: "ለፊልም፣ ለቴሌቪዥን እና ለከፍተኛ ፋሽን የተዘጋጁ ልዩ ክፍሎች።",
      data: [
        { title: "የሰውነት ጠባሳ እና SFX", desc: "ለገጸ-ባህሪያት ተረቶች ትክክለኛ ጠባሳዎች እና የፕሮስቴት አተገባበር።" },
        { title: "ሲኒማቲክ ሜካፕ", desc: "ለረጅም ሰዓታት የሚቋቋም የውበት እና የባህሪ ሜካፕ።" },
        { title: "ብጁ አልባሳት", desc: "ባህላዊ የኢትዮጵያ ዲዛይኖችን ከሲኒማ መስፈርቶች ጋር ማጣመር።" },
        { title: "የጌጣጌጥ አሰራር", desc: "ለነገስታት እና ለከፍተኛ ፋሽን የተዘጋጁ የጌጣጌጥ ስራዎች።" }
      ]
    },
    contact: {
      heading: "የሚቀጥለውን",
      accent: "ምርት ይጀምሩ።",
      sub: "በአሁኑ ጊዜ ለፊልሞች፣ ለሙዚቃ ቪዲዮዎች እና ለፋሽን ዘመቻዎች ጥያቄዎችን እየተቀበልን ነው።",
      form: {
        name: "ስም",
        email: "ኢሜል",
        focus: "የትኩረት ዘርፍ",
        details: "የምርት ዝርዝሮች",
        submit: "ጥያቄውን ይላኩ"
      }
    }
  }
};
