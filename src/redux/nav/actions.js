export const OPEN_NAV = "OPEN_NAV";
export const CLOSE_NAV = "CLOSE_NAV";

export const openNav = () => {
  return {
    type: OPEN_NAV,
  };
};

export const closeNav = () => {
  return {
    type: CLOSE_NAV,
  };
};
