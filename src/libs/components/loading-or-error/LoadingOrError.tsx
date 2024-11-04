import { LoadingFeedback } from "~/components/loading-or-error/LoadingFeedback";
import { ErrorFeedback } from "~/components/loading-or-error/ErrorFeedback";

interface LoadingOrErrorProps {
  isLoading: boolean;
  isError: boolean;
}

export const LoadingOrError: React.FC<LoadingOrErrorProps> = (props) => {
  if (props.isLoading) {
    return <LoadingFeedback />;
  }
  if (props.isError) {
    return <ErrorFeedback />;
  }
  return null;
};
