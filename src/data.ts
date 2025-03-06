import { TimelinePeriod } from './types';

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
        image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=400&h=400&fit=crop',
        mission: 'Cultural and social organization focused on national development through individual character building.',
        milestones: [
          'Founded by Dr. K.B. Hedgewar in Nagpur',
          'Established first Shakha in 1925',
          'Expanded nationwide presence by 1940s'
        ]
      },
      {
        id: 'rss-2',
        name: 'Rashtra Sevika Samiti',
        year: 1936,
        image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop',
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
        id: 'bjs',
        name: 'Bharatiya Jana Sangh',
        year: 1951,
        image: 'https://images.unsplash.com/photo-1604778234463-761dba18e834?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1609766418204-94aae0ecf4e6?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=400&fit=crop',
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
        id: 'agp',
        name: 'Akhil Bharatiya Grahak Panchayat',
        year: 1975,
        image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1595074475099-699580c8af0a?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&h=400&fit=crop',
        mission: 'Debate and public speaking organization focused on fostering dialogue and discourse.',
        milestones: [
          'Organized national debates',
          'Hosted public speaking competitions',
          'Encouraged political discourse'
        ]
      },
      {
        id: 'sakshama',
        name: 'Sakshama Karnataka',
        year: 1992,
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
        mission: 'Organization focused on facilitating national dialogue and communication.',
        milestones: [
          'Established communication networks',
          'Hosted national forums',
          'Promoted public discourse'
        ]
      },
      {
        id: 'abisy',
        name: 'Akhil Bharatiya Itihas Sankalan Yojana',
        year: 1994,
        image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=400&h=400&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop',
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