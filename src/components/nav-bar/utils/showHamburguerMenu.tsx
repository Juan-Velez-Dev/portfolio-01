export const showHamburguerMenu = (
  hamburguerMenu: boolean,
  setHamburguerMenu: React.Dispatch<React.SetStateAction<boolean>>
) => {
  hamburguerMenu;
  if (!hamburguerMenu) return setHamburguerMenu(true);
  else return setHamburguerMenu(false);
};
