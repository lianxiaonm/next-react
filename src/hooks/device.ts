import { configResponsive, useResponsive } from "ahooks";

configResponsive({
  md: 768,
  lg: 1024,
});

export const useMyResponsive = () => {
  const responsive = useResponsive();
  return {
    mobile: !responsive?.md,
    tablet: !responsive?.lg,
    desktop: responsive?.lg,
  };
};
