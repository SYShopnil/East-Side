import { gql } from '@apollo/client';
import { ImageFragment, TestimonialFragment } from '../pages-fragment';
export const TeamMemberFragment = gql`
  fragment TeamMemberFragment on TeamMember {
    name
    slug
    designation
    linkedInProfile
    profileImage {
      image {
        ...ImageFragment
      }
      alt
    }
  }
  ${ImageFragment}
`;

//========================================================
//==========  Team Member with out  details ==============
export const TeamMemberShortFragment = gql`
  fragment TeamMemberShortFragment on TeamMemberRelationResponseCollection {
    data {
      attributes {
        ...TeamMemberFragment
      }
    }
  }
  ${TeamMemberFragment}
`;

//========================================================
//==========  Team Member with details ==============
export const TeamMemberDescriptionFragment = gql`
  fragment TeamMemberDescriptionFragment on TeamMemberRelationResponseCollection {
    data {
      attributes {
        ...TeamMemberFragment
        bio
        testimonial {
          ...TestimonialFragment
        }
        memberDetail {
          title
          subText
          firstColumn
          secondColumn
        }
      }
    }
  }
  ${TeamMemberFragment}
  ${TestimonialFragment}
`;
