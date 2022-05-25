import { FC } from "react";
import { Switch } from "@headlessui/react";
import { useAppContext } from "../../contexts";

export const Toggle: FC = () => {
  const { showAnalyticsEvents, setShowAnalyicsEvents } = useAppContext();

  const handleChange = () => setShowAnalyicsEvents(!showAnalyticsEvents);

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">Show analytics events</Switch.Label>
        <Switch
          checked={showAnalyticsEvents}
          onChange={handleChange}
          className={`${
            showAnalyticsEvents ? "bg-orange" : "bg-blue-200"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span
            className={`${
              showAnalyticsEvents ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};
