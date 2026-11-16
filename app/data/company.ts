import type { CompanyInfo } from '~/types'

// Source: Wood Zone company profile (pp. 2-3 and back cover).
// MOCK: `tagline` is derived from the profile wording, not an official slogan.
export const company: CompanyInfo = {
  name: 'Wood Zone',
  tagline: 'Interior and exterior woodworking, designed and built with architectural precision.',
  summary: [
    'Wood Zone is a specialized company in interior and exterior woodworking and design, with a strong focus on delivering premium exterior woodwork solutions for villas, palaces, and commercial buildings.',
    'We create elegant and durable woodwork that combines beauty, functionality, and craftsmanship, while paying close attention to architectural details that give every project a unique and luxurious character.',
    'The company also has extensive experience in the design, manufacturing, and installation of school laboratories, medical laboratories, and toilet cubicle partitions, in addition to a wide range of customized interior woodwork and fit-out solutions, all delivered according to high standards of quality and safety.'
  ],
  commitment:
    'We are committed to providing innovative and practical solutions that meet our clients’ expectations, with professional execution that ensures precision, quality, and timely delivery. Our goal is to create projects that seamlessly combine aesthetics, functionality, and durability.',
  // Source: profile project pages ("Hammam design and wood works was founded in Jordan...").
  groupProfile:
    'Hammam design and wood works was founded in Jordan as part of AL Hammam Group, which consists of a number of companies based in Amman, working mainly in the fields of real estate development and construction, in addition to professional services and capital investments.',
  group: 'AL Hammam Group, Amman',
  phone: '+962786755559',
  email: 'Info@hammamgroup.net',
  website: 'www.hammamdesign.com'
}
