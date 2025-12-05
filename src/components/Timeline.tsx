import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { gsap } from "gsap";
import { TimelinePeriod, Organization } from "../types";
import { timelineData } from "../data";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // Import the i18n configuration
import Logo from "./logo";

// Extended organization details from the provided content
const organizationDetails: Record<
  string,
  { description: string; extendedMilestones?: string[] }
> = {
  rss: {
    description:
      "Rashtriya Swayamsevak Sangh builds character through the instrument of the Shakha. Individuals trained in this system often go on to establish organizations that embody the values taught by the RSS. Founded on Vijaya Dashami in September 1925. Established by Dr. Keshav Baliram Hedgewar with a handful of people. Currently has nearly 50 lakh volunteers. Runs more than 1,35,000 service projects across various organizations established by the Swayamsevaks.",
    extendedMilestones: [
      "Founded by Dr. K.B. Hedgewar in Nagpur",
      "Established first Shakha in 1925",
      "Expanded nationwide presence by 1940s",
      "Currently has nearly 50 lakh volunteers",
      "Runs more than 1,35,000 service projects",
    ],
  },
  vb: {
    description:
      "Vidya Bharati is an organization focused on imparting Bharatiya values at the primary and secondary levels of education. Mission: To develop a national education system that instills patriotism and nationalism in the younger generation. In addition to running its own chain of schools, Vidya Bharati collaborates with other educational institutions. Collectively, it has 29,000 affiliated institutions, 37,000 teachers, and 30 lakh students.",
    extendedMilestones: [
      "Started Shishu Mandirs in 1952",
      "Formal establishment in 1977",
      "Network of schools established",
      "Expanded to 29,000 affiliated institutions",
      "Employs 37,000 teachers",
      "Educates 30 lakh students",
    ],
  },
  bms: {
    description:
      "Bharatiya Mazdoor Sangh (BMS) is the largest trade union in India, with 1 crore members across various states and 5,000 affiliated organizations. It was founded on July 23, 1955, by Dattopant Thengadi, who was deputed from the RSS. BMS takes a different approach from other trade unions: It does not oppose any particular class but stands against injustice and exploitation. It prioritizes workers' interests while considering the broader national interest.",
    extendedMilestones: [
      "Founded by Dattopant Thengadi",
      "Represented India at the International Labour Conference",
      "Only trade union that opposed the Emergency of 1975",
      "Over 70,000 BMS members participated in Satyagraha during Emergency",
      'Formed "Rashtriya Mazdoor Morcha" during national crises',
      "Grew to 1 crore members across various states",
    ],
  },
  vka: {
    description:
      "Approximately 10% of India's population belongs to Janjatis (Scheduled Tribes). Vanavasi Kalyan Ashram works among these communities across India in the fields of education, healthcare, sports, skill development, livelihood, women's empowerment, and awareness of their rights. Founded in 1952 by Balasaheb Deshpande, the organization has grown from strength to strength. It currently runs 21,839 projects and has a presence in 63,926 villages.",
    extendedMilestones: [
      "Established first center",
      "Expanded to multiple states",
      "Initiated educational programs",
      "Currently runs 21,839 projects",
      "Has presence in 63,926 villages",
      "Focuses on preserving tribal culture while fostering social assimilation",
    ],
  },
  bjp: {
    description:
      "The Bharatiya Jana Sangh was the earlier avatar of the BJP, now the world's largest political party. After resigning from Jawaharlal Nehru's cabinet, Dr. Shyama Prasad Mukherjee requested volunteers from the RSS to form a political party. The then RSS chief, Guruji (M. S. Golwalkar), agreed, and the Jana Sangh was established in 1951. In 1980, it was rechristened as the Bharatiya Janata Party (BJP).",
    extendedMilestones: [
      "Founded by Dr. Syama Prasad Mookerjee",
      "First general election participation in 1952",
      "Significant growth in political presence",
      "Rechristened as BJP in 1980",
      "Became world's largest political party in terms of membership",
    ],
  },
  vhp: {
    description:
      "Founded on 29th August 1964, on the auspicious occasion of Shri Krishna Janmashtami, Vishwa Hindu Parishad (VHP) is dedicated to organizing and uniting Hindu society while serving and protecting Sanatan Hindu Dharma. Notable contributions include the Ram Janmabhoomi Movement, Campaign for Amarnath Yatra, uniting saints from various Hindu traditions, and running nearly 1 lakh service projects.",
    extendedMilestones: [
      "Founded with a focus on social reform",
      "Led Ram Janmabhoomi Movement",
      "Campaigned for Amarnath Yatra",
      "United saints from various Hindu traditions",
      "Runs nearly 1 lakh service projects across various fields",
    ],
  },
  abvp: {
    description:
      "The Akhil Bharatiya Vidyarthi Parishad (ABVP) is India's largest student organization, striving to create a national movement in the education sector. It focuses on colleges and universities within the broader framework of national reconstruction. Founded in June 1948, ABVP has played a pivotal role in shaping student activism in India.",
    extendedMilestones: [
      "Established in Mumbai",
      "First national conference in 1949",
      "Expanded to multiple universities",
      "Established World Organisation of Students and Youth (WOSY) in 1985",
      "Created Think India platform for young intellectuals",
      "Played crucial role in resisting the Emergency (1975-77)",
    ],
  },
  bks: {
    description:
      "The Bharatiya Kisan Sangh (BKS) is a farmers' organization founded by Dattopant Thengdi and Bhau Sahab Bhuskute in 1978. It primarily encourages farmers to adopt organic, cattle-based farming and strives for farmers' welfare by promoting agricultural research and advocating for scientific methods in fair price determination of crops.",
    extendedMilestones: [
      "Founded for farmer welfare",
      "Major agricultural initiatives",
      "Policy advocacy success",
      "Promotes organic, cattle-based farming",
      "Advocates for scientific methods in crop price determination",
      "Influences public policy on agriculture",
    ],
  },
  sanskar: {
    description:
      'Sanskar Bharati was established in 1981 to enhance national awareness of fine arts and provide a platform for the artists of the nation. It organizes various performances across India to promote Indian art, culture, and diverse fine art forms. The organization\'s mission statement is: "सा कला या विमुक्तये" (That art which liberates).',
    extendedMilestones: [
      "Organized cultural festivals",
      "Promoted traditional arts",
      "Collaborated with local artists",
      "Enhanced national awareness of fine arts",
      "Provided platform for artists across India",
    ],
  },
  samskrita: {
    description:
      "Established in 1981, Samskrita Bharati is dedicated to reintroducing Sanskrit into daily life through the 'Speak Sanskrit' movement. Over one crore people are trained to speak Sanskrit through 1,20,000 Sambhashana Shibirs (spoken Sanskrit camps). More than 1,35,000 Sanskrit teachers trained to teach using Sanskrit as the medium of instruction.",
    extendedMilestones: [
      "Initiated Sanskrit learning programs",
      "Published Sanskrit literature",
      "Collaborated with educational institutions",
      "Trained over one crore people to speak Sanskrit",
      "Transformed four remote villages into Sanskrit-speaking communities",
      "Promotes Sanskrit through 4,500 centers across 26 countries",
    ],
  },
  kreeda: {
    description:
      'Kreeda Bharati is an organization dedicated to working with sportspersons. Established in December 1992, it organizes sports training, identifies talented individuals, and provides them with opportunities to excel in the field of sports. The concept of "Kreeda Kendras" stems from the vision of "a playground in every village."',
    extendedMilestones: [
      "Launched national sports programs",
      "Supported local athletic clubs",
      "Enhanced community participation in sports",
      'Established "Kreeda Kendras" in villages',
      "Conducts Surya Namaskar sessions",
      "Organizes national-level sports competitions",
    ],
  },
  sjm: {
    description:
      "To carry forward the ideals of the Swadeshi tradition advocated by great personalities like Lokmanya Tilak, Veer Savarkar, Sri Aurobindo, and Mahatma Gandhi, Swadeshi Jagaran Manch was established in November 1991. It promotes indigenous development and economic nationalism.",
    extendedMilestones: [
      "Founded to promote indigenous economy",
      "Major policy initiatives",
      "National economic impact",
      "1995: 600-km padayatra from Wardha for cow protection",
      "1996: 7,000-km boat march protesting fishing licenses to MNCs",
      "Regular Swadeshi exhibitions across the country",
    ],
  },
  seva: {
    description:
      "Seva Bharati is a conglomeration of organisations with the objective of bringing relief to under-privileged people living in tribal & rural areas and urban slums. It works in areas such as education, healthcare, self-reliance, and disaster relief.",
    extendedMilestones: [
      "Launched volunteer programs",
      "Engaged in disaster relief",
      "Built partnerships with NGOs",
      "Provided relief during floods in Assam, Kerala, Himachal Pradesh, and Sikkim",
      "Implemented community development programs",
      "Provided COVID-19 relief with oxygen cylinders and medical support",
    ],
  },
  vibha: {
    description:
      "Vijnana Bharati (VIBHA) is a national movement dedicated to promoting science and technology in India through a Swadeshi spirit, emphasizing indigenous development and self-reliance. It was established in October 1991.",
    extendedMilestones: [
      "Established research network",
      "Major scientific initiatives",
      "Innovation programs launched",
      "Expanded to 22 state units across India",
      "Initiated Vidyarthi Vigyan Manthan (VVM)",
      "Received Climate CoLab Popular Choice Award from MIT",
    ],
  },
  laghu: {
    description:
      "Laghu Udyog Bharati, established in 1994, is a registered all-India organization dedicated to representing and supporting micro and small industries across India.",
    extendedMilestones: [
      "Supported local small businesses",
      "Launched entrepreneurial training programs",
      "Enhanced economic opportunities",
      "Built network with representation in more than 400 districts",
      "Established 250 branches nationwide",
      "Actively participates in government committees",
    ],
  },
  sb: {
    description:
      'Sahakar Bharati is a pan-India organization dedicated to promoting and strengthening the cooperative movement across the country. It was registered in 1979. It works with the mission statement- बिना संस्कार नहीं सहकार। बिना सहकार नहीं उद्धार॥ "Without values, there is no cooperation. Without cooperation, there is no upliftment."',
    extendedMilestones: [
      "Initiated cooperative programs",
      "Expanded local support networks",
      "Strengthened community bonds",
      "Expanded presence to over 400 districts nationwide",
      "Connected with more than 20,000 cooperative societies",
    ],
  },
  abgp: {
    description:
      "The Akhil Bhartiya Grahak Panchayat (ABGP) is an Indian consumer organization dedicated to promoting consumer rights and fostering ethical practices among producers and sellers. Founded in 1975 by the late Bindu Madhav Joshi, a freedom fighter and RSS swayamsevak. ABGP aims to create a harmonious society by balancing the interests of farmers, producers, sellers, consumers, and administrators.",
    extendedMilestones: [
      "Established consumer rights framework",
      "Started awareness campaigns",
      "National network established",
      '1974: Initiated as "Yuvak Mahamandal Janata Grahak Sangh" in Pune',
      "1975: Formally inaugurated by Justice M.C. Chagla",
      "By 2017: Expanded to over 25 states and nearly 200 districts",
    ],
  },
  ab: {
    description:
      "Arogya Bharti is an organization comprising healthcare professionals and service-oriented individuals from various medical disciplines, dedicated to promoting health awareness based on Indian life values. It was established on November 2, 2002, in Kochi, coinciding with the birth anniversary of Lord Dhanvantari.",
    extendedMilestones: [
      "Founded for healthcare initiatives",
      "Medical camps established",
      "Research programs initiated",
      "Established provincial units in all Indian states",
      "Participated in disaster relief efforts",
      "Contributed to Indian health policy formulation in 2006",
      'Publishes monthly magazine "Arogya Sampada"',
    ],
  },
  bvp: {
    description:
      'Bharat Vikas Parishad is a voluntary, non-political, socio-cultural organization dedicated to the development and growth of India in all fields of human endeavor. Established in 1963, it aims to promote a sense of patriotism, national unity, and integrity among citizens, culminating in a physically, economically, and morally strong India—referred to as "Swasth-Samarth-Sanskarit Bharat."',
    extendedMilestones: [
      "Launched community development projects",
      "Collaborated with local governments",
      "Achieved significant rural development milestones",
      "Publication of 'Niti' (1969)",
      "Installation of Chhatrapati Shivaji Maharaj's Statue (1973)",
      "Established Divyang Sahayata Kendras",
      "Launched Samagra Gram Vikas projects",
    ],
  },
  abap: {
    description:
      "The Akhil Bharatiya Adhivakta Parishad (ABAP) established in 1992 aims to revive Indian values and instill idealism among advocates to enhance the efficacy and standards of the Bar and Judiciary in India.",
    extendedMilestones: [
      "Organized national debates",
      "Hosted public speaking competitions",
      "Encouraged political discourse",
      "Organized nearly 15 national conferences",
      'Publishes "Nyaya Pravah" quarterly magazine',
      'Established "Nyaya Kendras" (Legal Aid Centers)',
      "Conducts regular educational programs",
    ],
  },
  abisy: {
    description:
      "Akhil Bharatiya Itihas Sankalan Yojana (ABISY) is a nationwide organization dedicated to the authentic, factual, and comprehensive documentation of Indian history, culture, and traditions. It was established in 1994 in Delhi with the mission of rewriting Indian history based on indigenous sources, scientific research, and archaeological findings.",
    extendedMilestones: [
      "Launched historical documentation projects",
      "Collaborated with historians",
      "Preserved archival materials",
      "Reconstructed Indian history from the Mahabharata era",
      "Debunked the Aryan Invasion Theory",
      "Conducted scientific study of the Vedic Saraswati River",
      "Documented tribal history",
    ],
  },
  hjm: {
    description:
      "Hindu Jagran Manch (HJM), founded in 1982, focuses on countering religious conversions and promoting the reconversion of Muslims and Christians to Hinduism.",
    extendedMilestones: [
      "Started awareness campaigns",
      "Organized cultural events",
      "Expanded outreach programs",
      'Active involvement in "Ghar Wapsi" (Homecoming) programs',
      "Firm stand against religious conversions in tribal areas",
      "Organized events to raise awareness about issues affecting the Hindu community",
    ],
  },
  ssm: {
    description:
      'Samajik Samrasta Manch, also known as Samarasata Manch, was inaugurated on April 14, 1983, in Pune. The occasion was marked by a speech from Dattopant Thengdi, a prominent thinker in the Rashtriya Swayamsevak Sangh (RSS). His speech, titled "Equality Impossible Without Harmony," became a guiding philosophy for the Manch.',
    extendedMilestones: [
      "Promoted social integration programs",
      "Hosted community dialogues",
      "Supported inclusive initiatives",
      "Advocated for extension of National Commission for Safai Karamcharis",
      "Organizes Ambedkar Jayanti celebrations",
      "Works to align reformist vision with broader Hindutva framework",
    ],
  },
  abrsm: {
    description:
      "The Akhil Bhartiya Rashtriya Shaikshik Mahasangh (ABRSM) is a professional organization dedicated to educational development in India. It emphasizes indigenous methodologies, drawing inspiration from India's rich cultural heritage, and operates independently of political affiliations.",
    extendedMilestones: [
      "Established academic networks",
      "Conducted educational conferences",
      "Advocated for educational reforms",
      "Expanded to 35 state-level and over 50 university-level affiliated bodies",
      "Organizes seminars, discussions, and workshops on educational topics",
      "Honors exceptional educators",
      "Publishes literature promoting Indian cultural values",
    ],
  },
  prajna: {
    description:
      "Prajna Pravah is a forum of Nationalist thinkers to foster critical thinking and progressive public discourses.",
    extendedMilestones: [
      "Organized cultural festivals",
      "Promoted indigenous literature",
      "Collaborated with local artists",
      'Organizes "Lokmanthan," a biennial colloquium',
      'Inaugural event in 2016 in Bhopal with theme "De-Colonising Indian Minds"',
      "Subsequent editions in Ranchi (2018) and Guwahati (2022)",
      "Established network of affiliated organizations across Indian states",
    ],
  },
  dri: {
    description:
      "Founded in 1968 by Nanaji Deshmukh, The Deendayal Research Institute (DRI) is an organization dedicated to socio-economic and applied research, aiming to implement the philosophy of 'Integral Humanism' as envisioned by Pandit Deendayal Upadhyaya.",
    extendedMilestones: [
      "Established research framework",
      "Published influential reports",
      "Partnered with policy think tanks",
      "Initiated Gonda Gramodaya Project in 1978",
      "Launched Chitrakoot Self-Reliance Campaign in 1991",
      "Applied modern science and appropriate technology suited to Indian conditions",
    ],
  },
  hsp: {
    description:
      "Established in 1980, Hindu Seva Pratishthana (HSP) is dedicated to the upliftment of underserved communities and individuals with special needs.",
    extendedMilestones: [
      "Launched community service initiatives",
      "Established volunteer networks",
      "Implemented social welfare programs",
      "Established Aruna Chetana in 1987 for children with multiple disabilities",
      "Launched Nele Foundation in 2000 for destitute children",
      "Initiated Youth for Seva in 2007 to encourage youth participation",
    ],
  },
  sakshama: {
    description:
      'Sakshama Karnataka, officially known as Samadrushti Kshamatha Vikas and Anusandhana Mandala, is a national organization dedicated to the empowerment and holistic development of individuals with disabilities. The organization operates with the belief that "each soul is potentially divine" and strives to integrate specially-abled individuals into the national mainstream.',
    extendedMilestones: [
      "Launched regional civic initiatives",
      "Supported local political engagement",
      "Built community networks",
      "Implemented educational programs for individuals with disabilities",
      "Advocates for eye health and vision care",
      "Undertakes economic empowerment initiatives",
      "Organizes annual social awareness programs",
    ],
  },
  rss_samiti: {
    description:
      "The Rashtrasevika Samiti was founded in 1936 by Lakshmibai Kelkar (Mausiji) in Nagpur after consulting Dr Keshav Baliram Hedgewar, founder of RSS. It consists of women volunteers and focuses on empowering women and fostering their participation in social and national development.",
    extendedMilestones: [
      "Founded by Laxmibai Kelkar",
      "First branch established in Wardha",
      "Nationwide expansion initiated",
      "Runs more than 700 seva projects",
      "Operates five thousand daily shakhas across India",
      "Involved 20,000 women karsevikas in the Shri Ram Janmabhoomi movement",
    ],
  },
  fins: {
    description:
      "The Forum for Integrated National Security (FINS) is an apolitical think tank dedicated to the study and promotion of integrated national security in India. It was conceptualized in 2003 by defense experts who recognized the need to move away from a compartmentalized approach to national security towards a more holistic Integrated National Security framework.",
    extendedMilestones: [
      "Established security framework",
      "Policy recommendations",
      "Strategic studies initiated",
      "Conducts strategic research on national security challenges",
      'Publishes "FINS Journal of Diplomacy & Strategy"',
      "Offers fellowships and internship programs",
      "Hosts events like the Manohar Parrikar Memorial Lecture",
    ],
  },
  abpssp: {
    description:
      "Akhil Bharatiya Poorva Sainik Seva Parishad (ABPSSP) is dedicated to mobilizing ex-servicemen for national service, working since 1995. Its primary objective is to utilize the disciplined and dedicated strength of former soldiers for national unity, integrity, and internal security.",
    extendedMilestones: [
      "Established veteran support networks",
      "Organized rehabilitation programs",
      "Advocated for veteran rights",
      "Established Sainik Parivar Kalyan Nyas (SPKN) in 2001",
      "Launched Sainya Matri Shakti in 2006",
      "Provides special care for disabled soldiers and their families",
    ],
  },
  samartha: {
    description:
      "Samartha Bharata is a campaign and volunteer platform based in Karnataka, India, dedicated to addressing social, economic, civic, environmental, and other challenges. Established in 2014, the organization aims to transform Bharat by involving people in sustainable initiatives and fostering a spirit of nationalism.",
    extendedMilestones: [
      "Launched multi-sectoral development projects",
      "Promoted collaborative initiatives across industries",
      "Achieved national recognition for integrated strategies",
      "Launched Be Good Do Good Campaign",
      "Organized two-day camp in August 2014 with 3,800 social volunteers",
      "Undertook vibrant plantation drives for environmental conservation",
    ],
  },
  vsk: {
    description:
      "Vishwa Samvada Kendra, established in 1992, is an organization actively involved in the media sector, disseminating national ideas, raising social awareness, and broadcasting positive and inspirational news. It operates as the media communication wing of the Rashtriya Swayamsevak Sangh (RSS) and carries out various multifaceted activities.",
    extendedMilestones: [
      "Established communication networks",
      "Hosted national forums",
      "Promoted public discourse",
      "Handles official media communications for the RSS",
      "Celebrates Narada Jayanti annually",
      "Launched Samvada.org website in September 2006",
      "Created 'Samvada' video channel on Facebook and YouTube",
      "Launched SamvadaWorld.com in November 2020",
    ],
  },
};

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Save preference
  };

  return (
    <button
      onClick={toggleLanguage}
      className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md"
    >
      {i18n.t("toggle_language")}
    </button>
  );
};

