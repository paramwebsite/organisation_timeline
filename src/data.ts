import { TimelinePeriod } from './types';
import rss1 from '../src/images/Rss1.png';
import Rashtra_sevika_samithi from '../src/images/Rashtra_sevika_samithi.png';
import abvp from '../src/images/abvp.png';
import bjp from '../src/images/bjp.png';
import Vidya_Bharati from '../src/images/Vidya_Bharati.png';
import Vanavasi_Kalyan_Ashram from '../src/images/Vanavasi_Kalyan_Ashram.png';
import Bharatiya_Mazdoor_Sangh from '../src/images/Bharatiya_Mazdoor_Sangh.png';
import Bharat_Vikas_Parishad from '../src/images/Bharat_Vikas_Parishad.png';
import VHP from '../src/images/VHP.png';
import dindayal_shodh_sansthan from '../src/images/dindayal_shodh_sansthan.png';
import grahaka_panchayat from '../src/images/grahaka_panchayat.png';
import bks from '../src/images/bks.png';
import sahkar_bharti from '../src/images/sahkar_bharti.png';
import Hindu_Seva_Pratishthana from '../src/images/Hindu_Seva_Pratishthana.png';
import Sanskar_Bharti_Logo from '../src/images/Sanskar_Bharti_Logo.png';
import SamskritaBharati from '../src/images/SamskritaBharati.png';
import Hindu_Jagran_Manch from '../src/images/Hindu_Jagran_Manch.png';
import samajik_samarasata from '../src/images/samajik_samarasata.png';
import rashtriya_shikshak_sangh from '../src/images/rashtriya_shikshak_sangh.png';
import Sanskar_Bharti from '../src/images/sahkar_bharti.png';
import SwadeshiJagranManch from '../src/images/SwadeshiJagranManch.png';
import VijnanaBharati from '../src/images/VijnanaBharati.png';
import Kreeda_Bharati from '../src/images/Kreeda_Bharati.png';
import akhila_bharatiya_adhivakta_parishad from '../src/images/Akhil_Bharatiya_Sahitya_Parishad.png';
import Saksham_logo from '../src/images/Saksham_logo.png';
import Prajna_Pravah from '../src/images/Prajna_Pravah.png';
import Vishwa_samvada_Kendra from '../src/images/Vishwa_samvada_Kendra.png';
import itihasa_sankalan_samithi from '../src/images/itihasa_sankalan_samithi.png';
import Laghu_Vidya_Bharti from '../src/images/Laghu_Vidya_Bharti.png';
import abpssp from '../src/images/abpssp.jpg';
import arogya_bharati from '../src/images/arogya_bharati.png';
import fins from '../src/images/fins.png';
import Samartha_Bharata from '../src/images/Samartha_Bharata.png'




