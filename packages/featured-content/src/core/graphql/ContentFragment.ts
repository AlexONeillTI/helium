import { gql } from '@apollo/client';

export const CONTENT_FRAGMENT = gql`
  fragment ContentFragment on Content {
    asset
    authors
    availabilityStatus
    canAddToQueue
    contentTypeLabel
    courseGracePeriodEnded
    coursePresold
    courseStartDate
    currentUserMayReschedule
    currentUserUnmetCoursePrerequisites
    currentUserUnmetLearningPathPrerequisites
    description
    displayCourse
    kind
    hasChildren
    hideCourseDescription
    id
    isActive
    priceInCents
    rating
    ribbon {
      color
      contrastColor
      darkerColor
      label
      slug
    }
    slug
    source
    suggestedRetailPriceInCents
    title
    waitlistingEnabled
    waitlistingTriggered
  }
`;
