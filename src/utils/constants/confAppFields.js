import { Rules, APPLICATION_COMMON } from './applicationCommon'

export const CONF_APP_FIELDS = [
  {
    name: 'firstname',
    label: 'First Name',
    type: 'textField',
    rules: Rules.required('First Name'),
    md: '6'
  },
  {
    name: 'lastname',
    label: 'Last Name',
    type: 'textField',
    rules: Rules.required('Last Name'),
    md: '6'
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'textField',
    rules: [...Rules.required('E-mail'), ...Rules.emailRules],
    md: '4'
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'textField',
    rules: [...Rules.required('Phone'), ...Rules.phoneRules],
    md: '4'
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    rules: Rules.required('Gender'),
    md: '4',
    items: APPLICATION_COMMON.uci_genders
  },
  {
    name: 'diet',
    label: 'Dietary Resctrictions',
    type: 'combobox',
    rules: Rules.required('Dietary Resctrictions'),
    md: '4',
    items: ['None', 'Vegetarian', 'Vegan', 'Gluten Free', 'Halal']
  },
  {
    name: 'school',
    label: 'School',
    type: 'combobox',
    rules: Rules.required('School'),
    md: '4',
    items: APPLICATION_COMMON.uci_schools
  },
  {
    name: 'major',
    label: 'Major',
    type: 'combobox',
    rules: Rules.required('Major'),
    md: '4',
    items: APPLICATION_COMMON.uci_majors
  },
  {
    name: 'class',
    label: 'Class',
    type: 'select',
    rules: Rules.required('Class'),
    md: '4',
    items: APPLICATION_COMMON.uci_classes
  }
]
