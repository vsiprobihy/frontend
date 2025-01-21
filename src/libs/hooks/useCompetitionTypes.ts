import { useQuery } from "@tanstack/react-query";
import {
  customAdminCompetitionTypeList,
  CustomAdminCompetitionTypeListResponse,
} from "~/api-client";

const useCompetitionTypes = () => {
  const { data, isError, isLoading } =
    useQuery<CustomAdminCompetitionTypeListResponse>({
      queryKey: ["competitionTypeList"],
      queryFn: async (): Promise<CustomAdminCompetitionTypeListResponse> => {
        const response = await customAdminCompetitionTypeList();
        if (response.data && response.response.status === 200) {
          return response.data;
        } else {
          throw new Error(response.response.statusText);
        }
      },
    });

  const competitionTypes =
    data?.items.map((item) => ({
      ...item,
      id: item.id + "",
    })) || [];

  return {
    competitionTypes,
    isLoading,
    isError,
  };
};

export default useCompetitionTypes;