export const timelineData: TimelinePeriod[] = [
  {
    id: 'period-1',
    range: "1920's to 1940's",
    startYear: 1920,
    endYear: 1949,
    organizations: [
      {
        id: 'rss',
        name: 'Rashtriya Swayamsevak Sangh',
        year: 1925,
        image: rss1,
        mission: 'Cultural and social organization focused on national development through individual character building.',
        milestones: [
          'Founded by Dr. K.B. Hedgewar in Nagpur',
          'Established first Shakha in 1925',
          'Expanded nationwide presence by 1940s'
        ]
      },
      {
        id: 'rss_samiti',
        name: 'Rashtra Sevika Samiti',
        year: 1936,
        image: Rashtra_sevika_samithi,
        mission: "Women's organization dedicated to national service and cultural preservation.",
        milestones: [
          'Founded by Laxmibai Kelkar',
          'First branch established in Wardha',
          'Nationwide expansion initiated'
        ]
      },
      {
        id: 'abvp',
        name: 'Akhil Bharatiya Vidyarthi Parishad',
        year: 1948,
        image: abvp,
        mission: 'Student organization focused on nation-building and educational reform.',
        milestones: [
          'Established in Mumbai',
          'First national conference in 1949',
          'Expanded to multiple universities'
        ]
      }
    ]
  },
  {
    id: 'period-2',
    range: "1950's and 1960's",
    startYear: 1950,
    endYear: 1969,
    organizations: [
      {
        id: 'bjp',
        name: 'Bharatiya Janata Party',
        year: 1951,
        image: bjp,
        mission: 'Political organization promoting nationalist ideology and cultural values.',
        milestones: [
          'Founded by Dr. Syama Prasad Mookerjee',
          'First general election participation in 1952',
          'Significant growth in political presence'
        ]
      },
      {
        id: 'vka',
        name: 'Vanavasi Kalyan Ashram',
        year: 1952,
        image: Vanavasi_Kalyan_Ashram,
        mission: 'Organization working for tribal welfare and development.',
        milestones: [
          'Established first center',
          'Expanded to multiple states',
          'Initiated educational programs'
        ]
      },
      {
        id: 'vb',
        name: 'Vidya Bharati',
        year: 1952,
        image: Vidya_Bharati,
        mission: 'Educational organization promoting value-based education.',
        milestones: [
          'Started Shishu Mandirs in 1952',
          'Formal establishment in 1977',
          'Network of schools established'
        ]
      },
      {
        id: 'bms',
        name: 'Bharatiya Mazdoor Sangh',
        year: 1955,
        image: Bharatiya_Mazdoor_Sangh,
        mission: 'Trade union organization promoting worker welfare.',
        milestones: [
          'Founded by Dattopant Thengadi',
          'First major labor movement',
          'National recognition achieved'
        ]
      },
      {
        id: 'bvp',
        name: 'Bharat Vikas Parishad',
        year: 1963,
        image: Bharat_Vikas_Parishad,
        mission: 'Development organization focused on national progress through local initiatives.',
        milestones: [
          'Launched community development projects',
          'Collaborated with local governments',
          'Achieved significant rural development milestones'
        ]
      },
      {
        id: 'vhp',
        name: 'Vishwa Hindu Parishad',
        year: 1964,
        image:VHP,
        mission: 'Cultural organization promoting Hindu values and heritage.',
        milestones: [
          'Founded with a focus on social reform',
          'Expanded cultural outreach programs',
          'Involved in community service initiatives'
        ]
      },
      {
        id: 'dri',
        name: 'Deendayal Research Institute',
        year: 1968,
        image: dindayal_shodh_sansthan,
        mission: 'Research organization focusing on socio-economic development.',
        milestones: [
          'Established research framework',
          'Published influential reports',
          'Partnered with policy think tanks'
        ]
      }
    ]
  },
  {
    id: 'period-3',
    range: "1970's to 1980's",
    startYear: 1970,
    endYear: 1989,
    organizations: [
      {
        id: 'abgp',
        name: 'Akhil Bharatiya Grahak Panchayat',
        year: 1975,
        image:grahaka_panchayat,
        mission: 'Consumer protection and awareness organization.',
        milestones: [
          'Established consumer rights framework',
          'Started awareness campaigns',
          'National network established'
        ]
      },
      {
        id: 'bks',
        name: 'Bharatiya Kisan Sangh',
        year: 1978,
        image: bks,
        mission: "Farmers' organization promoting agricultural development.",
        milestones: [
          'Founded for farmer welfare',
          'Major agricultural initiatives',
          'Policy advocacy success'
        ]
      },
      {
        id: 'sb',
        name: 'Sahakar Bharati',
        year: 1979,
        image: sahkar_bharti,
        mission: 'Organization dedicated to cooperative development and mutual support.',
        milestones: [
          'Initiated cooperative programs',
          'Expanded local support networks',
          'Strengthened community bonds'
        ]
      },
      {
        id: 'hsp',
        name: 'Hindu Seva Pratishthana',
        year: 1980,
        image: Hindu_Seva_Pratishthana,
        mission: 'Organization focused on community service and social welfare.',
        milestones: [
          'Launched community service initiatives',
          'Established volunteer networks',
          'Implemented social welfare programs'
        ]
      },
      {
        id: 'sanskar',
        name: 'Sanskar Bharati',
        year: 1981,
        image: Sanskar_Bharti_Logo,
        mission: 'Cultural organization promoting Indian heritage and values.',
        milestones: [
          'Organized cultural festivals',
          'Promoted traditional arts',
          'Collaborated with local artists'
        ]
      },
      {
        id: 'samskrita',
        name: 'Samskrita Bharati',
        year: 1981,
        image: SamskritaBharati,
        mission: 'Organization dedicated to the promotion of Sanskrit language and literature.',
        milestones: [
          'Initiated Sanskrit learning programs',
          'Published Sanskrit literature',
          'Collaborated with educational institutions'
        ]
      },
      {
        id: 'hjm',
        name: 'Hindu Jagran Manch',
        year: 1982,
        image: Hindu_Jagran_Manch,
        mission: 'Organization focused on promoting Hindu awareness and cultural revival.',
        milestones: [
          'Started awareness campaigns',
          'Organized cultural events',
          'Expanded outreach programs'
        ]
      },
      {
        id: 'ssm',
        name: 'Samajik Samrasta Manch',
        year: 1983,
        image: samajik_samarasata,
        mission: 'Social organization dedicated to fostering communal harmony and social unity.',
        milestones: [
          'Promoted social integration programs',
          'Hosted community dialogues',
          'Supported inclusive initiatives'
        ]
      },
      {
        id: 'abrsm',
        name: 'Akhil Bharatiya Rashtriya Shaikshik Mahasangh',
        year: 1988,
        image:rashtriya_shikshak_sangh,
        mission: 'Educational organization focusing on national academic excellence.',
        milestones: [
          'Established academic networks',
          'Conducted educational conferences',
          'Advocated for educational reforms'
        ]
      },
      {
        id: 'seva',
        name: 'Seva Bharati',
        year: 1989,
        image: Sanskar_Bharti,
        mission: 'Volunteer organization dedicated to social service and community development.',
        milestones: [
          'Launched volunteer programs',
          'Engaged in disaster relief',
          'Built partnerships with NGOs'
        ]
      }
    ]
  },
  {
    id: 'period-4',
    range: "1990' onwards",
    startYear: 1990,
    endYear: 2024,
    organizations: [
      {
        id: 'sjm',
        name: 'Swadeshi Jagaran Manch',
        year: 1991,
        image: SwadeshiJagranManch,
        mission: 'Economic nationalist organization promoting indigenous development.',
        milestones: [
          'Founded to promote indigenous economy',
          'Major policy initiatives',
          'National economic impact'
        ]
      },
      {
        id: 'vibha',
        name: 'Vijnana Bharati',
        year: 1991,
        image: VijnanaBharati,
        mission: 'Science and technology organization promoting research and innovation.',
        milestones: [
          'Established research network',
          'Major scientific initiatives',
          'Innovation programs launched'
        ]
      },
      {
        id: 'kreeda',
        name: 'Kreeda Bharati',
        year: 1992,
        image: Kreeda_Bharati,
        mission: 'Sports organization promoting indigenous sports and athletic development.',
        milestones: [
          'Launched national sports programs',
          'Supported local athletic clubs',
          'Enhanced community participation in sports'
        ]
      },
      {
        id: 'abap',
        name: 'Akhil Bharatiya Adhivakta Parishad',
        year: 1992,
        image:akhila_bharatiya_adhivakta_parishad,
        mission: 'Debate and  speaking organization focused on fostering dialogue and discourse.',
        milestones: [
          'Organized national debates',
          'Hosted  speaking competitions',
          'Encouraged political discourse'
        ]
      },
      {
        id: 'sakshama',
        name: 'Sakshama Karnataka',
        year: 1992,
        image: Saksham_logo,
        mission: 'Regional organization promoting local governance and civic participation.',
        milestones: [
          'Launched regional civic initiatives',
          'Supported local political engagement',
          'Built community networks'
        ]
      },
      {
        id: 'prajna',
        name: 'Prajna Pravah',
        year: 1992,
        image: Prajna_Pravah,
        mission: 'Cultural organization promoting traditional arts and literature.',
        milestones: [
          'Organized cultural festivals',
          'Promoted indigenous literature',
          'Collaborated with local artists'
        ]
      },
      {
        id: 'vsk',
        name: 'Vishwa Samvada Kendra',
        year: 1992,
        image: Vishwa_samvada_Kendra,
        mission: 'Organization focused on facilitating national dialogue and communication.',
        milestones: [
          'Established communication networks',
          'Hosted national forums',
          'Promoted  discourse'
        ]
      },
      {
        id: 'abisy',
        name: 'Akhil Bharatiya Itihas Sankalan Yojana',
        year: 1994,
        image: itihasa_sankalan_samithi,
        mission: 'Organization dedicated to the documentation and preservation of history.',
        milestones: [
          'Launched historical documentation projects',
          'Collaborated with historians',
          'Preserved archival materials'
        ]
      },
      {
        id: 'laghu',
        name: 'Laghu Udyog Bharati',
        year: 1994,
        image: Laghu_Vidya_Bharti,
        mission: 'Organization promoting small scale industries and entrepreneurship.',
        milestones: [
          'Supported local small businesses',
          'Launched entrepreneurial training programs',
          'Enhanced economic opportunities'
        ]
      },
      {
        id: 'abpssp',
        name: 'Akhil Bharatiya Poorva Sainik Seva Parishad',
        year: 1995,
        image: abpssp,
        mission: 'Veteran organization dedicated to the welfare of former military personnel.',
        milestones: [
          'Established veteran support networks',
          'Organized rehabilitation programs',
          'Advocated for veteran rights'
        ]
      },
        {
        id: 'ab',
        name: 'Arogya Bharti',
        year: 2002,
        image: arogya_bharati,
        mission: 'Healthcare organization promoting traditional and modern medicine.',
        milestones: [
          'Founded for healthcare initiatives',
          'Medical camps established',
          'Research programs initiated'
        ]
      },
      {
        id: 'fins',
        name: 'Forum for Integrated National Security',
        year: 2003,
        image: fins,
        mission: 'Organization focused on national security and strategic affairs.',
        milestones: [
          'Established security framework',
          'Policy recommendations',
          'Strategic studies initiated'
        ]
      },
      {
        id: 'samartha',
        name: 'Samartha Bharata',
        year: 2014,
        image: Samartha_Bharata,
        mission: 'Organization dedicated to promoting holistic national development through integrated efforts.',
        milestones: [
          'Launched multi-sectoral development projects',
          'Promoted collaborative initiatives across industries',
          'Achieved national recognition for integrated strategies'
        ]
      }
    ]
  },
  // {
  //   id: 'period-5',
  //   range: "2000 Onwards",
  //   startYear: 2000,
  //   endYear: 2024,
  //   organizations: [
  //     {
  //       id: 'ab',
  //       name: 'Arogya Bharti',
  //       year: 2002,
  //       image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop',
  //       mission: 'Healthcare organization promoting traditional and modern medicine.',
  //       milestones: [
  //         'Founded for healthcare initiatives',
  //         'Medical camps established',
  //         'Research programs initiated'
  //       ]
  //     },
  //     {
  //       id: 'fins',
  //       name: 'Forum for Integrated National Security',
  //       year: 2003,
  //       image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=400&h=400&fit=crop',
  //       mission: 'Organization focused on national security and strategic affairs.',
  //       milestones: [
  //         'Established security framework',
  //         'Policy recommendations',
  //         'Strategic studies initiated'
  //       ]
  //     },
  //     {
  //       id: 'samartha',
  //       name: 'Samartha Bharata',
  //       year: 2014,
  //       image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop',
  //       mission: 'Organization dedicated to promoting holistic national development through integrated efforts.',
  //       milestones: [
  //         'Launched multi-sectoral development projects',
  //         'Promoted collaborative initiatives across industries',
  //         'Achieved national recognition for integrated strategies'
  //       ]
  //     }
  //   ]
  // }
];