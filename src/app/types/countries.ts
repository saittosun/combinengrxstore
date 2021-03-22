import { Country } from './country';

export class Countries {

  get countries() {
    return [...this._countries];
  }

  // tslint:disable-next-line variable-name
  private _countries: Country[] = [

    { idOrCode: 'BE', name: 'Belgium', telephonePrefix: ['0032'] },
    { idOrCode: 'NL', name: 'Netherlands', telephonePrefix: ['0031'] },
    { idOrCode: 'DE', name: 'Germany', telephonePrefix: ['0049'] },
    { idOrCode: 'GB', name: 'United Kingdom', telephonePrefix: ['0044'] },
    { idOrCode: 'US', name: 'United States', telephonePrefix: ['001'] },
    { idOrCode: 'ES', name: 'Spain', telephonePrefix: ['0034'] },
    { idOrCode: 'FR', name: 'France', telephonePrefix: ['0033'] },
    { idOrCode: 'AF', name: 'Afghanistan', telephonePrefix: ['0093'] },
    { idOrCode: 'AX', name: 'Aland Islands', telephonePrefix: ['00358'] },
    { idOrCode: 'AL', name: 'Albania', telephonePrefix: ['00355'] },
    { idOrCode: 'DZ', name: 'Algeria', telephonePrefix: ['00213'] },
    { idOrCode: 'AS', name: 'American Samoa', telephonePrefix: ['001684'] },
    { idOrCode: 'AD', name: 'Andorra', telephonePrefix: ['00376'] },
    { idOrCode: 'AO', name: 'Angola', telephonePrefix: ['00244'] },
    { idOrCode: 'AI', name: 'Anguilla', telephonePrefix: ['001264'] },
    { idOrCode: 'AQ', name: 'Antarctica', telephonePrefix: ['00672'] },
    { idOrCode: 'AG', name: 'Antigua And Barbuda', telephonePrefix: ['001268'] },
    { idOrCode: 'AR', name: 'Argentina', telephonePrefix: ['0054'] },
    { idOrCode: 'AM', name: 'Armenia', telephonePrefix: ['00374'] },
    { idOrCode: 'AW', name: 'Aruba', telephonePrefix: ['00297'] },
    { idOrCode: 'AU', name: 'Australia', telephonePrefix: ['0061'] },
    { idOrCode: 'AT', name: 'Austria', telephonePrefix: ['0043'] },
    { idOrCode: 'AZ', name: 'Azerbaijan', telephonePrefix: ['00994'] },
    { idOrCode: 'BS', name: 'Bahamas', telephonePrefix: ['001242'] },
    { idOrCode: 'BH', name: 'Bahrain', telephonePrefix: ['00973'] },
    { idOrCode: 'BD', name: 'Bangladesh', telephonePrefix: ['00880'] },
    { idOrCode: 'BB', name: 'Barbados', telephonePrefix: ['001246'] },
    { idOrCode: 'BY', name: 'Belarus', telephonePrefix: ['00375'] },

    { idOrCode: 'BZ', name: 'Belize', telephonePrefix: ['00501'] },
    { idOrCode: 'BJ', name: 'Benin', telephonePrefix: ['00229'] },
    { idOrCode: 'BM', name: 'Bermuda', telephonePrefix: ['001441'] },
    { idOrCode: 'BT', name: 'Bhutan', telephonePrefix: ['00975'] },
    { idOrCode: 'BO', name: 'Bolivia', telephonePrefix: ['00591'] },
    { idOrCode: 'BK', name: 'Bonaire', telephonePrefix: ['00599'] },
    { idOrCode: 'BA', name: 'Bosnia - Hertsegovina', telephonePrefix: ['00387'] },
    { idOrCode: 'BW', name: 'Botswana', telephonePrefix: ['00267'] },
    { idOrCode: 'BV', name: 'Bouvet Island', telephonePrefix: ['0055'] },
    { idOrCode: 'BR', name: 'Brazil', telephonePrefix: ['0055'] },
    {
      idOrCode: 'IO',
      name: 'British Indian Ocean Territory',
      telephonePrefix: ['001284'],
    },
    { idOrCode: 'BN', name: 'Brunei Darussalam', telephonePrefix: ['00673'] },
    { idOrCode: 'BG', name: 'Bulgaria', telephonePrefix: ['00359'] },
    { idOrCode: 'BF', name: 'Burkina Faso', telephonePrefix: ['00226'] },
    { idOrCode: 'BI', name: 'Burundi', telephonePrefix: ['00257'] },
    { idOrCode: 'KH', name: 'Cambodia', telephonePrefix: ['00855'] },
    { idOrCode: 'CM', name: 'Cameroon', telephonePrefix: ['00237'] },
    { idOrCode: 'CA', name: 'Canada', telephonePrefix: ['001'] },
    { idOrCode: 'CV', name: 'Cape Verde', telephonePrefix: ['00238'] },
    { idOrCode: 'KY', name: 'Cayman Islands', telephonePrefix: ['001345'] },
    {
      idOrCode: 'CF',
      name: 'Central African Republic',
      telephonePrefix: ['00236'],
    },
    { idOrCode: 'TD', name: 'Chad', telephonePrefix: ['00235'] },
    { idOrCode: 'CL', name: 'Chile', telephonePrefix: ['0056'] },
    { idOrCode: 'CN', name: 'China', telephonePrefix: ['0086'] },
    { idOrCode: 'CX', name: 'Christmas Island', telephonePrefix: ['0061'] },
    {
      idOrCode: 'CC',
      name: 'Cocos (Keeling) Islands',
      telephonePrefix: ['0061'],
    },
    { idOrCode: 'CO', name: 'Colombia', telephonePrefix: ['0057'] },
    { idOrCode: 'KM', name: 'Comoros', telephonePrefix: ['00269'] },
    { idOrCode: 'CG', name: 'Congo', telephonePrefix: ['00242'] },
    {
      idOrCode: 'CD',
      name: 'Congo Democratic Republic',
      telephonePrefix: ['00243'],
    },
    { idOrCode: 'CK', name: 'Cook Islands', telephonePrefix: ['00682'] },
    { idOrCode: 'CR', name: 'Costa Rica', telephonePrefix: ['00506'] },
    { idOrCode: 'HR', name: 'Croatia', telephonePrefix: ['00385'] },
    { idOrCode: 'CU', name: 'Cuba', telephonePrefix: ['0053'] },
    { idOrCode: 'CY', name: 'Cyprus', telephonePrefix: ['00357'] },
    { idOrCode: 'CZ', name: 'Czech Republic', telephonePrefix: ['00420'] },
    { idOrCode: 'DK', name: 'Denmark', telephonePrefix: ['0045'] },
    { idOrCode: 'DJ', name: 'Djibouti', telephonePrefix: ['00253'] },
    { idOrCode: 'DM', name: 'Dominica', telephonePrefix: ['001767'] },
    {
      idOrCode: 'DO',
      name: 'Dominican Republic',
      telephonePrefix: ['001809', '001849', '001829'],
    },
    { idOrCode: 'TP', name: 'East Timor', telephonePrefix: ['00670'] },
    { idOrCode: 'EC', name: 'Ecuador', telephonePrefix: ['00593'] },
    { idOrCode: 'EG', name: 'Egypt', telephonePrefix: ['0020'] },
    { idOrCode: 'SV', name: 'El Salvador', telephonePrefix: ['00503'] },
    { idOrCode: 'GQ', name: 'Equatorial Guinea', telephonePrefix: ['00240'] },
    { idOrCode: 'ER', name: 'Eritrea', telephonePrefix: ['00291'] },
    { idOrCode: 'EE', name: 'Estonia', telephonePrefix: ['00372'] },
    { idOrCode: 'ET', name: 'Ethiopia', telephonePrefix: ['00251'] },
    { idOrCode: 'FK', name: 'Falkland Islands', telephonePrefix: ['00500'] },
    { idOrCode: 'FO', name: 'Faroe Islands', telephonePrefix: ['00298'] },
    { idOrCode: 'FJ', name: 'Fiji', telephonePrefix: ['00679'] },
    { idOrCode: 'FI', name: 'Finland', telephonePrefix: ['00358'] },

    { idOrCode: 'GF', name: 'French Guiana', telephonePrefix: ['00594'] },
    { idOrCode: 'PF', name: 'French Polynesia', telephonePrefix: ['00689'] },
    {
      idOrCode: 'TF',
      name: 'French Southern Territories',
      telephonePrefix: ['00262'],
    },
    { idOrCode: 'GA', name: 'Gabon', telephonePrefix: ['00241'] },
    { idOrCode: 'GM', name: 'Gambia', telephonePrefix: ['00220'] },
    { idOrCode: 'GE', name: 'Georgia', telephonePrefix: ['00995'] },

    { idOrCode: 'GH', name: 'Ghana', telephonePrefix: ['00233'] },
    { idOrCode: 'GI', name: 'Gibraltar', telephonePrefix: ['00350'] },
    { idOrCode: 'GR', name: 'Greece', telephonePrefix: ['0030'] },
    { idOrCode: 'GL', name: 'Greenland', telephonePrefix: ['00299'] },
    { idOrCode: 'GD', name: 'Grenada', telephonePrefix: ['001473'] },
    { idOrCode: 'GP', name: 'Guadeloupe', telephonePrefix: ['00590'] },
    { idOrCode: 'GU', name: 'Guam', telephonePrefix: ['001671'] },
    { idOrCode: 'GT', name: 'Guatemala', telephonePrefix: ['00502'] },
    { idOrCode: 'GN', name: 'Guatemala', telephonePrefix: ['00224'] },
    { idOrCode: 'GW', name: 'Guinea - Bissau', telephonePrefix: ['00245'] },
    { idOrCode: 'GY', name: 'Guyana', telephonePrefix: ['00592'] },
    { idOrCode: 'HT', name: 'Haiti', telephonePrefix: ['00509'] },
    {
      idOrCode: 'HM',
      name: 'Heardand Mcdonald Islands',
      telephonePrefix: ['00672'],
    },
    { idOrCode: 'HN', name: 'Honduras', telephonePrefix: ['00504'] },
    { idOrCode: 'HK', name: 'Hongkong', telephonePrefix: ['00852'] },
    { idOrCode: 'HU', name: 'Hungary', telephonePrefix: ['0036'] },
    { idOrCode: 'IS', name: 'Iceland', telephonePrefix: ['00354'] },
    { idOrCode: 'IN', name: 'India', telephonePrefix: ['0091'] },
    { idOrCode: 'ID', name: 'Indonesia', telephonePrefix: ['0062'] },
    { idOrCode: 'IR', name: 'Iran', telephonePrefix: ['0098'] },
    { idOrCode: 'IQ', name: 'Iraq', telephonePrefix: ['00964'] },
    { idOrCode: 'IE', name: 'Ireland', telephonePrefix: ['00353'] },
    { idOrCode: 'IL', name: 'Israel', telephonePrefix: ['00972'] },
    { idOrCode: 'IT', name: 'Italy', telephonePrefix: ['0039'] },
    { idOrCode: 'JM', name: 'Jamaica', telephonePrefix: ['001876'] },
    { idOrCode: 'JP', name: 'Japan', telephonePrefix: ['0081'] },
    { idOrCode: 'JO', name: 'Jordan', telephonePrefix: ['00962'] },
    { idOrCode: 'KZ', name: 'Kazakhstan', telephonePrefix: ['007'] },
    { idOrCode: 'KE', name: 'Kenya', telephonePrefix: ['00254'] },
    { idOrCode: 'KI', name: 'Kiribati', telephonePrefix: ['00686'] },
    {
      idOrCode: 'KS',
      name: 'Kosovo',
      telephonePrefix: ['00383', '00377', '00386'],
    },
    { idOrCode: 'KW', name: 'Kuwait', telephonePrefix: ['00965'] },
    { idOrCode: 'KG', name: 'Kyrgyzstan', telephonePrefix: ['00996'] },
    { idOrCode: 'LA', name: 'Laos', telephonePrefix: ['00856'] },
    { idOrCode: 'LV', name: 'Latvia', telephonePrefix: ['00371'] },
    { idOrCode: 'LB', name: 'Lebanon', telephonePrefix: ['00961'] },
    { idOrCode: 'LS', name: 'Lesotho', telephonePrefix: ['00266'] },
    { idOrCode: 'LR', name: 'Liberia', telephonePrefix: ['00231'] },
    { idOrCode: 'LY', name: 'Libya', telephonePrefix: ['00218'] },
    { idOrCode: 'LI', name: 'Liechtenstein', telephonePrefix: ['00423'] },
    { idOrCode: 'LT', name: 'Lithuania', telephonePrefix: ['00370'] },
    { idOrCode: 'LU', name: 'Luxembourg', telephonePrefix: ['00352'] },
    { idOrCode: 'MO', name: 'Macau', telephonePrefix: ['00853'] },
    { idOrCode: 'MG', name: 'Madagascar', telephonePrefix: ['00261'] },
    { idOrCode: 'MW', name: 'Malawi', telephonePrefix: ['00265'] },
    { idOrCode: 'MY', name: 'Malaysia', telephonePrefix: ['0060'] },
    { idOrCode: 'MV', name: 'Maldives', telephonePrefix: ['00960'] },
    { idOrCode: 'ML', name: 'Mali', telephonePrefix: ['00223'] },
    { idOrCode: 'MT', name: 'Malta', telephonePrefix: ['00356'] },
    { idOrCode: 'MH', name: 'Marshall Islands', telephonePrefix: ['00692'] },
    { idOrCode: 'MQ', name: 'Martinique', telephonePrefix: ['00596'] },
    { idOrCode: 'MR', name: 'Mauritania', telephonePrefix: ['00222'] },
    { idOrCode: 'MU', name: 'Mauritius', telephonePrefix: ['00230'] },
    { idOrCode: 'YT', name: 'Mayotte', telephonePrefix: ['00262'] },
    { idOrCode: 'MX', name: 'Mexico', telephonePrefix: ['0052'] },
    { idOrCode: 'FM', name: 'Micronesia', telephonePrefix: ['00691'] },
    { idOrCode: 'MD', name: 'Moldova', telephonePrefix: ['00373'] },
    { idOrCode: 'MC', name: 'Monaco', telephonePrefix: ['00377'] },
    { idOrCode: 'MN', name: 'Mongolia', telephonePrefix: ['00976'] },
    { idOrCode: 'ME', name: 'Montenegro', telephonePrefix: ['00382'] },
    { idOrCode: 'MS', name: 'Montserrat', telephonePrefix: ['001664'] },
    { idOrCode: 'MA', name: 'Morocco', telephonePrefix: ['00212'] },
    { idOrCode: 'MZ', name: 'Mozambique', telephonePrefix: ['00258'] },
    { idOrCode: 'MM', name: 'Myanmar', telephonePrefix: ['0095'] },
    { idOrCode: 'NA', name: 'Namibia', telephonePrefix: ['00264'] },
    { idOrCode: 'NR', name: 'Nauru', telephonePrefix: ['00674'] },
    { idOrCode: 'NP', name: 'Nepal', telephonePrefix: ['00977'] },

    {
      idOrCode: 'AN',
      name: 'Netherlands Antilles',
      telephonePrefix: ['00599'],
    },
    { idOrCode: 'NT', name: 'Neutral Zone', telephonePrefix: [] },
    { idOrCode: 'NC', name: 'New Caledonia', telephonePrefix: ['00687'] },
    { idOrCode: 'NZ', name: 'New Zealand ', telephonePrefix: ['0064'] },
    { idOrCode: 'NI', name: 'Nicaragua', telephonePrefix: ['00505'] },
    { idOrCode: 'NE', name: 'Niger', telephonePrefix: ['00227'] },
    { idOrCode: 'NG', name: 'Nigeria', telephonePrefix: ['00234'] },
    { idOrCode: 'NU', name: 'Niue', telephonePrefix: ['00683'] },
    { idOrCode: 'NF', name: 'Norfolk Island', telephonePrefix: ['00672'] },
    { idOrCode: 'KP', name: 'North Korea', telephonePrefix: ['00850'] },
    { idOrCode: 'MK', name: 'North Macedonia', telephonePrefix: ['00389'] },
    {
      idOrCode: 'MP',
      name: 'Northern Mariana Islands',
      telephonePrefix: ['001670'],
    },
    { idOrCode: 'NO', name: 'Norway', telephonePrefix: ['0047'] },
    { idOrCode: 'OM', name: 'Oman', telephonePrefix: ['00968'] },
    { idOrCode: 'PK', name: 'Pakistan', telephonePrefix: ['0092'] },
    { idOrCode: 'PW', name: 'Palau', telephonePrefix: ['00680'] },
    { idOrCode: 'PA', name: 'Panama', telephonePrefix: ['00507'] },
    { idOrCode: 'PG', name: 'Papua New Guinea', telephonePrefix: ['00675'] },
    { idOrCode: 'PY', name: 'Paraguay', telephonePrefix: ['00595'] },
    { idOrCode: 'PE', name: 'Peru', telephonePrefix: ['0051'] },
    { idOrCode: 'PH', name: 'Philippines', telephonePrefix: ['0063'] },
    { idOrCode: 'PN', name: 'Pitcairn', telephonePrefix: ['0064'] },
    { idOrCode: 'PL', name: 'Poland', telephonePrefix: ['0048'] },
    { idOrCode: 'PT', name: 'Portugal', telephonePrefix: ['00351'] },
    {
      idOrCode: 'PR',
      name: 'Puerto Rico',
      telephonePrefix: ['001787', '001939'],
    },
    { idOrCode: 'QA', name: 'Qatar', telephonePrefix: ['00974'] },
    {
      idOrCode: 'CI',
      name: 'Republic Of Côte D\'Ivoire',
      telephonePrefix: ['00225'],
    },
    { idOrCode: 'RE', name: 'Reunion', telephonePrefix: ['00262'] },
    { idOrCode: 'RO', name: 'Romania', telephonePrefix: ['0040'] },
    { idOrCode: 'RU', name: 'Russian', telephonePrefix: ['007'] },
    { idOrCode: 'RW', name: 'Rwanda', telephonePrefix: ['00250'] },
    {
      idOrCode: 'GS',
      name: 'S. Georgia And S.Sandwich Isls.',
      telephonePrefix: [],
    },
    { idOrCode: 'BL', name: 'Saint Barthelemy', telephonePrefix: ['00590'] },
    {
      idOrCode: 'KN',
      name: 'Saint Kitts And Nevis',
      telephonePrefix: ['001869'],
    },
    { idOrCode: 'LC', name: 'Saint Lucia', telephonePrefix: ['001758'] },
    { idOrCode: 'SF', name: 'Saint Marteen', telephonePrefix: ['001721'] },
    {
      idOrCode: 'PM',
      name: 'Saint Pierre and Miquelon',
      telephonePrefix: ['00508'],
    },
    {
      idOrCode: 'VC',
      name: 'Saint Vincent & The Grenadines',
      telephonePrefix: ['001784'],
    },
    { idOrCode: 'WS', name: 'Samoa', telephonePrefix: ['00685'] },
    { idOrCode: 'SM', name: 'Sanmarino', telephonePrefix: ['00378'] },
    {
      idOrCode: 'ST',
      name: 'Sao Tome And Principe',
      telephonePrefix: ['00239'],
    },
    { idOrCode: 'SA', name: 'Saudi Arabia', telephonePrefix: ['00966'] },
    { idOrCode: 'SN', name: 'Senegal', telephonePrefix: ['00221'] },
    { idOrCode: 'RS', name: 'Serbia', telephonePrefix: ['00381'] },
    { idOrCode: 'YU', name: 'Serbia And Montenegro', telephonePrefix: [] },
    { idOrCode: 'CS', name: 'Serbia And Montenegro', telephonePrefix: [] },
    { idOrCode: 'SC', name: 'Seychelles', telephonePrefix: ['00248'] },
    { idOrCode: 'SL', name: 'Sierra Leone', telephonePrefix: ['00232'] },
    { idOrCode: 'SG', name: 'Singapore', telephonePrefix: ['0065'] },
    { idOrCode: 'SX', name: 'Sint Maarten', telephonePrefix: ['001721'] },
    { idOrCode: 'SK', name: 'Slovakia', telephonePrefix: ['00421'] },
    { idOrCode: 'SI', name: 'Slovenia', telephonePrefix: ['00386'] },
    { idOrCode: 'SB', name: 'Solomon Islands', telephonePrefix: ['00677'] },
    { idOrCode: 'SO', name: 'Somalia', telephonePrefix: ['00252'] },
    { idOrCode: 'ZA', name: 'South Africa', telephonePrefix: ['0027'] },
    { idOrCode: 'KR', name: 'South Korea', telephonePrefix: ['0082'] },

    { idOrCode: 'LK', name: 'Sri Lanka', telephonePrefix: ['0094'] },
    { idOrCode: 'SH', name: 'St.Helena', telephonePrefix: ['00290'] },
    { idOrCode: 'SU', name: 'Su', telephonePrefix: [] },
    { idOrCode: 'SD', name: 'Sudan', telephonePrefix: ['00211', '00249'] },
    { idOrCode: 'SR', name: 'Suriname', telephonePrefix: ['00597'] },
    {
      idOrCode: 'SJ',
      name: 'Svalbardand Jan Mayen Islands',
      telephonePrefix: ['0047'],
    },
    { idOrCode: 'SZ', name: 'Swaziland', telephonePrefix: ['00268'] },
    { idOrCode: 'SE', name: 'Sweden', telephonePrefix: ['0046'] },
    { idOrCode: 'CH', name: 'Switzerland', telephonePrefix: ['0041'] },
    { idOrCode: 'SY', name: 'Switzerland', telephonePrefix: ['00963'] },
    { idOrCode: 'TW', name: 'Taiwan', telephonePrefix: ['00886'] },
    { idOrCode: 'TJ', name: 'Tajikistan', telephonePrefix: ['00992'] },
    { idOrCode: 'TZ', name: 'Tanzania', telephonePrefix: ['00255'] },
    { idOrCode: 'TH', name: 'Thailand', telephonePrefix: ['0066'] },
    { idOrCode: 'TG', name: 'Togo', telephonePrefix: ['00228'] },
    { idOrCode: 'TK', name: 'Tokelau', telephonePrefix: ['00690'] },
    { idOrCode: 'TO', name: 'Tonga', telephonePrefix: ['00676'] },
    { idOrCode: 'TT', name: 'Trinidadand Tobago', telephonePrefix: ['001868'] },
    { idOrCode: 'TN', name: 'Tunisia', telephonePrefix: ['00216'] },
    { idOrCode: 'TR', name: 'Turkey', telephonePrefix: ['0090'] },
    { idOrCode: 'TM', name: 'Turkmenistan', telephonePrefix: ['00993'] },
    {
      idOrCode: 'TC',
      name: 'Turksand Caicos Islands',
      telephonePrefix: ['001649'],
    },
    { idOrCode: 'TV', name: 'Tuvalu', telephonePrefix: ['00688'] },
    { idOrCode: 'UG', name: 'Uganda', telephonePrefix: ['00256'] },
    { idOrCode: 'UA', name: 'Ukrainianssr', telephonePrefix: ['00380'] },
    {
      idOrCode: 'AE',
      name: 'United Arab Emirates',
      telephonePrefix: ['00971'],
    },

    { idOrCode: 'UY', name: 'Uruguay', telephonePrefix: ['00598'] },
    {
      idOrCode: 'UM',
      name: 'Us Minor Outlying Islands',
      telephonePrefix: ['001'],
    },
    { idOrCode: 'UZ', name: 'Uzbekistan', telephonePrefix: ['00998'] },
    { idOrCode: 'VU', name: 'Vanuatu', telephonePrefix: ['00678'] },
    {
      idOrCode: 'VA',
      name: 'Vatican City State (Holy See)',
      telephonePrefix: ['00672'],
    },
    { idOrCode: 'VE', name: 'Venezuela', telephonePrefix: ['0058'] },
    { idOrCode: 'VN', name: 'Vietnam', telephonePrefix: ['0084'] },
    {
      idOrCode: 'VG',
      name: 'Virgin Islands(British)',
      telephonePrefix: ['001284'],
    },
    {
      idOrCode: 'VI',
      name: 'Virgin Islands(U.S.)',
      telephonePrefix: ['001340'],
    },
    {
      idOrCode: 'WF',
      name: 'Wallis And Futuna Islands',
      telephonePrefix: ['00681'],
    },
    { idOrCode: 'EH', name: 'Western Sahara', telephonePrefix: ['00212'] },
    { idOrCode: 'XX', name: 'XX', telephonePrefix: [] },
    { idOrCode: 'YE', name: 'Yemen', telephonePrefix: ['00967'] },
    { idOrCode: 'ZM', name: 'Zambia', telephonePrefix: ['00260'] },
    { idOrCode: 'ZW', name: 'Zimbabwe', telephonePrefix: ['00263'] },
  ];
}