import { enquiryPendingDelivery } from "../content/enquiry"

export function submitEnquiry(enquiry) {
  return {
    delivered: false,
    message: enquiryPendingDelivery,
    enquiry,
  }
}
