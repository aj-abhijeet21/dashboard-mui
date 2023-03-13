export type ContactType = {
  accountName: string
  primaryEmail: string
  primaryPhone: number
  secondaryEmail?: string
  secondaryPhone?: number
}

export type AddressType = {
  floor: string
  area: string
  town: string
  city: string
  landmark: string
  pinCode: string
}

export type SocialMediaType = {
  website: string
  instagram: string
  facebook: string
  twitter: string
}

export type StatementType = {
  statement: string
}

export type WorkingHoursType = {
  fromTime: string
  toTime: string
  fromDays: string
  toDays: string
}

export type StateType = {
  description: string
  contacts: ContactType[]
  address: AddressType
  socialMedia: SocialMediaType
  statements: StatementType[]
  workingHours: WorkingHoursType
  termsAndConditions: TermsConditionType
  privacy: PrivacyType
}

export type EditStatementType = {
  newStatement: StatementType
  oldStatement: StatementType
}

export type EditContactType = {
  newContact: ContactType
  oldContact: ContactType
}

export type TermsConditionType = {
  agreement: string
  services: string
  laws: string
  applications: string
  rights: string
}

export type PrivacyType = {
  introduction: string
  dataCollect: string
  dataUsage: string
  dataShare: string
  choices: string
  other: string
}

export enum Actions {
  editDescription,
  addContact,
  removeContact,
  addStatement,
  removeStatement,
  editStatement,
  editContact,
  addWorkingHours,
  removeWorkingHours,
  addSocialMedia,
  removeSocialMedia,
  addAddress,
  removeAddress,
  editTermsAndConditions,
  editPrivacy,
}

export type ActionType =
  | { type: Actions.addAddress; payload: AddressType }
  | { type: Actions.addContact; payload: ContactType }
  | { type: Actions.addWorkingHours; payload: WorkingHoursType }
  | { type: Actions.addSocialMedia; payload: SocialMediaType }
  | { type: Actions.addStatement; payload: StatementType }
  | { type: Actions.editStatement; payload: EditStatementType }
  | { type: Actions.editContact; payload: EditContactType }
  | { type: Actions.removeAddress; payload: '' }
  | { type: Actions.removeContact; payload: ContactType }
  | { type: Actions.removeWorkingHours }
  | { type: Actions.removeStatement; payload: StatementType }
  | { type: Actions.removeSocialMedia; payload: SocialMediaType }
  | { type: Actions.editTermsAndConditions; payload: TermsConditionType }
  | { type: Actions.editPrivacy; payload: PrivacyType }
  | { type: Actions.editDescription; payload: string }

