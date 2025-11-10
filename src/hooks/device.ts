import { configResponsive, useResponsive } from "ahooks";
import { useClient } from "@/jotai/common";

configResponsive({ md: 768, lg: 1024 });

export const useMyResponsive = () => {
  const [isClient] = useClient();
  const responsive = useResponsive();
  return {
    mobile: isClient && !responsive?.md,
    tablet: isClient && !responsive?.lg,
    desktop: isClient ? responsive?.lg : true,
  };
};
