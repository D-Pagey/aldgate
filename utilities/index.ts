import axios from "axios";
import toast from "react-hot-toast";

export const sendAnalyticsEvent = async (
  showEventResponse: boolean,
  eventName: string
) => {
  try {
    const { data } = await axios.post(`api/analytics`, { eventName });

    if (showEventResponse) toast.success(data.success);
  } catch {
    // user doesn't need to know if an analytics api fails
    // maybe could send to something like Sentry
    console.error("error sending analytics event");
  }
};