const Timeline: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedOrg, setSelectedOrg] = useState<
    (Organization & { period: string; periodId: string }) | null
  >(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const simulationRef = useRef<d3.Simulation<any, undefined> | null>(null);
  const nodesRef = useRef<d3.Selection<any, any, any, any> | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const width = Math.min(containerWidth - 40, 1200);
        const height = 600;
        setDimensions({ width, height });
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current);
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const startYear = Math.min(...timelineData.map((d) => d.startYear));
    const endYear = Math.max(...timelineData.map((d) => d.endYear));

    const xScale = d3
      .scaleLinear()
      .domain([startYear, endYear])
      .range([0, width]);

    const yearRange = endYear - startYear;
    const tickCount = Math.min(Math.ceil(yearRange / 5), 10);
    const xAxis = d3
      .axisBottom(xScale)
      .tickFormat((d) => d.toString())
      .ticks(tickCount);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .attr("class", "x-axis")
      .call(xAxis)
      .style("color", "#94A3B8")
      .style("font-size", "12px");

    // Add period backgrounds
    timelineData.forEach((period, i) => {
      const periodWidth = xScale(period.endYear) - xScale(period.startYear);

      g.append("rect")
        .attr("x", xScale(period.startYear))
        .attr("y", 0)
        .attr("width", periodWidth)
        .attr("height", height)
        .attr("fill", `rgba(${i * 60}, ${i * 40}, ${i * 80}, 0.1)`)
        .attr("rx", 8);

      g.append("text")
        .attr("x", xScale(period.startYear) + periodWidth / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .attr("fill", "#94A3B8")
        .attr("class", "text-sm font-medium")
        .text(period.range);
    });

    // Prepare nodes data
    const nodes = timelineData.flatMap((period) =>
      period.organizations.map((org) => ({
        ...org,
        period: period.range,
        periodId: period.id,
        x: xScale(org.year),
        y: height / 2 + (Math.random() - 0.5) * height * 0.3,
        r: 25,
        targetX: xScale(org.year),
      }))
    );

    // Create node elements
    const nodeElements = g
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        setSelectedOrg(d);
      });

    // Add shadow effect
    nodeElements
      .append("circle")
      .attr("class", "shadow")
      .attr("r", 25)
      .attr("fill", "#1E293B")
      .attr("opacity", 0.2)
      .attr("filter", "blur(3px)")
      .attr("transform", "translate(3,3)");

    // Add main circle
    nodeElements
      .append("circle")
      .attr("class", "main")
      .attr("r", 25)
      .attr("fill", (d) => {
        const periodIndex = timelineData.findIndex((p) => p.id === d.periodId);
        const colors = [
          // "rgba(255, 105, 180, 0.8)", // Pink
          // "rgba(65, 105, 225, 0.8)", // Royal Blue
          // "rgba(50, 205, 50, 0.8)", // Lime Green
          // "rgba(255, 215, 0, 0.8)", // Gold
          // "rgba(255, 69, 0, 0.8)", // Orange Red
          "rgba(255, 255, 255, 0.8)", // Pink
          "rgba(255, 255, 225, 0.8)", // Royal Blue
          "rgba(255, 255, 255, 0.8)", // Lime Green
          "rgba(255, 255, 255, 0.8)", // Gold
          "rgba(255, 255, 255, 0.8)", // Orange Red
        ];
        return colors[periodIndex % colors.length];
      })
      .attr("stroke", "white")
      .attr("stroke-width", 2);

    // Add image if available
    nodeElements
      .filter((d) => d.image)
      .append("clipPath")
      .attr("id", (d) => `clip-${d.id}`)
      .append("circle")
      .attr("r", 23);

    nodeElements
      .filter((d) => d.image)
      .append("image")
      .attr("xlink:href", (d) => d.image)
      .attr("x", -23)
      .attr("y", -23)
      .attr("width", 46)
      .attr("height", 46)
      .attr("clip-path", (d) => `url(#clip-${d.id})`)
      .attr("preserveAspectRatio", "xMidYMid slice");

    // Add year text
    // nodeElements
    //   .append("text")
    //   .attr("text-anchor", "middle")
    //   .attr("dy", ".3em")
    //   .attr("fill", "white")
    //   .attr("class", "text-sm font-semibold select-none")
    //   .text((d) => d.year);

    // Set up force simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force("x", d3.forceX((d) => d.targetX).strength(0.5))
      .force("y", d3.forceY(height / 2).strength(0.1))
      .force("collide", d3.forceCollide().radius(30).strength(0.7))
      .on("tick", () => {
        nodeElements.attr("transform", (d) => {
          // Constrain x to period bounds
          const period = timelineData.find((p) => p.id === d.periodId);
          if (period) {
            const minX = xScale(period.startYear) + 30;
            const maxX = xScale(period.endYear) - 30;
            d.x = Math.max(minX, Math.min(maxX, d.x));
          }

          // Constrain y to svg bounds
          d.y = Math.max(30, Math.min(height - 30, d.y));

          return `translate(${d.x},${d.y})`;
        });
      });

    simulationRef.current = simulation;
    nodesRef.current = nodeElements;

    // Add drag behavior
    const drag = d3
      .drag<any, any>()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    nodeElements.call(drag);

    // Add hover effects
    nodeElements
      .on("mouseenter", function () {
        d3.select(this)
          .select(".main")
          .transition()
          .duration(300)
          .attr("r", 28);
      })
      .on("mouseleave", function () {
        d3.select(this)
          .select(".main")
          .transition()
          .duration(300)
          .attr("r", 25);
      });

    // Animation loop for gentle floating effect
    const animate = () => {
      if (!simulationRef.current) return;

      const time = Date.now() * 0.001;
      nodes.forEach((node, i) => {
        // Small random movement
        const offset = Math.sin(time + i * 0.5) * 2;
        node.y += offset * 0.05;

        // Keep within bounds
        if (node.y < node.r) node.y = node.r;
        if (node.y > height - node.r) node.y = height - node.r;
      });

      simulationRef.current.alpha(0.1).restart();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (simulationRef.current) {
        simulationRef.current.stop();
      }
    };
  }, [dimensions]);

  // Helper function to get period color with opacity
  const getPeriodColor = (periodId: string, opacity: number = 1) => {
    const colors = {
      "period-1": `rgba(255, 105, 180, ${opacity})`, // Pink
      "period-2": `rgba(65, 105, 225, ${opacity})`, // Royal Blue
      "period-3": `rgba(50, 205, 50, ${opacity})`, // Lime Green
      "period-4": `rgba(255, 215, 0, ${opacity})`, // Gold
      "period-5": `rgba(255, 69, 0, ${opacity})`, // Orange Red
    };
    return colors[periodId] || `rgba(204, 204, 204, ${opacity})`;
  };

  // Get extended details for an organization
  const getExtendedDetails = (orgId: string) => {
    return organizationDetails[orgId] || null;
  };

  // Custom CSS for dialog scrollbar and animations
  const dialogStyles = `
    .dialog-scrollbar::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .dialog-scrollbar::-webkit-scrollbar-track {
      background: rgba(15, 23, 42, 0.3);
      border-radius: 10px;
    }
    .dialog-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.5);
      border-radius: 10px;
    }
    .dialog-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(148, 163, 184, 0.7);
    }
    .dialog-content-enter {
      animation: dialogContentEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes dialogContentEnter {
      from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    .dialog-overlay-enter {
      animation: dialogOverlayEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes dialogOverlayEnter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .close-button {
      transition: all 0.2s ease;
    }
    .close-button:hover {
      transform: rotate(90deg);
      background-color: rgba(239, 68, 68, 0.2);
    }
    .close-button-icon {
      transition: all 0.2s ease;
    }
    .close-button:hover .close-button-icon {
      stroke: rgb(239, 68, 68);
    }
    
    /* Responsive styles for dialog */
    @media (max-width: 640px) {
      .dialog-title {
        font-size: 1.1rem;
      }
      .dialog-content {
        padding: 1rem;
      }
      .dialog-image {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  `;

  return (
    <div
      className="min-h-screen bg-slate-900 p-4 md:p-8 flex flex-col items-center"
      ref={containerRef}
    >
      <Logo/>
      <LanguageToggle />
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-400">
        {t("title")}
      </h1>
      <h3 className="text-2xl md:text-2xl font-bold text-center mb-8 text-yellow-100">
        {t("description")}
      </h3>

      <div className="relative bg-slate-800/50 rounded-xl p-4 shadow-lg backdrop-blur-sm w-full max-w-[1300px] mx-auto flex justify-center">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          className="overflow-visible"
        />
      </div>

      {/* Add styles using a style tag instead of JSX style prop */}
      <style dangerouslySetInnerHTML={{ __html: dialogStyles }} />

      <Dialog.Root
        open={!!selectedOrg}
        onOpenChange={() => setSelectedOrg(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 animate-fade-in backdrop-blur-sm dialog-overlay-enter" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-0 w-[95vw] sm:w-[90vw] max-w-2xl max-h-[90vh] sm:max-h-[85vh] shadow-xl border border-slate-700/50 backdrop-blur-md overflow-hidden dialog-content-enter">
            {selectedOrg && (
              <>
                <div className="sticky top-0 z-10 bg-slate-800/90 backdrop-blur-md border-b border-slate-700/50 p-4 sm:p-6 pb-3 sm:pb-4">
                  <Dialog.Title className="text-lg sm:text-xl font-bold text-white flex items-center gap-3 sm:gap-4 dialog-title">
                    {selectedOrg.image && (
                      <img
                        src={selectedOrg.image}
                        alt={selectedOrg.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 shadow-lg dialog-image"
                        style={{
                          borderColor: getPeriodColor(selectedOrg.periodId),
                        }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="truncate">{selectedOrg.name}</div>
                      <div
                        className="text-xs sm:text-sm font-normal truncate"
                        style={{ color: getPeriodColor(selectedOrg.periodId) }}
                      >
                        {selectedOrg.year} • {selectedOrg.period}
                      </div>
                    </div>
                  </Dialog.Title>

                  {/* Enhanced Close Button */}
                  <Dialog.Close className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 rounded-full transition-all duration-200 close-button focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800">
                    <span className="sr-only">Close</span>
                    <X className="w-5 h-5 text-slate-400 close-button-icon" />
                  </Dialog.Close>
                </div>

                <div className="p-4 sm:p-6 pt-3 sm:pt-4 space-y-4 sm:space-y-6 overflow-y-auto max-h-[calc(90vh-70px)] sm:max-h-[calc(85vh-80px)] dialog-scrollbar dialog-content">
                  {getExtendedDetails(selectedOrg.id) ? (
                    <div className="bg-slate-700/30 p-3 sm:p-5 rounded-lg border border-slate-600/50 shadow-inner">
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                        {t(`${selectedOrg.id}_description`)}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-semibold text-slate-300">
                        {t("mission")}
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base">
                        {t(`${selectedOrg.id}_mission`)}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-slate-300 mb-2 sm:mb-3 flex items-center">
                      <span
                        className="inline-block w-2 h-6 mr-2 rounded"
                        style={{
                          backgroundColor: getPeriodColor(selectedOrg.periodId),
                        }}
                      ></span>
                      {t("key_milestones")}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 mt-2 pl-1">
                      {Array.isArray(
                        t(`${selectedOrg.id}_milestones`, {
                          returnObjects: true,
                        }) as string[]
                      )
                        ? (
                            t(`${selectedOrg.id}_milestones`, {
                              returnObjects: true,
                            }) as string[]
                          ).map((milestone: string, index: number) => (
                            <li key={index} className="flex items-start group">
                              <div
                                className="w-2 h-2 rounded-full mt-1.5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"
                                style={{
                                  backgroundColor: getPeriodColor(
                                    selectedOrg.periodId
                                  ),
                                }}
                              />
                              <span className="text-slate-300 text-sm sm:text-base group-hover:text-white transition-colors">
                                {milestone}
                              </span>
                            </li>
                          ))
                        : selectedOrg.milestones.map(
                            (milestone: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start group"
                              >
                                <div
                                  className="w-2 h-2 rounded-full mt-1.5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"
                                  style={{
                                    backgroundColor: getPeriodColor(
                                      selectedOrg.periodId
                                    ),
                                  }}
                                />
                                <span className="text-slate-300 text-sm sm:text-base group-hover:text-white transition-colors">
                                  {milestone}
                                </span>
                              </li>
                            )
                          )}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Timeline;
