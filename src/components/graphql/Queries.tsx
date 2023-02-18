import {gql} from '@apollo/client'

export const LOAD_COMPANY_INFO = gql`
    query ExampleQuery {
        company {
        ceo
        cto
        name
        }
    }
`