export const initialState: StateType = {
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
  address: {
    floor: 'C-1 / 351 / 4',
    area: 'GIDC Makarpura',
    town: 'Vadodara',
    city: 'Vadodara',
    landmark: 'Near Nobel Hospital',
    pinCode: '390010',
  },
  contacts: [
    {
      accountName: 'Sales Team',
      primaryEmail: 'salesteam@br.com',
      primaryPhone: 809731231,
      secondaryEmail: 'salesteam2@br.com',
      secondaryPhone: 8000058214,
    },
  ],
  socialMedia: { facebook: '', twitter: '', instagram: '', website: '' },
  statements: [
    { statement: 'You think it, we ink it.' },
    { statement: 'You think it, we ink it.' },
    { statement: 'You think it, we ink it.' },
    { statement: 'You think it, we ink it.' },
  ],
  workingHours: { fromTime: '10.00 AM', toTime: '6.00 PM', fromDays: 'Monday', toDays: 'Friday' },
  termsAndConditions: {
    agreement: `We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is
    material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking
    effect. What constitutes a material change will be determined at Our sole discretion.
    By continuing to access or use Our Service after those revisions become effective, You agree to be bound
    by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the
    website and the Service.
    `,
    applications: `The Company will provide support and attempt to troubleshoot any known or discovered issues that may
    affect the backups of Content. But You acknowledge that the Company has no liability related to the
    integrity of Content or the failure to successfully restore Content to a usable state.
    You agree to maintain a complete and accurate copy of any Content in a location independent of the
    Service.`,
    laws: `Notwithstanding any damages that You might incur, the entire liability of the Company and any of its
    suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be
    limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased
    anything through the Service`,
    rights: `You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such
    assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty
    free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit
    such Feedback without restriction.`,
    services: `Payment can be made through various payment methods we have available, such as Visa, MasterCard, Affinity Card, American Express cards or online payment methods (PayPal, for example).
    Payment cards (credit cards or debit cards) are subject to validation checks and authorization by Your card
    issuer. If we do not receive the required authorization, We will not be liable for any delay or non-delivery of
    Your Order.`,
  },
  privacy: {
    choices: `If you are using cookies, you should disclose it in your privacy policy as well as a link to the page on your website where your cookie policy is hosted. Your users should be given the option to opt-out. You may wish to explain how their user experience may be affected if they do.`,
    dataCollect: `Along the same lines, you should be transparent about whom you share the user data that you have complied with and for what purpose. If you use analytics or advertising services, for example, you should make this clear and link to these third-party companies’ respective privacy policies.`,
    dataShare: `Your users should know where you will be storing their data, for how long it will be retained, and if it will be transferred internationally (this could be the case if your servers are located abroad, for example).`,
    dataUsage: `At this point, your users know that you will be collecting their personal information but what will you be doing with it?

    This is probably the most important section of your privacy policy as using this data to offer a better and more customized experience on your website is different than selling that data to third parties. If you have European users, this is also where you would specify the legal basis for the collection.
    
    If you are operating an eCommerce website, for example, you should specify that personal information will be used to process payments and ship products to customers. In that case, there is a good chance that their personal information may be processed by a third party: an online payment processing service provider or your shipping partner, for example. This should all be disclosed to your customers.`,
    introduction: `You should encourage your website visitors to contact you should they have any questions or concerns in regard to your privacy policy. Include your email address, street address, and phone number, along with the contact details of your data protection officer if your website is subject to the GDPR.`,
    other: `Depending on the nature of your business, you may need to add some additional terms to your privacy policy. You will want to study applicable laws as well as the terms and conditions of all the third-party services that you use, as some require that you have specific clauses in your policy.`,
  },
}

export function reducer(state: StateType, action: ActionType): StateType {
  let index = -1
  switch (action.type) {
    case Actions.editDescription:
      return { ...state, description: action.payload }
    case Actions.addAddress:
      return { ...state, address: action.payload }
    case Actions.addContact:
      return { ...state, contacts: [...state.contacts, action.payload] }
    case Actions.addSocialMedia:
      return { ...state, socialMedia: action.payload }
    case Actions.addStatement:
      return { ...state, statements: [...state.statements, action.payload] }
    case Actions.addWorkingHours:
      return { ...state, workingHours: action.payload }
    case Actions.removeAddress:
      return {
        ...state,
        address: { area: '', city: '', floor: '', landmark: '', pinCode: '', town: '' },
      }
    case Actions.removeContact:
      return {
        ...state,
        contacts: state.contacts.filter(
          (item) => item.primaryEmail !== action.payload.primaryEmail
        ),
      }
    case Actions.editContact:
      index = state.contacts.indexOf(action.payload.oldContact)
      if (index !== -1) {
        const newContacts = state.contacts
        newContacts[index] = action.payload.newContact
        index = -1
        return {
          ...state,
          contacts: newContacts,
        }
      }
      return state
    case Actions.editStatement:
      index = state.statements.indexOf(action.payload.oldStatement)
      if (index !== -1) {
        const newStatements = state.statements
        newStatements[index] = action.payload.newStatement
        index = -1
        return {
          ...state,
          statements: newStatements,
        }
      }
      return state
    case Actions.editTermsAndConditions:
      return { ...state, termsAndConditions: action.payload }
    case Actions.editPrivacy:
      return { ...state, privacy: action.payload }
    case Actions.removeStatement:
      return {
        ...state,
        statements: state.statements.filter((item) => item !== action.payload),
      }
    case Actions.removeSocialMedia:
      return {
        ...state,
        socialMedia: action.payload,
      }
    case Actions.removeWorkingHours:
      return {
        ...state,
        workingHours: {
          fromTime: '10.00 AM',
          toTime: '18.00 PM',
          fromDays: 'Monday',
          toDays: 'Friday',
        },
      }
    default:
      return state
  }
}
