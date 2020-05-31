export const Rules = Object.freeze({
  required: label => [v => (!!v && v.length !== 0) || `${label} is required`],
  emailRules: [v => /.+@.+/.test(v) || 'E-mail must be valid'],
  phoneRules: [
    v =>
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v) ||
      'Phone must be valid'
  ]
})

export const APPLICATION_COMMON = Object.freeze({
  //TODO: add all uci majors in catalogue
  uci_majors: [
    'Aerospace',
    'Biomedical',
    'Chemical',
    'Civil',
    'Computer',
    'Computer Science and Engineering',
    'Electrical',
    'Environmental',
    'Material Science',
    'MAE',
    'Mechanical',
    'Business Information Management',
    'Computer Game Science',
    'Computer Science',
    'Data Science',
    'Informatics',
    'Software Engineering'
  ],
  uci_schools: [
    'Engineering',
    'Arts',
    'Biological Sciences',
    'Business',
    'Education',
    'Humanities',
    'Information and Computer Science',
    'Interdisciplinary Studies',
    'Law',
    'Physical Sciences',
    'Social Ecology',
    'Social Sciences',
    'Undeclared'
  ],
  uci_classes: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Super Senior'],
  uci_genders: ['Male', 'Female', 'Other']
})
