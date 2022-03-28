const CONTRACT_ADDRESS = "0xC57d292f0FA2f0810B4c812C0331c94E9051d948";

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};
export { CONTRACT_ADDRESS, transformCharacterData };
